import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link } from '@inertiajs/react';
import { CalendarIcon, ChevronRight, MapPin, Users } from 'lucide-react';

// Sample data for the carnival association
const upcomingEvents = [
    {
        id: 1,
        title: 'Carnaval 2024',
        description: 'Het grote carnavalsfeest met optocht door de stad en feest in de tent!',
        date: '14 feb - 17 feb 2024',
        location: 'Stadscentrum',
        image: '/storage/events/carnaval2024.jpg',
    },
    {
        id: 2,
        title: 'Prinsenbal',
        description: 'De onthulling van de nieuwe prins carnaval met muziek en feest',
        date: '11 november 2023',
        location: 'De Blauwe Bok Residentie',
        image: '/storage/events/prinsenbal.jpg',
    },
    {
        id: 3,
        title: 'Boerenbruiloft',
        description: 'De traditionele boerenbruiloft met veel gezelligheid en feest',
        date: '16 februari 2024',
        location: 'Feesttent centrum',
        image: '/storage/events/boerenbruiloft.jpg',
    },
];

const boardMembers = [
    { id: 1, name: 'Jan Janssen', role: 'Voorzitter', image: '/storage/board/voorzitter.jpg', since: '2018' },
    { id: 2, name: 'Petra de Vries', role: 'Secretaris', image: '/storage/board/secretaris.jpg', since: '2019' },
    { id: 3, name: 'Henk Bakker', role: 'Penningmeester', image: '/storage/board/penningmeester.jpg', since: '2020' },
    { id: 4, name: 'Lisa van Dijk', role: 'Activiteitencoördinator', image: '/storage/board/activiteiten.jpg', since: '2021' },
];

const galleryImages = [
    { id: 1, title: 'Carnavalsoptocht 2023', image: '/storage/gallery/optocht1.jpg' },
    { id: 2, title: 'Prinsenbal 2023', image: '/storage/gallery/prinsenbal.jpg' },
    { id: 3, title: 'Kindermiddag 2023', image: '/storage/gallery/kinderen.jpg' },
    { id: 4, title: 'Sleuteloverdracht 2023', image: '/storage/gallery/sleutel.jpg' },
    { id: 5, title: 'Prinsenwagen 2023', image: '/storage/gallery/wagen.jpg' },
    { id: 6, title: 'Feesttent 2023', image: '/storage/gallery/feesttent.jpg' },
];

const testimonials = [
    {
        id: 1,
        name: 'Klaas Klaassen',
        quote: 'Al jaren lid van De Blauwe Bok. Elk jaar is het weer een feest met deze geweldige vereniging!',
        role: 'Lid sinds 2010',
        image: '/storage/testimonials/testimonial1.jpg',
    },
    {
        id: 2,
        name: 'Maria Willemsen',
        quote: 'De evenementen van De Blauwe Bok zijn altijd perfect georganiseerd. Een top carnavalsvereniging!',
        role: 'Bezoeker',
        image: '/storage/testimonials/testimonial2.jpg',
    },
    {
        id: 3,
        name: 'Familie de Jong',
        quote: 'Onze kinderen kijken elk jaar uit naar het kindercarnaval. Complimenten voor de organisatie!',
        role: 'Vaste bezoekers',
        image: '/storage/testimonials/testimonial3.jpg',
    },
];

// Define breadcrumbs
const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Home',
        href: '/',
    },
];

