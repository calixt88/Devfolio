"use client";

import Link from "next/link";
import Image from "next/image";
import { Heart, Sparkles, Shield, Menu, X, Zap, ChevronUp } from "lucide-react";
import { useState, useEffect } from "react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-blue-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm border-b border-blue-200">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-center">
          {/* Desktop Menu - Centered */}
          <div className="hidden sm:flex items-center gap-12">
            <Link href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="text-slate-700 hover:text-blue-600 font-medium">Home</Link>
            <Link href="#about" className="text-slate-700 hover:text-blue-600 font-medium">About</Link>
            <Link href="#services" className="text-slate-700 hover:text-blue-600 font-medium">Services</Link>
            <Link href="#contact" className="text-slate-700 hover:text-blue-600 font-medium">Contact</Link>
          </div>

          {/* Book Now Button - Desktop */}
          <button className="hidden sm:block absolute right-4 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium">
            Book Now
          </button>

          {/* Mobile Menu Button */}
          <button 
            className="sm:hidden absolute right-4"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="sm:hidden border-t border-blue-200 bg-white p-4 flex flex-col gap-4">
            <Link href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="text-slate-700 hover:text-blue-600">Home</Link>
            <Link href="#about" className="text-slate-700 hover:text-blue-600">About</Link>
            <Link href="#services" className="text-slate-700 hover:text-blue-600">Services</Link>
            <Link href="#contact" className="text-slate-700 hover:text-blue-600">Contact</Link>
            <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full w-full font-medium">
              Book Now
            </button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen relative overflow-hidden" style={{
        backgroundImage: "url('/background.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed"
      }}>
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/20"></div>
        {/* Text and Button positioned absolutely at bottom */}
        <div className="absolute bottom-20 left-0 right-0 flex flex-col items-center justify-center">
          <p className="text-4xl md:text-5xl font-bold text-white mb-12" style={{ fontFamily: "'Brush Script MT', 'Lucida Handwriting', cursive" }}>
            Achieving Radiant, Glowing Skin
          </p>
          <button 
            onClick={() => {
              const aboutSection = document.getElementById('about');
              aboutSection?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full hover:shadow-xl transition transform hover:scale-105"
          >
            Start Your Journey Today!
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Image Placeholder */}
            <div className="bg-blue-100 rounded-xl overflow-hidden shadow-lg h-96 flex items-center justify-center">
              <div className="text-center text-blue-600">
                <p className="text-lg">Chlo's Photo</p>
                <p className="text-sm">(Add image: /public/chlo-photo.jpg)</p>
              </div>
            </div>
            {/* Text Content */}
            <div>
              <h2 className="text-5xl font-bold text-blue-700 mb-6" style={{ fontFamily: "'Brush Script MT', 'Lucida Handwriting', cursive" }}>
                About Chlo
              </h2>
              <p className="text-xl text-slate-700 leading-relaxed mb-6">
                Meet Chlo, your licensed esthetician dedicated to bringing out your natural glow. With years of expertise in skincare and beauty treatments, Chlo combines passion, knowledge, and artistry to deliver transformative results.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                Every client is treated as an individual with unique skincare needs. Chlo believes in creating personalized treatment plans that not only improve your skin but boost your confidence every single day.
              </p>
              <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>
      <section id="services" className="py-20 px-4 bg-blue-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-slate-900">
            Our Services
          </h2>
          <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
            Professional treatments with pricing and time estimates
          </p>

          {/* Top Row - Facials and Makeup */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Facials */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition transform hover:-translate-y-2 border-t-4 border-blue-600">
              <div className="flex items-center gap-4 mb-6">
                <Sparkles className="w-8 h-8 text-blue-600 flex-shrink-0" />
                <h3 className="text-lg font-semibold text-slate-900">Facials</h3>
              </div>
              <div className="border-t border-blue-200 pt-4 space-y-3">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-medium text-slate-900">Signature Custom Facial</p>
                    <p className="text-sm text-slate-600">60 minutes</p>
                  </div>
                  <p className="font-semibold text-blue-600">$65</p>
                </div>
              </div>
            </div>

            {/* Makeup & Lashes */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition transform hover:-translate-y-2 border-t-4 border-blue-600">
              <div className="flex items-center gap-4 mb-6">
                <Heart className="w-8 h-8 text-blue-600 flex-shrink-0" />
                <h3 className="text-lg font-semibold text-slate-900">Makeup & Lashes</h3>
              </div>
              <div className="border-t border-blue-200 pt-4 space-y-3">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-medium text-slate-900">Makeup</p>
                    <p className="text-sm text-slate-600">60 minutes</p>
                  </div>
                  <p className="font-semibold text-blue-600">$50</p>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-medium text-slate-900">Lash Lift/Tint</p>
                    <p className="text-sm text-slate-600">60 minutes</p>
                  </div>
                  <p className="font-semibold text-blue-600">$30</p>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-medium text-slate-900">Brow Lamination</p>
                    <p className="text-sm text-slate-600">45 minutes</p>
                  </div>
                  <p className="font-semibold text-blue-600">$25</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Row - Waxing Services (Single Card) */}
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition transform hover:-translate-y-2 border-t-4 border-blue-600">
            <div className="flex items-center justify-center gap-4 mb-6">
              <Zap className="w-8 h-8 text-blue-600 flex-shrink-0" />
              <h3 className="text-lg font-semibold text-slate-900">Waxing Services</h3>
            </div>
            <div className="border-t border-blue-200 pt-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                {/* Waxing Part 1 */}
                <div className="space-y-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-medium text-slate-900">Lip Wax</p>
                      <p className="text-sm text-slate-600">15 minutes</p>
                    </div>
                    <p className="font-semibold text-blue-600">$15</p>
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-medium text-slate-900">Cheek Wax</p>
                      <p className="text-sm text-slate-600">15 minutes</p>
                    </div>
                    <p className="font-semibold text-blue-600">$15</p>
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-medium text-slate-900">Chin Wax</p>
                      <p className="text-sm text-slate-600">15 minutes</p>
                    </div>
                    <p className="font-semibold text-blue-600">$15</p>
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-medium text-slate-900">Brow/Tint Wax</p>
                      <p className="text-sm text-slate-600">45 minutes</p>
                    </div>
                    <p className="font-semibold text-blue-600">$25</p>
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-medium text-slate-900">Nostril</p>
                      <p className="text-sm text-slate-600">20 minutes</p>
                    </div>
                    <p className="font-semibold text-blue-600">$10</p>
                  </div>
                </div>

                {/* Waxing Part 2 */}
                <div className="space-y-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-medium text-slate-900">Full Face</p>
                      <p className="text-sm text-slate-600">60 minutes</p>
                    </div>
                    <p className="font-semibold text-blue-600">$40</p>
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-medium text-slate-900">Back</p>
                      <p className="text-sm text-slate-600">45 minutes</p>
                    </div>
                    <p className="font-semibold text-blue-600">$40</p>
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-medium text-slate-900">Chest</p>
                      <p className="text-sm text-slate-600">45 minutes</p>
                    </div>
                    <p className="font-semibold text-blue-600">$40</p>
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-medium text-slate-900">Full Leg</p>
                      <p className="text-sm text-slate-600">45 minutes</p>
                    </div>
                    <p className="font-semibold text-blue-600">$40</p>
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-medium text-slate-900">Half Leg</p>
                      <p className="text-sm text-slate-600">45 minutes</p>
                    </div>
                    <p className="font-semibold text-blue-600">$40</p>
                  </div>
                </div>

                {/* Waxing Part 3 */}
                <div className="space-y-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-medium text-slate-900">Full Arm</p>
                      <p className="text-sm text-slate-600">45 minutes</p>
                    </div>
                    <p className="font-semibold text-blue-600">$40</p>
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-medium text-slate-900">Half Arm</p>
                      <p className="text-sm text-slate-600">35 minutes</p>
                    </div>
                    <p className="font-semibold text-blue-600">$30</p>
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-medium text-slate-900">Bikini</p>
                      <p className="text-sm text-slate-600">60 minutes</p>
                    </div>
                    <p className="font-semibold text-blue-600">$25</p>
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-medium text-slate-900">Brazilian</p>
                      <p className="text-sm text-slate-600">60 minutes</p>
                    </div>
                    <p className="font-semibold text-blue-600">$40</p>
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-medium text-slate-900">Underarms</p>
                      <p className="text-sm text-slate-600">30 minutes</p>
                    </div>
                    <p className="font-semibold text-blue-600">$25</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 px-4 bg-blue-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-12 text-blue-700" style={{ fontFamily: "'Brush Script MT', 'Lucida Handwriting', cursive" }}>
            Testimonials
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((review) => (
              <div key={review} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Sparkles key={i} className="w-4 h-4 fill-amber-400 text-blue-400" />
                  ))}
                </div>
                <p className="text-slate-700 mb-4">
                  "Chlo's treatments have completely transformed my skin. She really takes the time to understand your concerns and creates a personalized plan. Highly recommend!"
                </p>
                <p className="font-semibold text-slate-900">Happy Client {review}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-4 text-blue-700" style={{ fontFamily: "'Brush Script MT', 'Lucida Handwriting', cursive" }}>
            Contact Us
          </h2>
          <p className="text-slate-600 mb-12">
            Ready to start your skincare journey? Contact us today!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-blue-50 rounded-lg shadow p-6 text-center border-t-2 border-blue-600">
              <p className="font-semibold text-slate-900 mb-2">Address</p>
              <p className="text-slate-600">Denver, CO</p>
            </div>
            <div className="bg-blue-50 rounded-lg shadow p-6 text-center border-t-2 border-blue-600">
              <p className="font-semibold text-slate-900 mb-2">Email</p>
              <p className="text-slate-600">contact@glowwithchlo.com</p>
            </div>
            <div className="bg-blue-50 rounded-lg shadow p-6 text-center border-t-2 border-blue-600">
              <p className="font-semibold text-slate-900 mb-2">Phone</p>
              <p className="text-slate-600">Coming Soon</p>
            </div>
          </div>

          <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full hover:shadow-xl transition transform hover:scale-105">
            Book Your Appointment
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-50 py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="mb-2">© 2026 Glow with Chlo. All rights reserved.</p>
          <p className="text-blue-400">Bringing out your natural glow</p>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 left-8 z-50 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition transform hover:scale-110"
          aria-label="Scroll to top"
        >
          <ChevronUp className="w-6 h-6" />
        </button>
      )}
    </div>
  );
}

