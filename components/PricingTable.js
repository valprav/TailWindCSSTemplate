const tiers = [
  {
    name: 'Starter',
    price: '$0',
    features: ['One custom story', 'Basic illustrations', 'Limited sharing'],
    cta: 'Get Started',
  },
  {
    name: 'Pro',
    price: '$9/mo',
    features: ['Unlimited stories', 'HD illustrations', 'Share anywhere'],
    cta: 'Go Pro',
  },
  {
    name: 'Premium',
    price: '$19/mo',
    features: ['Unlimited stories', 'High-res illustrations', 'Print-ready files'],
    cta: 'Join Premium',
  },
];

export default function PricingTable() {
  return (
    <section id="pricing" className="py-20 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-12">Pricing</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow flex flex-col">
              <h3 className="text-xl font-semibold text-gray-900">{tier.name}</h3>
              <p className="mt-4 text-3xl font-extrabold text-pink-500">{tier.price}</p>
              <ul className="mt-6 space-y-2 flex-1">
                {tier.features.map((feature, i) => (
                  <li key={i} className="text-gray-600">{feature}</li>
                ))}
              </ul>
              <a href="#" className="mt-8 inline-block px-6 py-3 bg-pink-500 text-white font-semibold rounded-md hover:bg-pink-600">{tier.cta}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
