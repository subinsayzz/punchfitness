"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Phone, Mail, Navigation, Wifi, Droplet, Zap, Users } from "lucide-react";

export default function LocationsPage() {
    const amenities = [
        { icon: <Wifi className="w-6 h-6" />, name: "Free Wi-Fi" },
        { icon: <Droplet className="w-6 h-6" />, name: "Locker Rooms" },
        { icon: <Zap className="w-6 h-6" />, name: "AC Facility" },
        { icon: <Users className="w-6 h-6" />, name: "Trainer Support" }
    ];

    const schedule = [
        { day: "Monday - Saturday", morning: "5:00 AM - 10:00 AM", evening: "4:00 PM - 10:00 PM" },
        { day: "Sunday", morning: "Closed", evening: "Closed" }
    ];

    return (
        <main className="min-h-screen flex flex-col bg-background">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-24 bg-gradient-to-br from-punch-black to-neutral-900 text-white overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <Image src="/hero-bg.png" alt="Background" fill className="object-cover" />
                </div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <Badge className="mb-6 bg-punch-gold text-black">FIND US</Badge>
                    <h1 className="font-display text-5xl md:text-7xl font-black italic uppercase mb-6">
                        Visit <span className="text-punch-gold">Punch Fitness</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Located in the heart of Koratty, we&apos;re your premier destination for serious training.
                    </p>
                </div>
            </section>

            {/* Main Location Card */}
            <section className="py-24 bg-background">
                <div className="container mx-auto px-4">
                    <Card className="border-2 border-punch-gold overflow-hidden max-w-6xl mx-auto shadow-2xl">
                        <div className="grid md:grid-cols-2">
                            {/* Map */}
                            <div className="relative h-[500px]">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3925.910348615063!2d76.34936517509315!3d10.268807189850783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0803421770c8dd%3A0x59f148169ae83d99!2sPunch%20Fitness%20Gym!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen={true}
                                    loading="lazy"
                                    title="Punch Fitness Gym Location"
                                    className="absolute inset-0"
                                ></iframe>
                            </div>

                            {/* Info */}
                            <CardContent className="p-12 space-y-8">
                                <div>
                                    <h2 className="font-display text-3xl font-black italic uppercase mb-4">
                                        Punch Fitness <span className="text-punch-red">Koratty</span>
                                    </h2>
                                    <Badge className="bg-punch-gold text-black">FLAGSHIP LOCATION</Badge>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex items-start gap-4">
                                        <MapPin className="w-6 h-6 text-punch-red shrink-0 mt-1" />
                                        <div>
                                            <p className="font-semibold mb-1">Address</p>
                                            <p className="text-muted-foreground">
                                                Opposite M.A.M. Higher Secondary School<br />
                                                Jamuna Nagar, Koratty, Thrissur<br />
                                                Kerala 680308, India
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <Phone className="w-6 h-6 text-punch-red shrink-0 mt-1" />
                                        <div>
                                            <p className="font-semibold mb-1">Phone</p>
                                            <a href="tel:+919876543210" className="text-punch-gold hover:underline">
                                                +91 98765 43210
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <Mail className="w-6 h-6 text-punch-red shrink-0 mt-1" />
                                        <div>
                                            <p className="font-semibold mb-1">Email</p>
                                            <a href="mailto:punchfitnessglobal@gmail.com" className="text-punch-gold hover:underline">
                                                punchfitnessglobal@gmail.com
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <Button size="lg" className="w-full bg-punch-red hover:bg-red-700 text-white" asChild>
                                    <Link href="https://maps.app.goo.gl/WySUJdNeS36DUT4f8" target="_blank" rel="noopener noreferrer">
                                        <Navigation className="w-5 h-5 mr-2" />
                                        Get Directions
                                    </Link>
                                </Button>
                            </CardContent>
                        </div>
                    </Card>
                </div>
            </section>

            {/* Operating Hours */}
            <section className="py-24 bg-muted/30">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="font-display text-4xl md:text-5xl font-black italic uppercase mb-4">
                                Operating <span className="text-punch-red">Hours</span>
                            </h2>
                            <p className="text-muted-foreground">We&apos;re open when you need us</p>
                        </div>

                        <Card className="border-2">
                            <CardContent className="p-0">
                                <div className="divide-y">
                                    {schedule.map((item, i) => (
                                        <div key={i} className="p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                                            <div className="flex items-center gap-3">
                                                <Clock className="w-6 h-6 text-punch-red" />
                                                <span className="font-bold text-lg">{item.day}</span>
                                            </div>
                                            <div className="flex gap-8 md:gap-12">
                                                <div>
                                                    <p className="text-sm text-muted-foreground mb-1">Morning</p>
                                                    <p className="font-semibold">{item.morning}</p>
                                                </div>
                                                <div>
                                                    <p className="text-sm text-muted-foreground mb-1">Evening</p>
                                                    <p className="font-semibold">{item.evening}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>

                        <div className="mt-6 p-4 bg-punch-gold/10 border-2 border-punch-gold rounded-lg">
                            <p className="text-center text-sm">
                                <strong>Note:</strong> Last entry is 30 minutes before closing time. Holiday hours may vary.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Amenities */}
            <section className="py-24 bg-background">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="font-display text-4xl md:text-5xl font-black italic uppercase mb-4">
                            Facility <span className="text-punch-gold">Amenities</span>
                        </h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Everything you need for a complete training experience
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16">
                        {amenities.map((amenity, i) => (
                            <Card key={i} className="border-2 hover:border-punch-gold hover:shadow-xl transition-all text-center">
                                <CardContent className="p-8 space-y-3">
                                    <div className="bg-punch-red/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto text-punch-red">
                                        {amenity.icon}
                                    </div>
                                    <p className="font-semibold">{amenity.name}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        <Card className="border-2">
                            <CardContent className="p-6 space-y-3">
                                <h3 className="text-xl font-bold">Equipment</h3>
                                <ul className="space-y-2 text-sm text-muted-foreground">
                                    <li>• Free weights & dumbbells</li>
                                    <li>• Olympic platforms</li>
                                    <li>• Cardio machines</li>
                                    <li>• Functional training area</li>
                                    <li>• Squat racks & benches</li>
                                </ul>
                            </CardContent>
                        </Card>

                        <Card className="border-2">
                            <CardContent className="p-6 space-y-3">
                                <h3 className="text-xl font-bold">Facilities</h3>
                                <ul className="space-y-2 text-sm text-muted-foreground">
                                    <li>• Spacious training floor</li>
                                    <li>• Separate changing rooms</li>
                                    <li>• Secure lockers</li>
                                    <li>• Shower facilities</li>
                                    <li>• Ample parking</li>
                                </ul>
                            </CardContent>
                        </Card>

                        <Card className="border-2">
                            <CardContent className="p-6 space-y-3">
                                <h3 className="text-xl font-bold">Services</h3>
                                <ul className="space-y-2 text-sm text-muted-foreground">
                                    <li>• Personal training</li>
                                    <li>• Group classes</li>
                                    <li>• Nutrition guidance</li>
                                    <li>• Progress tracking</li>
                                    <li>• Member app</li>
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Gallery Preview */}
            <section className="py-24 bg-muted/30">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="font-display text-4xl md:text-5xl font-black italic uppercase mb-4">
                            Take A <span className="text-punch-red">Tour</span>
                        </h2>
                        <p className="text-muted-foreground">See our world-class facility</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="relative h-64 rounded-2xl overflow-hidden shadow-xl group">
                                <Image
                                    src="/hero-bg.png"
                                    alt={`Gym Photo ${i}`}
                                    fill
                                    className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                                    <p className="text-white font-bold">Training Floor</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <Button size="lg" variant="outline" asChild>
                            <Link href="/contact">Schedule A Visit</Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-gradient-to-br from-punch-black to-neutral-900 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="font-display text-4xl md:text-6xl font-black italic uppercase mb-6">
                        Come See For <span className="text-punch-gold">Yourself</span>
                    </h2>
                    <p className="text-gray-300 max-w-2xl mx-auto mb-10 text-lg">
                        Book a free tour and experience what makes Punch Fitness different.
                    </p>
                    <div className="flex gap-4 justify-center flex-wrap">
                        <Button size="lg" className="bg-punch-red hover:bg-red-700 text-white px-12 py-6 text-xl" asChild>
                            <Link href="/join">Join Now</Link>
                        </Button>
                        <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-black px-12 py-6 text-xl" asChild>
                            <Link href="/contact">Book Tour</Link>
                        </Button>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
