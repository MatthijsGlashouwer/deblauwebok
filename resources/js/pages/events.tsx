import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link } from '@inertiajs/react';
import { ArrowRight, CalendarIcon, Clock, Filter, MapPin, Search } from 'lucide-react';
import { useState } from 'react';

// Sample data for upcoming events
const upcomingEvents = [
    {
        id: 1,
        title: 'Carnaval 2024',
        description: 'Het grote carnavalsfeest met optocht door de stad en feest in de tent!',
        date: '14 feb - 17 feb 2024',
        time: '12:00 - 01:00 uur',
        location: 'Stadscentrum',
        image: '/storage/events/carnaval2024.jpg',
        category: 'Feest',
        featured: true,
    },
    {
        id: 2,
        title: 'Prinsenbal',
        description: 'De onthulling van de nieuwe prins carnaval met muziek en feest',
        date: '11 november 2023',
        time: '20:00 - 01:00 uur',
        location: 'De Blauwe Bok Residentie',
        image: '/storage/events/prinsenbal.jpg',
        category: 'Ceremonie',
        featured: true,
    },
    {
        id: 3,
        title: 'Boerenbruiloft',
        description: 'De traditionele boerenbruiloft met veel gezelligheid en feest',
        date: '16 februari 2024',
        time: '14:00 - 00:00 uur',
        location: 'Feesttent centrum',
        image: '/storage/events/boerenbruiloft.jpg',
        category: 'Traditie',
        featured: false,
    },
    {
        id: 4,
        title: 'Seniorenmiddag',
        description: 'Gezellige carnavalsmiddag speciaal voor senioren met muziek, hapjes en drankjes',
        date: '12 februari 2024',
        time: '14:00 - 18:00 uur',
        location: 'De Blauwe Bok Residentie',
        image: '/storage/events/senioren.jpg',
        category: 'Speciale doelgroep',
        featured: false,
    },
    {
        id: 5,
        title: 'Kindercarnaval',
        description: 'Carnavalsfeest voor kinderen met spelletjes, schmink en veel plezier',
        date: '15 februari 2024',
        time: '13:00 - 17:00 uur',
        location: 'Basisschool De Regenboog',
        image: '/storage/events/kindercarnaval.jpg',
        category: 'Speciale doelgroep',
        featured: false,
    },
    {
        id: 6,
        title: 'Aftrap Carnavalsseizoen',
        description: 'De officiële aftrap van het nieuwe carnavalsseizoen op de 11e van de 11e',
        date: '11 november 2023',
        time: '11:11 uur',
        location: 'Marktplein',
        image: '/storage/events/aftrap.jpg',
        category: 'Ceremonie',
        featured: true,
    },
    {
        id: 7,
        title: 'Carnavalsconcert',
        description: 'Muzikaal carnavalsconcert door de lokale muziekvereniging',
        date: '4 februari 2024',
        time: '20:00 - 22:30 uur',
        location: 'Cultureel Centrum',
        image: '/storage/events/concert.jpg',
        category: 'Muziek',
        featured: false,
    },
    {
        id: 8,
        title: 'Sleuteloverdracht',
        description: 'De burgemeester draagt symbolisch de sleutel van de stad over aan de Prins Carnaval',
        date: '14 februari 2024',
        time: '11:00 uur',
        location: 'Stadhuis',
        image: '/storage/events/sleuteloverdracht.jpg',
        category: 'Ceremonie',
        featured: true,
    },
];

