import React from 'react';
import { motion } from 'framer-motion';
import { Layout } from '../components/Layout';
import { PageHero } from '../components/PageHero';
import { ServiceCard } from '../components/ServiceCard';
import { Button } from '../components/ui/Button';
import {
  Home,
  Sparkles,
  User,
  Activity,
  Pill,
  Moon,
  Coffee,
  Bus,
  ChefHat } from
'lucide-react';
export function ServicesPage() {
  const services = [
  {
    title: 'Live-in Care',
    description:
    'Comprehensive 24-hour care in the comfort of your own home. Our carers provide constant support and companionship.',
    icon: Home
  },
  {
    title: 'Housekeeping',
    description:
    'Assistance with daily household tasks including cleaning, laundry, and organizing for a comfortable environment.',
    icon: Sparkles
  },
  {
    title: 'Personalised Care',
    description:
    'Bespoke care plans tailored to your specific needs, preferences, and routine while respecting your independence.',
    icon: User
  },
  {
    title: 'Re-enablement',
    description:
    'Short-term intensive support to help you regain independence after an illness or hospital stay.',
    icon: Activity
  },
  {
    title: 'Medication Support',
    description:
    'Professional assistance with medication management, ensuring prescriptions are taken correctly and on time.',
    icon: Pill
  },
  {
    title: 'Waking Night',
    description:
    'Overnight support where a carer stays awake to assist with any needs during the night.',
    icon: Moon
  },
  {
    title: 'Respite Care',
    description:
    'Temporary care service allowing primary caregivers to take a well-deserved break.',
    icon: Coffee
  },
  {
    title: 'Escorting',
    description:
    'Accompaniment to appointments, social events, or shopping trips to keep you engaged with your community.',
    icon: Bus
  },
  {
    title: 'Cooking & Meals',
    description:
    'Preparation of nutritious meals tailored to dietary requirements and preferences.',
    icon: ChefHat
  }];

  return (
    <Layout>
      {/* Hero Banner */}
      <PageHero
        title="Our Services"
        subtitle="Comprehensive support for those who live at home but require additional help to maintain independence and quality of life."
        image="/shutterstock_2654539205.jpg" />


      {/* Services Grid */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {services.map((service, index) =>
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              delay={index * 0.05} />

            )}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-6 sm:p-8 md:p-10 shadow-sm border border-lilac-100">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-center">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-charcoal mb-4">
                  Our Approach to Care
                </h2>
                <p className="text-sm sm:text-base text-charcoal-light mb-4 leading-relaxed">
                  Our focus is to deliver excellent services and contribute to
                  improve our service user's choice and control over decisions
                  that affect their own health and wellbeing.
                </p>
                <p className="text-sm sm:text-base text-charcoal-light leading-relaxed">
                  We work within a system that harnesses the expertise,
                  capacity, and potential of people, families, and communities.
                </p>
                <div className="mt-6">
                  <Button variant="primary" to="/contact">
                    Discuss Your Needs
                  </Button>
                </div>
              </div>
              <div>
                <img
                  src="/shutterstock_2673721079.jpg"
                  alt="Caregiver with patient"
                  className="rounded-xl w-full h-[220px] sm:h-[280px] object-cover shadow-md" />

              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>);

}