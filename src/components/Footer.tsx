import React from 'react'
import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react'
export function Footer() {
  return (
    <footer className="bg-slate-800 text-white pt-12 pb-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="mb-4">
              <img
                src="/GHCLogo.png"
                alt="Goshen-Hill Care Services"
                className="h-10 w-auto"
              />
            </div>
            <p className="text-slate-400 text-xs leading-relaxed mb-4">
              Your trusted partner in expert domiciliary care and nursing, here
              to support your needs.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="group flex items-center justify-center w-8 h-8 rounded-full bg-slate-700/60 hover:bg-[#7c5cbf] transition-all duration-300 hover:scale-110"
              >
                <Facebook className="w-3.5 h-3.5 text-slate-400 group-hover:text-white transition-colors duration-300" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="group flex items-center justify-center w-8 h-8 rounded-full bg-slate-700/60 hover:bg-[#7c5cbf] transition-all duration-300 hover:scale-110"
              >
                <Instagram className="w-3.5 h-3.5 text-slate-400 group-hover:text-white transition-colors duration-300" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="group flex items-center justify-center w-8 h-8 rounded-full bg-slate-700/60 hover:bg-[#7c5cbf] transition-all duration-300 hover:scale-110"
              >
                <Twitter className="w-3.5 h-3.5 text-slate-400 group-hover:text-white transition-colors duration-300" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-sm mb-3 text-gray-100">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-slate-400 hover:text-[#c4b0e0] transition-colors text-xs"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-slate-400 hover:text-[#c4b0e0] transition-colors text-xs"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-slate-400 hover:text-[#c4b0e0] transition-colors text-xs"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-slate-400 hover:text-[#c4b0e0] transition-colors text-xs"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-sm mb-3 text-gray-100">
              Services
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/services"
                  className="text-slate-400 hover:text-[#c4b0e0] transition-colors text-xs"
                >
                  Live-in Care
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-slate-400 hover:text-[#c4b0e0] transition-colors text-xs"
                >
                  Respite Care
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-slate-400 hover:text-[#c4b0e0] transition-colors text-xs"
                >
                  Re-enablement
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-slate-400 hover:text-[#c4b0e0] transition-colors text-xs"
                >
                  Medication Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-sm mb-3 text-gray-100">
              Contact
            </h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#a78bda] shrink-0 mt-0.5" />
                <span className="text-slate-400 text-xs">
                  Jubilee House, 3 The Drive
                  <br />
                  Brentwood, Essex CM13 3FR
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#a78bda] shrink-0" />
                <span className="text-slate-400 text-xs">01277286120</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#a78bda] shrink-0" />
                <span className="text-slate-400 text-xs">
                  contact@goshenhillcare.co.uk
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-slate-500 text-xs">
            © {new Date().getFullYear()} Goshen-Hill Care Services. All rights
            reserved.
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              className="text-slate-500 hover:text-slate-300 text-xs transition-colors"
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-slate-500 hover:text-slate-300 text-xs transition-colors"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
