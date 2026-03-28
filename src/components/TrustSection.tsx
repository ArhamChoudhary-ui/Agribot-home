"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

export default function TrustSection() {
  return (
    <section className="py-24 bg-earth-200 border-t border-earth-800/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display font-extrabold text-3xl md:text-5xl text-primary-950 mb-12"
        >
          Trusted by Farmers Across India
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-8 rounded-2xl shadow-md border-b-4 border-accent-500 text-left"
          >
            <div className="flex text-accent-500 mb-4">
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
            </div>
            <p className="text-lg text-earth-900 font-medium mb-6 italic">
              "This helped me save so much time in my field work. I don't have to hire as many laborers, and the robot works perfectly even in the rainy season."
            </p>
            <div className="flex items-center gap-4">
              <img src="https://images.unsplash.com/photo-1548175402-2eb4202af0d9?q=80&w=200&auto=format&fit=crop" alt="Ramesh Patil" className="w-14 h-14 rounded-full object-cover" />
              <div>
                <p className="font-bold text-primary-950">Ramesh Patil</p>
                <p className="text-sm text-primary-700">Sugarcane Farmer, Maharashtra</p>
              </div>
            </div>
          </motion.div>

          {/* Testimonial 2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white p-8 rounded-2xl shadow-md border-b-4 border-accent-500 text-left"
          >
            <div className="flex text-accent-500 mb-4">
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
            </div>
            <p className="text-lg text-earth-900 font-medium mb-6 italic">
              "I was worried it would be too complicated to use, but the app is very simple. It only sprays where needed, saving us thousands of rupees on pesticides."
            </p>
            <div className="flex items-center gap-4">
              <img src="https://images.unsplash.com/photo-1596727362302-b8d891c42ab8?q=80&w=200&auto=format&fit=crop" alt="Sunita Devi" className="w-14 h-14 rounded-full object-cover" />
              <div>
                <p className="font-bold text-primary-950">Sunita Devi</p>
                <p className="text-sm text-primary-700">Wheat Farm Owner, Punjab</p>
              </div>
            </div>
          </motion.div>

          {/* Testimonial 3 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white p-8 rounded-2xl shadow-md border-b-4 border-accent-500 text-left lg:col-span-1 md:col-span-2"
          >
            <div className="flex text-accent-500 mb-4">
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
            </div>
            <p className="text-lg text-earth-900 font-medium mb-6 italic">
              "The soil monitoring showed me exactly why my second field was dying. We changed the water routing last month based on the report and the crops are green again."
            </p>
            <div className="flex items-center gap-4">
              <img src="https://images.unsplash.com/photo-1534947913340-97992c246f88?q=80&w=200&auto=format&fit=crop" alt="Ajit Singh" className="w-14 h-14 rounded-full object-cover" />
              <div>
                <p className="font-bold text-primary-950">Ajit Singh</p>
                <p className="text-sm text-primary-700">Rice Farmer, Haryana</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
