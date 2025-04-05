import React from 'react';

interface GalleryItemProps {
  imageUrl: string;
  title: string;
  date: string;
  className?: string;
}

export function GalleryItem({ imageUrl, title, date, className = '' }: GalleryItemProps) {
  return (
    <div className={`gallery-item relative overflow-hidden rounded-lg shadow-lg ${className}`}>
      <img 
        src={imageUrl} 
        alt={title} 
        className="w-full h-full object-cover" 
      />
      <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-60"></div>
      <div className="absolute bottom-0 left-0 p-4">
        <h4 className="text-lg font-playfair font-bold text-cream">{title}</h4>
        <p className="text-sm font-lora text-gold">{date}</p>
      </div>
    </div>
  );
}
