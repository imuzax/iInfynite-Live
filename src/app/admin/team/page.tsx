"use client";

import { useState, useTransition, useEffect } from "react";
import { createTeamMember, updateTeamMember, deleteTeamMember } from "@/app/actions/team";
import { Plus, Pencil, Trash2, X, ExternalLink } from "lucide-react";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  photoUrl: string;
  linkedin: string | null;
}

export default function AdminTeamPage() {
  const [members, setMembers] = useState<TeamMember[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const fetchMembers = async () => {
    const res = await fetch("/api/data/team");
    setMembers(await res.json());
    setIsLoading(false);
  };

  useEffect(() => { fetchMembers(); }, []);

  const handleSubmit = (formData: FormData) => {
    startTransition(async () => {
      if (editingId) {
        await updateTeamMember(editingId, formData);
      } else {
        await createTeamMember(formData);
      }
      setShowForm(false);
      setEditingId(null);
      await fetchMembers();
    });
  };

  const handleDelete = (id: string) => {
    if (!confirm("Delete this team member?")) return;
    startTransition(async () => {
      await deleteTeamMember(id);
      await fetchMembers();
    });
  };

  const editing = editingId ? members.find((m) => m.id === editingId) : null;

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold" style={{ fontFamily: "var(--font-heading)" }}>
          Manage Team
        </h1>
        <button onClick={() => { setEditingId(null); setShowForm(true); }} className="btn-primary text-sm">
          <Plus size={16} /> Add Member
        </button>
      </div>

      {showForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="glass-card-static p-6 w-full max-w-md">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold" style={{ fontFamily: "var(--font-heading)" }}>
                {editingId ? "Edit Member" : "Add Member"}
              </h2>
              <button onClick={() => { setShowForm(false); setEditingId(null); }} className="text-muted hover:text-foreground">
                <X size={20} />
              </button>
            </div>
            <form action={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Name</label>
                <input name="name" defaultValue={editing?.name} required className="input-glass" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Role</label>
                <input name="role" defaultValue={editing?.role} required className="input-glass" placeholder="e.g. UI/UX Designer" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Photo URL</label>
                <input name="photoUrl" defaultValue={editing?.photoUrl} required className="input-glass" placeholder="https://..." />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">LinkedIn URL (optional)</label>
                <input name="linkedin" defaultValue={editing?.linkedin || ""} className="input-glass" placeholder="https://linkedin.com/in/..." />
              </div>
              <button type="submit" disabled={isPending} className="btn-primary w-full disabled:opacity-50">
                {isPending ? "Saving..." : editingId ? "Update" : "Create"}
              </button>
            </form>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {isLoading ? (
          <p className="text-muted">Loading...</p>
        ) : members.length === 0 ? (
          <p className="text-muted">No team members yet.</p>
        ) : (
          members.map((member) => (
            <div key={member.id} className="admin-card">
              <div className="flex items-start justify-between mb-3">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <span className="text-lg font-bold text-accent">{member.name.charAt(0)}</span>
                </div>
                <div className="flex gap-1">
                  <button onClick={() => { setEditingId(member.id); setShowForm(true); }} className="p-2 hover:bg-glass-bg rounded-lg text-muted hover:text-accent transition-colors">
                    <Pencil size={14} />
                  </button>
                  <button onClick={() => handleDelete(member.id)} className="p-2 hover:bg-glass-bg rounded-lg text-muted hover:text-danger transition-colors">
                    <Trash2 size={14} />
                  </button>
                </div>
              </div>
              <h3 className="font-semibold mb-1">{member.name}</h3>
              <p className="text-muted text-sm mb-2">{member.role}</p>
              {member.linkedin && (
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-accent hover:underline">
                  <ExternalLink size={12} /> LinkedIn
                </a>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}
