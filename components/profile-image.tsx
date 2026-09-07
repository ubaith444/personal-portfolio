"use client";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function ProfileImage() {
  return (
    <div className="relative w-full max-w-[300px] animate-profile-in">
      <div className="profile-frame relative bg-[--surface] min-h-[350px]" style={{ aspectRatio: "3/4", width: "100%" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`${BASE}/profile.png`}
          alt="Ubaith Sherif — AI Engineer & Full-Stack Developer"
          className="h-full w-full object-cover object-top"
          loading="eager"
          onError={(e) => {
            const target = e.currentTarget;
            if (target.src.includes("/profile.png")) {
              target.src = `${BASE}/profile.jpg`;
            } else if (target.src.includes("/profile.jpg")) {
              target.src = `${BASE}/profile.jpeg`;
            }
          }}
        />
      </div>
    </div>
  );
}
