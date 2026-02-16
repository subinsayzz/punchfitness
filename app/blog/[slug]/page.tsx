import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Image from "next/image";
import { notFound } from "next/navigation";
import { PortableText } from "next-sanity";
import { groq } from "next-sanity";

// Query for specific post
const POST_QUERY = groq`
  *[_type == "post" && slug.current == $slug][0] {
    title,
    mainImage,
    publishedAt,
    body
  }
`;

interface PostProps {
    params: {
        slug: string;
    };
}

export const revalidate = 60;

export default async function BlogPost({ params }: PostProps) {
    let post = null;
    try {
        post = await client.fetch(POST_QUERY, { slug: params.slug });
    } catch (error) {
        console.warn("Failed to fetch post:", error);
        // Fallback for build time without env vars
    }

    if (!post) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-white text-black">
            <Navbar />

            <article className="pt-20">
                {/* Header Image */}
                {post.mainImage && (
                    <div className="relative w-full h-[60vh] max-h-[600px] mb-12">
                        <Image
                            src={urlFor(post.mainImage).url()}
                            alt={post.title}
                            fill
                            className="object-cover"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                        {/* Keep dark gradient at bottom for text readability over image if text was there, 
                  but we put title below or over? 
                  Design choice: Title ON image for drama, or BELOW for clean blog look?
                  Let's put Title ON image as before, so we need white text there. */}

                        <div className="absolute bottom-0 left-0 w-full p-4 md:p-12 text-white">
                            <div className="container mx-auto">
                                <h1 className="font-display text-4xl md:text-6xl font-bold italic uppercase mb-4 max-w-4xl drop-shadow-xl">
                                    {post.title}
                                </h1>
                                <div className="text-punch-gold font-bold uppercase tracking-wider shadow-black drop-shadow-md">
                                    {new Date(post.publishedAt).toLocaleDateString()}
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Content */}
                <div className="container mx-auto px-4 max-w-3xl pb-24 prose prose-lg prose-headings:font-display prose-headings:italic prose-a:text-punch-red prose-strong:text-black text-gray-700">
                    <PortableText value={post.body} />
                </div>
            </article>

            <Footer />
        </main>
    );
}
