export default function Contact() {
  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold text-gold">Contact Us</h1>
      <form className="mt-6 flex flex-col gap-4 max-w-md">
        <input type="text" placeholder="Full Name" className="border p-3 rounded" />
        <input type="email" placeholder="Email" className="border p-3 rounded" />
        <textarea placeholder="Message" className="border p-3 rounded"></textarea>
        <button className="bg-gold text-navy px-6 py-3 rounded-lg">Send Message</button>
      </form>
    </main>
  );
}
