import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { Menu } from "lucide-react"; // instead of HiMenu

const navItems = [
  { id: 1, name: "Home", link: "/dashboard" },
  { id: 2, name: "About Us", link: "/about" },
  { id: 3, name: "Services", link: "/services" },
  { id: 4, name: "Contact Us", link: "/contact" },
  { id: 5, name: "Blog", link: "/blog" },
];

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md p-4 md:p-6 flex items-center justify-between z-50">
      {/* Left: Logo + Nav */}
      <div className="flex items-center">
        <Link to="/" className="flex items-center space-x-2">
          <img
            src="/NewLogo.png"
            alt="Headnest Logo"
            className="w-28 md:w-36"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex ml-10 space-x-6 items-center">
          {navItems.map((item) => (
            <Link
              key={item.id}
              to={item.link}
              className="text-gray-600 hover:text-gray-800 transition"
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>

      {/* Right: Buttons + Mobile Hamburger */}
      <div className="flex items-center space-x-4">
        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Button
            variant="outline"
            className="rounded-full bg-[#f2e7dc] text-gray-800 hover:bg-[#e6dacd]"
          >
            <Link to="/signin"> Log In</Link>
          </Button>
          <Button className="rounded-full bg-[#2c3e50] text-white hover:bg-[#1a252f]">
            <Link to="/signup"> Create Account</Link>
          </Button>
        </div>

        {/* Mobile Hamburger + Sheet Drawer */}
        <div className="flex md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-64 sm:w-80">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>

              {/* Mobile Search */}
              <div className="mt-4">
                <Input placeholder="Search" type="search" />
              </div>

              {/* Mobile Nav Items */}
              <div className="mt-6 flex flex-col space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.id}
                    to={item.link}
                    className="text-gray-700 hover:text-gray-900 transition"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              {/* Auth Buttons */}
              <div className="mt-6 flex flex-col space-y-3">
                <Button
                asChild
                  variant="outline"
                  className="rounded-full bg-[#f2e7dc] text-gray-800 hover:bg-[#e6dacd]"
                >
                 <Link to="/signin">Log In</Link>
                </Button>
                <Button asChild className="rounded-full bg-[#2c3e50] text-white hover:bg-[#1a252f]">
                 <Link to="/signup">Create Account</Link>
                </Button>
              </div>

              {/* Extra Links */}
              <div className="mt-8 flex flex-col space-y-3 text-sm">
                <a
                  href="https://github.com/shadcn/ui"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-800"
                >
                  Docs
                </a>
                <a
                  href="https://ui.shadcn.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-800"
                >
                  Components
                </a>
                <a
                  href="https://github.com/shadcn/ui/issues"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-800"
                >
                  Help
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
