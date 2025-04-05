import React from 'react';

export interface EventProps {
  day: number;
  month: string;
  year: number;
  title: string;
  venue: string;
  description: string;
  time: string;
}

export function EventCard({ event }: { event: EventProps }) {
  return (
    <div className="event-ticket bg-cream bg-opacity-10 backdrop-blur-sm rounded-lg border border-gold border-opacity-30 overflow-hidden">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/3 p-6 bg-gold bg-opacity-20 flex flex-col justify-center items-center border-b md:border-b-0 md:border-r border-gold border-opacity-30">
          <span className="text-3xl font-playfair font-bold text-cream">{event.day}</span>
          <span className="text-lg font-playfair text-gold">{event.month}</span>
          <span className="text-sm font-montserrat text-cream mt-1">{event.year}</span>
        </div>
        
        <div className="md:w-2/3 p-6">
          <h4 className="text-xl font-playfair font-bold text-cream">{event.title}</h4>
          <p className="text-sm font-montserrat text-gold mb-3">{event.venue}</p>
          <p className="text-sm font-lora text-cream mb-4">{event.description}</p>
          
          <div className="flex justify-between items-center">
            <span className="font-montserrat text-gold text-sm">
              <i className="ri-time-line mr-1"></i> {event.time}
            </span>
            <a 
              href="#" 
              onClick={(e) => e.preventDefault()}
              className="px-4 py-2 bg-gold text-dark font-montserrat text-sm font-semibold rounded-md hover:bg-opacity-90 transition"
            >
              Book Tickets
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
