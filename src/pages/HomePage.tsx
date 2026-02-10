import React from "react";
import { motion } from "framer-motion";
import { Heart, Shield, Clock, Users, Tablet, Activity } from "lucide-react";
import { Button } from "../components/ui/Button";
import { ServiceCard } from "../components/ServiceCard";
import { Layout } from "../components/Layout";
export function HomePage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="\shutterstock_2614617899.jpg"
            alt="Caring nurse holding hands with senior patient"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-white/40 sm:from-white/90 sm:via-white/70 sm:to-transparent" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 sm:py-16">
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            className="max-w-lg sm:max-w-xl"
          >
            <span className="inline-block px-3 py-1 rounded-full bg-lilac-100 text-lilac-700 font-medium text-xs sm:text-sm mb-4 sm:mb-5">
              Goshen-Hill Care Services
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal mb-4 sm:mb-5 leading-tight">
              Compassionate Care with{" "}
              <span className="text-lilac-600">excellence and integrity</span>
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-charcoal-light mb-6 sm:mb-8 leading-relaxed">
              We provide standard domiciliary care services that allow you to
              maintain independence and quality of life in the comfort of your
              own home.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button variant="primary" size="md" to="/services">
                Explore Our Services
              </Button>
              <Button variant="outline" size="md" to="/contact">
                Contact Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{
                opacity: 0,
                x: -30,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.6,
              }}
            >
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-charcoal mb-4 sm:mb-5">
                Passionate about excellence and integrity in care
              </h2>
              <p className="text-sm sm:text-base text-charcoal-light mb-4 leading-relaxed">
                At Goshen-Hill Care Services, we understand that the roots of
                health lie not in hospitals, but in our people and communities.
                We are passionate about ensuring that the aging population is
                well taken care of with uncompromising service.
              </p>
              <p className="text-sm sm:text-base text-charcoal-light mb-6 leading-relaxed">
                Our mission is to reduce management costs while delivering
                excellent Housing Support and Domiciliary Care Services.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <div className="bg-slate-100 p-2 rounded-lg text-slate-600 shrink-0">
                    <Shield size={18} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-charcoal text-sm">
                      Safeguarding First
                    </h4>
                    <p className="text-xs text-charcoal-light">
                      Strict policies for safety and trust.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-lilac-50 p-2 rounded-lg text-lilac-600 shrink-0">
                    <Users size={18} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-charcoal text-sm">
                      Person-Centered
                    </h4>
                    <p className="text-xs text-charcoal-light">
                      Care built around your needs.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.95,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.6,
              }}
              className="relative"
            >
              <div className="absolute -top-3 -left-3 w-16 sm:w-20 h-16 sm:h-20 bg-lilac-100 rounded-full -z-10" />
              <div className="absolute -bottom-3 -right-3 w-20 sm:w-24 h-20 sm:h-24 bg-slate-100 rounded-full -z-10" />
              <img
                src="/shutterstock_2640242351.jpg"
                alt="Professional caregiver with elderly patient"
                className="rounded-xl shadow-lg w-full object-cover h-[300px] sm:h-[380px] md:h-[420px]"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-charcoal mb-3">
              Our Core Services
            </h2>
            <p className="text-sm sm:text-base text-charcoal-light">
              Comprehensive services designed to support you in your own home,
              promoting independence and well-being.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <ServiceCard
              title="Live-in Care"
              description="24/7 support in your own home, providing peace of mind and constant companionship."
              icon={Heart}
              delay={0.1}
            />

            <ServiceCard
              title="Personalised Care"
              description="Tailored support plans that respect your preferences, routines, and lifestyle choices."
              icon={Users}
              delay={0.2}
            />

            <ServiceCard
              title="Respite Care"
              description="Temporary relief for primary caregivers, ensuring continuity of care for your loved ones."
              icon={Clock}
              delay={0.3}
            />
          </div>

          <div className="text-center mt-8 sm:mt-10">
            <Button variant="secondary" to="/services">
              View All Services
            </Button>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-slate-800 text-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <motion.div
              initial={{
                opacity: 0,
                x: -30,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.6,
              }}
              className="order-2 lg:order-1"
            >
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1000&q=80"
                alt="Healthcare technology and digital records"
                className="rounded-xl shadow-xl w-full h-[250px] sm:h-[300px] object-cover"
              />
            </motion.div>

            <motion.div
              initial={{
                opacity: 0,
                x: 30,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.6,
              }}
              className="order-1 lg:order-2"
            >
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-white">
                Technology Meets Humanity
              </h2>
              <p className="text-sm sm:text-base text-slate-300 mb-5 leading-relaxed">
                We use technology to enhance, not replace, the human touch.
                Electronic applications help us deliver efficient and effective
                care.
              </p>

              <ul className="space-y-4">
                <li className="flex gap-3">
                  <div className="bg-slate-700 p-2.5 rounded-lg h-fit shrink-0">
                    <Activity className="text-lilac-300 w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm sm:text-base mb-1">
                      EMIS Application
                    </h4>
                    <p className="text-slate-300 text-xs sm:text-sm">
                      Performance and activity reports that inform service
                      improvements.
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="bg-slate-700 p-2.5 rounded-lg h-fit shrink-0">
                    <Tablet className="text-lilac-300 w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm sm:text-base mb-1">
                      Digital Records
                    </h4>
                    <p className="text-slate-300 text-xs sm:text-sm">
                      iPads for accurate electronic records and instant client
                      feedback.
                    </p>
                  </div>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-lilac-50">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-charcoal mb-4">
            Ready to discuss your care needs?
          </h2>
          <p className="text-sm sm:text-base text-charcoal-light mb-6 sm:mb-8 max-w-xl mx-auto">
            We are here to help you or your loved ones live comfortably at home.
            Contact us today for a free consultation.
          </p>
          <Button variant="primary" size="md" to="/contact">
            Get in Touch With Us
          </Button>
        </div>
      </section>
    </Layout>
  );
}
