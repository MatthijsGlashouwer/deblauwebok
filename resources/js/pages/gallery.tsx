import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { Search, Filter, ChevronRight, ChevronLeft, X } from 'lucide-react';

// Sample gallery categories
const categories = [
  { id: 'all', name: 'Alle Categorieën' },
  { id: 'carnival2023', name: 'Carnaval 2023' },
  { id: 'carnival2022', name: 'Carnaval 2022' },
  { id: 'princeball', name: 'Prinsenbals' },
  { id: 'events', name: 'Evenementen' },
  { id: 'construction', name: 'Wagenbouw' },
];

// Sample gallery photos
const galleryPhotos = [
  // Carnaval 2023
  { 
    id: 1, 
    title: 'Carnavalsoptocht 2023', 
    image: '/storage/gallery/optocht1.jpg',
    category: 'carnival2023',
    date: 'Februari 2023'
  },
  { 
    id: 2, 
    title: 'Feesttent Carnaval 2023', 
    image: '/storage/gallery/feesttent.jpg',
    category: 'carnival2023',
    date: 'Februari 2023'
  },
  { 
    id: 3, 
    title: 'Prinsenwagen 2023', 
    image: '/storage/gallery/prinsenwagen.jpg',
    category: 'carnival2023',
    date: 'Februari 2023'
  },
  { 
    id: 4, 
    title: 'Sleuteloverdracht 2023', 
    image: '/storage/gallery/sleuteloverdracht.jpg',
    category: 'carnival2023',
    date: 'Februari 2023'
  },
  { 
    id: 5, 
    title: 'Kindercarnaval 2023', 
    image: '/storage/gallery/kindercarnaval.jpg',
    category: 'carnival2023',
    date: 'Februari 2023'
  },
  { 
    id: 6, 
    title: 'Carnavalsviering Ouderen 2023', 
    image: '/storage/gallery/ouderen.jpg',
    category: 'carnival2023',
    date: 'Februari 2023'
  },
  
  // Carnaval 2022
  { 
    id: 7, 
    title: 'Carnavalsoptocht 2022', 
    image: '/storage/gallery/optocht2022.jpg',
    category: 'carnival2022',
    date: 'Februari 2022'
  },
  { 
    id: 8, 
    title: 'Feesttent Carnaval 2022', 
    image: '/storage/gallery/feesttent2022.jpg',
    category: 'carnival2022',
    date: 'Februari 2022'
  },
  { 
    id: 9, 
    title: 'Sleuteloverdracht 2022', 
    image: '/storage/gallery/sleuteloverdracht2022.jpg',
    category: 'carnival2022',
    date: 'Februari 2022'
  },
  
  // Prinsenbals
  { 
    id: 10, 
    title: 'Prinsenbal 2023', 
    image: '/storage/gallery/prinsenbal2023.jpg',
    category: 'princeball',
    date: 'November 2022'
  },
  { 
    id: 11, 
    title: 'Prinsenbal 2022', 
    image: '/storage/gallery/prinsenbal2022.jpg',
    category: 'princeball',
    date: 'November 2021'
  },
  { 
    id: 12, 
    title: 'Onthulling Prins Carnaval 2023', 
    image: '/storage/gallery/prinsonthulling.jpg',
    category: 'princeball',
    date: 'November 2022'
  },
  
  // Evenementen
  { 
    id: 13, 
    title: 'Zomerfeest 2023', 
    image: '/storage/gallery/zomerfeest.jpg',
    category: 'events',
    date: 'Juni 2023'
  },
  { 
    id: 14, 
    title: 'Feestavond 2023', 
    image: '/storage/gallery/feestavond.jpg',
    category: 'events',
    date: 'Maart 2023'
  },
  { 
    id: 15, 
    title: 'Jubileumfeest', 
    image: '/storage/gallery/jubileum.jpg',
    category: 'events',
    date: 'Oktober 2022'
  },
  
  // Wagenbouw
  { 
    id: 16, 
    title: 'Bouw Prinsenwagen 2023 - Start', 
    image: '/storage/gallery/wagenbouw1.jpg',
    category: 'construction',
    date: 'Oktober 2022'
  },
  { 
    id: 17, 
    title: 'Bouw Prinsenwagen 2023 - Voortgang', 
    image: '/storage/gallery/wagenbouw2.jpg',
    category: 'construction',
    date: 'December 2022'
  },
  { 
    id: 18, 
    title: 'Bouw Prinsenwagen 2023 - Afwerking', 
    image: '/storage/gallery/wagenbouw3.jpg',
    category: 'construction',
    date: 'Januari 2023'
  },
];

