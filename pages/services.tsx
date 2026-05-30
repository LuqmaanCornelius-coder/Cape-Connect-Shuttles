export default function Services() {
  const services = [
    "Airport Transfers",
    "Private Shuttle Services",
    "Corporate Transport",
    "Golf Tours",
    "Wine Tours",
    "Safari Tours",
    "Vehicle Rentals",
    "VIP Transport",
  ];

  return (
    <main className="p-10 grid md:grid-cols-2 gap-6">
      {services.map((service) => (
        <div key={service} className="bg-white shadow-lg rounded-lg p-6 hover:scale-105 transition">
          <h2 className="text-xl font-bold text-navy">{service}</h2>
          <p className="mt-2 text-gray-600">Luxury {service.toLowerCase()} across South Africa.</p>
        </div>
      ))}
    </main>
  );
}
