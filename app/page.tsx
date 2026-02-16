"use client";

import Link from "next/link";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Image from "next/image";
import { ArrowRight, Check, Dumbbell, Users, Trophy, MapPin, Clock, Star, Droplet, TrendingUp, Zap, Award } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Autoplay from "embla-carousel-autoplay";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-background">
      <Navbar />

      {/* 1. HERO CAROUSEL - Enhanced */}
      <section className="relative w-full">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 5000,
            }),
          ]}
          className="w-full"
        >
          <CarouselContent>
            <CarouselItem>
              <div className="relative h-[100vh] flex items-center justify-center overflow-hidden pt-24">
                <Image
                  src="/hero-gym-1.png"
                  alt="Premium Gym Interior with Orange Accent Lighting and Professional Equipment"
                  fill
                  className="object-cover scale-110 brightness-[0.7]"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />

                <div className="relative z-10 text-left max-w-7xl mx-auto px-4 w-full">
                  <Badge className="bg-punch-red hover:bg-punch-red text-white mb-6 text-sm px-4 py-1.5">
                    📍 KORATTY, KERALA
                  </Badge>
                  <h1 className="font-display text-6xl md:text-[120px] font-black italic uppercase tracking-tighter leading-[0.85] drop-shadow-2xl text-white mb-8">
                    Discipline<br />
                    Over<br />
                    <span className="text-punch-gold">Motivation</span>
                  </h1>
                  <p className="text-white/90 text-xl md:text-2xl font-medium tracking-wide max-w-xl mb-10 leading-relaxed">
                    Results over hype. Premium equipment. Serious training. No excuses.
                  </p>

                  <div className="flex gap-4 flex-wrap">
                    <Button size="lg" className="bg-punch-red hover:bg-red-600 text-white px-12 py-7 text-lg font-bold shadow-2xl shadow-punch-red/50 hover:shadow-punch-red/70 transition-all hover:scale-105" asChild>
                      <Link href="/join">Start Your Journey</Link>
                    </Button>
                    <Button size="lg" variant="outline" className="border-2 border-white bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-black px-12 py-7 text-lg font-bold transition-all hover:scale-105" asChild>
                      <Link href="/contact">Book Free Trial</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </CarouselItem>

            <CarouselItem>
              <div className="relative h-[100vh] flex items-center justify-center overflow-hidden pt-24">
                <Image
                  src="/hero-gym-2.png"
                  alt="Modern Cardio Section with Treadmills and Orange Architectural Accents"
                  fill
                  className="object-cover scale-110 brightness-[0.6]"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-black/80" />

                <div className="relative z-10 text-center space-y-10 max-w-5xl px-4">
                  <Badge className="bg-punch-gold text-black mb-4 text-sm px-4 py-1.5 font-bold">
                    💪 PREMIUM TRAINING
                  </Badge>
                  <h1 className="font-display text-6xl md:text-[120px] font-black italic uppercase tracking-tighter leading-[0.85] text-white">
                    Zero<br />
                    Tolerance<br />
                    <span className="text-punch-gold">For Excuses</span>
                  </h1>
                  <p className="text-white/90 text-xl md:text-2xl font-medium tracking-wide max-w-2xl mx-auto leading-relaxed">
                    Expert coaching. Controlled capacity. Real progress.
                  </p>

                  <Button size="lg" className="bg-white text-black hover:bg-punch-gold hover:text-black px-12 py-7 text-lg font-bold shadow-2xl transition-all hover:scale-105" asChild>
                    <Link href="/trainers">Meet Our Trainers</Link>
                  </Button>
                </div>
              </div>
            </CarouselItem>

            <CarouselItem>
              <div className="relative h-[100vh] flex items-center justify-center overflow-hidden pt-24">
                <Image
                  src="/hero-gym-3.png"
                  alt="Strength Training Area with Free Weights and Gym Equipment"
                  fill
                  className="object-cover scale-110 brightness-[0.65]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-punch-red/80 via-black/60 to-black/50" />

                <div className="relative z-10 text-center space-y-10 max-w-5xl px-4">
                  <Badge className="bg-white text-punch-red mb-4 text-sm px-4 py-1.5 font-bold animate-pulse">
                    🔥 LIMITED TIME OFFER
                  </Badge>
                  <h1 className="font-display text-6xl md:text-[100px] font-black italic uppercase tracking-tighter leading-[0.9] text-white">
                    First Month<br />
                    <span className="text-punch-gold text-[120px]">₹1,500</span><br />
                    <span className="text-5xl">Only</span>
                  </h1>
                  <p className="text-white/90 text-xl md:text-2xl font-medium tracking-wide max-w-2xl mx-auto leading-relaxed">
                    Full access to premium facilities. No hidden fees. No games.
                  </p>

                  <Button size="lg" className="bg-punch-gold hover:bg-yellow-500 text-black px-12 py-7 text-lg font-black shadow-2xl shadow-punch-gold/50 transition-all hover:scale-105" asChild>
                    <Link href="/join">Claim This Offer →</Link>
                  </Button>
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="left-8 w-14 h-14 border-2" />
          <CarouselNext className="right-8 w-14 h-14 border-2" />
        </Carousel>
      </section>

      {/* 2. STATS BAR - New Section */}
      <section className="relative py-20 bg-punch-black text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-punch-red/20 via-transparent to-punch-gold/20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-10 max-w-6xl mx-auto">
            <div className="text-center max-w-[140px] mx-auto">
              <div className="flex flex-col items-center justify-center space-y-2">
                <TrendingUp className="w-8 h-8 text-punch-gold" />
                <p className="text-3xl md:text-4xl font-black text-white">100%</p>
                <p className="text-white/60 text-[10px] md:text-xs uppercase tracking-widest font-semibold leading-tight">Air Conditioned</p>
              </div>
            </div>
            <div className="text-center max-w-[140px] mx-auto">
              <div className="flex flex-col items-center justify-center space-y-2">
                <Award className="w-8 h-8 text-punch-gold" />
                <p className="text-3xl md:text-4xl font-black text-white">100%</p>
                <p className="text-white/60 text-[10px] md:text-xs uppercase tracking-widest font-semibold leading-tight">Premium Equipment</p>
              </div>
            </div>
            <div className="text-center max-w-[140px] mx-auto">
              <div className="flex flex-col items-center justify-center space-y-2">
                <Users className="w-8 h-8 text-punch-gold" />
                <p className="text-3xl md:text-4xl font-black text-white">1-ON-1</p>
                <p className="text-white/60 text-[10px] md:text-xs uppercase tracking-widest font-semibold leading-tight">Personal Training</p>
              </div>
            </div>
            <div className="text-center max-w-[140px] mx-auto">
              <div className="flex flex-col items-center justify-center space-y-2">
                <Users className="w-8 h-8 text-punch-gold" />
                <p className="text-3xl md:text-4xl font-black text-white">EXPERT</p>
                <p className="text-white/60 text-[10px] md:text-xs uppercase tracking-widest font-semibold leading-tight">Trainers</p>
              </div>
            </div>
            <div className="text-center max-w-[140px] mx-auto">
              <div className="flex flex-col items-center justify-center space-y-2">
                <Star className="w-8 h-8 text-punch-gold" />
                <p className="text-3xl md:text-4xl font-black text-white">4.9</p>
                <p className="text-white/60 text-[10px] md:text-xs uppercase tracking-widest font-semibold leading-tight">Rating</p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* 3. EXPERIENCE THE POWER - Enhanced */}
      <section className="py-32 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-punch-gold to-transparent" />

        <div className="container mx-auto px-4">
          <div className="text-center mb-20 max-w-4xl mx-auto">
            <Badge className="mb-6 bg-punch-red/10 text-punch-red border-2 border-punch-red/20">WHAT WE OFFER</Badge>
            <h2 className="font-display text-5xl md:text-7xl font-black italic uppercase mb-6 leading-tight">
              Train Like Never<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-punch-red to-punch-gold">Before</span>
            </h2>
            <p className="text-muted-foreground text-xl leading-relaxed">
              Stop waiting. Start transforming. We don&apos;t just provide equipment – we deliver results. Premium facilities, expert guidance, and a community that pushes you further.
            </p>
          </div>

          {/* Enhanced Icons Grid */}
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-10">
              {[
                { icon: <div className="w-24 h-24 rounded-full border-4 border-foreground flex items-center justify-center"><span className="font-black text-3xl">ALL</span></div>, title: "Access All Areas", subtitle: "Full Facility Access" },
                { icon: <Clock className="w-24 h-24" strokeWidth={1.5} />, title: "Extended Hours", subtitle: "5 AM - 10 PM Daily" },
                { icon: <svg className="w-24 h-24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path><line x1="12" y1="16" x2="12" y2="16" strokeWidth="3" strokeLinecap="round"></line></svg>, title: "No Lock-In", subtitle: "Cancel Anytime" },
                { icon: <Users className="w-24 h-24" strokeWidth={1.5} />, title: "Group Classes", subtitle: "Expert-Led Sessions" }
              ].map((item, i) => (
                <div key={i} className="group flex flex-col items-center text-center space-y-4 p-6 rounded-2xl hover:bg-punch-red/5 transition-all hover:scale-105 cursor-pointer">
                  <div className="text-foreground group-hover:text-punch-red transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-bold text-xl mb-1">{item.title}</p>
                    <p className="text-sm text-muted-foreground">{item.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
              {[
                { icon: <svg className="w-24 h-24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="8" r="4"></circle><path d="M12 12v10"></path><path d="M8 16l4-4 4 4"></path><rect x="8" y="18" width="8" height="2" rx="1"></rect></svg>, title: "Personal Trainers", subtitle: "Certified Experts" },
                { icon: <Dumbbell className="w-24 h-24" strokeWidth={1.5} />, title: "Premium Equipment", subtitle: "Latest Technology" },
                { icon: <Droplet className="w-24 h-24" strokeWidth={1.5} />, title: "Modern Facilities", subtitle: "Showers & Lockers" },
                { icon: <Trophy className="w-24 h-24" strokeWidth={1.5} />, title: "Results Driven", subtitle: "Proven Methods" }
              ].map((item, i) => (
                <div key={i} className="group flex flex-col items-center text-center space-y-4 p-6 rounded-2xl hover:bg-punch-gold/5 transition-all hover:scale-105 cursor-pointer">
                  <div className="text-foreground group-hover:text-punch-gold transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-bold text-xl mb-1">{item.title}</p>
                    <p className="text-sm text-muted-foreground">{item.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE US - Enhanced */}
      <section className="py-32 bg-background relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <Badge className="mb-6 bg-punch-gold/10 text-punch-gold border-2 border-punch-gold/20">OUR DIFFERENCE</Badge>
            <h2 className="font-display text-5xl md:text-7xl font-black italic uppercase mb-6">
              Why <span className="text-punch-red">Punch Fitness</span>
            </h2>
            <p className="text-muted-foreground text-xl max-w-3xl mx-auto">
              We&apos;re not just another gym. We&apos;re a community of serious athletes who demand excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { icon: <Dumbbell className="w-10 h-10 text-white" />, title: "Premium Equipment", desc: "State-of-the-art machines and free weights. Everything you need, nothing you don't.", color: "punch-red" },
              { icon: <Users className="w-10 h-10 text-black" />, title: "Expert Coaching", desc: "Certified trainers who actually care about your form and progress.", color: "punch-gold" },
              { icon: <Trophy className="w-10 h-10 text-white" />, title: "Results Guaranteed", desc: "Follow the program. Put in the work. See the results. Simple.", color: "punch-red" }
            ].map((item, i) => (
              <Card key={i} className="group border-2 hover:border-punch-gold transition-all hover:shadow-2xl hover:-translate-y-2 overflow-hidden">
                <CardContent className="p-10 space-y-6">
                  <div className={`bg-${item.color} w-20 h-20 rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform`}>
                    {item.icon}
                  </div>
                  <h3 className="text-3xl font-black uppercase italic">{item.title}</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {item.desc}
                  </p>
                  <div className="pt-4">
                    <ArrowRight className="w-6 h-6 text-punch-gold group-hover:translate-x-2 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 5. MEMBERSHIP PLANS - Enhanced */}
      <section className="py-32 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.05),transparent_70%)]" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <Badge className="mb-6 bg-punch-red/10 text-punch-red border-2 border-punch-red/20">PRICING</Badge>
            <h2 className="font-display text-5xl md:text-7xl font-black italic uppercase mb-6">
              Invest In <span className="text-punch-gold">Yourself</span>
            </h2>
            <p className="text-muted-foreground text-xl">Premium facilities. No hidden fees. Real results.</p>
          </div>

          {/* Pricing Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">

            {/* GENERAL TRAINING */}
            <Card className="border-2 hover:border-punch-gold hover:shadow-2xl transition-all">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <Badge className="bg-punch-red text-white mb-3">GENERAL TRAINING</Badge>
                  <h3 className="text-2xl font-black uppercase italic">Standard Access</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 rounded-lg bg-muted/50 hover:bg-punch-gold/10 transition-colors">
                    <div>
                      <p className="font-bold">1 Month</p>
                      <p className="text-sm text-muted-foreground line-through">₹2,560</p>
                    </div>
                    <span className="text-3xl font-black text-punch-gold">₹2,500</span>
                  </div>
                  <div className="flex justify-between items-center p-4 rounded-lg bg-muted/50 hover:bg-punch-gold/10 transition-colors">
                    <div>
                      <p className="font-bold">3 Months</p>
                      <p className="text-sm text-muted-foreground line-through">₹6,060</p>
                    </div>
                    <span className="text-3xl font-black text-punch-gold">₹5,400</span>
                  </div>
                  <div className="flex justify-between items-center p-4 rounded-lg bg-muted/50 hover:bg-punch-gold/10 transition-colors">
                    <div>
                      <p className="font-bold">6 Months</p>
                      <p className="text-sm text-muted-foreground line-through">₹10,000</p>
                    </div>
                    <span className="text-3xl font-black text-punch-gold">₹8,000</span>
                  </div>
                  <div className="flex justify-between items-center p-4 rounded-lg bg-punch-red/10 border-2 border-punch-red/30">
                    <div>
                      <p className="font-bold">1 Year</p>
                      <p className="text-sm text-muted-foreground line-through">₹15,000</p>
                      <Badge className="mt-1 bg-green-500/10 text-green-600 border-green-500/20">Save ₹4,500</Badge>
                    </div>
                    <span className="text-3xl font-black text-punch-red">₹10,500</span>
                  </div>
                </div>
                <Button className="w-full mt-6 bg-punch-red hover:bg-punch-red/90 text-white" size="lg" asChild>
                  <Link href="/join">Join Now</Link>
                </Button>
              </CardContent>
            </Card>

            {/* COUPLE GENERAL TRAINING */}
            <Card className="border-2 hover:border-punch-gold hover:shadow-2xl transition-all">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <Badge className="bg-punch-gold text-black mb-3">COUPLE TRAINING</Badge>
                  <h3 className="text-2xl font-black uppercase italic">2 People - Shared Access</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 rounded-lg bg-muted/50 hover:bg-punch-gold/10 transition-colors">
                    <div>
                      <p className="font-bold">1 Month</p>
                      <p className="text-sm text-muted-foreground line-through">₹4,600</p>
                    </div>
                    <span className="text-3xl font-black text-punch-gold">₹4,000</span>
                  </div>
                  <div className="flex justify-between items-center p-4 rounded-lg bg-muted/50 hover:bg-punch-gold/10 transition-colors">
                    <div>
                      <p className="font-bold">3 Months</p>
                      <p className="text-sm text-muted-foreground line-through">₹10,000</p>
                    </div>
                    <span className="text-3xl font-black text-punch-gold">₹9,000</span>
                  </div>
                  <div className="flex justify-between items-center p-4 rounded-lg bg-muted/50 hover:bg-punch-gold/10 transition-colors">
                    <div>
                      <p className="font-bold">6 Months</p>
                      <p className="text-sm text-muted-foreground line-through">₹18,000</p>
                    </div>
                    <span className="text-3xl font-black text-punch-gold">₹16,000</span>
                  </div>
                  <div className="flex justify-between items-center p-4 rounded-lg bg-punch-gold/10 border-2 border-punch-gold/30">
                    <div>
                      <p className="font-bold">1 Year</p>
                      <p className="text-sm text-muted-foreground line-through">₹25,000</p>
                      <Badge className="mt-1 bg-green-500/10 text-green-600 border-green-500/20">Save ₹7,500</Badge>
                    </div>
                    <span className="text-3xl font-black text-punch-gold">₹17,500</span>
                  </div>
                </div>
                <Button className="w-full mt-6 bg-punch-gold hover:bg-punch-gold/90 text-black font-bold" size="lg" asChild>
                  <Link href="/join">Join as Couple</Link>
                </Button>
              </CardContent>
            </Card>

            {/* PERSONAL TRAINING */}
            <Card className="border-4 border-punch-red shadow-2xl relative bg-gradient-to-br from-punch-red/5 to-red-700/5">
              <Badge className="absolute -top-4 left-1/2 -translate-x-1/2 bg-punch-gold text-black text-sm px-6 py-2 font-black shadow-lg">
                ⭐ MOST POPULAR
              </Badge>
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <Badge className="bg-black text-white mb-3">PERSONAL TRAINING</Badge>
                  <h3 className="text-2xl font-black uppercase italic">1-on-1 Coaching</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 rounded-lg bg-muted/50 hover:bg-punch-gold/10 transition-colors">
                    <div>
                      <p className="font-bold">1 Month</p>
                      <p className="text-sm text-muted-foreground line-through">₹8,000</p>
                    </div>
                    <span className="text-3xl font-black text-punch-gold">₹7,200</span>
                  </div>
                  <div className="flex justify-between items-center p-4 rounded-lg bg-muted/50 hover:bg-punch-gold/10 transition-colors">
                    <div>
                      <p className="font-bold">3 Months</p>
                      <p className="text-sm text-muted-foreground line-through">₹20,000</p>
                    </div>
                    <span className="text-3xl font-black text-punch-gold">₹16,000</span>
                  </div>
                  <div className="flex justify-between items-center p-4 rounded-lg bg-muted/50 hover:bg-punch-gold/10 transition-colors">
                    <div>
                      <p className="font-bold">6 Months</p>
                      <p className="text-sm text-muted-foreground line-through">₹35,000</p>
                    </div>
                    <span className="text-3xl font-black text-punch-gold">₹28,000</span>
                  </div>
                  <div className="flex justify-between items-center p-4 rounded-lg bg-punch-red/20 border-2 border-punch-red/50">
                    <div>
                      <p className="font-bold">1 Year</p>
                      <p className="text-sm text-muted-foreground line-through">₹50,000</p>
                      <Badge className="mt-1 bg-green-500/10 text-green-600 border-green-500/20">Save ₹8,000</Badge>
                    </div>
                    <span className="text-3xl font-black text-punch-red">₹42,000</span>
                  </div>
                </div>
                <Button className="w-full mt-6 bg-punch-red hover:bg-punch-red/90 text-white font-bold" size="lg" asChild>
                  <Link href="/join">Get Personal Training</Link>
                </Button>
              </CardContent>
            </Card>

            {/* CERTIFIED PERSONAL TRAINING */}
            <Card className="border-2 hover:border-punch-gold hover:shadow-2xl transition-all bg-gradient-to-br from-punch-gold/5 to-yellow-700/5">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <Badge className="bg-gradient-to-r from-punch-gold to-yellow-600 text-black mb-3">CERTIFIED PT</Badge>
                  <h3 className="text-2xl font-black uppercase italic">Elite Coaching</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 rounded-lg bg-muted/50 hover:bg-punch-gold/10 transition-colors">
                    <div>
                      <p className="font-bold">1 Month</p>
                    </div>
                    <span className="text-3xl font-black text-punch-gold">₹10,000</span>
                  </div>
                  <div className="flex justify-between items-center p-4 rounded-lg bg-muted/50 hover:bg-punch-gold/10 transition-colors">
                    <div>
                      <p className="font-bold">3 Months</p>
                      <p className="text-sm text-muted-foreground line-through">₹25,000</p>
                    </div>
                    <span className="text-3xl font-black text-punch-gold">₹22,500</span>
                  </div>
                  <div className="flex justify-between items-center p-4 rounded-lg bg-muted/50 hover:bg-punch-gold/10 transition-colors">
                    <div>
                      <p className="font-bold">6 Months</p>
                      <p className="text-sm text-muted-foreground line-through">₹40,000</p>
                    </div>
                    <span className="text-3xl font-black text-punch-gold">₹32,000</span>
                  </div>
                  <div className="flex justify-between items-center p-4 rounded-lg bg-punch-gold/20 border-2 border-punch-gold/50">
                    <div>
                      <p className="font-bold">1 Year</p>
                      <p className="text-sm text-muted-foreground line-through">₹65,000</p>
                      <Badge className="mt-1 bg-green-500/10 text-green-600 border-green-500/20">Save ₹19,500</Badge>
                    </div>
                    <span className="text-3xl font-black text-punch-gold">₹45,500</span>
                  </div>
                </div>
                <Button className="w-full mt-6 bg-gradient-to-r from-punch-gold to-yellow-600 hover:opacity-90 text-black font-bold" size="lg" asChild>
                  <Link href="/join">Premium Training</Link>
                </Button>
              </CardContent>
            </Card>

          </div>

          {/* Important Notice */}
          <div className="mt-12 text-center">
            <Badge className="bg-punch-red text-white px-6 py-3 text-sm">
              🔥 ONCE FILLED, THEY ARE GONE & WON'T RETURN! 🔥
            </Badge>
          </div>

        </div>
      </section>

      {/* 6. TESTIMONIALS - Enhanced */}
      <section className="py-32 bg-punch-black text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-punch-red/10 via-transparent to-punch-gold/10" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <Badge className="mb-6 bg-punch-gold text-black">SUCCESS STORIES</Badge>
            <h2 className="font-display text-5xl md:text-7xl font-black italic uppercase mb-6">
              Real <span className="text-punch-gold">Results</span>
            </h2>
            <p className="text-white/70 text-xl">Transformations that speak louder than words</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { name: "Arun K.", role: "Lost 15kg in 3 months", review: "Best decision I ever made. The trainers pushed me past my limits and the results speak for themselves. Can't imagine training anywhere else." },
              { name: "Priya M.", role: "Marathon Finisher", review: "Punch Fitness prepared me for my first marathon. The structured training and supportive community made all the difference. Incredible experience!" },
              { name: "Rahul S.", role: "Strength Athlete", review: "Finally found a gym that takes training seriously. No fluff, just results. The equipment is top-notch and coaches are phenomenal." }
            ].map((testimonial, i) => (
              <Card key={i} className="border-2 border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all group">
                <CardContent className="p-8 space-y-6">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 fill-punch-gold text-punch-gold" />
                    ))}
                  </div>
                  <p className="text-white/90 italic text-lg leading-relaxed">&quot;{testimonial.review}&quot;</p>
                  <div className="border-t border-white/20 pt-6">
                    <p className="font-bold text-xl text-white">{testimonial.name}</p>
                    <p className="text-punch-gold font-semibold">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FINAL CTA - Enhanced */}
      <section className="py-32 relative overflow-hidden">
        {/* Background Image */}
        <Image
          src="/cta-background.png"
          alt="Premium Gym Interior"
          fill
          className="object-cover brightness-[0.3]"
        />
        {/* Overlay Gradients */}
        <div className="absolute inset-0 bg-gradient-to-br from-punch-red/60 via-black/50 to-black/70" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.15),transparent_70%)]" />

        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="font-display text-5xl md:text-8xl font-black italic uppercase mb-8 leading-tight text-white">
            Ready To Start?<br />
            <span className="text-punch-gold">Let&apos;s Go.</span>
          </h2>
          <p className="text-white/90 max-w-3xl mx-auto mb-12 text-2xl font-medium leading-relaxed">
            Stop thinking. Start training. Your transformation begins today.
          </p>
          <div className="flex gap-6 justify-center flex-wrap">
            <Button size="lg" className="bg-punch-gold hover:bg-yellow-500 text-black px-16 py-8 text-2xl font-black shadow-2xl shadow-punch-gold/50 transition-all hover:scale-105" asChild>
              <Link href="/join">Join The Movement <ArrowRight className="ml-3 w-8 h-8" /></Link>
            </Button>
            <Button size="lg" variant="outline" className="border-4 border-white bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-black px-16 py-8 text-2xl font-black transition-all hover:scale-105" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main >
  );
}
