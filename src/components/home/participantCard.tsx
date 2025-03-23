// src/components/home/ParticipantCard.tsx
import React from 'react';

interface ParticipantCardProps {
  avatarUrl?: string;
  name?: string;
  rank?: string;
  nftCount?: string;
  experience?: string;
}

export function ParticipantCard({ 
  avatarUrl = "/Asets/Frame31.png",
  name = "Brittany",
  rank = "Champion",
  nftCount = "250 Event NFT",
  experience = "2000 EXP"
}: ParticipantCardProps) {
  return (
    <div className="bg-[#2D2D2D] p-4 rounded-lg flex justify-between items-center">
      {/* Participant Avatar */}
      <div className="flex items-center gap-3">
        <div 
          className="w-8 h-8"
          style={{ 
            backgroundImage: `url('${avatarUrl}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderRadius: '50%'
          }}
        />
        <span className="text-white">{name}</span>
      </div>
      
      <div className="text-right">
        <p className="text-sm text-[#E5E5E5]">{rank} · {nftCount}</p>
        <p className="text-sm text-[#808080]">{experience}</p>
      </div>
    </div>
  );
}