"use client";
import { useState } from "react";

export default function AddAvatarModal() {
  const [open, setOpen] = useState(false);

  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [vibe, setVibe] = useState("");
  const [strengths, setStrengths] = useState("");
  const [hobbies, setHobbies] = useState("");

  const clear=()=>{
    setName("");
    setRole("");
    setImageUrl("");
    setVibe("");
    setStrengths("");
    setHobbies("");
    setOpen(false)
  }

  return (
    <>
      <button
        className="px-5 py-2 rounded-[20%] lg:rounded-full bg-cyan-600 text-white font-semibold hover:scale-105 transition-transform"
        onClick={() => setOpen(true)}
      >
        Add Avatar
      </button>

      {open && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="w-[90%] lg:w-[33%] bg-[#1a1a1c] rounded-3xl p-6 text-white relative border border-white/10 shadow-xl">
            <h2 className="text-lg font-bold mb-4">Add New Avatar</h2>

            <input
              type="text"
              placeholder="Name"
              className="w-full bg-white/10 rounded-lg p-2 mb-3 outline-none text-sm focus:ring-2 focus:ring-pink-400"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              type="text"
              placeholder="Role"
              className="w-full bg-white/10 rounded-lg p-2 mb-3 outline-none text-sm focus:ring-2 focus:ring-pink-400"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            />

            <input
              type="text"
              placeholder="Image URL"
              className="w-full bg-white/10 rounded-lg p-2 mb-3 outline-none text-sm focus:ring-2 focus:ring-pink-400"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
            />

            <input
              type="text"
              placeholder="Vibe"
              className="w-full bg-white/10 rounded-lg p-2 mb-3 outline-none text-sm focus:ring-2 focus:ring-pink-400"
              value={vibe}
              onChange={(e) => setVibe(e.target.value)}
            />

            <input
              type="text"
              placeholder="Strengths (comma separated)"
              className="w-full bg-white/10 rounded-lg p-2 mb-3 outline-none text-sm focus:ring-2 focus:ring-pink-400"
              value={strengths}
              onChange={(e) => setStrengths(e.target.value)}
            />

            <input
              type="text"
              placeholder="Hobbies (comma separated)"
              className="w-full bg-white/10 rounded-lg p-2 mb-3 outline-none text-sm focus:ring-2 focus:ring-pink-400"
              value={hobbies}
              onChange={(e) => setHobbies(e.target.value)}
            />

            <button
              className="w-full mt-4 py-2 rounded-full bg-cyan-600 text-white font-semibold hover:scale-105 transition-all"
              onClick={() => clear()}
            >
              Add Avatar
            </button>

            <button
              className="absolute top-4 right-4 text-white/60 hover:text-white"
              onClick={() => clear()}
              aria-label="Close modal"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
}
