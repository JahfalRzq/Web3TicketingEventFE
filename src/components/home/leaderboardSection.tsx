// src/components/home/LeaderboardSection.tsx
import React from 'react';
import { ParticipantCard } from './participantCard';

export function LeaderboardSection() {
  // Sample data - in a real app, you would pass this as props or fetch from an API
  const participants = Array(7).fill({
    avatarUrl: "/Asets/Frame31.png",
    name: "Brittany",
    rank: "Champion",
    nftCount: "250 Event NFT",
    experience: "2000 EXP"
  });

  return (
    <section className="w-full mb-8">
      <h2 className="text-2xl mb-4 text-white">Leaderboard Participant</h2>
      <div className="grid grid-cols-1 gap-3">
        {participants.map((participant, index) => (
          <ParticipantCard 
            key={index}
            avatarUrl={participant.avatarUrl}
            name={participant.name}
            rank={participant.rank}
            nftCount={participant.nftCount}
            experience={participant.experience}
          />
        ))}
      </div>
    </section>
  );
}