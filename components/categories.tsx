"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card, CardContent } from "@/components/ui/card";
import { Laptop, Smartphone, Watch, Headphones } from "lucide-react";

import Link from "next/link";

const categories = [
  {
    name: "Electronics",
    icon: Laptop,
    description: "Latest gadgets and tech innovations",
    link: "/electronics",
  },
  {
    name: "Smartphones",
    icon: Smartphone,
    description: "Cutting-edge mobile devices",
    link: "/smartphones",
  },
  {
    name: "Wearables",
    icon: Watch,
    description: "Smart watches and fitness trackers",
    link: "/watches",
  },
  {
    name: "Audio",
    icon: Headphones,
    description: "Premium audio equipment",
    link: "/audio",
  },
];

export function Categories() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight">
            Shop by Category
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Browse our wide selection of products by category
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <Link href={category.link || "#"}>
                <Card className="group cursor-pointer hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <category.icon className="h-8 w-8 text-primary transition-transform group-hover:scale-110" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">
                      {category.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {category.description}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}