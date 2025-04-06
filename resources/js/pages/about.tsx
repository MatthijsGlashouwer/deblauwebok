import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { Link } from '@inertiajs/react';
import { History, Users, Award, Calendar, MapPin } from 'lucide-react';

// Sample data for the carnival association history
const historyTimeline = [
  { year: '1974', title: 'Oprichting', description: 'Carnavalsvereniging De Blauwe Bok wordt opgericht door een groep enthousiaste carnavalsvierders.' },
  { year: '1975', title: 'Eerste optocht', description: 'De eerste carnavalsoptocht wordt georganiseerd door de vereniging.' },
  { year: '1980', title: 'Eigen residentie', description: 'De vereniging krijgt haar eigen residentie in het centrum van de stad.' },
  { year: '1985', title: 'Ledenaantal groeit', description: 'Het ledenaantal groeit tot boven de 100 leden.' },
  { year: '1999', title: '25-jarig jubileum', description: 'Groots jubileumfeest ter ere van het 25-jarig bestaan van de vereniging.' },
  { year: '2010', title: 'Vernieuwing', description: 'Vernieuwing van de verenigingsstructuur en introductie van nieuwe activiteiten.' },
  { year: '2019', title: '45-jarig jubileum', description: 'Jubileumjaar met speciale activiteiten en terugblik op 45 jaar De Blauwe Bok.' },
  { year: '2024', title: '50-jarig jubileum', description: 'Viering van het 50-jarig bestaan met een jubileumreceptie, boek en speciale activiteiten.' },
];

// Board members data
const boardMembers = [
  { id: 1, name: 'Jan Janssen', role: 'Voorzitter', image: '/storage/board/voorzitter.jpg', email: 'voorzitter@deblauwebokcarnival.nl', since: '2018' },
  { id: 2, name: 'Petra de Vries', role: 'Secretaris', image: '/storage/board/secretaris.jpg', email: 'secretaris@deblauwebokcarnival.nl', since: '2019' },
  { id: 3, name: 'Henk Bakker', role: 'Penningmeester', image: '/storage/board/penningmeester.jpg', email: 'penningmeester@deblauwebokcarnival.nl', since: '2020' },
  { id: 4, name: 'Lisa van Dijk', role: 'Activiteitencoördinator', image: '/storage/board/activiteiten.jpg', email: 'activiteiten@deblauwebokcarnival.nl', since: '2021' },
  { id: 5, name: 'Martijn de Boer', role: 'Optochtcoördinator', image: '/storage/board/optocht.jpg', email: 'optocht@deblauwebokcarnival.nl', since: '2022' },
  { id: 6, name: 'Sophie Willemsen', role: 'PR & Communicatie', image: '/storage/board/communicatie.jpg', email: 'communicatie@deblauwebokcarnival.nl', since: '2019' },
  { id: 7, name: 'Thomas Verhoeven', role: 'Technische zaken', image: '/storage/board/techniek.jpg', email: 'techniek@deblauwebokcarnival.nl', since: '2020' },
  { id: 8, name: 'Emma Smits', role: 'Jeugdzaken', image: '/storage/board/jeugd.jpg', email: 'jeugd@deblauwebokcarnival.nl', since: '2021' },
];

// Committee data
const committees = [
  { 
    id: 1, 
    name: 'Optochtcommissie', 
    description: 'Verantwoordelijk voor het organiseren van de jaarlijkse carnavalsoptocht.',
    members: 8,
    contact: 'optocht@deblauwebokcarnival.nl'
  },
  { 
    id: 2, 
    name: 'Activiteitencommissie', 
    description: 'Organiseert diverse activiteiten gedurende het carnavalsseizoen zoals feesten, bals en andere evenementen.',
    members: 10,
    contact: 'activiteiten@deblauwebokcarnival.nl'
  },
  { 
    id: 3, 
    name: 'Jeugdcommissie', 
    description: 'Zorgt voor activiteiten specifiek gericht op de jeugd zoals het kindercarnaval.',
    members: 6,
    contact: 'jeugd@deblauwebokcarnival.nl'
  },
  { 
    id: 4, 
    name: 'Technische commissie', 
    description: 'Verantwoordelijk voor technische zaken zoals de bouw van wagens en decor.',
    members: 12,
    contact: 'techniek@deblauwebokcarnival.nl'
  },
  { 
    id: 5, 
    name: 'PR & Communicatiecommissie', 
    description: 'Verzorgt alle communicatie, PR, sociale media en de website.',
    members: 5,
    contact: 'communicatie@deblauwebokcarnival.nl'
  },
];

