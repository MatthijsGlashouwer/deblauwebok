import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { Clock, Facebook, Instagram, Mail, MapPin, Phone, Send } from 'lucide-react';

// Define breadcrumbs
const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Home',
        href: '/',
    },
    {
        title: 'Contact',
        href: '/contact',
    },
];

// Contact details
const contactDetails = {
    address: 'Carnavalsplein 123, 1234 AB Carnavalopolis',
    email: 'info@deblauwebokcarnival.nl',
    phone: '+31 123 456 789',
    openingHours: [
        { day: 'Maandag - Donderdag', hours: 'Gesloten' },
        { day: 'Vrijdag', hours: '20:00 - 01:00 uur' },
        { day: 'Zaterdag', hours: '20:00 - 02:00 uur' },
        { day: 'Zondag', hours: 'Gesloten' },
        { day: 'Tijdens carnaval', hours: 'Dagelijks geopend' },
    ],
    socialMedia: [
        { name: 'Facebook', url: 'https://facebook.com/deblawebok', icon: <Facebook className="h-5 w-5" /> },
        { name: 'Instagram', url: 'https://instagram.com/deblauwebok', icon: <Instagram className="h-5 w-5" /> },
    ],
};

// Board members for direct contact
const boardContacts = [
    {
        role: 'Voorzitter',
        name: 'Jan Janssen',
        email: 'voorzitter@deblauwebokcarnival.nl',
        phone: '+31 612 345 678',
    },
    {
        role: 'Secretaris',
        name: 'Petra de Vries',
        email: 'secretaris@deblauwebokcarnival.nl',
        phone: '+31 623 456 789',
    },
    {
        role: 'Penningmeester',
        name: 'Henk Bakker',
        email: 'penningmeester@deblauwebokcarnival.nl',
        phone: '+31 634 567 890',
    },
    {
        role: 'Activiteitencoördinator',
        name: 'Lisa van Dijk',
        email: 'activiteiten@deblauwebokcarnival.nl',
        phone: '+31 645 678 901',
    },
];

// Inquiry topics
const inquiryTopics = ['Algemene vragen', 'Lidmaatschap', 'Evenementen', 'Sponsoring', 'Optocht', 'Media & Pers', 'Overig'];

