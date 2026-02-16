import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Users, Trophy, Heart, Dumbbell, TrendingUp } from "lucide-react";
import Navbar from "../components/Navbar";

export const metadata = {
    title: "About Us | Punch Fitness Gym",
    description: "Discover the story behind Punch Fitness - Kerala's premier strength and conditioning facility. Learn about our mission, values, and commitment to transforming lives through fitness.",
};

export default function AboutPage() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">

                {/* Hero Section */}
                <section className="relative h-[70vh] flex items-center justify-center overflow-hidden pt-24">
                    <Image
                        src="/hero-gym-2.png"
                        alt="Punch Fitness Gym Interior"
                        fill
                        className="object-cover brightness-[0.4]"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />

                    <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
                        <Badge className="bg-punch-red hover:bg-punch-red text-white mb-6 text-sm px-4 py-1.5">
                            📍 EST. 2026 | KORATTY, KERALA
                        </Badge>
                        <h1 className="font-display text-5xl md:text-7xl font-black italic uppercase tracking-tighter leading-[0.9] text-white mb-6">
                            About <span className="text-punch-gold">Punch Fitness</span>
                        </h1>
                        <p className="text-white/90 text-xl md:text-2xl font-medium max-w-3xl mx-auto leading-relaxed">
                            Kerala's premier strength and conditioning facility, dedicated to transforming lives through disciplined training and expert guidance.
                        </p>
                    </div>
                </section>

                {/* Our Story Section */}
                <section className="py-20 px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <Badge className="bg-punch-red/10 text-punch-red hover:bg-punch-red/20 mb-4">OUR STORY</Badge>
                                <h2 className="font-display text-4xl md:text-5xl font-black italic uppercase mb-6">
                                    Built on <span className="text-punch-red">Discipline</span> and <span className="text-punch-gold">Results</span>
                                </h2>
                                <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                                    <p>
                                        Founded in 2026, Punch Fitness was born from a simple belief: <strong>discipline beats motivation every single time</strong>. We're not here to sell you dreams – we're here to help you build them, one rep at a time.
                                    </p>
                                    <p>
                                        As Koratty's newest premium fitness facility, we've invested in the <strong>best equipment, expert trainers, and a no-nonsense training philosophy</strong> that sets us apart from day one. We're building Kerala's most trusted community of serious athletes.
                                    </p>
                                    <p>
                                        We don't do gimmicks. We don't chase trends. We focus on what works: <strong>proper form, progressive overload, expert coaching, and zero tolerance for excuses</strong>.
                                    </p>
                                </div>
                            </div>
                            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                                <Image
                                    src="/hero-gym-3.png"
                                    alt="Punch Fitness Training Area"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Mission & Values */}
                <section className="py-20 px-4 bg-gradient-to-br from-gray-900 via-black to-gray-900">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <Badge className="bg-punch-gold text-black hover:bg-yellow-500 mb-4">OUR MISSION</Badge>
                            <h2 className="font-display text-4xl md:text-5xl font-black italic uppercase text-white mb-6">
                                Why We <span className="text-punch-gold">Exist</span>
                            </h2>
                            <p className="text-white/80 text-xl max-w-3xl mx-auto">
                                To create a community of serious athletes who demand excellence from themselves and their training environment.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all group">
                                <CardContent className="p-8">
                                    <div className="bg-punch-red/20 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                        <Target className="w-8 h-8 text-punch-red" />
                                    </div>
                                    <h3 className="font-display text-2xl font-bold text-white mb-4 uppercase">Results-Driven</h3>
                                    <p className="text-white/70 leading-relaxed">
                                        Every program, every exercise, every rep is designed with one goal: measurable, sustainable results. No fluff, just progress.
                                    </p>
                                </CardContent>
                            </Card>

                            <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all group">
                                <CardContent className="p-8">
                                    <div className="bg-punch-gold/20 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                        <Users className="w-8 h-8 text-punch-gold" />
                                    </div>
                                    <h3 className="font-display text-2xl font-bold text-white mb-4 uppercase">Community First</h3>
                                    <p className="text-white/70 leading-relaxed">
                                        We're not just a gym – we're a tribe of like-minded individuals pushing each other to be better every single day.
                                    </p>
                                </CardContent>
                            </Card>

                            <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all group">
                                <CardContent className="p-8">
                                    <div className="bg-white/20 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                        <Trophy className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="font-display text-2xl font-bold text-white mb-4 uppercase">Excellence Always</h3>
                                    <p className="text-white/70 leading-relaxed">
                                        From our equipment to our coaching, we accept nothing less than the absolute best. You deserve it.
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* What Sets Us Apart */}
                <section className="py-20 px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <Badge className="bg-punch-red/10 text-punch-red hover:bg-punch-red/20 mb-4">WHAT MAKES US DIFFERENT</Badge>
                            <h2 className="font-display text-4xl md:text-5xl font-black italic uppercase mb-6">
                                We're Not Like <span className="text-punch-red">Other Gyms</span>
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <Card className="border-2 border-gray-100 hover:border-punch-red transition-all hover:shadow-xl group">
                                <CardContent className="p-8">
                                    <div className="bg-punch-red w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                        <Dumbbell className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="font-display text-2xl font-bold mb-3 uppercase">Premium Equipment</h3>
                                    <p className="text-gray-700 leading-relaxed">
                                        State-of-the-art machines, Olympic lifting platforms, and professional-grade free weights. Everything you need to train like an athlete.
                                    </p>
                                </CardContent>
                            </Card>

                            <Card className="border-2 border-gray-100 hover:border-punch-gold transition-all hover:shadow-xl group">
                                <CardContent className="p-8">
                                    <div className="bg-punch-gold w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                        <Users className="w-6 h-6 text-black" />
                                    </div>
                                    <h3 className="font-display text-2xl font-bold mb-3 uppercase">Expert Coaching</h3>
                                    <p className="text-gray-700 leading-relaxed">
                                        Our trainers actually care about your form and progress. Certified professionals dedicated to helping you achieve real results.
                                    </p>
                                </CardContent>
                            </Card>

                            <Card className="border-2 border-gray-100 hover:border-punch-red transition-all hover:shadow-xl group">
                                <CardContent className="p-8">
                                    <div className="bg-punch-red w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                        <TrendingUp className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="font-display text-2xl font-bold mb-3 uppercase">Controlled Capacity</h3>
                                    <p className="text-gray-700 leading-relaxed">
                                        We limit memberships to ensure you always have access to equipment when you need it. No waiting, no crowds during peak hours.
                                    </p>
                                </CardContent>
                            </Card>

                            <Card className="border-2 border-gray-100 hover:border-punch-gold transition-all hover:shadow-xl group">
                                <CardContent className="p-8">
                                    <div className="bg-punch-gold w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                        <Heart className="w-6 h-6 text-black" />
                                    </div>
                                    <h3 className="font-display text-2xl font-bold mb-3 uppercase">Results Guaranteed</h3>
                                    <p className="text-gray-700 leading-relaxed">
                                        Follow the program. Put in the work. See the results. If you're committed, we guarantee you'll transform. Simple.
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20 px-4 bg-gradient-to-r from-punch-red via-red-600 to-punch-red">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="font-display text-4xl md:text-6xl font-black italic uppercase text-white mb-6 leading-tight">
                            Ready to Join the <span className="text-punch-gold">Best?</span>
                        </h2>
                        <p className="text-white/90 text-xl md:text-2xl mb-10 max-w-2xl mx-auto">
                            Stop wasting time at average gyms. Start training with purpose at Punch Fitness.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" className="bg-white hover:bg-punch-gold text-black px-12 py-7 text-lg font-black shadow-2xl transition-all hover:scale-105" asChild>
                                <Link href="/join">Join Now</Link>
                            </Button>
                            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-punch-red px-12 py-7 text-lg font-black transition-all hover:scale-105" asChild>
                                <Link href="/contact">Visit Us</Link>
                            </Button>
                        </div>
                    </div>
                </section>

            </main>
        </>
    );
}
