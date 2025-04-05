export interface GalleryItemProps {
  id: string;
  imageUrl: string;
  title: string;
  date: string;
}

export const galleryItems: GalleryItemProps[] = [
  {
    id: 'gallery-1',
    imageUrl: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=900&q=80',
    title: 'Bangalore Cultural Festival',
    date: '2023'
  },
  {
    id: 'gallery-2',
    imageUrl: 'https://images.unsplash.com/photo-1619229667009-a7b527d173ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600&q=80',
    title: 'Recording Session',
    date: '2022'
  },
  {
    id: 'gallery-3',
    imageUrl: 'https://images.unsplash.com/photo-1533738363-b7f9aef128ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600&q=80',
    title: 'Backstage Moments',
    date: '2023'
  },
  {
    id: 'gallery-4',
    imageUrl: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600&q=80',
    title: 'Cubbon Park Concert Series',
    date: '2022'
  }
];
