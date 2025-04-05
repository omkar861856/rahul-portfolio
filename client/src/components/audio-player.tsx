import React, { useEffect, useRef, useState } from 'react';
import { useAudioPlayer, formatTime } from '@/lib/audio-player';
import { Slider } from '@/components/ui/slider';

export function AudioPlayer() {
  const {
    tracks,
    currentTrackIndex,
    isPlaying,
    progress,
    duration,
    volume,
    togglePlayPause,
    next,
    previous,
    setVolume,
    setProgress
  } = useAudioPlayer();
  
  const [displayProgress, setDisplayProgress] = useState(0);
  const [seeking, setSeeking] = useState(false);
  
  // Update display progress when actual progress changes (if not seeking)
  useEffect(() => {
    if (!seeking) {
      setDisplayProgress(progress);
    }
  }, [progress, seeking]);

  const currentTrack = tracks[currentTrackIndex];
  
  // Handle seeking
  const handleSeekStart = () => {
    setSeeking(true);
  };
  
  const handleSeekChange = (value: number[]) => {
    setDisplayProgress(value[0]);
  };
  
  const handleSeekEnd = (value: number[]) => {
    setProgress(value[0]);
    setSeeking(false);
  };
  
  // Handle volume change
  const handleVolumeChange = (value: number[]) => {
    setVolume(value[0]);
  };

  // If no tracks, return empty player
  if (!currentTrack) {
    return null;
  }

  return (
    <div className="bg-gray-900 bg-opacity-70 backdrop-blur-sm p-5 rounded-xl shadow-xl border border-gold border-opacity-20 mb-12">
      <div className="flex flex-col md:flex-row items-center gap-4">
        <div className="w-full md:w-1/3 mb-4 md:mb-0">
          <div className="relative">
            <div className="vinyl-record aspect-square">
              <div className="vinyl-grooves"></div>
              <img 
                src={currentTrack.coverImage} 
                alt={`${currentTrack.album} cover`} 
                className={`w-full h-full object-cover rounded-md ${isPlaying ? 'record-spin' : ''}`} 
              />
            </div>
          </div>
        </div>
        
        <div className="w-full md:w-2/3">
          <h4 className="text-xl font-playfair font-bold text-cream">{currentTrack.title}</h4>
          <p className="text-sm font-lora text-gold mb-4">{currentTrack.album} • {currentTrack.artist}</p>
          
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-montserrat text-cream">{currentTrack.title}</span>
              <span className="text-xs font-montserrat text-gold">
                {formatTime(displayProgress)} / {formatTime(duration)}
              </span>
            </div>
            <Slider
              className="audio-progress w-full"
              onValueChange={handleSeekChange}
              onValueCommit={handleSeekEnd}
              value={[displayProgress]}
              min={0}
              max={duration || 100}
              step={0.1}
              onPointerDown={handleSeekStart}
            />
          </div>
          
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <button 
                className="p-2 text-gold hover:text-cream transition"
                onClick={previous}
              >
                <i className="ri-skip-back-fill text-xl"></i>
              </button>
              <button 
                className="p-3 bg-gold text-dark rounded-full hover:bg-opacity-90 transition"
                onClick={togglePlayPause}
              >
                <i className={`ri-${isPlaying ? 'pause' : 'play'}-fill text-xl`}></i>
              </button>
              <button 
                className="p-2 text-gold hover:text-cream transition"
                onClick={next}
              >
                <i className="ri-skip-forward-fill text-xl"></i>
              </button>
            </div>
            
            <div className="flex items-center space-x-3">
              <button className="text-gold hover:text-cream transition">
                <i className="ri-repeat-line text-lg"></i>
              </button>
              <div className="flex items-center">
                <button className="text-gold hover:text-cream transition">
                  <i className="ri-volume-up-line text-lg"></i>
                </button>
                <Slider
                  className="audio-progress w-20 ml-2"
                  value={[volume]}
                  min={0}
                  max={1}
                  step={0.01}
                  onValueChange={handleVolumeChange}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