export default function Dashboard() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Carnavalsvereniging De Blauwe Bok" />

            {/* Hero Section */}
            <div className="w-full bg-gradient-to-r from-blue-800 to-blue-900 py-20 text-white">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="flex flex-col items-center space-y-6 text-center">
                        <h1 className="text-4xl font-bold tracking-tight md:text-6xl">Carnavalsvereniging De Blauwe Bok</h1>
                        <p className="max-w-3xl text-xl opacity-90 md:text-2xl">
                            Carnaval vieren met gezelligheid, creativiteit en verbondenheid sinds 1974
                        </p>
                        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                            <Button size="lg" asChild className="bg-amber-500 text-white hover:bg-amber-600">
                                <Link href="/evenementen">Bekijk Evenementen</Link>
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                asChild
                                className="border-white bg-transparent text-white hover:bg-white hover:text-blue-900"
                            >
                                <Link href="/lid-worden">Word Lid</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            {/* About Section */}
            <div className="bg-white py-16">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid items-center gap-12 md:grid-cols-2">
                        <div>
                            <h2 className="mb-6 text-3xl font-bold">Over De Blauwe Bok</h2>
                            <p className="mb-4 text-gray-600">
                                Carnavalsvereniging De Blauwe Bok is opgericht in 1974 en is sindsdien uitgegroeid tot een van de meest levendige
                                carnavalsverenigingen in de regio. Onze vereniging staat voor gezelligheid, creativiteit en verbondenheid.
                            </p>
                            <p className="mb-6 text-gray-600">
                                Met jaarlijks terugkerende evenementen zoals het Prinsenbal, de grote Carnavalsoptocht en diverse feesten voor jong en
                                oud, zorgen wij voor een bruisend carnavalsseizoen. Onze vereniging telt meer dan 200 leden die zich met hart en ziel
                                inzetten voor het carnaval.
                            </p>
                            <Button asChild>
                                <Link href="/over-ons">Meer Over Ons</Link>
                            </Button>
                        </div>
                        <div className="overflow-hidden rounded-lg shadow-lg">
                            <img
                                src="/storage/about-image.jpg"
                                alt="De Blauwe Bok vereniging"
                                className="h-auto w-full"
                                onError={(e) => {
                                    e.currentTarget.src = 'https://placehold.co/600x400?text=De+Blauwe+Bok';
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Upcoming Events Section */}
            <div className="bg-gray-50 py-16">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="mb-12 text-center">
                        <h2 className="text-3xl font-bold">Aankomende Evenementen</h2>
                        <p className="mx-auto mt-2 max-w-2xl text-gray-600">
                            Bekijk onze agenda en mis geen enkel evenement van carnavalsvereniging De Blauwe Bok
                        </p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-3">
                        {upcomingEvents.map((event) => (
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
                                    <CardTitle>{event.title}</CardTitle>
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
                                        <Link href={`/evenementen/${event.id}`}>Meer Details</Link>
                                    </Button>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>

                    <div className="mt-10 text-center">
                        <Button asChild>
                            <Link href="/evenementen">Alle Evenementen Bekijken</Link>
                        </Button>
                    </div>
                </div>
            </div>

            {/* Board Members Section */}
            <div className="bg-white py-16">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="mb-12 text-center">
                        <h2 className="text-3xl font-bold">Ons Bestuur</h2>
                        <p className="mx-auto mt-2 max-w-2xl text-gray-600">Maak kennis met het bestuur van carnavalsvereniging De Blauwe Bok</p>
                    </div>

                    <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
                        {boardMembers.map((member) => (
                            <div key={member.id} className="text-center">
                                <Avatar className="mx-auto mb-4 h-32 w-32">
                                    <AvatarImage
                                        src={member.image}
                                        alt={member.name}
                                        onError={(e) => {
                                            e.currentTarget.src = `https://placehold.co/200x200/blue/white?text=${member.name.charAt(0)}`;
                                        }}
                                    />
                                    <AvatarFallback className="text-3xl">{member.name.charAt(0)}</AvatarFallback>
                                </Avatar>
                                <h3 className="text-lg font-semibold">{member.name}</h3>
                                <p className="text-blue-600">{member.role}</p>
                                <p className="text-sm text-gray-500">Sinds {member.since}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-10 text-center">
                        <Button variant="outline" asChild>
                            <Link href="/bestuur">Volledig Bestuur</Link>
                        </Button>
                    </div>
                </div>
            </div>

            {/* Photo Gallery Section */}
            <div className="bg-gray-50 py-16">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="mb-12 text-center">
                        <h2 className="text-3xl font-bold">Fotogalerij</h2>
                        <p className="mx-auto mt-2 max-w-2xl text-gray-600">Bekijk foto's van onze evenementen en activiteiten</p>
                    </div>

                    <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                        {galleryImages.slice(0, 6).map((image) => (
                            <div key={image.id} className="group relative h-48 overflow-hidden rounded-lg md:h-64">
                                <img
                                    src={image.image}
                                    alt={image.title}
                                    className="h-full w-full object-cover transition-transform group-hover:scale-110"
                                    onError={(e) => {
                                        e.currentTarget.src = `https://placehold.co/600x400?text=${encodeURIComponent(image.title)}`;
                                    }}
                                />
                                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 to-transparent p-4 opacity-0 transition-opacity group-hover:opacity-100">
                                    <p className="font-medium text-white">{image.title}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-10 text-center">
                        <Button asChild>
                            <Link href="/fotos">Bekijk Alle Foto's</Link>
                        </Button>
                    </div>
                </div>
            </div>

            {/* Testimonials Section */}
            <div className="bg-blue-900 py-16 text-white">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="mb-12 text-center">
                        <h2 className="text-3xl font-bold">Wat Mensen Zeggen</h2>
                        <p className="mx-auto mt-2 max-w-2xl opacity-80">Ervaringen van leden en bezoekers van De Blauwe Bok</p>
                    </div>

                    <Carousel className="mx-auto w-full max-w-4xl">
                        <CarouselContent>
                            {testimonials.map((testimonial) => (
                                <CarouselItem key={testimonial.id}>
                                    <div className="p-6">
                                        <Card className="border-0 bg-white/10 backdrop-blur-sm">
                                            <CardContent className="p-8 text-center">
                                                <div className="mb-6">
                                                    <Avatar className="mx-auto mb-4 h-20 w-20">
                                                        <AvatarImage
                                                            src={testimonial.image}
                                                            alt={testimonial.name}
                                                            onError={(e) => {
                                                                e.currentTarget.src = `https://placehold.co/200x200/blue/white?text=${testimonial.name.charAt(0)}`;
                                                            }}
                                                        />
                                                        <AvatarFallback className="text-2xl">{testimonial.name.charAt(0)}</AvatarFallback>
                                                    </Avatar>
                                                    <h3 className="text-xl font-semibold">{testimonial.name}</h3>
                                                    <p className="text-sm opacity-80">{testimonial.role}</p>
                                                </div>
                                                <blockquote className="text-lg italic">"{testimonial.quote}"</blockquote>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="border-white text-white" />
                        <CarouselNext className="border-white text-white" />
                    </Carousel>
                </div>
            </div>

            {/* Call to Action Section */}
            <div className="bg-white py-16">
                <div className="container mx-auto px-4 text-center md:px-6">
                    <div className="mx-auto max-w-2xl">
                        <h2 className="mb-4 text-3xl font-bold">Word Lid van De Blauwe Bok</h2>
                        <p className="mb-8 text-gray-600">
                            Wil je deel uitmaken van een gezellige carnavalsvereniging? Word lid van De Blauwe Bok en beleef carnaval op zijn best!
                            Geniet van onze evenementen, help mee met de organisatie en bouw mee aan onze prachtige optocht.
                        </p>
                        <Button size="lg" asChild className="bg-amber-500 text-white hover:bg-amber-600">
                            <Link href="/lid-worden">
                                <Users className="mr-2 h-5 w-5" />
                                Word Lid
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>

            {/* News/Blog Teaser Section */}
            <div className="bg-gray-50 py-16">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="mb-12 flex flex-wrap items-center justify-between">
                        <div>
                            <h2 className="text-3xl font-bold">Laatste Nieuws</h2>
                            <p className="mt-2 text-gray-600">Het laatste nieuws van De Blauwe Bok</p>
                        </div>
                        <Link href="/nieuws" className="flex items-center text-blue-600 hover:text-blue-800">
                            Alle nieuwsberichten <ChevronRight className="ml-1 h-4 w-4" />
                        </Link>
                    </div>

                    <div className="grid gap-6 md:grid-cols-3">
                        <Card>
                            <div className="h-48 overflow-hidden">
                                <img
                                    src="/storage/news/news1.jpg"
                                    alt="Nieuwe Prins Carnaval bekend"
                                    className="h-full w-full object-cover"
                                    onError={(e) => {
                                        e.currentTarget.src = 'https://placehold.co/600x400?text=Nieuws+Item';
                                    }}
                                />
                            </div>
                            <CardHeader>
                                <div className="mb-2 flex items-center text-sm text-gray-500">
                                    <CalendarIcon className="mr-2 h-4 w-4" />
                                    <span>5 november 2023</span>
                                </div>
                                <CardTitle>Nieuwe Prins Carnaval bekend</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-600">
                                    Afgelopen weekend is tijdens het Prinsenbal de nieuwe Prins Carnaval onthuld. Dit jaar zal Prins Harrie d'n Eerste
                                    regeren over het rijk van De Blauwe Bok.
                                </p>
                            </CardContent>
                            <CardFooter>
                                <Button variant="outline" asChild className="w-full">
                                    <Link href="/nieuws/1">Lees Meer</Link>
                                </Button>
                            </CardFooter>
                        </Card>

                        <Card>
                            <div className="h-48 overflow-hidden">
                                <img
                                    src="/storage/news/news2.jpg"
                                    alt="Inschrijving carnavalsoptocht geopend"
                                    className="h-full w-full object-cover"
                                    onError={(e) => {
                                        e.currentTarget.src = 'https://placehold.co/600x400?text=Nieuws+Item';
                                    }}
                                />
                            </div>
                            <CardHeader>
                                <div className="mb-2 flex items-center text-sm text-gray-500">
                                    <CalendarIcon className="mr-2 h-4 w-4" />
                                    <span>12 oktober 2023</span>
                                </div>
                                <CardTitle>Inschrijving carnavalsoptocht geopend</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-600">
                                    Vanaf vandaag is de inschrijving voor de grote carnavalsoptocht 2024 geopend. Groepen, wagens en individuele
                                    deelnemers kunnen zich nu aanmelden.
                                </p>
                            </CardContent>
                            <CardFooter>
                                <Button variant="outline" asChild className="w-full">
                                    <Link href="/nieuws/2">Lees Meer</Link>
                                </Button>
                            </CardFooter>
                        </Card>

                        <Card>
                            <div className="h-48 overflow-hidden">
                                <img
                                    src="/storage/news/news3.jpg"
                                    alt="Jubileumviering groot succes"
                                    className="h-full w-full object-cover"
                                    onError={(e) => {
                                        e.currentTarget.src = 'https://placehold.co/600x400?text=Nieuws+Item';
                                    }}
                                />
                            </div>
                            <CardHeader>
                                <div className="mb-2 flex items-center text-sm text-gray-500">
                                    <CalendarIcon className="mr-2 h-4 w-4" />
                                    <span>20 september 2023</span>
                                </div>
                                <CardTitle>Jubileumviering groot succes</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-600">
                                    De viering van ons 50-jarig jubileum was een groot succes. Honderden leden en oud-leden kwamen samen om deze
                                    bijzondere mijlpaal te vieren.
                                </p>
                            </CardContent>
                            <CardFooter>
                                <Button variant="outline" asChild className="w-full">
                                    <Link href="/nieuws/3">Lees Meer</Link>
                                </Button>
                            </CardFooter>
                        </Card>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
