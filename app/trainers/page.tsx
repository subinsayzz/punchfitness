"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Instagram, Award, Users, Star } from "lucide-react";

export default function TrainersPage() {
    const trainers = [
        {
            name: "Aravind Kumar",
            role: "Head Coach & Founder",
            specialization: "Strength Training, Olympic Lifting",
            certifications: ["NSCA-CPT", "CrossFit L2", "Sports Nutrition"],
            experience: "8+ Years",
            image: "/trainer-placeholder-male.png",
            instagram: "@aravindfit"
        },
        {
            name: "Sneha Menon",
            role: "Senior Trainer",
            specialization: "Functional Fitness, HIIT",
            certifications: ["ACE-CPT", "TRX Certified", "Yoga Alliance RYT-200"],
            experience: "5+ Years",
            image: "/trainer-placeholder-male.png",
            instagram: "@snehatrains"
        },
        {
            name: "Rahul Nair",
            role: "Strength Coach",
            specialization: "Powerlifting, Body Recomposition",
            certifications: ["ISSA-CPT", "Precision Nutrition L1"],
            experience: "6+ Years",
            image: "/trainer-placeholder-male.png",
            instagram: "@rahullifts"
        },
        {
            name: "Meera Krishnan",
            role: "Nutrition & Wellness Coach",
            specialization: "Nutrition Planning, Weight Management",
            certifications: ["Certified Nutritionist", "Wellness Coach"],
            experience: "4+ Years",
            image: "/trainer-placeholder-male.png",
            instagram: "@meerawellness"
        }
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
                    <Badge className="mb-6 bg-punch-gold text-black">MEET THE TEAM</Badge>
                    <h1 className="font-display text-5xl md:text-7xl font-black italic uppercase mb-6">
                        Expert <span className="text-punch-gold">Trainers</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Our certified coaches bring years of experience and proven results. They&apos;re here to guide your transformation.
                    </p>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 bg-muted/30 border-y">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div>
                            <div className="text-4xl font-black text-punch-red mb-2">25+</div>
                            <div className="text-muted-foreground uppercase text-sm tracking-wide">Years Combined Experience</div>
                        </div>
                        <div>
                            <div className="text-4xl font-black text-punch-gold mb-2">500+</div>
                            <div className="text-muted-foreground uppercase text-sm tracking-wide">Members Transformed</div>
                        </div>
                        <div>
                            <div className="text-4xl font-black text-punch-red mb-2">15+</div>
                            <div className="text-muted-foreground uppercase text-sm tracking-wide">Certifications</div>
                        </div>
                        <div>
                            <div className="text-4xl font-black text-punch-gold mb-2">100%</div>
                            <div className="text-muted-foreground uppercase text-sm tracking-wide">Dedicated To Results</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trainers Grid */}
            <section className="py-24 bg-background">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        {trainers.map((trainer, i) => (
                            <Card key={i} className="border-2 hover:border-punch-gold hover:shadow-2xl transition-all group overflow-hidden">
                                <div className="relative h-80 bg-gradient-to-br from-neutral-900 to-neutral-800 overflow-hidden">
                                    <Image
                                        src={trainer.image}
                                        alt={trainer.name}
                                        fill
                                        className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                                    <div className="absolute bottom-4 left-4 right-4">
                                        <h3 className="text-white text-2xl font-bold mb-1">{trainer.name}</h3>
                                        <p className="text-punch-gold font-semibold">{trainer.role}</p>
                                    </div>
                                </div>
                                <CardContent className="p-6 space-y-4">
                                    <div>
                                        <div className="flex items-center gap-2 text-sm font-semibold text-foreground mb-2">
                                            <Award className="w-4 h-4 text-punch-red" />
                                            Specialization
                                        </div>
                                        <p className="text-muted-foreground">{trainer.specialization}</p>
                                    </div>

                                    <div>
                                        <div className="flex items-center gap-2 text-sm font-semibold text-foreground mb-2">
                                            <Star className="w-4 h-4 text-punch-gold" />
                                            Certifications
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            {trainer.certifications.map((cert, j) => (
                                                <Badge key={j} variant="secondary" className="text-xs">{cert}</Badge>
                                            ))}
                                        </div>
                                    </div>

                                    <div>
                                        <div className="flex items-center gap-2 text-sm font-semibold text-foreground mb-2">
                                            <Users className="w-4 h-4 text-punch-red" />
                                            Experience
                                        </div>
                                        <p className="text-muted-foreground">{trainer.experience}</p>
                                    </div>

                                    <Button variant="outline" className="w-full group-hover:bg-punch-red group-hover:text-white group-hover:border-punch-red transition-all" asChild>
                                        <Link href={`https://instagram.com/${trainer.instagram}`} target="_blank">
                                            <Instagram className="w-4 h-4 mr-2" />
                                            {trainer.instagram}
                                        </Link>
                                    </Button>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Train With Us */}
            <section className="py-24 bg-muted/30">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <h2 className="font-display text-4xl md:text-5xl font-black italic uppercase mb-6">
                            Why Train With <span className="text-punch-red">Us?</span>
                        </h2>
                        <p className="text-muted-foreground text-lg">
                            Our trainers don&apos;t just count reps—they build champions.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        <Card className="border-2 text-center">
                            <CardContent className="p-8 space-y-4">
                                <div className="bg-punch-red/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                                    <Award className="w-8 h-8 text-punch-red" />
                                </div>
                                <h3 className="text-xl font-bold">Certified Experts</h3>
                                <p className="text-muted-foreground text-sm">
                                    Every trainer holds multiple industry-recognized certifications.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="border-2 text-center">
                            <CardContent className="p-8 space-y-4">
                                <div className="bg-punch-gold/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                                    <Users className="w-8 h-8 text-punch-gold" />
                                </div>
                                <h3 className="text-xl font-bold">Personalized Approach</h3>
                                <p className="text-muted-foreground text-sm">
                                    Custom programs tailored to your goals and fitness level.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="border-2 text-center">
                            <CardContent className="p-8 space-y-4">
                                <div className="bg-punch-red/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                                    <Star className="w-8 h-8 text-punch-red" />
                                </div>
                                <h3 className="text-xl font-bold">Proven Results</h3>
                                <p className="text-muted-foreground text-sm">
                                    Track record of transforming hundreds of members.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-gradient-to-br from-punch-black to-neutral-900 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="font-display text-4xl md:text-6xl font-black italic uppercase mb-6">
                        Start Training With <span className="text-punch-gold">The Best</span>
                    </h2>
                    <p className="text-gray-300 max-w-2xl mx-auto mb-10 text-lg">
                        Book a free consultation and see the difference expert coaching makes.
                    </p>
                    <Button size="lg" className="bg-punch-red hover:bg-red-700 text-white px-12 py-6 text-xl" asChild>
                        <Link href="/join">Book Free Session</Link>
                    </Button>
                </div>
            </section>

            <Footer />
        </main>
    );
}