// Awards data
const awards = [
  { year: '2023', title: 'Beste carnavalsvereniging', organization: 'Regionaal Carnavalsverbond' },
  { year: '2022', title: 'Mooiste praalwagen', organization: 'Grote Optocht Jury' },
  { year: '2020', title: 'Beste verenigingsblad', organization: 'Carnavalspersprijs' },
  { year: '2019', title: 'Meest actieve vereniging', organization: 'Gemeentelijke Cultuurprijs' },
  { year: '2018', title: 'Publieksprijs Optocht', organization: 'Regionale Carnavalsfederatie' },
];

// Define breadcrumbs
const breadcrumbs: BreadcrumbItem[] = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'Over Ons',
    href: '/over-ons',
  },
];

export default function About() {
  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title="Over Ons - Carnavalsvereniging De Blauwe Bok" />
      
      {/* Hero Section */}
      <div className="w-full py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl font-bold">Over De Blauwe Bok</h1>
          <p className="text-xl mt-4 max-w-3xl opacity-90">
            Leer meer over onze carnavalsvereniging, onze geschiedenis, ons bestuur en onze missie
          </p>
        </div>
      </div>
      
      {/* Mission & Vision Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Onze Missie & Visie</h2>
              <p className="text-gray-600 mb-4">
                <strong>Missie:</strong> Het in stand houden en bevorderen van de carnavalstraditie in onze regio door 
                het organiseren van carnavalsactiviteiten voor alle leeftijden en het stimuleren van saamhorigheid 
                en verbondenheid binnen de gemeenschap.
              </p>
              <p className="text-gray-600 mb-4">
                <strong>Visie:</strong> Carnavalsvereniging De Blauwe Bok streeft ernaar een vereniging te zijn waar 
                traditie en vernieuwing hand in hand gaan, waar alle generaties zich thuis voelen en waar carnaval 
                met enthousiasme en respect wordt gevierd.
              </p>
              <p className="text-gray-600 mb-4">
                Onze kernwaarden zijn:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
                <li><strong>Gezelligheid</strong> - Samen plezier maken staat voorop</li>
                <li><strong>Creativiteit</strong> - We stimuleren originaliteit in optochten en evenementen</li>
                <li><strong>Verbondenheid</strong> - We zijn een hechte gemeenschap</li>
                <li><strong>Toegankelijkheid</strong> - Carnaval is voor iedereen</li>
                <li><strong>Respect</strong> - Voor tradities én voor elkaar</li>
              </ul>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="/storage/mission.jpg" 
                alt="De Blauwe Bok missie" 
                className="w-full h-auto"
                onError={(e) => {
                  e.currentTarget.src = 'https://placehold.co/600x400?text=Onze+Missie';
                }}
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Tabs Section for History, Board, Committees */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <Tabs defaultValue="history" className="w-full">
            <TabsList className="w-full max-w-3xl mx-auto justify-center mb-8">
              <TabsTrigger value="history" className="flex items-center">
                <History className="h-4 w-4 mr-2" />
                Geschiedenis
              </TabsTrigger>
              <TabsTrigger value="board" className="flex items-center">
                <Users className="h-4 w-4 mr-2" />
                Bestuur
              </TabsTrigger>
              <TabsTrigger value="committees" className="flex items-center">
                <Users className="h-4 w-4 mr-2" />
                Commissies
              </TabsTrigger>
              <TabsTrigger value="awards" className="flex items-center">
                <Award className="h-4 w-4 mr-2" />
                Prijzen
              </TabsTrigger>
            </TabsList>
            
            {/* History Timeline */}
            <TabsContent value="history">
              <div className="max-w-4xl mx-auto">
                <h3 className="text-2xl font-bold text-center mb-10">De Geschiedenis van De Blauwe Bok</h3>
                <div className="relative">
                  {/* Vertical timeline line */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200"></div>
                  
                  {/* Timeline items */}
                  <div className="space-y-12">
                    {historyTimeline.map((item, index) => (
                      <div key={item.year} className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                        <div className="md:w-1/2 p-4">
                          <div className={`md:text-${index % 2 === 0 ? 'left' : 'right'}`}>
                            <span className="text-blue-600 font-bold text-lg">{item.year}</span>
                            <h4 className="text-xl font-semibold my-1">{item.title}</h4>
                            <p className="text-gray-600">{item.description}</p>
                          </div>
                        </div>
                        <div className="md:w-0 flex items-center justify-center relative">
                          <div className="h-8 w-8 rounded-full bg-blue-600 border-4 border-white shadow z-10"></div>
                        </div>
                        <div className="md:w-1/2 p-4"></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>
            
            {/* Board Members */}
            <TabsContent value="board">
              <div className="max-w-5xl mx-auto">
                <h3 className="text-2xl font-bold text-center mb-10">Ons Bestuur</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {boardMembers.map((member) => (
                    <Card key={member.id} className="overflow-hidden">
                      <CardContent className="p-6">
                        <div className="flex flex-col items-center text-center">
                          <Avatar className="h-32 w-32 mb-4">
                            <AvatarImage 
                              src={member.image} 
                              alt={member.name}
                              onError={(e) => {
                                e.currentTarget.src = `https://placehold.co/200x200/blue/white?text=${member.name.charAt(0)}`;
                              }}
                            />
                            <AvatarFallback className="text-3xl">{member.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <h4 className="text-xl font-semibold">{member.name}</h4>
                          <p className="text-blue-600 font-medium mb-2">{member.role}</p>
                          <p className="text-sm text-gray-500 mb-2">Bestuurslid sinds {member.since}</p>
                          <p className="text-sm text-gray-600">{member.email}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>
            
            {/* Committees */}
            <TabsContent value="committees">
              <div className="max-w-4xl mx-auto">
                <h3 className="text-2xl font-bold text-center mb-10">Onze Commissies</h3>
                <div className="space-y-6">
                  {committees.map((committee) => (
                    <Card key={committee.id}>
                      <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                          <div>
                            <h4 className="text-xl font-semibold">{committee.name}</h4>
                            <p className="text-gray-600 mt-2">{committee.description}</p>
                            <div className="flex items-center mt-4 text-sm text-gray-500">
                              <Users className="h-4 w-4 mr-2" />
                              <span>{committee.members} leden</span>
                            </div>
                          </div>
                          <div className="mt-4 md:mt-0 md:ml-4">
                            <p className="text-sm text-gray-600">Contact: {committee.contact}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                <div className="text-center mt-10">
                  <Button asChild>
                    <Link href="/contact">Contact Opnemen</Link>
                  </Button>
                </div>
              </div>
            </TabsContent>
            
            {/* Awards */}
            <TabsContent value="awards">
              <div className="max-w-4xl mx-auto">
                <h3 className="text-2xl font-bold text-center mb-10">Prijzen & Erkenningen</h3>
                <div className="space-y-6">
                  {awards.map((award) => (
                    <Card key={award.year}>
                      <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row md:items-center">
                          <div className="flex-shrink-0 flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-800 font-bold text-lg mr-6">
                            {award.year}
                          </div>
                          <div>
                            <h4 className="text-xl font-semibold">{award.title}</h4>
                            <p className="text-gray-600">Uitgereikt door: {award.organization}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
      
      {/* Join Us Section */}
      <div className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Word Lid van Onze Vereniging</h2>
            <p className="mb-8">
              Wil je deel uitmaken van deze fantastische vereniging? Word lid van De Blauwe Bok en
              help mee om de carnavalstraditie te behouden en te versterken.
            </p>
            <Button size="lg" asChild className="bg-amber-500 hover:bg-amber-600 text-white">
              <Link href="/lid-worden">Word Lid</Link>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Location & Contact Info */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Vind Ons</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-blue-600 mt-0.5 mr-3" />
                  <div>
                    <h4 className="font-semibold">Residentie De Blauwe Bok</h4>
                    <p className="text-gray-600">Carnavalsplein 123<br />1234 AB Carnavalopolis</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Calendar className="h-5 w-5 text-blue-600 mt-0.5 mr-3" />
                  <div>
                    <h4 className="font-semibold">Openingstijden Residentie</h4>
                    <p className="text-gray-600">
                      Vrijdag: 20:00 - 01:00 uur<br />
                      Zaterdag: 20:00 - 02:00 uur<br />
                      Tijdens carnaval: dagelijks geopend
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <Button asChild>
                  <Link href="/contact">Neem Contact Op</Link>
                </Button>
              </div>
            </div>
            
            <div className="rounded-lg overflow-hidden shadow-lg h-80">
              {/* This would be a Google Maps embed in a real implementation */}
              <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                <p className="text-gray-600">Hier zou een kaart komen</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
} 