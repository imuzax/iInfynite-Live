"use client";

import { useState, useTransition, useEffect, useCallback } from "react";
import { updateLeadStatus, deleteLead } from "@/app/actions/leads";
import { Search, Trash2, Eye, X } from "lucide-react";
import { formatDate } from "@/lib/utils";

interface Lead {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  status: string;
  createdAt: string;
}

export default function AdminLeadsPage() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [statusFilter, setStatusFilter] = useState("all");
  const [search, setSearch] = useState("");
  const [viewLead, setViewLead] = useState<Lead | null>(null);
  const [isPending, startTransition] = useTransition();

  const fetchLeads = useCallback(async () => {
    const params = new URLSearchParams();
    if (statusFilter !== "all") params.set("status", statusFilter);
    if (search) params.set("search", search);
    const res = await fetch(`/api/data/leads?${params}`);
    setLeads(await res.json());
    setIsLoading(false);
  }, [statusFilter, search]);

  useEffect(() => { fetchLeads(); }, [fetchLeads]);

  const handleStatusChange = (id: string, newStatus: string) => {
    startTransition(async () => {
      await updateLeadStatus(id, newStatus);
      await fetchLeads();
    });
  };

  const handleDelete = (id: string) => {
    if (!confirm("Delete this lead?")) return;
    startTransition(async () => {
      await deleteLead(id);
      await fetchLeads();
    });
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-8" style={{ fontFamily: "var(--font-heading)" }}>
        Leads / Contact Submissions
      </h1>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" />
          <input
            type="text"
            placeholder="Search by name, email, or subject..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="input-glass pl-10"
          />
        </div>
        <div className="flex gap-2">
          {["all", "new", "contacted", "closed"].map((s) => (
            <button
              key={s}
              onClick={() => setStatusFilter(s)}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
                statusFilter === s
                  ? "bg-accent text-white"
                  : "bg-glass-bg border border-glass-border text-muted hover:text-foreground"
              }`}
            >
              {s.charAt(0).toUpperCase() + s.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* View Modal */}
      {viewLead && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="glass-card-static p-6 w-full max-w-lg">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold" style={{ fontFamily: "var(--font-heading)" }}>
                Lead Details
              </h2>
              <button onClick={() => setViewLead(null)} className="text-muted hover:text-foreground">
                <X size={20} />
              </button>
            </div>
            <div className="space-y-3">
              <div><span className="text-xs text-muted uppercase">Name</span><p className="font-medium">{viewLead.name}</p></div>
              <div><span className="text-xs text-muted uppercase">Email</span><p className="text-accent">{viewLead.email}</p></div>
              <div><span className="text-xs text-muted uppercase">Subject</span><p>{viewLead.subject}</p></div>
              <div><span className="text-xs text-muted uppercase">Message</span><p className="text-muted text-sm leading-relaxed">{viewLead.message}</p></div>
              <div><span className="text-xs text-muted uppercase">Date</span><p className="text-sm text-muted">{formatDate(viewLead.createdAt)}</p></div>
            </div>
          </div>
        </div>
      )}

      {/* Table */}
      <div className="admin-card">
        {isLoading ? (
          <p className="text-muted">Loading...</p>
        ) : leads.length === 0 ? (
          <p className="text-muted">No leads found.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-glass-border">
                  <th className="text-left py-3 px-2 text-muted font-medium">Name</th>
                  <th className="text-left py-3 px-2 text-muted font-medium">Email</th>
                  <th className="text-left py-3 px-2 text-muted font-medium">Subject</th>
                  <th className="text-left py-3 px-2 text-muted font-medium">Status</th>
                  <th className="text-left py-3 px-2 text-muted font-medium">Date</th>
                  <th className="text-right py-3 px-2 text-muted font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {leads.map((lead) => (
                  <tr key={lead.id} className="border-b border-glass-border last:border-0">
                    <td className="py-3 px-2 font-medium">{lead.name}</td>
                    <td className="py-3 px-2 text-muted">{lead.email}</td>
                    <td className="py-3 px-2 text-muted max-w-[200px] truncate">{lead.subject}</td>
                    <td className="py-3 px-2">
                      <select
                        value={lead.status}
                        onChange={(e) => handleStatusChange(lead.id, e.target.value)}
                        disabled={isPending}
                        className="bg-transparent border border-glass-border rounded-lg px-2 py-1 text-xs font-medium focus:outline-none focus:border-accent"
                      >
                        <option value="new" className="bg-background">New</option>
                        <option value="contacted" className="bg-background">Contacted</option>
                        <option value="closed" className="bg-background">Closed</option>
                      </select>
                    </td>
                    <td className="py-3 px-2 text-muted">{formatDate(lead.createdAt)}</td>
                    <td className="py-3 px-2 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button onClick={() => setViewLead(lead)} className="p-2 hover:bg-glass-bg rounded-lg text-muted hover:text-accent transition-colors">
                          <Eye size={14} />
                        </button>
                        <button onClick={() => handleDelete(lead.id)} className="p-2 hover:bg-glass-bg rounded-lg text-muted hover:text-danger transition-colors">
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
