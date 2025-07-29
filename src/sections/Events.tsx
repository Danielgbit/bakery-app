'use client'

import events from "@/data/events";
import { motion } from "framer-motion";

function Events() {
  return (
    <section className="bg-events w-full py-40" id="eventos">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-tertiary text-center mb-12">
          Próximos Eventos
        </h2>

        {/* CARDS */}
        <div
          className="grid md:grid-cols-3 gap-8"
        >
          {events.map((e, index) => (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.5 }}
              key={index}
              className="bg-cards-secondary rounded-xl shadow-md p-6 hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-primary mb-2">
                {e.title}
              </h3>
              <p className="text-secondary text-sm mb-3">{e.date}</p>
              <p className="text-primary text-sm">{e.description}</p>
            </motion.div>
          ))}
        </div>
        {/* CARDS */}
      </div>
    </section>
  );
}

export default Events;
