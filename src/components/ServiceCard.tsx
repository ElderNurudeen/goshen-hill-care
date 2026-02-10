import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BoxIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
interface ServiceCardProps {
  title: string;
  description: string;
  icon: BoxIcon;
  delay?: number;
}
export function ServiceCard({
  title,
  description,
  icon: Icon,
  delay = 0
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20
      }}
      whileInView={{
        opacity: 1,
        y: 0
      }}
      viewport={{
        once: true
      }}
      transition={{
        duration: 0.5,
        delay
      }}
      className="group relative bg-white rounded-xl p-5 sm:p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-lilac-100 flex flex-col h-full">

      <div className="w-10 h-10 sm:w-11 sm:h-11 bg-lilac-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-lilac-100 transition-colors">
        <Icon className="w-5 h-5 text-lilac-600" />
      </div>

      <h3 className="text-base sm:text-lg font-semibold mb-2 text-charcoal group-hover:text-lilac-700 transition-colors">
        {title}
      </h3>

      <p className="text-charcoal-light text-sm leading-relaxed mb-4 flex-grow">
        {description}
      </p>

      <div className="mt-auto pt-3 border-t border-gray-100">
        <Link
          to="/services"
          className="inline-flex items-center text-lilac-600 font-medium hover:text-lilac-800 transition-colors text-xs sm:text-sm">

          Learn more
          <ArrowRight className="ml-1.5 w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.div>);

}