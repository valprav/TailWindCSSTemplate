const testimonials = [
  {
    name: 'Sophia',
    quote: 'My son loves seeing himself in the stories. It makes reading time magical!',
    avatar: 'https://via.placeholder.com/96',
  },
  {
    name: 'Jackson',
    quote: 'The illustrations are so vibrant and personal. Highly recommend!',
    avatar: 'https://via.placeholder.com/96',
  },
  {
    name: 'Ava',
    quote: 'A unique way to encourage my daughter to read and imagine.',
    avatar: 'https://via.placeholder.com/96',
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-12">What Parents Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow">
              <img src={t.avatar} alt={t.name} className="mx-auto w-24 h-24 rounded-full" />
              <p className="mt-4 text-gray-600">{t.quote}</p>
              <p className="mt-2 font-semibold text-gray-900">{t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
