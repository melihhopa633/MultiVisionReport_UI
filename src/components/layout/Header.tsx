import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Button from "../ui/Button";

const navigation = [
  { name: "Özellikler", href: "#features" },
  { name: "Modüller", href: "#modules" },
  { name: "Nasıl Çalışır", href: "#how-it-works" },
  { name: "Faydalar", href: "#benefits" },
  { name: "Görseller", href: "#screenshots" },
  { name: "Referanslar", href: "#testimonials" },
  { name: "İletişim", href: "#contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <nav className="section-container flex items-center justify-between py-4">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center space-x-2"
        >
          <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-medical-blue rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">MV</span>
          </div>
          <div>
            <div className="font-display font-bold text-xl text-gray-900">
              MultiVision
            </div>
            <div className="text-xs text-gray-600 -mt-1">Report</div>
          </div>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navigation.map((item, index) => (
            <motion.a
              key={item.name}
              href={item.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200"
            >
              {item.name}
            </motion.a>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="hidden md:block"
        >
          <Button
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Demo Talep Et
          </Button>
        </motion.div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white border-t border-gray-100"
        >
          <div className="section-container py-4 space-y-4">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <Button
              className="w-full mt-4"
              onClick={() => {
                setMobileMenuOpen(false);
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Demo Talep Et
            </Button>
          </div>
        </motion.div>
      )}
    </header>
  );
}
