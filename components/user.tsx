"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Heart, User, Laptop, LogIn, UserPlus } from "lucide-react"; // Icons for login, register, and love
import { useRouter } from "next/navigation"; // Importing Next.js router for navigation

// Mock Local JSON Database (localStorage)
const USERS_KEY = "users_db";
const LOGGED_IN_USER_KEY = "logged_in_user";

const getUsers = () => {
  const users = localStorage.getItem(USERS_KEY);
  return users ? JSON.parse(users) : [];
};

const saveUsers = (users: any[]) => {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
};

export function UserPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedInUser, setLoggedInUser] = useState<string | null>(null);
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");

  const [isBrowser, setIsBrowser] = useState(false);

  // Check if we are in the browser
  useEffect(() => {
    setIsBrowser(typeof window !== "undefined");
  }, []);

  // If in the browser, we can safely use useRouter
  const router = isBrowser ? useRouter() : null;

  // On mount, check if a user is logged in
  useEffect(() => {
    const savedUser = localStorage.getItem(LOGGED_IN_USER_KEY);
    if (savedUser) {
      setLoggedInUser(savedUser);
    }
  }, []);

  // Register a user
  const handleRegister = () => {
    const users = getUsers();

    if (users.some((user: any) => user.email === email)) {
      setPopupMessage("User already exists!");
      setShowPopup(true);
      return;
    }

    // Hash password (for demo, we'll just prefix it; use bcrypt in real apps)
    const hashedPassword = `hashed_${password}`;

    const newUser = { email, password: hashedPassword };
    users.push(newUser);
    saveUsers(users);

    setPopupMessage("Registered successfully!");
    setShowPopup(true);
    setEmail("");
    setPassword("");
  };

  // Login a user
  const handleLogin = () => {
    const users = getUsers();

    const user = users.find((user: any) => user.email === email);
    if (!user) {
      setPopupMessage("User not found!");
      setShowPopup(true);
      return;
    }

    if (user.password !== `hashed_${password}`) {
      setPopupMessage("Invalid password!");
      setShowPopup(true);
      return;
    }

    localStorage.setItem(LOGGED_IN_USER_KEY, email);
    setLoggedInUser(email);

    setPopupMessage("Logged in successfully!");
    setShowPopup(true);
  };

  // Logout a user
  const handleLogout = () => {
    localStorage.removeItem(LOGGED_IN_USER_KEY);
    setLoggedInUser(null);  // Clear loggedInUser state
    setPopupMessage("Logged out successfully!");
    setShowPopup(true);
  };

  // Redirect to the user profile page when email is clicked
  const handleEmailClick = () => {
    if (router && loggedInUser) {
      router.push(`/user-profile?email=${loggedInUser}`);
    }
  };

  return (
    <div className="min-h-screen bg-light dark:bg-dark p-6">
      <div className="max-w-4xl mx-auto p-8 rounded-lg shadow-lg border border-gray-200 bg-white dark:bg-gray-800">
        <h1 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500 mb-6">
          User Account
        </h1>
        {loggedInUser ? (
          <div className="text-center">
            <User className="h-16 w-16 mx-auto text-primary mb-4" />
            <p className="text-xl font-semibold text-muted-foreground">
              Welcome,{" "}
              <a
                href="#"
                onClick={handleEmailClick} // Handle the click event
                className="text-blue-500 hover:underline"
              >
                {loggedInUser}
              </a>
            </p>
            <Button className="mt-4" onClick={handleLogout} variant="outline">
              Logout
            </Button>
          </div>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleLogin();
            }}
            className="space-y-6"
          >
            <div>
              <label className="block text-sm font-medium text-muted-foreground">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border rounded p-4 bg-transparent placeholder:text-muted-foreground border-border/50 text-lg text-primary focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                required
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-muted-foreground">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border rounded p-4 bg-transparent placeholder:text-muted-foreground border-border/50 text-lg text-primary focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                required
                placeholder="Enter your password"
              />
            </div>
            <div className="flex space-x-4 justify-center">
              <Button type="submit" className="mt-4 px-6 py-3 w-full max-w-xs">
                <LogIn className="h-5 w-5 mr-2" />
                Login
              </Button>
              <Button
                type="button"
                className="mt-4 px-6 py-3 w-full max-w-xs bg-gradient-to-r from-teal-500 to-green-500 text-white"
                variant="secondary"
                onClick={handleRegister}
              >
                <UserPlus className="h-5 w-5 mr-2" />
                Register
              </Button>
            </div>
          </form>
        )}
      </div>

      {/* Alert Popup */}
      {showPopup && (
        <div className="fixed inset-0 flex justify-center items-center z-50 bg-black/30">
          <div className="bg-black/80 dark:bg-black/60 text-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <div className="text-lg font-semibold">
              {popupMessage}
            </div>
            <Button
              className="mt-4 px-6 py-2 bg-blue-700 text-white w-full dark:bg-blue-900"
              onClick={() => setShowPopup(false)}
            >
              OK
            </Button>
          </div>
        </div>
      )}

      {/* Portfolio and Made with Love Cards */}
      <div className="mt-10 space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {/* Portfolio Card */}
          <div className="bg-gradient-to-r from-indigo-500/20 to-blue-500/20 p-6 rounded-lg shadow-lg border border-gray-200 dark:bg-gray-900">
            <Laptop className="h-12 w-12 mx-auto text-primary mb-4" />
            <h3 className="text-2xl text-center font-semibold text-white">My Portfolio</h3>
            <p className="text-center text-white mt-2">
              Visit my portfolio for more details about my work.
            </p>
            <Button
              className="mt-4 w-full"
              variant="outline"
              onClick={() => window.open("https://hariompandit.me", "_blank")}
            >
              View Portfolio
            </Button>
          </div>

          {/* Made with Love Card */}
          <div className="bg-gradient-to-r from-pink-500/20 to-purple-500/20 p-6 rounded-lg shadow-lg border border-gray-200 dark:bg-gray-900">
            <Heart className="h-12 w-12 mx-auto text-pink-500 mb-4" />
            <h3 className="text-2xl text-center font-semibold text-white">Made with Love</h3>
            <p className="text-center text-white mt-2">
              A heartfelt creation by Hariom Kumar Pandit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
