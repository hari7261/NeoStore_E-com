"use client";

import { HeroSection } from "@/components/hero-section";
import { FeaturedProducts } from "@/components/featured-products";
import { Categories } from "@/components/categories";
import { Newsletter } from "@/components/newsletter";

export default function Home() {
  return (
    <div className="flex flex-col gap-16 pb-8">
      <HeroSection />
      <FeaturedProducts />
      <Categories />
      <Newsletter />
    </div>
  );
}
