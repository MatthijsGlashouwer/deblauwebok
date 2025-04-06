import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { ChevronLeft, ChevronRight, Filter, Search } from 'lucide-react';
import { useState } from 'react';

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
        date: 'Februari 2023',
    },
    {
        id: 2,
        title: 'Feesttent Carnaval 2023',
        image: '/storage/gallery/feesttent.jpg',
        category: 'carnival2023',
        date: 'Februari 2023',
    },
    {
        id: 3,
        title: 'Prinsenwagen 2023',
        image: '/storage/gallery/prinsenwagen.jpg',
        category: 'carnival2023',
        date: 'Februari 2023',
    },
    {
        id: 4,
        title: 'Sleuteloverdracht 2023',
        image: '/storage/gallery/sleuteloverdracht.jpg',
        category: 'carnival2023',
        date: 'Februari 2023',
    },
    {
        id: 5,
        title: 'Kindercarnaval 2023',
        image: '/storage/gallery/kindercarnaval.jpg',
        category: 'carnival2023',
        date: 'Februari 2023',
    },
    {
        id: 6,
        title: 'Carnavalsviering Ouderen 2023',
        image: '/storage/gallery/ouderen.jpg',
        category: 'carnival2023',
        date: 'Februari 2023',
    },

    // Carnaval 2022
    {
        id: 7,
        title: 'Carnavalsoptocht 2022',
        image: '/storage/gallery/optocht2022.jpg',
        category: 'carnival2022',
        date: 'Februari 2022',
    },
    {
        id: 8,
        title: 'Feesttent Carnaval 2022',
        image: '/storage/gallery/feesttent2022.jpg',
        category: 'carnival2022',
        date: 'Februari 2022',
    },
    {
        id: 9,
        title: 'Sleuteloverdracht 2022',
        image: '/storage/gallery/sleuteloverdracht2022.jpg',
        category: 'carnival2022',
        date: 'Februari 2022',
    },

    // Prinsenbals
    {
        id: 10,
        title: 'Prinsenbal 2023',
        image: '/storage/gallery/prinsenbal2023.jpg',
        category: 'princeball',
        date: 'November 2022',
    },
    {
        id: 11,
        title: 'Prinsenbal 2022',
        image: '/storage/gallery/prinsenbal2022.jpg',
        category: 'princeball',
        date: 'November 2021',
    },
    {
        id: 12,
        title: 'Onthulling Prins Carnaval 2023',
        image: '/storage/gallery/prinsonthulling.jpg',
        category: 'princeball',
        date: 'November 2022',
    },

    // Evenementen
    {
        id: 13,
        title: 'Zomerfeest 2023',
        image: '/storage/gallery/zomerfeest.jpg',
        category: 'events',
        date: 'Juni 2023',
    },
    {
        id: 14,
        title: 'Feestavond 2023',
        image: '/storage/gallery/feestavond.jpg',
        category: 'events',
        date: 'Maart 2023',
    },
    {
        id: 15,
        title: 'Jubileumfeest',
        image: '/storage/gallery/jubileum.jpg',
        category: 'events',
        date: 'Oktober 2022',
    },

    // Wagenbouw
    {
        id: 16,
        title: 'Bouw Prinsenwagen 2023 - Start',
        image: '/storage/gallery/wagenbouw1.jpg',
        category: 'construction',
        date: 'Oktober 2022',
    },
    {
        id: 17,
        title: 'Bouw Prinsenwagen 2023 - Voortgang',
        image: '/storage/gallery/wagenbouw2.jpg',
        category: 'construction',
        date: 'December 2022',
    },
    {
        id: 18,
        title: 'Bouw Prinsenwagen 2023 - Afwerking',
        image: '/storage/gallery/wagenbouw3.jpg',
        category: 'construction',
        date: 'Januari 2023',
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
    const [selectedPhoto, setSelectedPhoto] = useState<null | (typeof galleryPhotos)[0]>(null);
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    // Filter photos based on search query and category
    const filteredPhotos = galleryPhotos.filter((photo) => {
        const matchesSearch = photo.title.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = selectedCategory === 'all' || photo.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    const handlePhotoClick = (photo: (typeof galleryPhotos)[0]) => {
        setSelectedPhoto(photo);
        const index = filteredPhotos.findIndex((p) => p.id === photo.id);
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
            <div className="w-full bg-blue-900 py-16 text-white">
                <div className="container mx-auto px-4 md:px-6">
                    <h1 className="text-4xl font-bold md:text-5xl">Fotogalerij</h1>
                    <p className="mt-4 max-w-3xl text-xl opacity-90">Bekijk foto's van onze carnavalsoptochten, evenementen en activiteiten</p>
                </div>
            </div>

            {/* Search & Filter */}
            <div className="border-b bg-white py-8">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="flex flex-col gap-4 md:flex-row">
                        <div className="relative max-w-3xl flex-grow">
                            <Search className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 transform text-gray-400" />
                            <Input
                                type="text"
                                placeholder="Zoek foto's..."
                                className="pl-10"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                        <div className="flex items-center gap-2">
                            <Filter className="h-4 w-4 text-gray-500" />
                            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
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
            <div className="bg-gray-50 py-12">
                <div className="container mx-auto px-4 md:px-6">
                    <Tabs defaultValue="grid" className="w-full">
                        <div className="mb-8 flex items-center justify-between">
                            <h2 className="text-2xl font-bold">
                                {selectedCategory === 'all' ? "Alle Foto's" : categories.find((c) => c.id === selectedCategory)?.name || "Foto's"}
                            </h2>
                            <TabsList>
                                <TabsTrigger value="grid">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="lucide lucide-grid"
                                    >
                                        <rect width="7" height="7" x="3" y="3" rx="1" />
                                        <rect width="7" height="7" x="14" y="3" rx="1" />
                                        <rect width="7" height="7" x="14" y="14" rx="1" />
                                        <rect width="7" height="7" x="3" y="14" rx="1" />
                                    </svg>
                                </TabsTrigger>
                                <TabsTrigger value="masonry">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="lucide lucide-layout"
                                    >
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
                                    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
                                        {filteredPhotos.map((photo) => (
                                            <Dialog key={photo.id}>
                                                <DialogTrigger asChild>
                                                    <div className="group relative h-48 cursor-pointer overflow-hidden rounded-lg md:h-60">
                                                        <img
                                                            src={photo.image}
                                                            alt={photo.title}
                                                            className="h-full w-full object-cover transition-transform group-hover:scale-110"
                                                            onError={(e) => {
                                                                e.currentTarget.src = `https://placehold.co/600x400?text=${encodeURIComponent(photo.title)}`;
                                                            }}
                                                            onClick={() => handlePhotoClick(photo)}
                                                        />
                                                        <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 to-transparent p-4 opacity-0 transition-opacity group-hover:opacity-100">
                                                            <p className="font-medium text-white">{photo.title}</p>
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
                                                            className="h-auto w-full rounded-md"
                                                            onError={(e) => {
                                                                e.currentTarget.src = `https://placehold.co/800x600?text=${encodeURIComponent(selectedPhoto?.title || '')}`;
                                                            }}
                                                        />
                                                        {currentIndex > 0 && (
                                                            <Button
                                                                variant="outline"
                                                                size="icon"
                                                                className="absolute top-1/2 left-4 -translate-y-1/2 rounded-full border-none bg-white/80 hover:bg-white"
                                                                onClick={handlePrevPhoto}
                                                            >
                                                                <ChevronLeft className="h-6 w-6" />
                                                            </Button>
                                                        )}
                                                        {currentIndex < filteredPhotos.length - 1 && (
                                                            <Button
                                                                variant="outline"
                                                                size="icon"
                                                                className="absolute top-1/2 right-4 -translate-y-1/2 rounded-full border-none bg-white/80 hover:bg-white"
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
                                    <div className="columns-1 gap-4 space-y-4 md:columns-2 lg:columns-3">
                                        {filteredPhotos.map((photo) => (
                                            <Dialog key={photo.id}>
                                                <DialogTrigger asChild>
                                                    <div className="group relative cursor-pointer break-inside-avoid overflow-hidden rounded-lg">
                                                        <img
                                                            src={photo.image}
                                                            alt={photo.title}
                                                            className="h-auto w-full transition-transform group-hover:scale-105"
                                                            onError={(e) => {
                                                                e.currentTarget.src = `https://placehold.co/600x${Math.floor(Math.random() * 200) + 300}?text=${encodeURIComponent(photo.title)}`;
                                                            }}
                                                            onClick={() => handlePhotoClick(photo)}
                                                        />
                                                        <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 to-transparent p-4 opacity-0 transition-opacity group-hover:opacity-100">
                                                            <p className="font-medium text-white">{photo.title}</p>
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
                                                            className="h-auto w-full rounded-md"
                                                            onError={(e) => {
                                                                e.currentTarget.src = `https://placehold.co/800x600?text=${encodeURIComponent(selectedPhoto?.title || '')}`;
                                                            }}
                                                        />
                                                        {currentIndex > 0 && (
                                                            <Button
                                                                variant="outline"
                                                                size="icon"
                                                                className="absolute top-1/2 left-4 -translate-y-1/2 rounded-full border-none bg-white/80 hover:bg-white"
                                                                onClick={handlePrevPhoto}
                                                            >
                                                                <ChevronLeft className="h-6 w-6" />
                                                            </Button>
                                                        )}
                                                        {currentIndex < filteredPhotos.length - 1 && (
                                                            <Button
                                                                variant="outline"
                                                                size="icon"
                                                                className="absolute top-1/2 right-4 -translate-y-1/2 rounded-full border-none bg-white/80 hover:bg-white"
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
                            <div className="rounded-lg bg-gray-100 py-12 text-center">
                                <p className="text-gray-600">Geen foto's gevonden die aan je zoekcriteria voldoen.</p>
                            </div>
                        )}
                    </Tabs>
                </div>
            </div>

            {/* Categories Section */}
            <div className="bg-white py-16">
                <div className="container mx-auto px-4 md:px-6">
                    <h2 className="mb-8 text-center text-2xl font-bold">Fotocategorieën</h2>
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
                        {categories
                            .filter((c) => c.id !== 'all')
                            .map((category) => (
                                <Card
                                    key={category.id}
                                    className="cursor-pointer overflow-hidden transition-shadow hover:shadow-lg"
                                    onClick={() => setSelectedCategory(category.id)}
                                >
                                    <div className="flex h-40 items-center justify-center bg-blue-100">
                                        <img
                                            src={`/storage/categories/${category.id}.jpg`}
                                            alt={category.name}
                                            className="h-full w-full object-cover"
                                            onError={(e) => {
                                                e.currentTarget.src = `https://placehold.co/600x400/blue/white?text=${encodeURIComponent(category.name)}`;
                                            }}
                                        />
                                    </div>
                                    <CardContent className="p-4 text-center">
                                        <h3 className="text-lg font-semibold">{category.name}</h3>
                                    </CardContent>
                                </Card>
                            ))}
                    </div>
                </div>
            </div>

            {/* Call to Action - Share Photos */}
            <div className="bg-blue-50 py-16">
                <div className="container mx-auto px-4 text-center md:px-6">
                    <div className="mx-auto max-w-2xl">
                        <h2 className="mb-4 text-2xl font-bold">Deel Jouw Foto's Met Ons</h2>
                        <p className="mb-8 text-gray-600">
                            Heb je zelf leuke foto's gemaakt tijdens een van onze evenementen? Deel ze met ons en help de herinneringen te bewaren
                            voor de toekomst.
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
