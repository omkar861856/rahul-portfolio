import { Track } from '@/lib/audio-player';

export interface Album {
  id: string;
  title: string;
  year: number;
  description: string;
  coverImage: string;
  tracks: Track[];
}

// Sample tracks for the albums
const monsoonRagasTracks: Track[] = [
  {
    id: 'monsoon-1',
    title: 'Monsoon Melodies',
    artist: 'Rahul Sharma feat. Bangalore Ensemble',
    album: 'Monsoon Ragas',
    duration: 275, // 4:35
    coverImage: 'https://images.unsplash.com/photo-1561212024-cb9ad0c33195?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80',
    url: 'https://cdn.freesound.org/previews/530/530104_11237579-lq.mp3'
  },
  {
    id: 'monsoon-2',
    title: 'Rainy Day Raga',
    artist: 'Rahul Sharma',
    album: 'Monsoon Ragas',
    duration: 310, // 5:10
    coverImage: 'https://images.unsplash.com/photo-1561212024-cb9ad0c33195?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80',
    url: 'https://cdn.freesound.org/previews/545/545338_11237579-lq.mp3'
  },
  {
    id: 'monsoon-3',
    title: 'Puddle Dance',
    artist: 'Rahul Sharma',
    album: 'Monsoon Ragas',
    duration: 248, // 4:08
    coverImage: 'https://images.unsplash.com/photo-1561212024-cb9ad0c33195?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80',
    url: 'https://cdn.freesound.org/previews/595/595891_2282212-lq.mp3'
  }
];

const bangaloreNightsTracks: Track[] = [
  {
    id: 'bangalore-1',
    title: 'Indiranagar Groove',
    artist: 'Rahul Sharma',
    album: 'Bangalore Nights',
    duration: 293, // 4:53
    coverImage: 'https://images.unsplash.com/photo-1629276301820-0f3eedc29fd0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80',
    url: 'https://cdn.freesound.org/previews/625/625265_11237579-lq.mp3'
  },
  {
    id: 'bangalore-2',
    title: 'Cubbon Park Dawn',
    artist: 'Rahul Sharma',
    album: 'Bangalore Nights',
    duration: 325, // 5:25
    coverImage: 'https://images.unsplash.com/photo-1629276301820-0f3eedc29fd0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80',
    url: 'https://cdn.freesound.org/previews/638/638793_11237579-lq.mp3'
  }
];

const mysoreTracks: Track[] = [
  {
    id: 'mysore-1',
    title: 'Palace Dreams',
    artist: 'Rahul Sharma',
    album: 'Mysore Memories',
    duration: 276, // 4:36
    coverImage: 'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80',
    url: 'https://cdn.freesound.org/previews/431/431629_4921277-lq.mp3'
  },
  {
    id: 'mysore-2',
    title: 'Chamundi Hills',
    artist: 'Rahul Sharma',
    album: 'Mysore Memories',
    duration: 245, // 4:05
    coverImage: 'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80',
    url: 'https://cdn.freesound.org/previews/350/350985_5798578-lq.mp3'
  }
];

const classicalTracks: Track[] = [
  {
    id: 'classical-1',
    title: 'Bhairav Morning',
    artist: 'Rahul Sharma',
    album: 'Classical Horizons',
    duration: 365, // 6:05
    coverImage: 'https://images.unsplash.com/photo-1558584673-c834fb1cc3ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80',
    url: 'https://cdn.freesound.org/previews/388/388713_7093972-lq.mp3'
  },
  {
    id: 'classical-2',
    title: 'Yaman Evening',
    artist: 'Rahul Sharma',
    album: 'Classical Horizons',
    duration: 298, // 4:58
    coverImage: 'https://images.unsplash.com/photo-1558584673-c834fb1cc3ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80',
    url: 'https://cdn.freesound.org/previews/476/476340_9015615-lq.mp3'
  }
];

// Albums
export const albums: Album[] = [
  {
    id: 'bangalore-nights',
    title: 'Bangalore Nights',
    year: 2022,
    description: 'Fusion compositions inspired by Bangalore\'s urban landscape and traditional Karnataka folk music.',
    coverImage: 'https://images.unsplash.com/photo-1629276301820-0f3eedc29fd0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80',
    tracks: bangaloreNightsTracks
  },
  {
    id: 'mysore-memories',
    title: 'Mysore Memories',
    year: 2021,
    description: 'A musical journey through South India\'s cultural heritage, featuring collaborations with local artists.',
    coverImage: 'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80',
    tracks: mysoreTracks
  },
  {
    id: 'classical-horizons',
    title: 'Classical Horizons',
    year: 2019,
    description: 'My debut album featuring traditional ragas reimagined with subtle contemporary influences.',
    coverImage: 'https://images.unsplash.com/photo-1558584673-c834fb1cc3ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80',
    tracks: classicalTracks
  }
];

// Featured album for the player
export const featuredAlbum: Album = {
  id: 'monsoon-ragas',
  title: 'Monsoon Ragas',
  year: 2023,
  description: 'A celebration of the monsoon season with ragas traditionally associated with rain and renewal.',
  coverImage: 'https://images.unsplash.com/photo-1561212024-cb9ad0c33195?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80',
  tracks: monsoonRagasTracks
};
