"use client";

import { useState, useTransition, useEffect, useRef } from "react";
import { createProject, updateProject, deleteProject } from "@/app/actions/projects";
import { Plus, Pencil, Trash2, X, ExternalLink, Upload, Loader2 } from "lucide-react";

interface Project {
  id: string;
  title: string;
  slug: string;
  category: string;
  description: string;
  fullDescription: string;
  clientName: string | null;
  timeline: string | null;
  role: string | null;
  techStack: string | null;
  challenges: string | null;
  solution: string | null;
  imageUrl: string;
  liveUrl: string | null;
}

export default function AdminProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();
  
  // Image Upload State
  const [isUploading, setIsUploading] = useState(false);
  const [imageUrlInput, setImageUrlInput] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const fetchProjects = async () => {
    const res = await fetch("/api/data/projects");
    setProjects(await res.json());
    setIsLoading(false);
  };

  useEffect(() => { fetchProjects(); }, []);

  const handleSubmit = (formData: FormData) => {
    startTransition(async () => {
      // Ensure the manual input image URL is used if provided
      formData.set("imageUrl", imageUrlInput);
      
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

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) throw new Error("Upload failed");

      const data = await res.json();
      setImageUrlInput(data.url);
    } catch (error) {
      console.error(error);
      alert("Failed to upload image.");
    } finally {
      setIsUploading(false);
    }
  };

  const editing = editingId ? projects.find((p) => p.id === editingId) : null;

  // Set the image url when editing
  useEffect(() => {
    if (editing) {
      setImageUrlInput(editing.imageUrl || "");
    } else {
      setImageUrlInput("");
    }
  }, [editing, showForm]);

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
          <div className="glass-card-static p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6 sticky top-0 bg-[#0a0a0a]/90 backdrop-blur pb-4 border-b border-white/10 z-10">
              <h2 className="text-lg font-semibold" style={{ fontFamily: "var(--font-heading)" }}>
                {editingId ? "Edit Project" : "Add Project"}
              </h2>
              <button onClick={() => { setShowForm(false); setEditingId(null); }} className="text-muted hover:text-foreground">
                <X size={20} />
              </button>
            </div>
            
            <form action={handleSubmit} className="space-y-6">
              {/* Core Information */}
              <div className="space-y-4">
                <h3 className="text-sm font-semibold text-accent uppercase tracking-wider">Core Info</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Title</label>
                    <input name="title" defaultValue={editing?.title} required className="input-glass" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Category</label>
                    <input name="category" defaultValue={editing?.category} required className="input-glass" placeholder="e.g. Web Development" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1">Description (Short)</label>
                  <textarea name="description" defaultValue={editing?.description} required className="input-glass" rows={2} />
                </div>
              </div>

              <hr className="border-white/5" />

              {/* Case Study Details */}
              <div className="space-y-4">
                <h3 className="text-sm font-semibold text-accent uppercase tracking-wider">Case Study Details</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Client Name (Optional)</label>
                    <input name="clientName" defaultValue={editing?.clientName || ""} className="input-glass" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Timeline (Optional)</label>
                    <input name="timeline" defaultValue={editing?.timeline || ""} className="input-glass" placeholder="e.g. 3 Months" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Role (Optional)</label>
                    <input name="role" defaultValue={editing?.role || ""} className="input-glass" placeholder="e.g. Full-Stack Developer" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Tech Stack (Comma Separated)</label>
                    <input name="techStack" defaultValue={editing?.techStack || ""} className="input-glass" placeholder="Next.js, Tailwind, Prisma" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">The Challenge (Optional)</label>
                  <textarea name="challenges" defaultValue={editing?.challenges || ""} className="input-glass" rows={3} />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1">The Solution (Optional)</label>
                  <textarea name="solution" defaultValue={editing?.solution || ""} className="input-glass" rows={3} />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Full Description (Detail Page)</label>
                  <textarea name="fullDescription" defaultValue={editing?.fullDescription} className="input-glass" rows={5} />
                </div>
              </div>

              <hr className="border-white/5" />

              {/* Media & Links */}
              <div className="space-y-4">
                <h3 className="text-sm font-semibold text-accent uppercase tracking-wider">Media & Links</h3>
                
                <div>
                  <label className="block text-sm font-medium mb-1">Image URL</label>
                  <div className="flex gap-2">
                    <input 
                      value={imageUrlInput} 
                      onChange={(e) => setImageUrlInput(e.target.value)}
                      required 
                      className="input-glass flex-1" 
                      placeholder="https://..." 
                    />
                    <button 
                      type="button" 
                      onClick={() => fileInputRef.current?.click()}
                      disabled={isUploading}
                      className="btn-secondary whitespace-nowrap flex items-center gap-2"
                    >
                      {isUploading ? <Loader2 size={16} className="animate-spin" /> : <Upload size={16} />}
                      Upload
                    </button>
                    <input 
                      type="file" 
                      ref={fileInputRef} 
                      onChange={handleFileUpload} 
                      className="hidden" 
                      accept="image/*"
                    />
                  </div>
                  {imageUrlInput && (
                    <div className="mt-2 h-32 rounded-lg bg-glass-bg border border-white/10 overflow-hidden flex items-center justify-center relative">
                       <img src={imageUrlInput} alt="Preview" className="h-full object-contain" />
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Live URL (optional)</label>
                  <input name="liveUrl" defaultValue={editing?.liveUrl || ""} className="input-glass" placeholder="https://..." />
                </div>
              </div>
              
              <div className="pt-4 sticky bottom-0 bg-[#0a0a0a]/90 backdrop-blur border-t border-white/10 p-4 -mx-6 -mb-6 rounded-b-xl">
                <button type="submit" disabled={isPending || isUploading} className="btn-primary w-full disabled:opacity-50">
                  {isPending ? "Saving..." : editingId ? "Update Project" : "Create Project"}
                </button>
              </div>
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
