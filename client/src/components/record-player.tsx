import React from 'react';
import { useAudioPlayer } from '@/lib/audio-player';

interface RecordPlayerProps {
  imageUrl: string;
}

export function RecordPlayer({ imageUrl }: RecordPlayerProps) {
  const { isPlaying } = useAudioPlayer();
  
  return (
    <div className="record-player relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
      <div className="vinyl-record absolute inset-0 bg-dark shadow-lg">
        <div className="vinyl-grooves"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-1/3 h-1/3 rounded-full bg-gold flex items-center justify-center">
            <div className="w-1/3 h-1/3 rounded-full bg-dark"></div>
          </div>
        </div>
        <img 
          src={imageUrl}
          alt="Rahul Sharma" 
          className={`absolute inset-0 w-full h-full object-cover rounded-full opacity-70 mix-blend-overlay ${isPlaying ? 'record-spin' : ''}`}
        />
      </div>
    </div>
  );
}
