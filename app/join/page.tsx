"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check, X, Clock, Users, Dumbbell, Trophy, Shield } from "lucide-react";

export default function JoinPage() {
    // Comprehensive training packages with all durations
    const trainingTypes = [
        {
            id: "general",
            name: "GENERAL TRAINING",
            subtitle: "Standard Access",
            badge: "bg-punch-red text-white",
            cardStyle: "border-2 hover:border-punch-gold hover:shadow-2xl transition-all",
            buttonStyle: "bg-punch-red hover:bg-punch-red/90 text-white",
            buttonText: "Join Now",
            popular: false,
            packages: [
                {
                    duration: "1 Month",
                    oldPrice: "₹2,560",
                    newPrice: "₹2,500",
                    highlighted: false
                },
                {
                    duration: "3 Months",
                    oldPrice: "₹6,060",
                    newPrice: "₹5,400",
                    highlighted: false
                },
                {
                    duration: "6 Months",
                    oldPrice: "₹10,000",
                    newPrice: "₹8,000",
                    highlighted: false
                },
                {
                    duration: "1 Year",
                    oldPrice: "₹15,000",
                    newPrice: "₹10,500",
                    savings: "Save ₹4,500",
                    highlighted: true,
                    highlightColor: "bg-punch-red/10 border-2 border-punch-red/30",
                    priceColor: "text-punch-red"
                }
            ]
        },
        {
            id: "couple",
            name: "COUPLE TRAINING",
            subtitle: "2 People - Shared Access",
            badge: "bg-punch-gold text-black",
            cardStyle: "border-2 hover:border-punch-gold hover:shadow-2xl transition-all",
            buttonStyle: "bg-punch-gold hover:bg-punch-gold/90 text-black font-bold",
            buttonText: "Join as Couple",
            popular: false,
            packages: [
                {
                    duration: "1 Month",
                    oldPrice: "₹4,600",
                    newPrice: "₹4,000",
                    highlighted: false
                },
                {
                    duration: "3 Months",
                    oldPrice: "₹10,000",
                    newPrice: "₹9,000",
                    highlighted: false
                },
                {
                    duration: "6 Months",
                    oldPrice: "₹18,000",
                    newPrice: "₹16,000",
                    highlighted: false
                },
                {
                    duration: "1 Year",
                    oldPrice: "₹25,000",
                    newPrice: "₹17,500",
                    savings: "Save ₹7,500",
                    highlighted: true,
                    highlightColor: "bg-punch-gold/10 border-2 border-punch-gold/30",
                    priceColor: "text-punch-gold"
                }
            ]
        },
        {
            id: "personal",
            name: "PERSONAL TRAINING",
            subtitle: "1-on-1 Coaching",
            badge: "bg-black text-white",
            cardStyle: "border-4 border-punch-red shadow-2xl relative bg-gradient-to-br from-punch-red/5 to-red-700/5",
            buttonStyle: "bg-punch-red hover:bg-punch-red/90 text-white font-bold",
            buttonText: "Get Personal Training",
            popular: true,
            packages: [
                {
                    duration: "1 Month",
                    oldPrice: "₹8,000",
                    newPrice: "₹7,200",
                    highlighted: false
                },
                {
                    duration: "3 Months",
                    oldPrice: "₹20,000",
                    newPrice: "₹16,000",
                    highlighted: false
                },
                {
                    duration: "6 Months",
                    oldPrice: "₹35,000",
                    newPrice: "₹28,000",
                    highlighted: false
                },
                {
                    duration: "1 Year",
                    oldPrice: "₹50,000",
                    newPrice: "₹42,000",
                    savings: "Save ₹8,000",
                    highlighted: true,
                    highlightColor: "bg-punch-red/20 border-2 border-punch-red/50",
                    priceColor: "text-punch-red"
                }
            ]
        },
        {
            id: "certified",
            name: "CERTIFIED PT",
            subtitle: "Elite Coaching",
            badge: "bg-gradient-to-r from-punch-gold to-yellow-600 text-black",
            cardStyle: "border-2 hover:border-punch-gold hover:shadow-2xl transition-all bg-gradient-to-br from-punch-gold/5 to-yellow-700/5",
            buttonStyle: "bg-gradient-to-r from-punch-gold to-yellow-600 hover:opacity-90 text-black font-bold",
            buttonText: "Premium Training",
            popular: false,
            packages: [
                {
                    duration: "1 Month",
                    oldPrice: null,
                    newPrice: "₹10,000",
                    highlighted: false
                },
                {
                    duration: "3 Months",
                    oldPrice: "₹25,000",
                    newPrice: "₹22,500",
                    highlighted: false
                },
                {
                    duration: "6 Months",
                    oldPrice: "₹40,000",
                    newPrice: "₹32,000",
                    highlighted: false
                },
                {
                    duration: "1 Year",
                    oldPrice: "₹65,000",
                    newPrice: "₹45,500",
                    savings: "Save ₹19,500",
                    highlighted: true,
                    highlightColor: "bg-punch-gold/20 border-2 border-punch-gold/50",
                    priceColor: "text-punch-gold"
                }
            ]
        }
    ];

    const perks = [
        {
            icon: <Clock className="w-6 h-6" />,
            title: "Extended Hours",
            description: "Train when it works for you with our flexible schedule"
        },
        {
            icon: <Users className="w-6 h-6" />,
            title: "Expert Coaching",
            description: "Certified trainers always on the floor to help you"
        },
        {
            icon: <Dumbbell className="w-6 h-6" />,
            title: "Premium Equipment",
            description: "State-of-the-art machines maintained to perfection"
        },
        {
            icon: <Trophy className="w-6 h-6" />,
            title: "Results-Driven",
            description: "Proven programs that deliver real transformations"
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
                    <Badge className="mb-6 bg-punch-red text-white">LIMITED TIME OFFER</Badge>
                    <h1 className="font-display text-5xl md:text-7xl font-black italic uppercase mb-6">
                        Join <span className="text-punch-gold">Punch Fitness</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                        Stop waiting. Start training. Choose the plan that fits your commitment level.
                    </p>
                    <div className="flex items-center justify-center gap-6 text-sm">
                        <div className="flex items-center gap-2">
                            <Check className="w-5 h-5 text-punch-gold" />
                            <span>No Hidden Fees</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Check className="w-5 h-5 text-punch-gold" />
                            <span>Cancel Anytime</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Check className="w-5 h-5 text-punch-gold" />
                            <span>Premium Facilities</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Membership Plans */}
            <section className="py-24 bg-background">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
                        {trainingTypes.map((type) => (
                            <Card
                                key={type.id}
                                className={type.cardStyle}
                            >
                                {type.popular && (
                                    <Badge className="absolute -top-4 left-1/2 -translate-x-1/2 bg-punch-gold text-black text-sm px-6 py-2 font-black shadow-lg">
                                        ⭐ MOST POPULAR
                                    </Badge>
                                )}
                                <CardContent className="p-8">
                                    <div className="text-center mb-6">
                                        <Badge className={`${type.badge} mb-3`}>{type.name}</Badge>
                                        <h3 className="text-2xl font-black uppercase italic">{type.subtitle}</h3>
                                    </div>
                                    <div className="space-y-4">
                                        {type.packages.map((pkg, idx) => (
                                            <div
                                                key={idx}
                                                className={`flex justify-between items-center p-4 rounded-lg ${pkg.highlighted
                                                    ? pkg.highlightColor
                                                    : 'bg-muted/50 hover:bg-punch-gold/10'
                                                    } transition-colors`}
                                            >
                                                <div>
                                                    <p className="font-bold">{pkg.duration}</p>
                                                    {pkg.oldPrice && (
                                                        <p className="text-sm text-muted-foreground line-through">
                                                            {pkg.oldPrice}
                                                        </p>
                                                    )}
                                                    {pkg.savings && (
                                                        <Badge className="mt-1 bg-green-500/10 text-green-600 border-green-500/20">
                                                            {pkg.savings}
                                                        </Badge>
                                                    )}
                                                </div>
                                                <span
                                                    className={`text-3xl font-black ${pkg.priceColor || 'text-punch-gold'
                                                        }`}
                                                >
                                                    {pkg.newPrice}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                    <Button className={`w-full mt-6 ${type.buttonStyle}`} size="lg">
                                        {type.buttonText}
                                    </Button>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    {/* Important Notice */}
                    <div className="mt-12 text-center">
                        <Badge className="bg-punch-red text-white px-6 py-3 text-sm">
                            🔥 ONCE FILLED, THEY ARE GONE & WON'T RETURN! 🔥
                        </Badge>
                    </div>
                </div>
            </section>

            {/* What's Included */}
            <section className="py-24 bg-muted/30">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="font-display text-4xl md:text-5xl font-black italic uppercase mb-4">
                            Member <span className="text-punch-red">Perks</span>
                        </h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Every membership includes access to world-class facilities and support.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                        {perks.map((perk, i) => (
                            <Card key={i} className="border-2 text-center hover:border-punch-gold hover:shadow-xl transition-all">
                                <CardContent className="p-8 space-y-4">
                                    <div className="bg-punch-red/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto text-punch-red">
                                        {perk.icon}
                                    </div>
                                    <h3 className="text-xl font-bold">{perk.title}</h3>
                                    <p className="text-muted-foreground text-sm">{perk.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-24 bg-muted/30">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="text-center mb-16">
                        <h2 className="font-display text-4xl md:text-5xl font-black italic uppercase mb-4">
                            <span className="text-punch-red">FAQ</span>
                        </h2>
                        <p className="text-muted-foreground">Common questions about membership</p>
                    </div>

                    <div className="space-y-4">
                        {[
                            {
                                q: "Can I freeze my membership?",
                                a: "Yes, monthly members can freeze their membership for up to 2 months per year. Just give us 48 hours notice."
                            },
                            {
                                q: "What are your operating hours?",
                                a: "Monday-Saturday: 5:00 AM – 10:00 AM and 4:00 PM – 10:00 PM. Closed on Sundays."
                            },
                            {
                                q: "Do you offer student discounts?",
                                a: "Yes! Students with valid ID get 10% off on quarterly and annual memberships."
                            },
                            {
                                q: "Is there a joining fee?",
                                a: "No hidden fees. The price you see is the price you pay."
                            },
                            {
                                q: "Can I bring a friend?",
                                a: "Annual members get 4 guest passes per year. Others can purchase guest passes for ₹500 each."
                            }
                        ].map((faq, i) => (
                            <Card key={i} className="border-2">
                                <CardContent className="p-6">
                                    <h4 className="font-bold text-lg mb-2">{faq.q}</h4>
                                    <p className="text-muted-foreground">{faq.a}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-gradient-to-br from-punch-black to-neutral-900 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="font-display text-4xl md:text-6xl font-black italic uppercase mb-6">
                        Your Transformation <span className="text-punch-gold">Starts Now</span>
                    </h2>
                    <p className="text-gray-300 max-w-2xl mx-auto mb-10 text-lg">
                        Join hundreds of members who have already transformed their lives at Punch Fitness.
                    </p>
                    <Button size="lg" className="bg-punch-red hover:bg-red-700 text-white px-12 py-6 text-xl">
                        Get Started Today
                    </Button>
                </div>
            </section>

            <Footer />
        </main>
    );
}
