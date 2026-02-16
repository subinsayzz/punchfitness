import { groq } from "next-sanity";

export const PRICING_QUERY = groq`
  *[_type == "pricing"] | order(currentPrice asc) {
    _id,
    tierName,
    currentPrice,
    standardPrice,
    billingPeriod,
    features,
    isPromo
  }
`;

export const TRAINERS_QUERY = groq`
  *[_type == "trainer"] {
    _id,
    name,
    "slug": slug.current,
    "imageUrl": image.asset->url,
    bio,
    specialties
  }
`;

export const POSTS_QUERY = groq`
  *[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    "mainImage": mainImage.asset->url,
    publishedAt,
    body
  }
`;
