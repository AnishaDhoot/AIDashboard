"use client";
import { useEffect, useState } from "react";
import AddAvatarModal from "@/components/addAvatar";
import { AvatarCard } from "@/components/avatarcard";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";

interface User {
  id: number;
  firstName: string;
  lastName: string;
  image: string;
  company?: {
    title: string;
  };
}

export default function Home() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    async function fetchUsers() {
      const res = await fetch("https://dummyjson.com/users?limit=6");
      const data = await res.json();
      setUsers(data.users);
    }

    fetchUsers();
  }, []);

  const sampleStrengths = [["Leader", "Visionary"], ["Creative", "Empathy"], ["Precision", "Calmness"]];
  const sampleHobbies = [["Chess", "Reading"], ["Photography", "Sketching"], ["Running", "Meditation"]];
  const sampleVibes = ["Energetic", "Creative", "Calm", "Bold", "Creative", "Calm"];

  return (
    <div className="h-full bg-[#1a1a1c] flex flex-col items-center">
      <div className="h-[20rem] items-center">
        <TextHoverEffect text="WELCOME" />
      </div>

      <div className="flex flex-col lg:flex-row items-center lg:justify-between px-4 -mt-15 ml-5">
        <h1 className="text-[#F5F5F5] text-3xl font-serif italic font-light text-center mb-4 lg:mb-0 lg:flex-grow">
          Hope you&apos;re having a wonderful day!
        </h1>
        <div className="lg:ml-16">
          <AddAvatarModal />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-8">
        {users.map((user, index) => (
          <AvatarCard
            key={user.id}
            name={`${user.firstName} ${user.lastName}`}
            role={user.company?.title || "No role specified"} 
            imageUrl={user.image}
            strengths={sampleStrengths[index % sampleStrengths.length]}
            hobbies={sampleHobbies[index % sampleHobbies.length]}
            vibe={sampleVibes[index % sampleVibes.length]}
          />
        ))}
      </div>
      <div className="bg-[#1a1a1c] text-[#1a1a1c]">...</div>
    </div>
  );
}