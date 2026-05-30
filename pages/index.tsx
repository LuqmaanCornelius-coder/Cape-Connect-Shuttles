import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="bg-navy text-white min-h-screen">
      {/* Hero Section */}
      <section
        className="flex flex-col items-center justify-center h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('https://picsum.photos/1200/800?random=1')" }}
      >
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-bold text-gold"
        >
          Premium Tours, Transfers & Vehicle Rentals
        </motion.h1>
        <p className="mt-4 text-lg md:text-2xl max-w-2xl text-center">
          From Cape Town to Kruger, experience South Africa with comfort, safety and professionalism.
        </p>
        <div className="mt-6 flex gap-4">
          <button className="bg-gold text-navy px-6 py-3 rounded-lg">Get Quote</button>
          <button className="bg-white text-navy px-6 py-3 rounded-lg">Book Now</button>
          <button className="bg-green-500 text-white px-6 py-3 rounded-lg">WhatsApp Us</button>
        </div>
      </section>
    </main>
  );
}
