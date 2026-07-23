import { prisma } from "@/lib/prisma";
import { MessageSquare, Layers, FolderKanban, Users, TrendingUp, Clock } from "lucide-react";

export const dynamic = "force-dynamic";
import { formatDate } from "@/lib/utils";

export default async function AdminDashboardPage() {
  const [totalLeads, newLeads, totalServices, totalProjects, totalTeam, recentLeads] =
    await Promise.all([
      prisma.lead.count(),
      prisma.lead.count({ where: { status: "new" } }),
      prisma.service.count(),
      prisma.project.count(),
      prisma.teamMember.count(),
      prisma.lead.findMany({ orderBy: { createdAt: "desc" }, take: 5 }),
    ]);

  const stats = [
    { label: "Total Leads", value: totalLeads, icon: MessageSquare, color: "text-accent" },
    { label: "New Leads", value: newLeads, icon: TrendingUp, color: "text-success" },
    { label: "Services", value: totalServices, icon: Layers, color: "text-warning" },
    { label: "Projects", value: totalProjects, icon: FolderKanban, color: "text-violet-400" },
    { label: "Team Members", value: totalTeam, icon: Users, color: "text-pink-400" },
  ];

  return (
    <div>
      <h1
        className="text-2xl font-bold mb-8"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        Dashboard
      </h1>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
        {stats.map((stat) => (
          <div key={stat.label} className="admin-card">
            <div className="flex items-center gap-3 mb-2">
              <stat.icon size={20} className={stat.color} />
              <span className="text-xs text-muted uppercase tracking-wider">
                {stat.label}
              </span>
            </div>
            <div
              className="text-3xl font-bold"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {stat.value}
            </div>
          </div>
        ))}
      </div>

      {/* Recent Leads */}
      <div className="admin-card">
        <div className="flex items-center gap-2 mb-4">
          <Clock size={18} className="text-muted" />
          <h2 className="text-lg font-semibold" style={{ fontFamily: "var(--font-heading)" }}>
            Recent Leads
          </h2>
        </div>

        {recentLeads.length === 0 ? (
          <p className="text-muted text-sm">No leads yet.</p>
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
                </tr>
              </thead>
              <tbody>
                {recentLeads.map((lead) => (
                  <tr
                    key={lead.id}
                    className="border-b border-glass-border last:border-0"
                  >
                    <td className="py-3 px-2">{lead.name}</td>
                    <td className="py-3 px-2 text-muted">{lead.email}</td>
                    <td className="py-3 px-2 text-muted">{lead.subject}</td>
                    <td className="py-3 px-2">
                      <span
                        className={`badge ${
                          lead.status === "new"
                            ? "badge-new"
                            : lead.status === "contacted"
                            ? "badge-contacted"
                            : "badge-closed"
                        }`}
                      >
                        {lead.status}
                      </span>
                    </td>
                    <td className="py-3 px-2 text-muted">
                      {formatDate(lead.createdAt)}
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
