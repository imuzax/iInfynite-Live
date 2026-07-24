"use client";

import { useState, useTransition, useEffect, useRef } from "react";
import { createTeamMember, updateTeamMember, deleteTeamMember } from "@/app/actions/team";
import { Plus, Pencil, Trash2, X, ExternalLink, Upload, Loader2, Star } from "lucide-react";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string | null;
  photoUrl: string;
  linkedin: string | null;
  isFounder: boolean;
}

export default function AdminTeamPage() {
  const [members, setMembers] = useState<TeamMember[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  // Image Upload State
  const [isUploading, setIsUploading] = useState(false);
  const [photoUrlInput, setPhotoUrlInput] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const fetchMembers = async () => {
    const res = await fetch("/api/data/team");
    setMembers(await res.json());
    setIsLoading(false);
  };

  useEffect(() => { fetchMembers(); }, []);

  const handleSubmit = (formData: FormData) => {
    startTransition(async () => {
      formData.set("photoUrl", photoUrlInput);
      
      // Handle checkbox which might not be in FormData if unchecked
      if (!formData.get("isFounder")) {
        formData.set("isFounder", "false");
      }

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
      setPhotoUrlInput(data.url);
    } catch (error) {
      console.error(error);
      alert("Failed to upload image.");
    } finally {
      setIsUploading(false);
    }
  };

  const editing = editingId ? members.find((m) => m.id === editingId) : null;

  useEffect(() => {
    if (editing) {
      setPhotoUrlInput(editing.photoUrl || "");
    } else {
      setPhotoUrlInput("");
    }
  }, [editing]);

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
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4 overflow-y-auto">
          <div className="glass-card-static p-6 w-full max-w-2xl my-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold" style={{ fontFamily: "var(--font-heading)" }}>
                {editingId ? "Edit Member" : "Add Member"}
              </h2>
              <button onClick={() => { setShowForm(false); setEditingId(null); }} className="text-muted hover:text-foreground p-2 bg-white/5 rounded-full">
                <X size={20} />
              </button>
            </div>
            
            <form action={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-1">Name *</label>
                  <input name="name" defaultValue={editing?.name} required className="input-glass" placeholder="e.g. John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Roles / Position *</label>
                  <input name="role" defaultValue={editing?.role} required className="input-glass" placeholder="e.g. Founder & Lead Developer" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Bio (Optional, recommended for Founder)</label>
                <textarea name="bio" defaultValue={editing?.bio || ""} className="input-glass min-h-[120px]" placeholder="Write a short bio or story about this team member..." />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Photo *</label>
                <div className="flex gap-2">
                  <input 
                    name="photoUrlManual" 
                    value={photoUrlInput}
                    onChange={(e) => setPhotoUrlInput(e.target.value)}
                    required 
                    className="input-glass flex-1" 
                    placeholder="Image URL or upload locally..." 
                  />
                  <input 
                    type="file" 
                    ref={fileInputRef} 
                    className="hidden" 
                    accept="image/*"
                    onChange={handleFileUpload}
                  />
                  <button 
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    disabled={isUploading}
                    className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/10 rounded-xl transition-colors flex items-center gap-2"
                  >
                    {isUploading ? <Loader2 size={18} className="animate-spin" /> : <Upload size={18} />}
                    Upload
                  </button>
                </div>
                {photoUrlInput && (
                  <div className="mt-3 relative w-32 h-32 rounded-xl overflow-hidden border border-white/10">
                    <img src={photoUrlInput} alt="Preview" className="w-full h-full object-cover" />
                  </div>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">LinkedIn URL (optional)</label>
                <input name="linkedin" defaultValue={editing?.linkedin || ""} className="input-glass" placeholder="https://linkedin.com/in/..." />
              </div>

              <div className="flex items-center gap-3 p-4 bg-white/5 border border-white/10 rounded-xl">
                <input 
                  type="checkbox" 
                  id="isFounder" 
                  name="isFounder" 
                  value="true"
                  defaultChecked={editing?.isFounder} 
                  className="w-5 h-5 rounded border-white/20 bg-black accent-accent"
                />
                <label htmlFor="isFounder" className="text-sm font-medium cursor-pointer select-none">
                  Is Founder? (This highlights the member in a special prominent layout on the About page)
                </label>
              </div>

              <div className="pt-4 border-t border-white/10">
                <button type="submit" disabled={isPending || isUploading} className="btn-primary w-full disabled:opacity-50 h-12 text-lg">
                  {isPending ? "Saving..." : editingId ? "Update Member" : "Create Member"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {isLoading ? (
          <p className="text-muted">Loading...</p>
        ) : members.length === 0 ? (
          <div className="col-span-full text-center py-12 bg-white/5 border border-white/10 rounded-2xl">
            <p className="text-muted mb-4">No team members found.</p>
            <button onClick={() => setShowForm(true)} className="btn-primary text-sm">
              <Plus size={16} /> Add First Member
            </button>
          </div>
        ) : (
          members.map((member) => (
            <div key={member.id} className={`admin-card relative overflow-hidden ${member.isFounder ? 'border-accent/50 bg-accent/5' : ''}`}>
              {member.isFounder && (
                <div className="absolute top-0 right-0 bg-accent text-black text-xs font-bold px-3 py-1 rounded-bl-lg flex items-center gap-1">
                  <Star size={12} fill="currentColor" /> Founder
                </div>
              )}
              
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 rounded-2xl overflow-hidden bg-white/5 shrink-0 border border-white/10">
                  {member.photoUrl ? (
                    <img src={member.photoUrl} alt={member.name} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-xl font-bold text-muted">
                      {member.name.charAt(0)}
                    </div>
                  )}
                </div>
                <div className="flex-1 min-w-0 pt-1">
                  <h3 className="font-semibold text-lg truncate" style={{ fontFamily: "var(--font-heading)" }}>{member.name}</h3>
                  <p className="text-accent text-sm truncate">{member.role}</p>
                </div>
              </div>
              
              {member.bio && (
                <p className="text-sm text-muted line-clamp-2 mb-4">
                  {member.bio}
                </p>
              )}

              <div className="flex items-center justify-between pt-4 border-t border-white/5">
                {member.linkedin ? (
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-muted hover:text-white transition-colors">
                    <ExternalLink size={12} /> LinkedIn
                  </a>
                ) : (
                  <span className="text-xs text-muted/50">No LinkedIn</span>
                )}
                
                <div className="flex gap-2">
                  <button onClick={() => { setEditingId(member.id); setShowForm(true); }} className="p-2 hover:bg-white/10 rounded-lg text-muted hover:text-white transition-colors">
                    <Pencil size={14} />
                  </button>
                  <button onClick={() => handleDelete(member.id)} className="p-2 hover:bg-danger/20 rounded-lg text-muted hover:text-danger transition-colors">
                    <Trash2 size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
