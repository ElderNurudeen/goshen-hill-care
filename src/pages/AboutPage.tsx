import React from 'react';
import { motion } from 'framer-motion';
import { Layout } from '../components/Layout';
import { PageHero } from '../components/PageHero';
import { Shield, Eye, Heart, CheckCircle } from 'lucide-react';
export function AboutPage() {
  return (
    <Layout>
      {/* Hero Banner */}
      <PageHero
        title="About Goshen-Hill Care Services"
        subtitle="An expert domiciliary care and nursing agency in the heart of Essex, dedicated to excellence with uncompromising integrity."
        image="/shutterstock_2640242351.jpg" />


      {/* Main Content */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
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
              }}>

              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-charcoal mb-4 sm:mb-5">
                Our Story & Mission
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-charcoal-light">
                <p>
                  In today's world, especially in England, many community
                  services are moving towards a model of care that provides a
                  person's social care needs seamlessly. At Goshen-Hill Care
                  Services, we are passionate about ensuring that the aging
                  population is well taken care of.
                </p>
                <p>
                  We have ventured into the hospitality industry by establishing
                  our own Home Care Services with a clear goal: to reduce the
                  management cost for Housing Support and Domiciliary Care
                  Services while delivering excellent care.
                </p>
                <p>
                  Our services are available to those who need them, and they
                  will benefit from the excellent care service Goshen-Hill Care
                  Services delivers.
                </p>
              </div>
            </motion.div>

            <div className="grid grid-cols-2 gap-3 sm:gap-4">
               <img
                src="/shutterstock_2673721079.jpg"
                alt="Nurse holding patient hands"
                className="rounded-xl shadow-md w-full h-40 sm:h-48 object-cover" />

              <img
                src="/shutterstock_2640242351.jpg"
                alt="Caregiver assisting senior"
                className="rounded-xl shadow-md w-full h-40 sm:h-48 object-cover" />

              <img
                src="/shutterstock_2614617899.jpg"
                alt="Senior care at home"
                className="rounded-xl shadow-md w-full h-40 sm:h-48 object-cover" />
                
                <img
                src="/shutterstock_2576724281.jpg"
                alt="Healthcare professional with patient"
                className="rounded-xl shadow-md w-full h-40 sm:h-48 object-cover" />

            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-charcoal mb-3">
              Our Core Values
            </h2>
            <p className="text-sm sm:text-base text-charcoal-light max-w-xl mx-auto">
              We operate with a strong set of principles that guide our
              day-to-day activities and interactions with our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
            {
              icon: Eye,
              title: 'Transparency',
              desc: 'High transparency in Care plans, Finances, and Health. Compliant with regulation laws.'
            },
            {
              icon: Shield,
              title: 'Safeguarding',
              desc: 'Care guarded with safeguarding policies. Training always up to date.'
            },
            {
              icon: Heart,
              title: 'Compassion',
              desc: 'Health roots lie in people and communities. Service delivery built on user needs.'
            },
            {
              icon: CheckCircle,
              title: 'Excellence',
              desc: 'Excellence in every aspect, using technology for efficient care delivery.'
            }].
            map((value, index) =>
            <motion.div
              key={index}
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
                delay: index * 0.1
              }}
              className="bg-white p-5 sm:p-6 rounded-xl shadow-sm border border-lilac-100">

                <div className="w-10 h-10 bg-lilac-50 rounded-lg flex items-center justify-center mb-4 text-lilac-600">
                  <value.icon size={20} />
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-charcoal mb-2">
                  {value.title}
                </h3>
                <p className="text-charcoal-light text-xs sm:text-sm leading-relaxed">
                  {value.desc}
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </section>
    </Layout>);

}