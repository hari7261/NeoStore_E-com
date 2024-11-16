import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Shield, Rocket, Users, Clock, Globe } from "lucide-react";
import Link from "next/link";

export default function About() {
  const features = [
    {
      icon: <Zap className="h-6 w-6 text-purple-500" />,
      title: "AI-Powered Shopping",
      description: "Personalized recommendations using cutting-edge machine learning algorithms"
    },
    {
      icon: <Shield className="h-6 w-6 text-blue-500" />,
      title: "Quantum-Safe Security",
      description: "Next-generation encryption protecting your data for the future"
    },
    {
      icon: <Rocket className="h-6 w-6 text-red-500" />,
      title: "Instant Delivery",
      description: "Advanced logistics network for lightning-fast shipping"
    },
    {
      icon: <Globe className="h-6 w-6 text-green-500" />,
      title: "Sustainable Tech",
      description: "Carbon-neutral operations and eco-friendly packaging"
    }
  ];

  const stats = [
    { number: "1M+", label: "Happy Customers" },
    { number: "99.9%", label: "Uptime" },
    { number: "150+", label: "Countries Served" },
    { number: "24/7", label: "AI Support" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/80">
      {/* Hero Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500 mb-6">
            Shaping the Future of Commerce
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Welcome to NeoStore, where tomorrow's shopping experience meets today's reality.
            We're not just another e-commerce platform – we're your gateway to the future of retail.
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-12 bg-black/5 backdrop-blur-lg">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-primary">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Our Vision</h2>
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-lg">
              At NeoStore, we envision a world where technology and commerce converge to create 
              unprecedented shopping experiences. Our platform leverages quantum computing, 
              artificial intelligence, and augmented reality to revolutionize how people 
              discover and purchase products.
            </p>
            <p className="text-lg">
              We're committed to pushing the boundaries of what's possible in e-commerce, 
              while maintaining our core values of sustainability, security, and customer-centricity.
            </p>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="py-16 px-4 bg-black/5 backdrop-blur-lg">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">The Future is Here</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="p-6 rounded-lg bg-card border border-border/50 backdrop-blur-sm">
                <div className="flex items-center gap-4 mb-4">
                  {feature.icon}
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                </div>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Ready to Experience the Future?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join thousands of forward-thinking shoppers who have already made the leap 
            into the next generation of e-commerce.
          </p>
          <div className="flex justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/shop" className="group">
                Explore Products
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/technology">Learn More</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}