"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

type CartItem = {
    id: number;
    name: string;
    price: number;
    quantity: number;
};

const mockCartItems: CartItem[] = [
    { id: 1, name: "Product A", price: 20, quantity: 2 },
    { id: 2, name: "Product B", price: 15, quantity: 1 },
];

export function ShoppingCartPage() {
    const [cartItems, setCartItems] = useState<CartItem[]>(mockCartItems);

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    const removeItem = (id: number) => {
        setCartItems(cartItems.filter((item) => item.id !== id));
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
            {cartItems.length === 0 ? (
                <p className="text-muted-foreground">Your cart is empty.</p>
            ) : (
                <div>
                    {cartItems.map((item) => (
                        <div
                            key={item.id}
                            className="flex justify-between items-center border-b py-2"
                        >
                            <div>
                                <p className="font-medium">{item.name}</p>
                                <p className="text-sm text-muted-foreground">
                                    ${item.price} x {item.quantity}
                                </p>
                            </div>
                            <Button variant="ghost" size="sm" onClick={() => removeItem(item.id)}>
                                Remove
                            </Button>
                        </div>
                    ))}
                    <div className="mt-4">
                        <p className="text-lg font-semibold">
                            Total: <span className="text-primary">${calculateTotal()}</span>
                        </p>
                        <Button className="mt-2" onClick={() => alert("Proceed to checkout!")}>
                            Checkout
                        </Button>
                    </div>
                </div>
            )}
        </div>
    );
}
