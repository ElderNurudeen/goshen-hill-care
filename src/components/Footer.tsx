import React from 'react';
import { Link } from 'react-router-dom';
import { HeartHandshake, Mail, Phone, MapPin } from 'lucide-react';
export function Footer() {
  return (
    <footer className="bg-slate-800 text-white pt-12 pb-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-lilac-500/20 p-1.5 rounded-lg text-lilac-300">
                <HeartHandshake size={20} />
              </div>
              <span className="font-bold text-sm">Goshen-hill Care</span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed">
              Compassionate domiciliary care services in the heart of Kent.
            </p>
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
                  className="text-slate-400 hover:text-lilac-300 transition-colors text-xs">

                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-slate-400 hover:text-lilac-300 transition-colors text-xs">

                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-slate-400 hover:text-lilac-300 transition-colors text-xs">

                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-slate-400 hover:text-lilac-300 transition-colors text-xs">

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
                  className="text-slate-400 hover:text-lilac-300 transition-colors text-xs">

                  Live-in Care
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-slate-400 hover:text-lilac-300 transition-colors text-xs">

                  Respite Care
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-slate-400 hover:text-lilac-300 transition-colors text-xs">

                  Re-enablement
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-slate-400 hover:text-lilac-300 transition-colors text-xs">

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
                <MapPin className="w-3.5 h-3.5 text-lilac-400 shrink-0 mt-0.5" />
                <span className="text-slate-400 text-xs">Kent, UK</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-lilac-400 shrink-0" />
                <span className="text-slate-400 text-xs">+44 123 456 7890</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-lilac-400 shrink-0" />
                <span className="text-slate-400 text-xs">
                  info@goshenhillcare.com
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-slate-500 text-xs">
            © {new Date().getFullYear()} Goshen-hill Care Limited. All rights
            reserved.
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              className="text-slate-500 hover:text-slate-300 text-xs transition-colors">

              Privacy
            </a>
            <a
              href="#"
              className="text-slate-500 hover:text-slate-300 text-xs transition-colors">

              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>);

}