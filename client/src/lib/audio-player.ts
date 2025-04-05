import { Howl } from 'howler';
import { create } from 'zustand';

export interface Track {
  id: string;
  title: string;
  artist: string;
  album: string;
  duration: number;
  coverImage: string;
  url: string;
}

interface AudioPlayerState {
  tracks: Track[];
  currentTrackIndex: number;
  isPlaying: boolean;
  volume: number;
  progress: number;
  duration: number;
  howl: Howl | null;
  isLoaded: boolean;
  
  // Actions
  initializePlayer: (tracks: Track[]) => void;
  play: () => void;
  pause: () => void;
  togglePlayPause: () => void;
  next: () => void;
  previous: () => void;
  setVolume: (volume: number) => void;
  setProgress: (progress: number) => void;
  setCurrentTrack: (index: number) => void;
}

export const useAudioPlayer = create<AudioPlayerState>((set, get) => ({
  tracks: [],
  currentTrackIndex: 0,
  isPlaying: false,
  volume: 0.75,
  progress: 0,
  duration: 0,
  howl: null,
  isLoaded: false,
  
  initializePlayer: (tracks) => {
    set({ tracks });
    const { currentTrackIndex } = get();
    
    // Load first track
    if (tracks.length > 0) {
      const howl = new Howl({
        src: [tracks[currentTrackIndex].url],
        html5: true,
        preload: true,
        volume: get().volume,
        onload: () => {
          set({ isLoaded: true, duration: howl.duration() });
        },
        onplay: () => {
          set({ isPlaying: true });
          // Update progress
          const progressInterval = setInterval(() => {
            if (get().isPlaying) {
              const howl = get().howl;
              if (howl) {
                set({ progress: howl.seek() });
              }
            }
          }, 1000);
          
          // Clear interval when stopped
          howl.once('stop', () => {
            clearInterval(progressInterval);
          });
          
          howl.once('end', () => {
            clearInterval(progressInterval);
            get().next();
          });
        },
        onpause: () => {
          set({ isPlaying: false });
        },
        onstop: () => {
          set({ isPlaying: false, progress: 0 });
        }
      });
      
      set({ howl });
    }
  },
  
  play: () => {
    const { howl } = get();
    if (howl) {
      howl.play();
    }
  },
  
  pause: () => {
    const { howl } = get();
    if (howl) {
      howl.pause();
    }
  },
  
  togglePlayPause: () => {
    const { isPlaying, howl } = get();
    if (howl) {
      if (isPlaying) {
        howl.pause();
      } else {
        howl.play();
      }
    }
  },
  
  next: () => {
    const { tracks, currentTrackIndex, howl } = get();
    if (tracks.length === 0) return;
    
    // Clean up current howl
    if (howl) {
      howl.stop();
      howl.unload();
    }
    
    // Calculate next track index
    const nextIndex = (currentTrackIndex + 1) % tracks.length;
    
    // Create new howl for next track
    const newHowl = new Howl({
      src: [tracks[nextIndex].url],
      html5: true,
      volume: get().volume,
      onload: () => {
        set({ duration: newHowl.duration() });
      },
      onplay: () => {
        set({ isPlaying: true });
        // Update progress
        const progressInterval = setInterval(() => {
          if (get().isPlaying) {
            set({ progress: newHowl.seek() });
          }
        }, 1000);
        
        // Clear interval when stopped
        newHowl.once('stop', () => {
          clearInterval(progressInterval);
        });
        
        newHowl.once('end', () => {
          clearInterval(progressInterval);
          get().next();
        });
      },
      onpause: () => {
        set({ isPlaying: false });
      },
      onstop: () => {
        set({ isPlaying: false, progress: 0 });
      }
    });
    
    set({ 
      currentTrackIndex: nextIndex,
      howl: newHowl,
      progress: 0
    });
    
    newHowl.play();
  },
  
  previous: () => {
    const { tracks, currentTrackIndex, howl } = get();
    if (tracks.length === 0) return;
    
    // Clean up current howl
    if (howl) {
      howl.stop();
      howl.unload();
    }
    
    // Calculate previous track index
    const prevIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
    
    // Create new howl for previous track
    const newHowl = new Howl({
      src: [tracks[prevIndex].url],
      html5: true,
      volume: get().volume,
      onload: () => {
        set({ duration: newHowl.duration() });
      },
      onplay: () => {
        set({ isPlaying: true });
        // Update progress
        const progressInterval = setInterval(() => {
          if (get().isPlaying) {
            set({ progress: newHowl.seek() });
          }
        }, 1000);
        
        // Clear interval when stopped
        newHowl.once('stop', () => {
          clearInterval(progressInterval);
        });
        
        newHowl.once('end', () => {
          clearInterval(progressInterval);
          get().next();
        });
      },
      onpause: () => {
        set({ isPlaying: false });
      },
      onstop: () => {
        set({ isPlaying: false, progress: 0 });
      }
    });
    
    set({ 
      currentTrackIndex: prevIndex,
      howl: newHowl,
      progress: 0
    });
    
    newHowl.play();
  },
  
  setVolume: (volume) => {
    const { howl } = get();
    if (howl) {
      howl.volume(volume);
    }
    set({ volume });
  },
  
  setProgress: (progress) => {
    const { howl, duration } = get();
    if (howl && progress <= duration) {
      howl.seek(progress);
      set({ progress });
    }
  },
  
  setCurrentTrack: (index) => {
    const { tracks, howl } = get();
    if (index < 0 || index >= tracks.length) return;
    
    // Clean up current howl
    if (howl) {
      howl.stop();
      howl.unload();
    }
    
    // Create new howl for the selected track
    const newHowl = new Howl({
      src: [tracks[index].url],
      html5: true,
      volume: get().volume,
      onload: () => {
        set({ duration: newHowl.duration() });
      },
      onplay: () => {
        set({ isPlaying: true });
        // Update progress
        const progressInterval = setInterval(() => {
          if (get().isPlaying) {
            set({ progress: newHowl.seek() });
          }
        }, 1000);
        
        // Clear interval when stopped
        newHowl.once('stop', () => {
          clearInterval(progressInterval);
        });
        
        newHowl.once('end', () => {
          clearInterval(progressInterval);
          get().next();
        });
      },
      onpause: () => {
        set({ isPlaying: false });
      },
      onstop: () => {
        set({ isPlaying: false, progress: 0 });
      }
    });
    
    set({ 
      currentTrackIndex: index,
      howl: newHowl,
      progress: 0
    });
    
    newHowl.play();
  }
}));

// Helper to format time (seconds to MM:SS)
export const formatTime = (seconds: number): string => {
  if (isNaN(seconds)) return "0:00";
  
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs.toString().padStart(2, '0')}`;
};