// Define breadcrumbs
const breadcrumbs: BreadcrumbItem[] = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'Fotogalerij',
    href: '/fotos',
  },
];

export default function Gallery() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPhoto, setSelectedPhoto] = useState<null | typeof galleryPhotos[0]>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  
  // Filter photos based on search query and category
  const filteredPhotos = galleryPhotos.filter(photo => {
    const matchesSearch = photo.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || photo.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });
  
  const handlePhotoClick = (photo: typeof galleryPhotos[0]) => {
    setSelectedPhoto(photo);
    const index = filteredPhotos.findIndex(p => p.id === photo.id);
    setCurrentIndex(index);
  };
  
  const handlePrevPhoto = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setSelectedPhoto(filteredPhotos[currentIndex - 1]);
    }
  };
  
  const handleNextPhoto = () => {
    if (currentIndex < filteredPhotos.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelectedPhoto(filteredPhotos[currentIndex + 1]);
    }
  };

  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title="Fotogalerij - Carnavalsvereniging De Blauwe Bok" />
      
      {/* Hero Section */}
      <div className="w-full py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl font-bold">Fotogalerij</h1>
          <p className="text-xl mt-4 max-w-3xl opacity-90">
            Bekijk foto's van onze carnavalsoptochten, evenementen en activiteiten
          </p>
        </div>
      </div>
      
      {/* Search & Filter */}
      <div className="py-8 bg-white border-b">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow max-w-3xl">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                type="text"
                placeholder="Zoek foto's..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-2">
              <Filter className="text-gray-500 h-4 w-4" />
              <Select
                value={selectedCategory}
                onValueChange={setSelectedCategory}
              >
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Categorie" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category.id} value={category.id}>
                      {category.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </div>
      
      {/* Gallery */}
      <div className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <Tabs defaultValue="grid" className="w-full">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold">
                {selectedCategory === 'all' 
                  ? 'Alle Foto\'s' 
                  : categories.find(c => c.id === selectedCategory)?.name || 'Foto\'s'}
              </h2>
              <TabsList>
                <TabsTrigger value="grid">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-grid">
                    <rect width="7" height="7" x="3" y="3" rx="1" />
                    <rect width="7" height="7" x="14" y="3" rx="1" />
                    <rect width="7" height="7" x="14" y="14" rx="1" />
                    <rect width="7" height="7" x="3" y="14" rx="1" />
                  </svg>
                </TabsTrigger>
                <TabsTrigger value="masonry">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-layout">
                    <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                    <line x1="3" x2="21" y1="9" y2="9" />
                    <line x1="9" x2="9" y1="21" y2="9" />
                  </svg>
                </TabsTrigger>
              </TabsList>
            </div>
            
            {filteredPhotos.length > 0 ? (
              <>
                {/* Grid View */}
                <TabsContent value="grid">
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {filteredPhotos.map((photo) => (
                      <Dialog key={photo.id}>
                        <DialogTrigger asChild>
                          <div className="group relative cursor-pointer overflow-hidden rounded-lg h-48 md:h-60">
                            <img 
                              src={photo.image} 
                              alt={photo.title} 
                              className="w-full h-full object-cover transition-transform group-hover:scale-110"
                              onError={(e) => {
                                e.currentTarget.src = `https://placehold.co/600x400?text=${encodeURIComponent(photo.title)}`;
                              }}
                              onClick={() => handlePhotoClick(photo)}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                              <p className="text-white font-medium">{photo.title}</p>
                            </div>
                          </div>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-3xl">
                          <DialogHeader>
                            <DialogTitle>{selectedPhoto?.title}</DialogTitle>
                            <DialogDescription>{selectedPhoto?.date}</DialogDescription>
                          </DialogHeader>
                          <div className="relative">
                            <img 
                              src={selectedPhoto?.image} 
                              alt={selectedPhoto?.title} 
                              className="w-full h-auto rounded-md"
                              onError={(e) => {
                                e.currentTarget.src = `https://placehold.co/800x600?text=${encodeURIComponent(selectedPhoto?.title || '')}`;
                              }}
                            />
                            {currentIndex > 0 && (
                              <Button 
                                variant="outline" 
                                size="icon" 
                                className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 hover:bg-white border-none"
                                onClick={handlePrevPhoto}
                              >
                                <ChevronLeft className="h-6 w-6" />
                              </Button>
                            )}
                            {currentIndex < filteredPhotos.length - 1 && (
                              <Button 
                                variant="outline" 
                                size="icon" 
                                className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 hover:bg-white border-none"
                                onClick={handleNextPhoto}
                              >
                                <ChevronRight className="h-6 w-6" />
                              </Button>
                            )}
                          </div>
                        </DialogContent>
                      </Dialog>
                    ))}
                  </div>
                </TabsContent>
                
                {/* Masonry View */}
                <TabsContent value="masonry">
                  <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
                    {filteredPhotos.map((photo) => (
                      <Dialog key={photo.id}>
                        <DialogTrigger asChild>
                          <div className="break-inside-avoid group relative cursor-pointer overflow-hidden rounded-lg">
                            <img 
                              src={photo.image} 
                              alt={photo.title} 
                              className="w-full h-auto transition-transform group-hover:scale-105"
                              onError={(e) => {
                                e.currentTarget.src = `https://placehold.co/600x${Math.floor(Math.random() * 200) + 300}?text=${encodeURIComponent(photo.title)}`;
                              }}
                              onClick={() => handlePhotoClick(photo)}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                              <p className="text-white font-medium">{photo.title}</p>
                            </div>
                          </div>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-3xl">
                          <DialogHeader>
                            <DialogTitle>{selectedPhoto?.title}</DialogTitle>
                            <DialogDescription>{selectedPhoto?.date}</DialogDescription>
                          </DialogHeader>
                          <div className="relative">
                            <img 
                              src={selectedPhoto?.image} 
                              alt={selectedPhoto?.title} 
                              className="w-full h-auto rounded-md"
                              onError={(e) => {
                                e.currentTarget.src = `https://placehold.co/800x600?text=${encodeURIComponent(selectedPhoto?.title || '')}`;
                              }}
                            />
                            {currentIndex > 0 && (
                              <Button 
                                variant="outline" 
                                size="icon" 
                                className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 hover:bg-white border-none"
                                onClick={handlePrevPhoto}
                              >
                                <ChevronLeft className="h-6 w-6" />
                              </Button>
                            )}
                            {currentIndex < filteredPhotos.length - 1 && (
                              <Button 
                                variant="outline" 
                                size="icon" 
                                className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 hover:bg-white border-none"
                                onClick={handleNextPhoto}
                              >
                                <ChevronRight className="h-6 w-6" />
                              </Button>
                            )}
                          </div>
                        </DialogContent>
                      </Dialog>
                    ))}
                  </div>
                </TabsContent>
              </>
            ) : (
              <div className="text-center py-12 bg-gray-100 rounded-lg">
                <p className="text-gray-600">Geen foto's gevonden die aan je zoekcriteria voldoen.</p>
              </div>
            )}
          </Tabs>
        </div>
      </div>
      
      {/* Categories Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl font-bold mb-8 text-center">Fotocategorieën</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {categories.filter(c => c.id !== 'all').map((category) => (
              <Card 
                key={category.id} 
                className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
                onClick={() => setSelectedCategory(category.id)}
              >
                <div className="h-40 bg-blue-100 flex items-center justify-center">
                  <img 
                    src={`/storage/categories/${category.id}.jpg`} 
                    alt={category.name} 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = `https://placehold.co/600x400/blue/white?text=${encodeURIComponent(category.name)}`;
                    }}
                  />
                </div>
                <CardContent className="p-4 text-center">
                  <h3 className="font-semibold text-lg">{category.name}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
      
      {/* Call to Action - Share Photos */}
      <div className="py-16 bg-blue-50">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Deel Jouw Foto's Met Ons</h2>
            <p className="text-gray-600 mb-8">
              Heb je zelf leuke foto's gemaakt tijdens een van onze evenementen? Deel ze met ons en
              help de herinneringen te bewaren voor de toekomst.
            </p>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Foto's Insturen
            </Button>
          </div>
        </div>
      </div>
    </AppLayout>
  );
} 