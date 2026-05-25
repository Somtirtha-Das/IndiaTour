import Link from "next/link";
import { Facebook, Instagram, Twitter, Youtube, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-yv-darker">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="font-display text-2xl font-bold gradient-text">YatraVerse</h3>
            <p className="mt-3 text-sm text-white/50">
              Discover the Soul of India — AI-powered tourism discovery, travel planning & experience ecosystem.
            </p>
            <div className="mt-4 flex gap-3">
              {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="rounded-lg border border-white/10 p-2 text-white/50 transition hover:border-yv-gold/50 hover:text-yv-gold"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-yv-gold">Explore</h4>
            <ul className="mt-4 space-y-2 text-sm text-white/50">
              {[
                { label: "Discover India", href: "/discover" },
                { label: "Destinations", href: "/destinations" },
                { label: "AI Trip Planner", href: "/ai-planner" },
                { label: "Tour Packages", href: "/packages" },
                { label: "YatraGo", href: "/yatrago" },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-yv-gold">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-yv-gold">Company</h4>
            <ul className="mt-4 space-y-2 text-sm text-white/50">
              <li><Link href="/about" className="hover:text-yv-gold">About Us</Link></li>
              <li><Link href="/blog" className="hover:text-yv-gold">Travel Stories</Link></li>
              <li><Link href="/contact" className="hover:text-yv-gold">Contact</Link></li>
              <li><Link href="/login" className="hover:text-yv-gold">Login</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-yv-gold">Contact</h4>
            <ul className="mt-4 space-y-3 text-sm text-white/50">
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-yv-gold" /> New Delhi, India
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-yv-gold" /> +91 1800-YATRA
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-yv-gold" /> hello@yatraverse.com
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-white/5 pt-8 text-center text-sm text-white/40">
          © {new Date().getFullYear()} YatraVerse. The Future of Indian Tourism.
        </div>
      </div>
    </footer>
  );
}
