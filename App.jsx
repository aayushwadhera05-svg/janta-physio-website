import { useState } from "react";
import { motion } from "framer-motion";
import { Rocket, Sparkles, Star, CheckCircle2, Mail, Phone, MapPin, MessageCircle } from "lucide-react";

const navItems = [
  { id: "home", label: "Home" },
  { id: "doctors", label: "Doctors" },
  { id: "gallery", label: "Gallery" },
  { id: "booking", label: "Booking" },
  { id: "contact", label: "Contact" },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-2 font-semibold text-gray-900">
            <Rocket className="h-6 w-6 text-emerald-600" aria-hidden="true" />
            <span>Janta Acupressure And Physiotherapy Centre</span>
          </a>
          <nav className="hidden md:flex items-center gap-6" aria-label="Primary">
            {navItems.map((item) => (
              <a key={item.id} href={`#${item.id}`} className="text-gray-600 hover:text-gray-900 transition-colors">
                {item.label}
              </a>
            ))}
            <a href="#booking" className="inline-flex items-center rounded-xl px-4 py-2 border border-gray-200 shadow-sm hover:shadow transition-all">
              Book Appointment
            </a>
            <a href="https://wa.me/919988343440?text=Hi%20Janta%20Acupressure%20And%20Physiotherapy%20Centre%2C%20I%27d%20like%20to%20book%20an%20appointment" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl px-4 py-2 bg-emerald-600 text-white font-medium shadow hover:shadow-md transition-all">
              <MessageCircle className="h-4 w-4 text-white" /> WhatsApp
            </a>
          </nav>
          <button
            aria-label="Toggle menu"
            className="md:hidden inline-flex items-center justify-center rounded-xl p-2 border border-gray-200"
            onClick={() => setOpen((v) => !v)}
          >
            ☰
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-gray-100 bg-white">
          <nav className="mx-auto max-w-7xl px-4 py-3 grid gap-3" aria-label="Mobile">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-2 hover:bg-gray-50"
              >
                {item.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="block rounded-lg px-3 py-2 border border-gray-200 text-center">
              Book Appointment
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-emerald-50 via-white to-white" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900"
            >
              Janta Acupressure <span className="text-emerald-600">& Physiotherapy Centre</span>
            </motion.h1>
            <p className="mt-4 text-xl text-gray-700 font-medium">
              Trusted Hands For Your Pain Free Tomorrow
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#booking" className="inline-flex items-center rounded-xl px-5 py-3 bg-emerald-600 text-white font-medium shadow hover:shadow-md transition-all">
                Book Appointment
              </a>
              <a href="https://wa.me/919988343440?text=Hi%20Janta%20Acupressure%20And%20Physiotherapy%20Centre%2C%20I%27d%20like%20to%20book%20an%20appointment" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl px-5 py-3 bg-emerald-600 text-white font-medium shadow hover:shadow-md transition-all">
                <MessageCircle className="h-5 w-5 text-white" /> WhatsApp
              </a>
            </div>
            <div className="mt-6 flex items-center gap-2 text-sm text-gray-500">
              <Star className="h-4 w-4" /> Professional care • Trusted doctors • Healing touch
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            <div className="aspect-[16/10] w-full rounded-2xl border border-gray-200 shadow-lg overflow-hidden bg-white">
              <div className="h-full w-full grid place-items-center">
                <div className="text-center">
                  <Sparkles className="mx-auto h-12 w-12 text-emerald-500" />
                  <p className="mt-2 text-gray-600">Add clinic image here</p>
                </div>
              </div>
            </div>
          </motion.div>
          <p className="flex items-center gap-2">🕒 Timings: 7am – 2pm (Morning), 2pm – 4pm (Lunch), 4pm – 8pm (Evening)</p>
        </div>
      </div>
    </section>
  );
}