// Sample data for past events
const pastEvents = [
    {
        id: 101,
        title: 'Carnaval 2023',
        description: 'Het grote carnavalsfeest met optocht door de stad en feest in de tent!',
        date: '19 feb - 22 feb 2023',
        location: 'Stadscentrum',
        image: '/storage/events/carnaval2023.jpg',
        category: 'Feest',
    },
    {
        id: 102,
        title: 'Prinsenbal 2022',
        description: "De onthulling van Prins Harrie d'n Eerste met muziek en feest",
        date: '12 november 2022',
        location: 'De Blauwe Bok Residentie',
        image: '/storage/events/prinsenbal2022.jpg',
        category: 'Ceremonie',
    },
    {
        id: 103,
        title: 'Jubileumfeest',
        description: 'Viering van het 49-jarig bestaan van carnavalsvereniging De Blauwe Bok',
        date: '15 oktober 2022',
        location: 'Evenementenhal',
        image: '/storage/events/jubileum.jpg',
        category: 'Feest',
    },
    {
        id: 104,
        title: 'Zomerfeest 2023',
        description: 'Gezellig zomerfeest voor alle leden met BBQ en activiteiten',
        date: '24 juni 2023',
        location: 'Stadspark',
        image: '/storage/events/zomerfeest.jpg',
        category: 'Feest',
    },
];

// Categories for filtering
const categories = ['Alle categorieën', 'Feest', 'Ceremonie', 'Traditie', 'Muziek', 'Speciale doelgroep'];

// Define breadcrumbs
const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Home',
        href: '/',
    },
    {
        title: 'Evenementen',
        href: '/evenementen',
    },
];