export default function Contact() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Contact - Carnavalsvereniging De Blauwe Bok" />

            {/* Hero Section */}
            <div className="w-full bg-blue-900 py-16 text-white">
                <div className="container mx-auto px-4 md:px-6">
                    <h1 className="text-4xl font-bold md:text-5xl">Contact</h1>
                    <p className="mt-4 max-w-3xl text-xl opacity-90">Neem contact op met carnavalsvereniging De Blauwe Bok</p>
                </div>
            </div>

            {/* Contact Information */}
            <div className="bg-white py-16">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid gap-8 md:grid-cols-3">
                        <Card>
                            <CardContent className="flex flex-col items-center p-6 text-center">
                                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                                    <MapPin className="h-6 w-6" />
                                </div>
                                <h3 className="mb-2 text-lg font-semibold">Bezoekadres</h3>
                                <p className="text-gray-600">{contactDetails.address}</p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardContent className="flex flex-col items-center p-6 text-center">
                                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                                    <Mail className="h-6 w-6" />
                                </div>
                                <h3 className="mb-2 text-lg font-semibold">E-mail</h3>
                                <p className="text-gray-600">
                                    <a href={`mailto:${contactDetails.email}`} className="text-blue-600 hover:underline">
                                        {contactDetails.email}
                                    </a>
                                </p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardContent className="flex flex-col items-center p-6 text-center">
                                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                                    <Phone className="h-6 w-6" />
                                </div>
                                <h3 className="mb-2 text-lg font-semibold">Telefoon</h3>
                                <p className="text-gray-600">
                                    <a href={`tel:${contactDetails.phone.replace(/\s/g, '')}`} className="text-blue-600 hover:underline">
                                        {contactDetails.phone}
                                    </a>
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>

            {/* Opening Hours & Social Media */}
            <div className="bg-gray-50 py-12">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid gap-12 md:grid-cols-2">
                        <div>
                            <div className="mb-6 flex items-center">
                                <Clock className="mr-3 h-6 w-6 text-blue-600" />
                                <h3 className="text-xl font-semibold">Openingstijden Residentie</h3>
                            </div>
                            <div className="rounded-lg bg-white p-6 shadow-sm">
                                <div className="space-y-4">
                                    {contactDetails.openingHours.map((item, index) => (
                                        <div key={index} className="flex justify-between border-b border-gray-100 pb-3 last:border-0 last:pb-0">
                                            <span className="font-medium">{item.day}</span>
                                            <span className="text-gray-600">{item.hours}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="mb-6 flex items-center">
                                <Send className="mr-3 h-6 w-6 text-blue-600" />
                                <h3 className="text-xl font-semibold">Volg Ons</h3>
                            </div>
                            <div className="rounded-lg bg-white p-6 shadow-sm">
                                <p className="mb-6 text-gray-600">
                                    Volg ons op sociale media voor het laatste nieuws, foto's en updates over carnavalsvereniging De Blauwe Bok.
                                </p>
                                <div className="grid grid-cols-2 gap-4">
                                    {contactDetails.socialMedia.map((social, index) => (
                                        <a
                                            key={index}
                                            href={social.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-center gap-2 rounded-lg bg-blue-50 p-3 transition-colors hover:bg-blue-100"
                                        >
                                            {social.icon}
                                            <span>{social.name}</span>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contact & Board Tabs */}
            <div className="bg-white py-16">
                <div className="container mx-auto px-4 md:px-6">
                    <Tabs defaultValue="contact" className="mx-auto w-full max-w-4xl">
                        <TabsList className="mb-8 grid w-full grid-cols-2">
                            <TabsTrigger value="contact">Contact Formulier</TabsTrigger>
                            <TabsTrigger value="board">Direct Contact Bestuur</TabsTrigger>
                        </TabsList>

                        {/* Contact Form */}
                        <TabsContent value="contact">
                            <Card>
                                <CardContent className="p-6">
                                    <h3 className="mb-6 text-xl font-semibold">Stuur ons een bericht</h3>
                                    <form className="space-y-6">
                                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                                            <div className="space-y-2">
                                                <Label htmlFor="name">Naam</Label>
                                                <Input id="name" placeholder="Jouw naam" />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="email">E-mailadres</Label>
                                                <Input id="email" type="email" placeholder="jouw@email.nl" />
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="subject">Onderwerp</Label>
                                            <Select>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Selecteer een onderwerp" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    {inquiryTopics.map((topic, index) => (
                                                        <SelectItem key={index} value={topic}>
                                                            {topic}
                                                        </SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="message">Bericht</Label>
                                            <Textarea id="message" placeholder="Jouw bericht..." rows={6} />
                                        </div>

                                        <div className="flex items-center space-x-2">
                                            <input type="checkbox" id="privacy" className="rounded border-gray-300" />
                                            <Label htmlFor="privacy" className="text-sm text-gray-600">
                                                Ik ga akkoord met de verwerking van mijn persoonsgegevens volgens de privacyverklaring.
                                            </Label>
                                        </div>

                                        <Button type="submit" className="w-full md:w-auto">
                                            Verstuur Bericht
                                        </Button>
                                    </form>
                                </CardContent>
                            </Card>
                        </TabsContent>

                        {/* Board Contacts */}
                        <TabsContent value="board">
                            <Card>
                                <CardContent className="p-6">
                                    <h3 className="mb-6 text-xl font-semibold">Direct contact met het bestuur</h3>
                                    <div className="space-y-6">
                                        {boardContacts.map((contact, index) => (
                                            <div
                                                key={index}
                                                className="rounded-lg border border-gray-100 p-4 transition-colors hover:border-blue-200 hover:bg-blue-50"
                                            >
                                                <h4 className="text-lg font-semibold">{contact.role}</h4>
                                                <p className="mb-2">{contact.name}</p>
                                                <div className="flex flex-col gap-2 text-sm text-gray-600 sm:flex-row sm:items-center sm:gap-6">
                                                    <a href={`mailto:${contact.email}`} className="flex items-center hover:text-blue-600">
                                                        <Mail className="mr-2 h-4 w-4" />
                                                        {contact.email}
                                                    </a>
                                                    <a
                                                        href={`tel:${contact.phone.replace(/\s/g, '')}`}
                                                        className="flex items-center hover:text-blue-600"
                                                    >
                                                        <Phone className="mr-2 h-4 w-4" />
                                                        {contact.phone}
                                                    </a>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </TabsContent>
                    </Tabs>
                </div>
            </div>

            {/* Map */}
            <div className="relative h-[400px] bg-gray-200">
                {/* This would be a Google Maps embed in a real implementation */}
                <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
                    <p className="text-gray-600">Hier zou een kaart komen</p>
                </div>
            </div>

            {/* FAQ Section */}
            <div className="bg-white py-16">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="mb-12 text-center">
                        <h2 className="text-3xl font-bold">Veelgestelde Vragen</h2>
                        <p className="mx-auto mt-2 max-w-2xl text-gray-600">
                            Antwoorden op de meest voorkomende vragen over onze carnavalsvereniging
                        </p>
                    </div>

                    <div className="mx-auto max-w-3xl space-y-6">
                        <div className="rounded-lg bg-gray-50 p-6">
                            <h3 className="mb-2 text-lg font-semibold">Hoe kan ik lid worden van De Blauwe Bok?</h3>
                            <p className="text-gray-600">
                                Je kunt lid worden door het aanmeldformulier op onze website in te vullen of door contact op te nemen met onze
                                ledenadministratie via leden@deblauwebokcarnival.nl. Je kunt ook langskomen tijdens een van onze evenementen.
                            </p>
                        </div>

                        <div className="rounded-lg bg-gray-50 p-6">
                            <h3 className="mb-2 text-lg font-semibold">Wanneer is de residentie geopend?</h3>
                            <p className="text-gray-600">
                                Onze residentie is geopend op vrijdag- en zaterdagavond tijdens het carnavalsseizoen. Tijdens carnaval zelf zijn we
                                dagelijks geopend. Zie het overzicht van openingstijden op deze pagina voor de exacte tijden.
                            </p>
                        </div>

                        <div className="rounded-lg bg-gray-50 p-6">
                            <h3 className="mb-2 text-lg font-semibold">Hoe kan ik meedoen aan de carnavalsoptocht?</h3>
                            <p className="text-gray-600">
                                Voor deelname aan de optocht kun je je aanmelden via het inschrijfformulier op onze website. Dit wordt enkele maanden
                                voor carnaval opengesteld. Voor vragen kun je contact opnemen met de optochtcommissie.
                            </p>
                        </div>

                        <div className="rounded-lg bg-gray-50 p-6">
                            <h3 className="mb-2 text-lg font-semibold">Worden er activiteiten voor kinderen georganiseerd?</h3>
                            <p className="text-gray-600">
                                Ja, we organiseren specifieke activiteiten voor kinderen zoals het kindercarnaval. Daarnaast zijn kinderen van harte
                                welkom bij veel van onze evenementen. Kijk in onze evenementenkalender voor alle activiteiten.
                            </p>
                        </div>

                        <div className="rounded-lg bg-gray-50 p-6">
                            <h3 className="mb-2 text-lg font-semibold">Hoe kan ik sponsor worden van De Blauwe Bok?</h3>
                            <p className="text-gray-600">
                                Voor informatie over sponsormogelijkheden kun je contact opnemen met onze penningmeester via
                                penningmeester@deblauwebokcarnival.nl. We hebben verschillende sponsorpakketten beschikbaar.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