function Doctors() {
  const doctors = [
    { name: "Dr. Rajesh Sharma", specialty: "Physiotherapist", img: "doctor1.jpg" },
    { name: "Dr. Neha Gupta", specialty: "Acupressure Specialist", img: "doctor2.jpg" },
  ];
  return (
    <section id="doctors" className="py-20 border-t border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900">Our Doctors</h2>
        <p className="text-center text-gray-600 mt-2">Experienced professionals dedicated to your recovery.</p>
        <div className="mt-12 grid sm:grid-cols-2 gap-6">
          {doctors.map((doc, i) => (
            <div key={i} className="rounded-2xl border border-gray-200 p-6 shadow-sm text-center bg-white">
              <div className="aspect-[4/4] w-full rounded-xl overflow-hidden bg-gray-50 border border-gray-200">
                <p className="mt-10 text-gray-500">{doc.img}</p>
              </div>
              <h3 className="mt-4 font-semibold text-gray-900">{doc.name}</h3>
              <p className="text-gray-600">{doc.specialty}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  const images = ["clinic1.jpg", "clinic2.jpg", "therapy.jpg"];
  return (
    <section id="gallery" className="py-20 border-t border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900">Gallery</h2>
        <p className="text-center text-gray-600 mt-2">Business images from our clinic and treatment rooms.</p>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, i) => (
            <div key={i} className="rounded-2xl border border-gray-200 shadow-sm overflow-hidden bg-gray-100">
              <p className="text-center py-20 text-gray-500">{img}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-10 border-t border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-500">© {new Date().getFullYear()} Janta Acupressure & Physiotherapy Centre. All rights reserved. | <span className="font-semibold text-emerald-600">🕒 Timings: 7am – 2pm, 2pm – 4pm, 4pm – 8pm</span></p>
        <div className="flex items-center gap-4 text-sm">
          <a href="tel:+919988343440" className="inline-flex items-center gap-2 rounded-xl px-4 py-2 bg-emerald-600 text-white font-medium shadow hover:shadow-md transition-all"><Phone className="h-4 w-4 text-white" /> Call Now</a>
          <a href="#" className="text-gray-500 hover:text-gray-900">Privacy</a>
          <a href="#" className="text-gray-500 hover:text-gray-900">Terms</a>
          <a href="https://wa.me/919988343440?text=Hi%20Janta%20Acupressure%20And%20Physiotherapy%20Centre%2C%20I%27d%20like%20to%20book%20an%20appointment" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl px-4 py-2 bg-emerald-600 text-white font-medium shadow hover:shadow-md transition-all">
            <MessageCircle className="h-4 w-4 text-white" /> WhatsApp Us
          </a>
        </div>
      </div>
    </footer>
  );
}

function Booking() {
  return (
    <section id="booking" className="py-20 border-t border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900">Book an Appointment</h2>
        <p className="text-center text-gray-600 mt-2">Fill in your details and we’ll confirm shortly.</p>
        <div className="mt-12 grid lg:grid-cols-2 gap-6">
          <form className="bg-white rounded-2xl border border-gray-200 shadow p-6 grid gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
              <input id="name" name="name" type="text" placeholder="Your name" className="mt-1 w-full rounded-xl border-gray-300 focus:ring-2 focus:ring-emerald-600 focus:outline-none" />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input id="email" name="email" type="email" placeholder="you@example.com" className="mt-1 w-full rounded-xl border-gray-300 focus:ring-2 focus:ring-emerald-600 focus:outline-none" />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
                <input id="phone" name="phone" type="tel" placeholder="Your phone" className="mt-1 w-full rounded-xl border-gray-300 focus:ring-2 focus:ring-emerald-600 focus:outline-none" />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="date" className="block text-sm font-medium text-gray-700">Preferred Date</label>
                <input id="date" name="date" type="date" className="mt-1 w-full rounded-xl border-gray-300 focus:ring-2 focus:ring-emerald-600 focus:outline-none" />
              </div>
              <div>
                <label htmlFor="time" className="block text-sm font-medium text-gray-700">Preferred Time</label>
                <input id="time" name="time" type="time" className="mt-1 w-full rounded-xl border-gray-300 focus:ring-2 focus:ring-emerald-600 focus:outline-none" />
              </div>
            </div>
            <div>
              <label htmlFor="service" className="block text-sm font-medium text-gray-700">Service</label>
              <select id="service" name="service" className="mt-1 w-full rounded-xl border-gray-300 focus:ring-2 focus:ring-emerald-600 focus:outline-none">
                <option>Physiotherapy Consultation</option>
                <option>Acupressure Session</option>
                <option>Pain Management</option>
                <option>Rehabilitation Follow-up</option>
              </select>
            </div>
            <div>
              <label htmlFor="notes" className="block text-sm font-medium text-gray-700">Notes (optional)</label>
              <textarea id="notes" name="notes" rows={4} placeholder="Describe your concern" className="mt-1 w-full rounded-xl border-gray-300 focus:ring-2 focus:ring-emerald-600 focus:outline-none"></textarea>
            </div>
            <div className="flex flex-wrap gap-3">
              <button type="button" onClick={() => alert("We'll wire this to your backend or a form service.")} className="rounded-xl px-5 py-3 bg-emerald-600 text-white font-medium shadow hover:shadow-md">
                Submit Request
              </button>
              <a href="https://wa.me/919988343440?text=Hi%20Janta%20Acupressure%20And%20Physiotherapy%20Centre%2C%20I%27d%20like%20to%20book%20an%20appointment" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl px-5 py-3 bg-emerald-600 text-white font-medium shadow hover:shadow-md transition-all">
                <MessageCircle className="h-4 w-4 text-white"/> Chat on WhatsApp
              </a>
            </div>
            <p className="text-xs text-gray-500">Replace the alert with your submission handler or a service like Formspree/Netlify Forms. Update the WhatsApp number to your clinic's.</p>
          </form>
          <div className="rounded-2xl border border-gray-200 p-6 shadow-sm bg-white">
            <h3 className="font-semibold text-gray-900">How it works</h3>
            <ol className="mt-3 space-y-2 text-gray-600 list-decimal list-inside">
              <li>Pick a date & time that suits you.</li>
              <li>We confirm availability by phone or WhatsApp.</li>
              <li>Visit the clinic and start your recovery.</li>
            </ol>
            <div className="mt-6 rounded-xl border border-dashed border-gray-300 p-4 text-sm text-gray-600">
              Prefer WhatsApp? Click the button to chat instantly.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-20 border-t border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">Contact Us</h2>
          <p className="mt-3 text-gray-600">We usually reply within a few hours during clinic timings.</p>
          <div className="mt-6 space-y-3 text-gray-700">
            <p className="flex items-center gap-2"><Mail className="h-5 w-5 text-emerald-600" /> aniketwadhera@gmail.com</p>
            <p className="flex items-center gap-2"><Phone className="h-5 w-5 text-emerald-600" /> +91 7009022262 / +91 9988343440 / +91 7814506405</p>
            <p className="flex items-center gap-2"><MapPin className="h-5 w-5 text-emerald-600" /> 1, Sidhu Nagari 3rd Chowk Janta Acupressure Center, Abohar, Punjab (<a href="https://maps.app.goo.gl/GrdNXNMzQHFFjpXSA" target="_blank" rel="noopener noreferrer" className="text-emerald-600 underline">View on Maps</a>)</p>
          </div>
        </div>
        <div className="bg-white rounded-2xl border border-gray-200 shadow p-6 grid gap-4">
          <a href="https://wa.me/919988343440?text=Hi%20Janta%20Acupressure%20And%20Physiotherapy%20Centre%2C%20I%27d%20like%20to%20book%20an%20appointment" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl px-5 py-3 bg-emerald-600 text-white font-medium shadow hover:shadow-md transition-all w-full justify-center">
            <MessageCircle className="h-5 w-5 text-white" /> Chat on WhatsApp
          </a>
          <a href="#booking" className="inline-flex items-center rounded-xl px-5 py-3 bg-emerald-600 text-white font-medium shadow hover:shadow-md w-full justify-center">
            Book Appointment
          </a>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <div className="antialiased text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Doctors />
        <Gallery />
        <Booking />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
