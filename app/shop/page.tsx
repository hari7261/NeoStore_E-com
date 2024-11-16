"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";

const products = [
  {
    id: 1,
    name: "Quantum Watch X",
    price: 299.99,
    category: "Wearables",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    description: "Next-gen smartwatch with holographic display",
    link: "https://www.amazon.com/Fossil-Gen-5-Smartwatch-FTW4025/dp/B082X9R7KR"
  },
  {
    id: 2,
    name: "Neo Pods Pro",
    price: 199.99,
    category: "Audio",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
    description: "Premium wireless earbuds with noise cancellation",
    link: "https://www.amazon.com/Apple-AirPods-Pro-Wireless-Earphones/dp/B07XVRRR7R"
  },
  {
    id: 3,
    name: "Smart Lens AR",
    price: 499.99,
    category: "Wearables",
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f",
    description: "Augmented reality contact lenses",
    link: "https://www.amazon.com/Meta-Quest-2-Advanced-All-in-One-VR-Headset/dp/B097CWCXRY"
  },
  {
    id: 4,
    name: "Holo Display 4K",
    price: 899.99,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f",
    description: "4K holographic display for immersive viewing",
    link: "https://www.amazon.com/Samsung-QN90A-4K-Smart-TV-55-Inch/dp/B093R6R7R7"
  },
  {
    id: 5,
    name: "Smartphone X Pro",
    price: 999.99,
    category: "Smartphones",
    image: "https://images.unsplash.com/photo-1542744095-1b6d3c14c5b0",
    description: "Flagship smartphone with cutting-edge features",
    link: "https://www.amazon.com/Apple-iPhone-13-Pro-64GB-Graphite/dp/B09G9R8WJF"
  },
  {
    id: 6,
    name: "Gaming Laptop Z",
    price: 1499.99,
    category: "Computers",
    image: "https://images.unsplash.com/photo-1584697964192-4e1c0f2b0f0d",
    description: "High-performance gaming laptop with RTX graphics",
    link: "https://www.amazon.com/MSI-GF63-Thin-Performance-Gaming-Laptop/dp/B082X9R7KR"
  },
  {
    id: 7,
    name: "VR Headset 360",
    price: 399.99,
    category: "Virtual Reality",
    image: "https://images.unsplash.com/photo-1517430816045-df4d2a3c8b0e",
    description: "Immersive virtual reality headset for gaming",
    link: "https://www.amazon.com/Oculus-Quest-2-Advanced-All-in-One-VR-Headset/dp/B097CWCXRY"
  },
  {
    id: 8,
    name: "Smart Home Hub",
    price: 199.99,
    category: "Smart Home",
    image: "https://images.unsplash.com/photo-1593642632780-8b12e3b5e6d1",
    description: "Central hub for controlling smart home devices",
    link: "https://www.amazon.com/Samsung-SmartThings-Hub-3rd-Generation/dp/B082X9R7KR"
  },
  {
    id: 9,
    name: "Wireless Charger Pro",
    price: 49.99,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1593642632780-8b12e3b5e6d1",
    description: "Fast wireless charging pad for all devices",
    link: "https://www.amazon.com/Belkin-Boost-Up-Wireless-Charging-Pad/dp/B082X9R7KR"
  },
  {
    id: 10,
    name: "Portable SSD 1TB",
    price: 129.99,
    category: "Storage",
    image: " https://images.unsplash.com/photo-1584697964192-4e1c0f2b0f0d",
    description: "High-speed portable SSD for data storage",
    link: "https://www.amazon.com/Samsung-T5-Portability-MU-PA1T0B/"

  },
  {
    id: 11,
    name: "Smart Refrigerator",
    price: 2499.99,
    category: "Home Appliances",
    image: "https://images.unsplash.com/photo-1556740749-887f6717d7e4",
    description: "Smart refrigerator with touchscreen and Wi-Fi",
    link: "https://www.amazon.com/Samsung-27-4-Cu-Ft-French-Refrigerator/dp/B08F7FQK5D"
  },
  {
    id: 12,
    name: "Fitness Tracker Pro",
    price: 149.99,
    category: "Wearables",
    image: "https://images.unsplash.com/photo-1612838912264-7e8b5b0e2c5c",
    description: "Advanced fitness tracker with heart rate monitor",
    link: "https://www.amazon.com/Fitbit-Charge-Fitness-Activity-Tracker/dp/B08DFQ3F3D"
  },
  {
    id: 13,
    name: "Smart TV 55 inch",
    price: 799.99,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1593642632780-8b12e3b5e6d1",
    description: "55 inch 4K smart TV with streaming apps",
    link: "https://www.amazon.com/Sony-X900H-55-Inch-4K-Ultra-HD/dp/B08F7FQK5D"
  },
  {
    id: 14,
    name: "Bluetooth Speaker",
    price: 99.99,
    category: "Audio",
    image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
    description: "Portable Bluetooth speaker with rich sound",
    link: "https://www.amazon.com/JBL-Flip-5-Waterproof-Speaker/dp/B07T8Y5F5D"
  },
  {
    id: 15,
    name: "Smart Thermostat",
    price: 129.99,
    category: "Smart Home",
    image: "https://images.unsplash.com/photo-1584697964192-4e1c0f2b0f0d",
    description: "Wi-Fi enabled thermostat for energy savings",
    link: "https://www.amazon.com/Nest-Learning-Thermostat-3rd-Generation/dp/B0131RG6VK"
  },
  {
    id: 16,
    name: "Drone X Pro",
    price: 799.99,
    category: "Drones",
    image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
    description: "High-performance drone with 4K camera",
    link: "https://www.amazon.com/DJI-Mavic-Air-2-Drone/dp/B08B1FQK5D"
  },
  {
    id: 17,
    name: "Smart Lock",
    price: 199.99,
    category: "Smart Home",
    image: "https://images.unsplash.com/photo-1584697964192-4e1c0f2b0f0d",
    description: "Keyless smart lock with mobile access",
    link: "https://www.amazon.com/Level-Lock-Smart-Deadbolt/dp/B07Z5FQK5D"
  },
  {
    id: 18,
    name: "Action Camera 4K",
    price: 299.99,
    category: "Cameras",
    image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
    description: "Compact action camera with 4K video recording",
    link: "https://www.amazon.com/GoPro-HERO9-Black-Action-Camera/dp/B08F7FQK5D"
  },
  {
    id: 19,
    name: "Wireless Earbuds",
    price: 89.99,
    category: "Audio",
    image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
    description: "True wireless earbuds with touch controls",
    link: "https://www.amazon.com/Sony-WF-1000XM 4-Wireless-Earbuds/dp/B08F7FQK5D"
  },
  {
    id: 20,
    name: "Smart Scale",
    price: 49.99,
    category: "Health",
    image: "https://images.unsplash.com/photo-1584697964192-4e1c0f2b0f0d",
    description: "Smart scale with body composition analysis",
    link: "https://www.amazon.com/Eufy-Bluetooth-Composition-Measurement-Smartphone/dp/B07Z5FQK5D"
  },
  {
    id: 21,
    name: "Electric Toothbrush",
    price: 79.99,
    category: "Health",
    image: "https://images.unsplash.com/photo-1584697964192-4e1c0f2b0f0d",
    description: "Smart electric toothbrush with app connectivity",
    link: "https://www.amazon.com/Oral-B-Gen-3-Connected-Toothbrush/dp/B08F7FQK5D"
  },
  {
    id: 22,
    name: "Smart Air Purifier",
    price: 249.99,
    category: "Home Appliances",
    image: "https://images.unsplash.com/photo-1584697964192-4e1c0f2b0f0d",
    description: "Air purifier with smart features and app control",
    link: "https://www.amazon.com/Levoit-Purifier-Home-Quiet-Filter/dp/B08F7FQK5D"
  },
  {
    id: 23,
    name: "Smart Light Bulb",
    price: 19.99,
    category: "Smart Home",
    image: "https://images.unsplash.com/photo-1584697964192-4e1c0f2b0f0d",
    description: "Wi-Fi enabled light bulb with color options",
    link: "https://www.amazon.com/Philips-Hue-White-Color-Ambiance/dp/B07Z5FQK5D"
  },
  {
    id: 24,
    name: "Portable Projector",
    price: 299.99,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1584697964192-4e1c0f2b0f0d",
    description: "Compact projector for on-the-go presentations",
    link: "https://www.amazon.com/AUN-Portable-Projector-Support-1080P/dp/B08F7FQK5D"
  },
  {
    id: 25,
    name: "Smart Garden Kit",
    price: 149.99,
    category: "Gardening",
    image: "https://images.unsplash.com/photo-1584697964192-4e1c0f2b0f0d",
    description: "Indoor garden kit with smart monitoring",
    link: "https://www.amazon.com/Click-and-Grow-Smart-Garden/dp/B08F7FQK5D"
  },
  {
    id: 26,
    name: "Smart Pet Feeder",
    price: 129.99,
    category: "Pet Care",
    image: "https://images.unsplash.com/photo-1584697964192-4e1c0f2b0f0d",
    description: "Automated pet feeder with app control",
    link: "https://www.amazon.com/PetSafe-Smart-Pet-Feeder/dp/B08F7FQK5D"
  },
  {
    id: 27,
    name: "Smart Coffee Maker",
    price: 199.99,
    category: "Home Appliances",
    image: "https://images.unsplash.com/photo-1584697964192-4e1c0f2b0f0d",
    description: "Wi-Fi enabled coffee maker for brewing on demand",
    link: "https://www.amazon.com/Smarter-Coffee-2nd-Generation/dp/B08F7FQK5D"
  },
  {
    id: 28,
    name: "Smart Mirror",
    price: 499.99,
    category: "Home Decor",
    image: "https://images.unsplash.com/photo-1584697964192-4e1c0f2b0f0d",
    description: "Interactive mirror with smart features and display",
    link: "https://www.amazon.com/HiMirror-Smart-Mirror-Home-Decor/dp/B08F7FQK5D"
  },
  {
    id: 29,
    name: "Smart Yoga Mat",
    price: 99.99,
    category: "Fitness",
    image: "https://images.unsplash.com/photo-1584697964192-4e1c0f2b0f0d",
    description: "Yoga mat with built-in sensors for feedback",
    link: "https://www.amazon.com/Smart-Yoga-Mat/dp/B08F7FQK5D"
  },
  {
    id: 30,
    name: "Smart Water Bottle",
    price: 39.99,
    category: "Health",
    image: "https://images.unsplash.com/photo-1584697964192-4e1c0f2b0f0d",
    description: "Water bottle that tracks hydration levels",
    link: "https://www.amazon.com/Smart-Water-Bottle/dp/B08F7FQK5D"
  },
  {
    id: 31,
    name: "Smart Sleep Mask",
    price: 59.99,
    category: "Health",
    image: "https://images.unsplash.com/photo-1584697964192-4e1c0f2b0f0d",
    description: "Sleep mask with built-in speakers for relaxation",
    link: "https://www.amazon.com/Smart-Sleep-Mask/dp/B08F7FQK5D"
  },
  {
    id: 32,
    name: "Smart Bike Lock",
    price: 89.99,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1584697964192-4e1c0f2b0f0d",
    description: "Bluetooth-enabled bike lock for security",
    link: "https://www.amazon.com/Smart-Bike-Lock/dp/B08F7FQK5D"
  },
  {
    id: 33,
    name: "Smart Luggage",
    price: 249.99,
    category: "Travel",
    image: "https://images.unsplash.com/photo-1584697964192-4e1c0f2b0f0d",
    description: "Luggage with GPS tracking and charging ports",
    link: "https://www.amazon.com/Smart-Luggage/dp/B08F7FQK5D"
  },
  {
    id: 34,
    name: "Smart Umbrella",
    price: 49.99,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1584697964192-4e1c0f2b0f0d",
    description: "Umbrella that alerts you of rain via app",
    link: "https://www.amazon.com/Smart-Umbrella/dp/B08F7FQK5D"
  },
  {
    id: 35,
    name: "Smart Pet Collar",
    price: 79.99,
    category: "Pet Care",
    image: "https://images.unsplash.com/photo-1584697964192-4e1c0f2b0f0d",
    description: "GPS-enabled collar for tracking pets",
    link: "https://www.amazon.com/Smart-Pet-Collar/dp/B08F7FQK5D"
  },
  {
    id: 36,
    name: "Smart Air Fryer",
    price: 149.99,
    category: "Home Appliances",
    image: "https://images.unsplash.com/photo-1584697964192-4e1c0f2b0f0d",
    description: "Air fryer with app control for healthy cooking",
    link: "https://www.amazon.com/Smart-Air-Fryer/dp/B08F7FQK5D"
  },
  {
    id: 37,
    name: "Smart Vacuum Cleaner",
    price: 299.99,
    category: "Home Appliances",
    image: "https://images.unsplash.com/photo-1584697964192-4e1c0f2b0f0d",
    description: "Robot vacuum with smart mapping and scheduling",
    link: "https://www.amazon.com/Smart-Vacuum-Cleaner/dp/B08F7FQK5D"
  },
  {
    id: 38,
    name: "Smart Doorbell",
    price: 199.99,
    category: "Smart Home",
    image: "https://images.unsplash.com/photo-1584697964192-4e1c0f2b0f0d",
    description: "Video doorbell with motion detection and alerts",
    link: "https://www.amazon.com/Smart-Doorbell/dp/B08F7FQK5D"
  },
  {
    id: 39,
    name: "Smart Weather Station",
    price: 129.99,
    category: "Home",
    image: "https://images.unsplash.com/photo-1584697964192-4e1c0f2b0f0d",
    description: "Home weather station with real-time updates",
    link: "https://www.amazon.com/Smart-Weather-Station/dp/B08F7FQK5D"
  },
  {
    id: 40,
    name: "Smart Pet Camera",
    price: 149.99,
    category: "Pet Care",
    image: "https://images.unsplash.com/photo-1584697964192-4e1c0f2b0f0d",
    description: "Camera for monitoring pets with treat dispenser",
    link: "https://www.amazon.com/Smart-Pet-Camera/dp/B08F7FQK5D"
  }
];

export default function Shop() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesCategory = category === "all" || product.category === category;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div className="flex-1 max-w-sm">
            <Input
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <Select value={category} onValueChange={setCategory}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="Electronics">Electronics</SelectItem>
              <SelectItem value="Wearables">Wearables</SelectItem>
              <SelectItem value="Audio">Audio</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              ref={ref}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden group">
                <CardContent className="p-0">
                  <div className="relative aspect-square">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold">{product.name}</h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      {product.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="font-bold">
                        ${product.price.toFixed(2)}
                      </span>
                      <Button size="sm" className="group">
                        Add to Cart
                        <ShoppingCart className="ml-2 h-4 w-4 transition-transform group-hover:scale-110" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}