export default function Events() {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('Alle categorieën');

    // Filter upcoming events based on search query and category
    const filteredUpcomingEvents = upcomingEvents.filter((event) => {
        const matchesSearch =
            event.title.toLowerCase().includes(searchQuery.toLowerCase()) || event.description.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = selectedCategory === 'Alle categorieën' || event.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    // Filter past events based on search query and category
    const filteredPastEvents = pastEvents.filter((event) => {
        const matchesSearch =
            event.title.toLowerCase().includes(searchQuery.toLowerCase()) || event.description.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = selectedCategory === 'Alle categorieën' || event.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Evenementen - Carnavalsvereniging De Blauwe Bok" />

            {/* Hero Section */}
            <div className="w-full bg-blue-900 py-16 text-white">
                <div className="container mx-auto px-4 md:px-6">
                    <h1 className="text-4xl font-bold md:text-5xl">Evenementen</h1>
                    <p className="mt-4 max-w-3xl text-xl opacity-90">Ontdek alle evenementen van carnavalsvereniging De Blauwe Bok</p>
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
                                placeholder="Zoek evenementen..."
                                className="pl-10"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                        <div className="flex items-center gap-2">
                            <Filter className="h-4 w-4 text-gray-500" />
                            <select
                                className="h-10 appearance-none rounded-md border border-gray-300 bg-white pr-8 pl-3 text-gray-600 hover:border-gray-400 focus:outline-none"
                                value={selectedCategory}
                                onChange={(e) => setSelectedCategory(e.target.value)}
                            >
                                {categories.map((category) => (
                                    <option key={category} value={category}>
                                        {category}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>
            </div>

            {/* Events Content */}
            <div className="bg-gray-50 py-12">
                <div className="container mx-auto px-4 md:px-6">
                    <Tabs defaultValue="upcoming" className="w-full">
                        <TabsList className="mx-auto mb-8 w-full max-w-md justify-center">
                            <TabsTrigger value="upcoming" className="flex-1">
                                Aankomende Evenementen
                            </TabsTrigger>
                            <TabsTrigger value="past" className="flex-1">
                                Afgelopen Evenementen
                            </TabsTrigger>
                        </TabsList>

                        {/* Upcoming Events */}
                        <TabsContent value="upcoming">
                            {/* Featured Events */}
                            {filteredUpcomingEvents.some((event) => event.featured) && (
                                <div className="mb-12">
                                    <h2 className="mb-6 text-2xl font-bold">Uitgelichte Evenementen</h2>
                                    <div className="grid gap-6 md:grid-cols-2">
                                        {filteredUpcomingEvents
                                            .filter((event) => event.featured)
                                            .slice(0, 2)
                                            .map((event) => (
                                                <Card key={event.id} className="flex flex-col overflow-hidden md:flex-row">
                                                    <div className="h-48 md:h-auto md:w-2/5">
                                                        <img
                                                            src={event.image}
                                                            alt={event.title}
                                                            className="h-full w-full object-cover"
                                                            onError={(e) => {
                                                                e.currentTarget.src = `https://placehold.co/600x400?text=${encodeURIComponent(event.title)}`;
                                                            }}
                                                        />
                                                    </div>
                                                    <div className="flex flex-col p-6 md:w-3/5">
                                                        <div>
                                                            <Badge className="mb-2">{event.category}</Badge>
                                                            <h3 className="mb-2 text-xl font-bold">{event.title}</h3>
                                                            <p className="mb-4 text-gray-600">{event.description}</p>
                                                        </div>
                                                        <div className="mt-auto space-y-2">
                                                            <div className="flex items-center text-sm text-gray-500">
                                                                <CalendarIcon className="mr-2 h-4 w-4" />
                                                                <span>{event.date}</span>
                                                            </div>
                                                            <div className="flex items-center text-sm text-gray-500">
                                                                <Clock className="mr-2 h-4 w-4" />
                                                                <span>{event.time}</span>
                                                            </div>
                                                            <div className="flex items-center text-sm text-gray-500">
                                                                <MapPin className="mr-2 h-4 w-4" />
                                                                <span>{event.location}</span>
                                                            </div>
                                                            <Button asChild className="mt-4 w-full">
                                                                <Link href={`/evenementen/${event.id}`}>
                                                                    Bekijk Details <ArrowRight className="ml-2 h-4 w-4" />
                                                                </Link>
                                                            </Button>
                                                        </div>
                                                    </div>
                                                </Card>
                                            ))}
                                    </div>
                                </div>
                            )}

                            {/* All Upcoming Events */}
                            <div>
                                <h2 className="mb-6 text-2xl font-bold">Alle Aankomende Evenementen</h2>
                                {filteredUpcomingEvents.length > 0 ? (
                                    <div className="grid gap-6 md:grid-cols-3">
                                        {filteredUpcomingEvents.map((event) => (
                                            <Card key={event.id} className="overflow-hidden">
                                                <div className="h-48 overflow-hidden">
                                                    <img
                                                        src={event.image}
                                                        alt={event.title}
                                                        className="h-full w-full object-cover transition-transform hover:scale-105"
                                                        onError={(e) => {
                                                            e.currentTarget.src = `https://placehold.co/600x400?text=${encodeURIComponent(event.title)}`;
                                                        }}
                                                    />
                                                </div>
                                                <CardHeader>
                                                    <div className="flex items-start justify-between">
                                                        <CardTitle>{event.title}</CardTitle>
                                                        <Badge>{event.category}</Badge>
                                                    </div>
                                                    <CardDescription>{event.description}</CardDescription>
                                                </CardHeader>
                                                <CardContent className="space-y-2">
                                                    <div className="flex items-center text-sm text-gray-500">
                                                        <CalendarIcon className="mr-2 h-4 w-4" />
                                                        <span>{event.date}</span>
                                                    </div>
                                                    <div className="flex items-center text-sm text-gray-500">
                                                        <Clock className="mr-2 h-4 w-4" />
                                                        <span>{event.time}</span>
                                                    </div>
                                                    <div className="flex items-center text-sm text-gray-500">
                                                        <MapPin className="mr-2 h-4 w-4" />
                                                        <span>{event.location}</span>
                                                    </div>
                                                </CardContent>
                                                <CardFooter>
                                                    <Button asChild className="w-full">
                                                        <Link href={`/evenementen/${event.id}`}>Bekijk Details</Link>
                                                    </Button>
                                                </CardFooter>
                                            </Card>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="rounded-lg bg-gray-100 py-12 text-center">
                                        <p className="text-gray-600">Geen evenementen gevonden die aan je zoekcriteria voldoen.</p>
                                    </div>
                                )}
                            </div>
                        </TabsContent>

                        {/* Past Events */}
                        <TabsContent value="past">
                            <h2 className="mb-6 text-2xl font-bold">Afgelopen Evenementen</h2>
                            {filteredPastEvents.length > 0 ? (
                                <div className="grid gap-6 md:grid-cols-3">
                                    {filteredPastEvents.map((event) => (
                                        <Card key={event.id} className="overflow-hidden">
                                            <div className="h-48 overflow-hidden">
                                                <img
                                                    src={event.image}
                                                    alt={event.title}
                                                    className="h-full w-full object-cover transition-transform hover:scale-105"
                                                    onError={(e) => {
                                                        e.currentTarget.src = `https://placehold.co/600x400?text=${encodeURIComponent(event.title)}`;
                                                    }}
                                                />
                                                <div className="absolute top-2 right-2">
                                                    <Badge variant="secondary">Afgelopen</Badge>
                                                </div>
                                            </div>
                                            <CardHeader>
                                                <div className="flex items-start justify-between">
                                                    <CardTitle>{event.title}</CardTitle>
                                                    <Badge>{event.category}</Badge>
                                                </div>
                                                <CardDescription>{event.description}</CardDescription>
                                            </CardHeader>
                                            <CardContent className="space-y-2">
                                                <div className="flex items-center text-sm text-gray-500">
                                                    <CalendarIcon className="mr-2 h-4 w-4" />
                                                    <span>{event.date}</span>
                                                </div>
                                                <div className="flex items-center text-sm text-gray-500">
                                                    <MapPin className="mr-2 h-4 w-4" />
                                                    <span>{event.location}</span>
                                                </div>
                                            </CardContent>
                                            <CardFooter>
                                                <Button variant="outline" asChild className="w-full">
                                                    <Link href={`/evenementen/${event.id}`}>Bekijk Terugblik</Link>
                                                </Button>
                                            </CardFooter>
                                        </Card>
                                    ))}
                                </div>
                            ) : (
                                <div className="rounded-lg bg-gray-100 py-12 text-center">
                                    <p className="text-gray-600">Geen evenementen gevonden die aan je zoekcriteria voldoen.</p>
                                </div>
                            )}
                        </TabsContent>
                    </Tabs>
                </div>
            </div>

            {/* Calendar Download Section */}
            <div className="bg-white py-16">
                <div className="container mx-auto px-4 text-center md:px-6">
                    <div className="mx-auto max-w-2xl">
                        <h2 className="mb-4 text-2xl font-bold">Download Onze Evenementenkalender</h2>
                        <p className="mb-8 text-gray-600">Voeg al onze evenementen toe aan je eigen agenda en mis niets van het carnavalsseizoen!</p>
                        <div className="flex flex-col justify-center gap-4 sm:flex-row">
                            <Button className="bg-blue-600 hover:bg-blue-700">
                                <CalendarIcon className="mr-2 h-4 w-4" />
                                Download iCal
                            </Button>
                            <Button variant="outline">
                                <CalendarIcon className="mr-2 h-4 w-4" />
                                Google Calendar
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Subscribe to Updates */}
            <div className="bg-blue-50 py-16">
                <div className="container mx-auto px-4 text-center md:px-6">
                    <div className="mx-auto max-w-2xl">
                        <h2 className="mb-4 text-2xl font-bold">Blijf op de Hoogte</h2>
                        <p className="mb-6 text-gray-600">Ontvang updates over nieuwe evenementen en activiteiten van De Blauwe Bok.</p>
                        <div className="mx-auto flex max-w-md">
                            <Input type="email" placeholder="Jouw e-mailadres" className="rounded-r-none" />
                            <Button className="rounded-l-none">Aanmelden</Button>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
