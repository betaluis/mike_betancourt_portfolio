"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    {
      name: "Repertoire",
      href: "/repertoire",
      dropdown: [
        { name: "Solo", href: "/repertoire/solo" },
        { name: "Chamber", href: "/repertoire/chamber" },
        { name: "Concerto", href: "/repertoire/concerto" },
      ],
    },
    { name: "Performances", href: "/performances" },
    { name: "Contact", href: "/contact" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.a
            href="/"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="font-fancy text-xl font-bold text-zinc-300"
          >
            Mike Betancourt
          </motion.a>

          {/* Desktop Nav */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item, index) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() =>
                    item.dropdown && setActiveDropdown(item.name)
                  }
                  onMouseLeave={() => item.dropdown && setActiveDropdown(null)}
                >
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    {item.dropdown ? (
                      <button className="flex items-center text-white hover:text-amber-300 px-3 py-2 rounded-md font-medium transition-colors">
                        {item.name}
                        <ChevronDown
                          className={`ml-1 h-4 w-4 transition-transform ${
                            activeDropdown === item.name ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                    ) : (
                      <a
                        href={item.href}
                        className="text-white hover:text-amber-300 px-3 py-2 rounded-md font-medium transition-colors"
                      >
                        {item.name}
                      </a>
                    )}
                  </motion.div>

                  {/* Dropdown */}
                  <AnimatePresence>
                    {item.dropdown && activeDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 -mt-px w-48 bg-black/90 backdrop-blur-md rounded-md shadow-lg ring-1 ring-white/10"
                      >
                        <div className="py-1">
                          {item.dropdown.map((dropdownItem) => (
                            <a
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                              className="block px-4 py-2 text-white hover:text-amber-300 transition-colors"
                            >
                              {dropdownItem.name}
                            </a>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-amber-300 p-2 rounded-md"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black/90 backdrop-blur-md border-t border-white/20"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  {item.dropdown ? (
                    <details className="group">
                      <summary className="flex items-center justify-between cursor-pointer list-none text-white hover:text-amber-300 hover:bg-white/10 px-3 py-2 rounded-md font-medium transition-colors">
                        {item.name}
                        <ChevronDown className="h-4 w-4 group-open:rotate-180 transition-transform" />
                      </summary>
                      <div className="pl-4">
                        {item.dropdown.map((dropdownItem) => (
                          <a
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            className="block text-white/80 hover:text-amber-300 hover:bg-white/10 px-3 py-2 rounded-md transition-colors"
                          >
                            {dropdownItem.name}
                          </a>
                        ))}
                      </div>
                    </details>
                  ) : (
                    <a
                      href={item.href}
                      className="block text-white hover:text-amber-300 hover:bg-white/10 px-3 py-2 rounded-md font-medium transition-colors"
                    >
                      {item.name}
                    </a>
                  )}
                </motion.div>
              ))}

              {/* Call-to-action */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: navItems.length * 0.1 }}
                className="pt-2"
              >
                <a
                  href="/book-performance"
                  className="block w-full text-center bg-amber-600 text-white px-3 py-2 rounded-md font-medium hover:bg-amber-700 transition-colors border border-amber-500"
                >
                  Book Performance
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
