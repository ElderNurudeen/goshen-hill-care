import React from 'react';
import { motion } from 'framer-motion';
interface PageHeroProps {
  title: string;
  subtitle: string;
  image: string;
}
export function PageHero({ title, subtitle, image }: PageHeroProps) {
  return (
    <section className="relative h-[280px] sm:h-[320px] md:h-[360px] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/60 to-slate-900/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{
            opacity: 0,
            y: 20
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.6
          }}
          className="max-w-xl">

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 leading-tight">
            {title}
          </h1>
          <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
            {subtitle}
          </p>
        </motion.div>
      </div>
    </section>);

}