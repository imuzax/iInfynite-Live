"use client";

import { useState, useTransition, useEffect } from "react";
import { createProject, updateProject, deleteProject } from "@/app/actions/projects";
import { Plus, Pencil, Trash2, X, ExternalLink } from "lucide-react";

interface Project {
  id: string;
  title: string;
  slug: string;
  category: string;
  description: string;
  imageUrl: string;
  liveUrl: string | null;
}

export default function AdminProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const fetchProjects = async () => {
    const res = await fetch("/api/data/projects");
    setProjects(await res.json());
    setIsLoading(false);
  };

  useEffect(() => { fetchProjects(); }, []);

  const handleSubmit = (formData: FormData) => {
    startTransition(async () => {
      if (editingId) {
        await updateProject(editingId, formData);
      } else {
        await createProject(formData);
      }
      setShowForm(false);
      setEditingId(null);
      await fetchProjects();
    });
  };

  const handleDelete = (id: string) => {
    if (!confirm("Delete this project?")) return;
    startTransition(async () => {
      await deleteProject(id);
      await fetchProjects();
    });
  };

  const editing = editingId ? projects.find((p) => p.id === editingId) : null;

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold" style={{ fontFamily: "var(--font-heading)" }}>
          Manage Projects
        </h1>
        <button onClick={() => { setEditingId(null); setShowForm(true); }} className="btn-primary text-sm">
          <Plus size={16} /> Add Project
        </button>
      </div>

      {showForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="glass-card-static p-6 w-full max-w-lg max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold" style={{ fontFamily: "var(--font-heading)" }}>
                {editingId ? "Edit Project" : "Add Project"}
              </h2>
              <button onClick={() => { setShowForm(false); setEditingId(null); }} className="text-muted hover:text-foreground">
                <X size={20} />
              </button>
            </div>
            <form action={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Title</label>
                <input name="title" defaultValue={editing?.title} required className="input-glass" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Category</label>
                <input name="category" defaultValue={editing?.category} required className="input-glass" placeholder="e.g. Web Development" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Description</label>
                <textarea name="description" defaultValue={editing?.description} required className="input-glass" rows={3} />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Image URL</label>
                <input name="imageUrl" defaultValue={editing?.imageUrl} required className="input-glass" placeholder="https://..." />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Live URL (optional)</label>
                <input name="liveUrl" defaultValue={editing?.liveUrl || ""} className="input-glass" placeholder="https://..." />
              </div>
              <button type="submit" disabled={isPending} className="btn-primary w-full disabled:opacity-50">
                {isPending ? "Saving..." : editingId ? "Update" : "Create"}
              </button>
            </form>
          </div>
        </div>
      )}

      <div className="admin-card">
        {isLoading ? (
          <p className="text-muted">Loading...</p>
        ) : projects.length === 0 ? (
          <p className="text-muted">No projects yet.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-glass-border">
                  <th className="text-left py-3 px-2 text-muted font-medium">Title</th>
                  <th className="text-left py-3 px-2 text-muted font-medium">Category</th>
                  <th className="text-left py-3 px-2 text-muted font-medium">Slug</th>
                  <th className="text-left py-3 px-2 text-muted font-medium">Live</th>
                  <th className="text-right py-3 px-2 text-muted font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {projects.map((project) => (
                  <tr key={project.id} className="border-b border-glass-border last:border-0">
                    <td className="py-3 px-2 font-medium">{project.title}</td>
                    <td className="py-3 px-2"><span className="badge badge-new">{project.category}</span></td>
                    <td className="py-3 px-2 text-muted">{project.slug}</td>
                    <td className="py-3 px-2">
                      {project.liveUrl ? (
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline inline-flex items-center gap-1">
                          <ExternalLink size={12} /> Link
                        </a>
                      ) : <span className="text-muted">—</span>}
                    </td>
                    <td className="py-3 px-2 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button onClick={() => { setEditingId(project.id); setShowForm(true); }} className="p-2 hover:bg-glass-bg rounded-lg text-muted hover:text-accent transition-colors">
                          <Pencil size={14} />
                        </button>
                        <button onClick={() => handleDelete(project.id)} className="p-2 hover:bg-glass-bg rounded-lg text-muted hover:text-danger transition-colors">
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
