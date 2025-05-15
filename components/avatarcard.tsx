"use client";
import Image from "next/image";
import clsx from "clsx";

export function AvatarCard(props: {
  name: string;
  role: string;
  imageUrl: string;
  strengths: string[];
  hobbies: string[];
  vibe: string;
}) {
  const vibeColors: Record<string, string> = {
    energetic: "bg-amber-600",
    creative: "bg-purple-600",
    calm: "bg-teal-600",
    bold: "bg-red-600",
    default: "bg-gray-600",
  };

  const labelColors = [
    "bg-rose-600",
    "bg-orange-600",
    "bg-emerald-600",
    "bg-sky-600",
    "bg-purple-600",
    "bg-pink-600",
  ];

  const vibeLower = props.vibe.toLowerCase();
  const underlineColor = vibeColors[vibeLower] || vibeColors.default;

  return (
<div className="relative w-[330px] rounded-3xl overflow-hidden backdrop-blur-lg bg-white/10 border border-white/20 shadow-lg p-6 text-white  hover:scale-102 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all duration-120 ">

      <div className="relative flex flex-col items-center z-10">
        <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-white/30 shadow-[0_0_20px_rgba(255,255,255,0.3)] mb-4">
          <Image
            src={props.imageUrl}
            alt={props.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 128px"
          />
        </div>
        <h2 className="text-2xl font-bold mb-1 tracking-wide">{props.name}</h2>
        <p className="text-sm opacity-90 mb-2">{props.role}</p>

        <span
  className={clsx(
    "relative text-xs font-semibold uppercase px-4 py-1 rounded-full text-white backdrop-blur-sm border border-white/30 select-none mb-4 inline-block",
    vibeColors[vibeLower] || vibeColors.default
  )}
>
  {props.vibe}
</span>
      </div>

      <div className="relative z-10 mb-4 w-full">
        <h3 className="text-md  text-[#f5f5f5]  mb-2">STRENGTHS</h3>
        <div className="flex flex-wrap gap-2">
          {props.strengths.map((s, i) => (
            <span
              key={i}
              className={clsx(
                "text-sm px-3 py-1 rounded-full text-white border border-white/20 shadow-sm backdrop-blur-sm",
                labelColors[i % labelColors.length]
              )}
            >
              {s}
            </span>
          ))}
        </div>
      </div>

      <div className="relative z-10 w-full">
        <h3 className="text-md  text-[#f5f5f5] mb-2">HOBBIES</h3>
        <div className="flex flex-wrap gap-2">
          {props.hobbies.map((h, i) => (
            <span
              key={i}
              className={clsx(
                "text-sm px-3 py-1 rounded-full text-white border border-white/20 shadow-sm backdrop-blur-sm",
                labelColors[(i + 3) % labelColors.length]
              )}
            >
              {h}
            </span>
          ))}
        </div>
      </div>
      <button
  className="ml-[35%] mt-4 bg-white/20 text-white px-8 py-1 rounded-full text-sm font-semibold backdrop-blur-sm border border-white/30 hover:bg-white/30 hover:scale-105 transition-all"
>
  Edit
</button>

    </div>
  );
}
