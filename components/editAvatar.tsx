"use client";
import { useState } from "react";

interface User {
  id: string;
  name: string;
  role: string;
  vibe: string;
   
}

interface EditAvatarModalProps {
  user: User;
  onSave: (updatedUser: User) => void;
  onClose: () => void;
}

export default function EditAvatarModal({
  user,
  onSave,
  onClose,
}: EditAvatarModalProps) {
  const [name, setName] = useState(user.name);
  const [role, setRole] = useState(user.role);
  const [vibe, setVibe] = useState(user.vibe);

  const handleSave = () => {
    onSave({ ...user, name, role, vibe });
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSave();
    }
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black/50 z-50"
      onClick={onClose}
    >
      <div
        className="bg-[#1a1a1c] p-6 rounded-xl shadow-lg w-96 max-w-[90vw] text-white border border-white/20"
        onClick={(e) => e.stopPropagation()} 
        onKeyDown={handleKeyDown}
      >
        <h2 className="text-xl font-semibold mb-4">Edit Avatar</h2>
        
        <div className="space-y-3">
          <div>
            <label htmlFor="name" className="block text-sm mb-1 opacity-80">
              Name
            </label>
            <input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 rounded bg-white/10 border border-white/20 focus:outline-none focus:ring-1 focus:ring-white/50"
              placeholder="Name"
              autoFocus
            />
          </div>

          <div>
            <label htmlFor="role" className="block text-sm mb-1 opacity-80">
              Role
            </label>
            <input
              id="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full p-2 rounded bg-white/10 border border-white/20 focus:outline-none focus:ring-1 focus:ring-white/50"
              placeholder="Role"
            />
          </div>

          <div>
            <label htmlFor="vibe" className="block text-sm mb-1 opacity-80">
              Vibe
            </label>
            <input
              id="vibe"
              value={vibe}
              onChange={(e) => setVibe(e.target.value)}
              className="w-full p-2 rounded bg-white/10 border border-white/20 focus:outline-none focus:ring-1 focus:ring-white/50"
              placeholder="Vibe"
            />
          </div>
        </div>

        <div className="flex justify-end gap-2 mt-6">
          <button
            className="px-4 py-2 rounded bg-red-600 hover:bg-red-700 transition-colors"
            onClick={onClose}
            aria-label="Cancel"
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 rounded bg-green-600 hover:bg-green-700 transition-colors"
            onClick={handleSave}
            aria-label="Save changes"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}