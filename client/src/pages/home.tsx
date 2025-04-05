import React, { useEffect } from 'react';
import { Navigation } from '@/components/navigation';
import { RecordPlayer } from '@/components/record-player';
import { AudioPlayer } from '@/components/audio-player';
import { GalleryItem } from '@/components/gallery-item';
import { EventCard } from '@/components/event-card';
import { ContactForm } from '@/components/contact-form';
import { useAudioPlayer } from '@/lib/audio-player';
import { albums, featuredAlbum } from '@/data/music';
import { events } from '@/data/events';
import { galleryItems } from '@/data/gallery';

export default function Home() {
  const { initializePlayer } = useAudioPlayer();
  
  useEffect(() => {
    // Initialize player with tracks from the featured album
    if (featuredAlbum && featuredAlbum.tracks) {
      initializePlayer(featuredAlbum.tracks);
    }
  }, [initializePlayer]);
  
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden py-12 md:py-0">
        <div className="absolute inset-0 z-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
            alt="Background Texture" 
            className="w-full h-full object-cover" 
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10 flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start">
            <div className="mb-6 md:mb-10 relative">
              <h2 className="text-lg md:text-xl font-lora italic text-maroon mb-2">Classical Fusion Artist</h2>
              <h1 className="text-4xl md:text-6xl font-playfair font-black text-dark">Rahul <span className="text-maroon">Sharma</span></h1>
              <div className="w-20 h-1 bg-gold mt-4"></div>
            </div>
            
            <p className="text-lg font-lora text-dark mb-8 text-center md:text-left max-w-lg">
              Blending traditional Indian classical with contemporary jazz and world music influences. Based in the vibrant musical landscape of Bangalore.
            </p>
            
            <div className="flex space-x-4">
              <button 
                onClick={() => document.getElementById('music')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-6 py-3 bg-maroon text-cream font-montserrat font-semibold rounded-md shadow-md hover:bg-opacity-90 transition"
              >
                Listen Now
              </button>
              <button 
                onClick={() => document.getElementById('events')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-6 py-3 border-2 border-gold text-dark font-montserrat font-semibold rounded-md hover:bg-gold hover:bg-opacity-10 transition"
              >
                Upcoming Shows
              </button>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 mt-12 md:mt-0 flex justify-center md:justify-end">
            <RecordPlayer 
              imageUrl="https://images.unsplash.com/photo-1528233307375-c8099929b37e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=500&q=80" 
            />
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section id="about" className="py-16 md:py-24 relative">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-5/12">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1576952587188-c82da3d5a502?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800&q=80" 
                  alt="Rahul Sharma with his instrument" 
                  className="rounded-lg shadow-xl h-auto max-w-full relative z-10" 
                />
                <div className="absolute -bottom-4 -right-4 w-32 h-32 border-4 border-gold rounded-lg z-0"></div>
                <div className="absolute -top-4 -left-4 w-24 h-24 border-4 border-maroon rounded-lg z-0"></div>
              </div>
            </div>
            
            <div className="w-full md:w-7/12">
              <h2 className="text-sm uppercase tracking-wider font-montserrat font-semibold text-gold">About the Artist</h2>
              <h3 className="text-3xl md:text-4xl font-playfair font-bold text-dark mt-2 mb-6">The Journey and Inspiration</h3>
              
              <div className="font-lora text-dark space-y-4">
                <p>
                  Born and raised in North India and now based in Bangalore, I bring together the classical traditions of my heritage with contemporary global influences.
                </p>
                <p>
                  With over 15 years of training in classical sitar under Pandit Ravi Shankar's lineage, my journey took an unexpected turn when I discovered jazz during my time in Bangalore's vibrant music scene.
                </p>
                <p>
                  My compositions explore the intersection between the intricate ragas of Indian classical music and the improvisational freedom of jazz, creating a sound that honors tradition while embracing innovation.
                </p>
              </div>
              
              <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-cream bg-opacity-70 p-4 rounded-lg shadow-sm border border-gold border-opacity-20">
                  <p className="text-2xl font-playfair font-bold text-maroon">15+</p>
                  <p className="font-montserrat text-sm text-dark">Years of Experience</p>
                </div>
                <div className="bg-cream bg-opacity-70 p-4 rounded-lg shadow-sm border border-gold border-opacity-20">
                  <p className="text-2xl font-playfair font-bold text-maroon">3</p>
                  <p className="font-montserrat text-sm text-dark">Albums Released</p>
                </div>
                <div className="bg-cream bg-opacity-70 p-4 rounded-lg shadow-sm border border-gold border-opacity-20">
                  <p className="text-2xl font-playfair font-bold text-maroon">60+</p>
                  <p className="font-montserrat text-sm text-dark">Live Performances</p>
                </div>
                <div className="bg-cream bg-opacity-70 p-4 rounded-lg shadow-sm border border-gold border-opacity-20">
                  <p className="text-2xl font-playfair font-bold text-maroon">12</p>
                  <p className="font-montserrat text-sm text-dark">Collaborations</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Music Section */}
      <section id="music" className="py-16 md:py-24 bg-dark text-cream relative">
        <div className="absolute inset-0 z-0 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1593697972672-b1c1902219e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
            alt="Music Texture" 
            className="w-full h-full object-cover" 
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-sm uppercase tracking-wider font-montserrat font-semibold text-gold">Listen</h2>
            <h3 className="text-3xl md:text-5xl font-playfair font-bold text-cream mt-2 mb-4">Musical Portfolio</h3>
            <div className="w-24 h-1 bg-gold mx-auto"></div>
          </div>
          
          {/* Audio Player Component */}
          <AudioPlayer />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {albums.map((album) => (
              <div 
                key={album.id}
                className="bg-dark bg-opacity-50 backdrop-blur-sm p-5 rounded-lg shadow-lg border border-gold border-opacity-10 transition-all hover:transform hover:scale-102 hover:shadow-xl"
              >
                <div className="mb-4">
                  <img 
                    src={album.coverImage} 
                    alt={`${album.title} Album Art`} 
                    className="w-full h-auto rounded-md shadow-md" 
                  />
                </div>
                <h4 className="text-lg font-playfair font-bold text-cream">{album.title}</h4>
                <p className="text-sm font-lora text-gold mb-2">{album.year} • {album.tracks.length} tracks</p>
                <p className="text-sm font-lora text-cream mb-4">{album.description}</p>
                <div className="flex space-x-2">
                  <button 
                    onClick={() => initializePlayer(album.tracks)}
                    className="flex-1 py-2 bg-gold text-dark font-montserrat text-sm font-semibold rounded-md hover:bg-opacity-90 transition"
                  >
                    <i className="ri-play-fill mr-1"></i> Listen
                  </button>
                  <button className="px-3 py-2 border border-gold text-gold font-montserrat text-sm rounded-md hover:bg-gold hover:bg-opacity-10 transition">
                    <i className="ri-information-line"></i>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Gallery Section */}
      <section id="gallery" className="py-16 md:py-24 relative">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-sm uppercase tracking-wider font-montserrat font-semibold text-gold">Visual Journey</h2>
            <h3 className="text-3xl md:text-5xl font-playfair font-bold text-dark mt-2 mb-4">Gallery</h3>
            <div className="w-24 h-1 bg-gold mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <GalleryItem 
              imageUrl={galleryItems[0].imageUrl}
              title={galleryItems[0].title}
              date={galleryItems[0].date}
              className="aspect-square md:aspect-auto md:row-span-2"
            />
            
            <GalleryItem 
              imageUrl={galleryItems[1].imageUrl}
              title={galleryItems[1].title}
              date={galleryItems[1].date}
              className="aspect-square"
            />
            
            <GalleryItem 
              imageUrl={galleryItems[2].imageUrl}
              title={galleryItems[2].title}
              date={galleryItems[2].date}
              className="aspect-square"
            />
            
            <GalleryItem 
              imageUrl={galleryItems[3].imageUrl}
              title={galleryItems[3].title}
              date={galleryItems[3].date}
              className="col-span-1 md:col-span-2 aspect-video"
            />
          </div>
          
          <div className="text-center">
            <button className="inline-block px-6 py-3 border-2 border-maroon text-maroon font-montserrat font-semibold rounded-md hover:bg-maroon hover:text-cream transition">
              View Full Gallery
            </button>
          </div>
        </div>
      </section>
      
      {/* Events Section */}
      <section id="events" className="py-16 md:py-24 bg-maroon text-cream relative">
        <div className="absolute inset-0 z-0 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
            alt="Event Texture" 
            className="w-full h-full object-cover" 
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-sm uppercase tracking-wider font-montserrat font-semibold text-gold">Live Experiences</h2>
            <h3 className="text-3xl md:text-5xl font-playfair font-bold text-cream mt-2 mb-4">Upcoming Shows</h3>
            <div className="w-24 h-1 bg-gold mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {events.map((event) => (
              <EventCard key={`${event.day}-${event.month}`} event={event} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24 relative">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-sm uppercase tracking-wider font-montserrat font-semibold text-gold">Get in Touch</h2>
            <h3 className="text-3xl md:text-5xl font-playfair font-bold text-dark mt-2 mb-4">Contact</h3>
            <div className="w-24 h-1 bg-gold mx-auto"></div>
            <p className="max-w-xl mx-auto mt-6 font-lora text-dark">
              For bookings, collaborations, or just to say hello, feel free to reach out through the form below or connect on social media.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <ContactForm />
            </div>
            
            <div>
              <div className="h-full flex flex-col">
                <div className="mb-8">
                  <h4 className="text-xl font-playfair font-bold text-dark mb-4">Connect</h4>
                  <div className="flex space-x-4 mb-6">
                    <a href="#" className="w-10 h-10 rounded-full bg-maroon text-cream flex items-center justify-center hover:bg-opacity-90 transition">
                      <i className="ri-instagram-line"></i>
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-maroon text-cream flex items-center justify-center hover:bg-opacity-90 transition">
                      <i className="ri-youtube-line"></i>
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-maroon text-cream flex items-center justify-center hover:bg-opacity-90 transition">
                      <i className="ri-spotify-line"></i>
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-maroon text-cream flex items-center justify-center hover:bg-opacity-90 transition">
                      <i className="ri-facebook-line"></i>
                    </a>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <i className="ri-map-pin-line text-gold mt-1 mr-3"></i>
                      <p className="font-lora text-dark">
                        Based in Indiranagar, Bangalore, Karnataka, India
                      </p>
                    </div>
                    <div className="flex items-start">
                      <i className="ri-mail-line text-gold mt-1 mr-3"></i>
                      <p className="font-lora text-dark">
                        bookings@rahulsharma.com
                      </p>
                    </div>
                    <div className="flex items-start">
                      <i className="ri-phone-line text-gold mt-1 mr-3"></i>
                      <p className="font-lora text-dark">
                        +91 98765 43210
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-auto">
                  <h4 className="text-xl font-playfair font-bold text-dark mb-4">Performance Locations</h4>
                  <img 
                    src="https://images.unsplash.com/photo-1589223484522-89baace5f05a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400&q=80" 
                    alt="Bangalore Map" 
                    className="w-full h-48 object-cover rounded-lg shadow-md" 
                  />
                  <div className="mt-4 grid grid-cols-2 gap-3">
                    <div className="bg-cream bg-opacity-70 p-3 rounded-lg border border-gold border-opacity-20">
                      <h5 className="font-montserrat font-semibold text-maroon text-sm">The Humming Tree</h5>
                      <p className="font-lora text-dark text-xs">Indiranagar, Bangalore</p>
                    </div>
                    <div className="bg-cream bg-opacity-70 p-3 rounded-lg border border-gold border-opacity-20">
                      <h5 className="font-montserrat font-semibold text-maroon text-sm">Bangalore Int'l Centre</h5>
                      <p className="font-lora text-dark text-xs">Domlur, Bangalore</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-dark text-cream py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="flex items-center">
                <img 
                  src="https://images.unsplash.com/photo-1605722625766-a4c989c747a4?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80" 
                  alt="Logo" 
                  className="h-10 w-10 rounded-full border-2 border-gold" 
                />
                <h2 className="ml-3 text-xl font-playfair font-bold text-cream"><span className="text-gold">Rahul</span> Sharma</h2>
              </div>
              <p className="font-lora text-cream text-sm opacity-80 mt-2">
                Classical fusion artist based in Bangalore, India
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <h3 className="font-montserrat font-semibold text-gold mb-3">Navigation</h3>
                <ul className="space-y-2">
                  <li><button onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })} className="font-lora text-cream hover:text-gold transition">About</button></li>
                  <li><button onClick={() => document.getElementById('music')?.scrollIntoView({ behavior: 'smooth' })} className="font-lora text-cream hover:text-gold transition">Music</button></li>
                  <li><button onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })} className="font-lora text-cream hover:text-gold transition">Gallery</button></li>
                  <li><button onClick={() => document.getElementById('events')?.scrollIntoView({ behavior: 'smooth' })} className="font-lora text-cream hover:text-gold transition">Events</button></li>
                  <li><button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="font-lora text-cream hover:text-gold transition">Contact</button></li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-montserrat font-semibold text-gold mb-3">Music</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="font-lora text-cream hover:text-gold transition">Albums</a></li>
                  <li><a href="#" className="font-lora text-cream hover:text-gold transition">Singles</a></li>
                  <li><a href="#" className="font-lora text-cream hover:text-gold transition">Collaborations</a></li>
                  <li><a href="#" className="font-lora text-cream hover:text-gold transition">Videos</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-montserrat font-semibold text-gold mb-3">Connect</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="font-lora text-cream hover:text-gold transition">Instagram</a></li>
                  <li><a href="#" className="font-lora text-cream hover:text-gold transition">YouTube</a></li>
                  <li><a href="#" className="font-lora text-cream hover:text-gold transition">Spotify</a></li>
                  <li><a href="#" className="font-lora text-cream hover:text-gold transition">Facebook</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-montserrat font-semibold text-gold mb-3">Subscribe</h3>
                <p className="font-lora text-cream text-sm mb-3">
                  Get updates on new releases and upcoming shows
                </p>
                <div className="flex">
                  <input type="email" placeholder="Your email" className="px-3 py-2 bg-cream bg-opacity-10 border border-gold border-opacity-30 rounded-l-md focus:outline-none focus:ring-1 focus:ring-gold text-cream text-sm" />
                  <button className="px-3 py-2 bg-gold text-dark rounded-r-md hover:bg-opacity-90">
                    <i className="ri-mail-send-line"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gold border-opacity-20 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
            <p className="font-lora text-cream text-xs opacity-70">
              &copy; 2023 Rahul Sharma. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-4 text-xs font-lora text-cream opacity-70">
                <li><a href="#" className="hover:text-gold transition">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-gold transition">Terms of Service</a></li>
                <li><a href="#" className="hover:text-gold transition">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
