"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight, TrendingUp } from "lucide-react";

export default function BlogPage() {
    const featured = {
        title: "The Truth About Muscle Building: Science vs. Myths",
        excerpt: "Separating fact from fiction in the world of strength training. What really matters for hypertrophy and what's just gym bro science.",
        image: "/hero-bg.png",
        category: "Training",
        date: "Feb 10, 2026",
        readTime: "8 min read",
        slug: "muscle-building-science"
    };

    const posts = [
        {
            title: "Progressive Overload: The Key to Continuous Gains",
            excerpt: "Understanding the principle that drives all strength and muscle development.",
            image: "/hero-bg.png",
            category: "Training",
            date: "Feb 8, 2026",
            readTime: "6 min read",
            slug: "progressive-overload"
        },
        {
            title: "Nutrition Timing: Does It Really Matter?",
            excerpt: "The science behind pre and post-workout nutrition strategies.",
            image: "/hero-bg.png",
            category: "Nutrition",
            date: "Feb 5, 2026",
            readTime: "7 min read",
            slug: "nutrition-timing"
        },
        {
            title: "Recovery: The Most Underrated Part of Training",
            excerpt: "Why rest days and sleep are just as important as your workouts.",
            image: "/hero-bg.png",
            category: "Recovery",
            date: "Feb 1, 2026",
            readTime: "5 min read",
            slug: "recovery-importance"
        },
        {
            title: "Building Mental Toughness in the Gym",
            excerpt: "How consistent training develops discipline that transfers to all areas of life.",
            image: "/hero-bg.png",
            category: "Mindset",
            date: "Jan 28, 2026",
            readTime: "6 min read",
            slug: "mental-toughness"
        },
        {
            title: "Strength Standards: Where Do You Rank?",
            excerpt: "Realistic benchmarks for assessing your progress in major lifts.",
            image: "/hero-bg.png",
            category: "Training",
            date: "Jan 25, 2026",
            readTime: "9 min read",
            slug: "strength-standards"
        },
        {
            title: "The Beginner's Guide to Compound Movements",
            excerpt: "Master the foundational exercises that build real strength.",
            image: "/hero-bg.png",
            category: "Beginner",
            date: "Jan 20, 2026",
            readTime: "10 min read",
            slug: "compound-movements"
        }
    ];

    const categories = ["All", "Training", "Nutrition", "Recovery", "Mindset", "Beginner"];

    return (
        <main className="min-h-screen flex flex-col bg-background">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-24 bg-gradient-to-br from-punch-black to-neutral-900 text-white overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <Image src="/hero-bg.png" alt="Background" fill className="object-cover" />
                </div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <Badge className="mb-6 bg-punch-gold text-black">KNOWLEDGE BASE</Badge>
                    <h1 className="font-display text-5xl md:text-7xl font-black italic uppercase mb-6">
                        The <span className="text-punch-gold">Blog</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Real training advice. No fluff. Evidence-based strategies for strength, nutrition, and performance.
                    </p>
                </div>
            </section>

            {/* Category Filter */}
            <section className="py-8 bg-muted/30 border-y sticky top-0 z-40 backdrop-blur-sm">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap gap-3 justify-center">
                        {categories.map((category, i) => (
                            <Button
                                key={i}
                                variant={i === 0 ? "default" : "outline"}
                                className={i === 0 ? "bg-punch-red hover:bg-red-700" : ""}
                            >
                                {category}
                            </Button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Post */}
            <section className="py-16 bg-background">
                <div className="container mx-auto px-4">
                    <div className="flex items-center gap-2 mb-8">
                        <TrendingUp className="w-6 h-6 text-punch-red" />
                        <h2 className="text-2xl font-bold uppercase italic">Featured Article</h2>
                    </div>

                    <Card className="border-2 border-punch-gold overflow-hidden shadow-2xl hover:shadow-3xl transition-all group">
                        <div className="grid md:grid-cols-2">
                            <div className="relative h-80 md:h-auto">
                                <Image
                                    src={featured.image}
                                    alt={featured.title}
                                    fill
                                    className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                                />
                            </div>
                            <CardContent className="p-12 flex flex-col justify-center space-y-6">
                                <div className="flex items-center gap-4 flex-wrap">
                                    <Badge className="bg-punch-red">{featured.category}</Badge>
                                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                        <div className="flex items-center gap-1">
                                            <Calendar className="w-4 h-4" />
                                            {featured.date}
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Clock className="w-4 h-4" />
                                            {featured.readTime}
                                        </div>
                                    </div>
                                </div>

                                <h3 className="font-display text-3xl font-black italic uppercase leading-tight">
                                    {featured.title}
                                </h3>

                                <p className="text-muted-foreground text-lg">
                                    {featured.excerpt}
                                </p>

                                <Button size="lg" className="bg-punch-red hover:bg-red-700 w-fit" asChild>
                                    <Link href={`/blog/${featured.slug}`}>
                                        Read Article <ArrowRight className="ml-2 w-5 h-5" />
                                    </Link>
                                </Button>
                            </CardContent>
                        </div>
                    </Card>
                </div>
            </section>

            {/* Blog Grid */}
            <section className="py-16 bg-muted/30">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl font-bold uppercase italic mb-8">Latest Articles</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {posts.map((post, i) => (
                            <Card key={i} className="border-2 overflow-hidden hover:border-punch-gold hover:shadow-xl transition-all group">
                                <div className="relative h-56 overflow-hidden">
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                                    />
                                    <Badge className="absolute top-4 left-4 bg-punch-red">
                                        {post.category}
                                    </Badge>
                                </div>
                                <CardContent className="p-6 space-y-4">
                                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                        <div className="flex items-center gap-1">
                                            <Calendar className="w-4 h-4" />
                                            {post.date}
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Clock className="w-4 h-4" />
                                            {post.readTime}
                                        </div>
                                    </div>

                                    <h3 className="font-bold text-xl leading-tight group-hover:text-punch-red transition-colors">
                                        {post.title}
                                    </h3>

                                    <p className="text-muted-foreground text-sm">
                                        {post.excerpt}
                                    </p>

                                    <Button variant="ghost" className="group-hover:text-punch-red p-0 h-auto font-semibold" asChild>
                                        <Link href={`/blog/${post.slug}`}>
                                            Read More <ArrowRight className="ml-1 w-4 h-4" />
                                        </Link>
                                    </Button>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <Button variant="outline" size="lg">
                            Load More Articles
                        </Button>
                    </div>
                </div>
            </section>

            {/* Newsletter CTA */}
            <section className="py-24 bg-gradient-to-br from-punch-black to-neutral-900 text-white">
                <div className="container mx-auto px-4 text-center max-w-3xl">
                    <h2 className="font-display text-4xl md:text-5xl font-black italic uppercase mb-6">
                        Stay <span className="text-punch-gold">Updated</span>
                    </h2>
                    <p className="text-gray-300 mb-10 text-lg">
                        Get our weekly newsletter with training tips, nutrition advice, and member success stories.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1 px-6 py-4 rounded-lg bg-white/10 border-2 border-white/20 text-white placeholder:text-gray-400 focus:outline-none focus:border-punch-gold"
                        />
                        <Button size="lg" className="bg-punch-red hover:bg-red-700 px-8">
                            Subscribe
                        </Button>
                    </div>
                    <p className="text-sm text-gray-400 mt-4">
                        No spam. Unsubscribe anytime.
                    </p>
                </div>
            </section>

            <Footer />
        </main>
    );
}
