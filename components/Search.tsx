"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

const mockProducts = [
    { id: 1, name: "Product A", description: "High-quality item A" },
    { id: 2, name: "Product B", description: "Durable and reliable B" },
    { id: 3, name: "Product C", description: "Affordable and sleek C" },
];

export function SearchPage() {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState<typeof mockProducts>([]);

    const handleSearch = () => {
        if (!query) {
            setResults([]);
            return;
        }
        const filtered = mockProducts.filter((product) =>
            product.name.toLowerCase().includes(query.toLowerCase())
        );
        setResults(filtered);
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Search</h1>
            <div className="flex items-center space-x-2">
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="w-full border rounded p-2"
                    placeholder="Search for products..."
                />
                <Button onClick={handleSearch}>Search</Button>
            </div>
            <div className="mt-4">
                {results.length > 0 ? (
                    results.map((product) => (
                        <div key={product.id} className="border-b py-2">
                            <p className="font-medium">{product.name}</p>
                            <p className="text-sm text-muted-foreground">{product.description}</p>
                        </div>
                    ))
                ) : (
                    <p className="text-muted-foreground">No results found.</p>
                )}
            </div>
        </div>
    );
}
