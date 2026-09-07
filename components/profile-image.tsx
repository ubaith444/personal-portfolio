"use client";
import Image from "next/image";

export function ProfileImage() {
  return (
    <div className="relative w-full max-w-[300px] animate-profile-in">
      <div className="profile-frame relative bg-[--surface]" style={{ aspectRatio: "3/4", width: "100%" }}>
        <Image
          src="/profile.png"
          alt="Ubaith Sherif — AI Engineer & Full-Stack Developer"
          fill
          className="object-cover object-top"
          sizes="(max-width: 768px) 260px, 300px"
          priority
        />
      </div>
    </div>
  );
}
