"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Send } from "lucide-react";

export default function ContactPage() {
    return (
        <main className="min-h-screen flex flex-col bg-background">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-24 bg-gradient-to-br from-punch-black to-neutral-900 text-white overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <Image src="/hero-bg.png" alt="Background" fill className="object-cover" />
                </div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <Badge className="mb-6 bg-punch-gold text-black">GET IN TOUCH</Badge>
                    <h1 className="font-display text-5xl md:text-7xl font-black italic uppercase mb-6">
                        Contact <span className="text-punch-gold">Us</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Questions? Ready to start? We&apos;re here to help you begin your fitness journey.
                    </p>
                </div>
            </section>

            {/* Contact Form & Info */}
            <section className="py-24 bg-background">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        {/* Contact Form */}
                        <div>
                            <h2 className="font-display text-3xl font-black italic uppercase mb-6">
                                Send A <span className="text-punch-red">Message</span>
                            </h2>
                            <p className="text-muted-foreground mb-8">
                                Fill out the form and we&apos;ll get back to you within 24 hours.
                            </p>

                            <form className="space-y-6">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-semibold mb-2">First Name *</label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-3 rounded-lg border-2 border-border focus:border-punch-red focus:outline-none bg-background"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold mb-2">Last Name *</label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-3 rounded-lg border-2 border-border focus:border-punch-red focus:outline-none bg-background"
                                            required
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold mb-2">Email *</label>
                                    <input
                                        type="email"
                                        className="w-full px-4 py-3 rounded-lg border-2 border-border focus:border-punch-red focus:outline-none bg-background"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold mb-2">Phone</label>
                                    <input
                                        type="tel"
                                        className="w-full px-4 py-3 rounded-lg border-2 border-border focus:border-punch-red focus:outline-none bg-background"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold mb-2">I&apos;m Interested In</label>
                                    <select className="w-full px-4 py-3 rounded-lg border-2 border-border focus:border-punch-red focus:outline-none bg-background">
                                        <option>Membership Information</option>
                                        <option>Personal Training</option>
                                        <option>Group Classes</option>
                                        <option>Free Trial</option>
                                        <option>General Inquiry</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold mb-2">Message *</label>
                                    <textarea
                                        rows={5}
                                        className="w-full px-4 py-3 rounded-lg border-2 border-border focus:border-punch-red focus:outline-none bg-background resize-none"
                                        required
                                    ></textarea>
                                </div>

                                <Button size="lg" className="w-full bg-punch-red hover:bg-red-700 text-white">
                                    <Send className="w-5 h-5 mr-2" />
                                    Send Message
                                </Button>
                            </form>
                        </div>

                        {/* Contact Info */}
                        <div className="space-y-8">
                            <div>
                                <h2 className="font-display text-3xl font-black italic uppercase mb-6">
                                    Visit <span className="text-punch-gold">Us</span>
                                </h2>
                                <p className="text-muted-foreground mb-8">
                                    Come see our facility in person. Walk-ins welcome during operating hours.
                                </p>
                            </div>

                            <Card className="border-2">
                                <CardContent className="p-6 space-y-6">
                                    <div className="flex items-start gap-4">
                                        <MapPin className="w-6 h-6 text-punch-red shrink-0 mt-1" />
                                        <div>
                                            <p className="font-bold mb-2">Location</p>
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
                                            <p className="font-bold mb-2">Phone</p>
                                            <a href="tel:+919876543210" className="text-punch-gold hover:underline block">
                                                +91 98765 43210
                                            </a>
                                            <p className="text-muted-foreground text-sm mt-1">
                                                Available during operating hours
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <Mail className="w-6 h-6 text-punch-red shrink-0 mt-1" />
                                        <div>
                                            <p className="font-bold mb-2">Email</p>
                                            <a href="mailto:punchfitnessglobal@gmail.com" className="text-punch-gold hover:underline block">
                                                punchfitnessglobal@gmail.com
                                            </a>
                                            <p className="text-muted-foreground text-sm mt-1">
                                                We respond within 24 hours
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <Clock className="w-6 h-6 text-punch-red shrink-0 mt-1" />
                                        <div>
                                            <p className="font-bold mb-2">Operating Hours</p>
                                            <p className="text-muted-foreground">
                                                <strong>Mon - Sat:</strong><br />
                                                5:00 AM - 10:00 AM<br />
                                                4:00 PM - 10:00 PM
                                            </p>
                                            <p className="text-muted-foreground mt-2">
                                                <strong>Sunday:</strong> Closed
                                            </p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="border-2 bg-gradient-to-br from-punch-red to-red-700 text-white">
                                <CardContent className="p-6">
                                    <h3 className="text-xl font-bold mb-4">Follow Us</h3>
                                    <div className="flex gap-4">
                                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-white/20 p-3 rounded-lg transition-colors">
                                            <Instagram className="w-6 h-6" />
                                        </a>
                                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-white/20 p-3 rounded-lg transition-colors">
                                            <Facebook className="w-6 h-6" />
                                        </a>
                                    </div>
                                    <p className="text-sm text-white/80 mt-4">
                                        @punchfitnesskoratty
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="py-24 bg-muted/30">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="font-display text-4xl md:text-5xl font-black italic uppercase mb-4">
                            Find <span className="text-punch-red">Us</span>
                        </h2>
                        <p className="text-muted-foreground">Easy to locate, easy to reach</p>
                    </div>

                    <Card className="border-2 overflow-hidden max-w-6xl mx-auto">
                        <div className="relative h-[500px]">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3925.910348615063!2d76.34936517509315!3d10.268807189850783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0803421770c8dd%3A0x59f148169ae83d99!2sPunch%20Fitness%20Gym!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen={true}
                                loading="lazy"
                                title="Punch Fitness Gym Location"
                            ></iframe>
                        </div>
                    </Card>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-24 bg-background">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="text-center mb-12">
                        <h2 className="font-display text-4xl md:text-5xl font-black italic uppercase mb-4">
                            Quick <span className="text-punch-gold">Answers</span>
                        </h2>
                        <p className="text-muted-foreground">Common questions before visiting</p>
                    </div>

                    <div className="space-y-4">
                        {[
                            {
                                q: "Do I need an appointment to visit?",
                                a: "Walk-ins are welcome during operating hours! However, we recommend booking a free tour in advance for a guided experience."
                            },
                            {
                                q: "Is parking available?",
                                a: "Yes, we have ample free parking space for all members and visitors."
                            },
                            {
                                q: "Can I try a class for free?",
                                a: "Absolutely! First-time visitors get one complimentary class. Just mention it when you contact us."
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
                        Stop Waiting. <span className="text-punch-gold">Start Training.</span>
                    </h2>
                    <p className="text-gray-300 max-w-2xl mx-auto mb-10 text-lg">
                        Your transformation is one visit away. Come see what makes Punch Fitness different.
                    </p>
                    <Button size="lg" className="bg-punch-red hover:bg-red-700 text-white px-12 py-6 text-xl">
                        Book Free Tour
                    </Button>
                </div>
            </section>

            <Footer />
        </main>
    );
}
