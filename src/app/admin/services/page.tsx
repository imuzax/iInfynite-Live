"use client";

import { useState, useTransition } from "react";
import { createService, updateService, deleteService } from "@/app/actions/services";
import { Plus, Pencil, Trash2, X } from "lucide-react";

interface Service {
  id: string;
  title: string;
  icon: string;
  description: string;
  order: number;
}

export default function AdminServicesPage() {
  const [services, setServices] = useState<Service[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  // Fetch services on mount
  useState(() => {
    fetch("/api/data/services")
      .then((r) => r.json())
      .then((data) => {
        setServices(data);
        setIsLoading(false);
      })
      .catch(() => setIsLoading(false));
  });

  const handleSubmit = (formData: FormData) => {
    startTransition(async () => {
      if (editingId) {
        await updateService(editingId, formData);
      } else {
        await createService(formData);
      }
      setShowForm(false);
      setEditingId(null);
      // Refresh
      const res = await fetch("/api/data/services");
      setServices(await res.json());
    });
  };

  const handleDelete = (id: string) => {
    if (!confirm("Delete this service?")) return;
    startTransition(async () => {
      await deleteService(id);
      const res = await fetch("/api/data/services");
      setServices(await res.json());
    });
  };

  const startEdit = (service: Service) => {
    setEditingId(service.id);
    setShowForm(true);
  };

  const editing = editingId ? services.find((s) => s.id === editingId) : null;

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold" style={{ fontFamily: "var(--font-heading)" }}>
          Manage Services
        </h1>
        <button
          onClick={() => { setEditingId(null); setShowForm(true); }}
          className="btn-primary text-sm"
        >
          <Plus size={16} />
          Add Service
        </button>
      </div>

      {/* Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="glass-card-static p-6 w-full max-w-md">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold" style={{ fontFamily: "var(--font-heading)" }}>
                {editingId ? "Edit Service" : "Add Service"}
              </h2>
              <button onClick={() => { setShowForm(false); setEditingId(null); }} className="text-muted hover:text-foreground">
                <X size={20} />
              </button>
            </div>
            <form action={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Title</label>
                <input name="title" defaultValue={editing?.title} required className="input-glass" placeholder="e.g. Web Development" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Icon Name</label>
                <input name="icon" defaultValue={editing?.icon} required className="input-glass" placeholder="e.g. Code2, Smartphone, Palette" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Description</label>
                <textarea name="description" defaultValue={editing?.description} required className="input-glass" rows={3} placeholder="Service description..." />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Order</label>
                <input name="order" type="number" defaultValue={editing?.order || 0} className="input-glass" />
              </div>
              <button type="submit" disabled={isPending} className="btn-primary w-full disabled:opacity-50">
                {isPending ? "Saving..." : editingId ? "Update" : "Create"}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Services Table */}
      <div className="admin-card">
        {isLoading ? (
          <p className="text-muted">Loading...</p>
        ) : services.length === 0 ? (
          <p className="text-muted">No services yet. Add your first one!</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-glass-border">
                  <th className="text-left py-3 px-2 text-muted font-medium">Order</th>
                  <th className="text-left py-3 px-2 text-muted font-medium">Title</th>
                  <th className="text-left py-3 px-2 text-muted font-medium">Icon</th>
                  <th className="text-left py-3 px-2 text-muted font-medium">Description</th>
                  <th className="text-right py-3 px-2 text-muted font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {services.map((service) => (
                  <tr key={service.id} className="border-b border-glass-border last:border-0">
                    <td className="py-3 px-2 text-muted">{service.order}</td>
                    <td className="py-3 px-2 font-medium">{service.title}</td>
                    <td className="py-3 px-2 text-muted">{service.icon}</td>
                    <td className="py-3 px-2 text-muted max-w-xs truncate">{service.description}</td>
                    <td className="py-3 px-2 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button onClick={() => startEdit(service)} className="p-2 hover:bg-glass-bg rounded-lg text-muted hover:text-accent transition-colors">
                          <Pencil size={14} />
                        </button>
                        <button onClick={() => handleDelete(service.id)} className="p-2 hover:bg-glass-bg rounded-lg text-muted hover:text-danger transition-colors">
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
