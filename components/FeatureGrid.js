const features = [
  {
    title: 'Personalized Stories',
    description: 'Every story is crafted uniquely for your child with their name and interests.',
    icon: (
      <svg className="w-12 h-12 text-[color:var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2v8l3-2 3 2v-8c0-1.105-1.343-2-3-2z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v4m0 0c-1.657 0-3 .895-3 2v8l3-2 3 2v-8c0-1.105-1.343-2-3-2z" />
      </svg>
    ),
  },
  {
    title: 'Illustrated Heroes',
    description: 'Watch your child become the star of colorful illustrations.',
    icon: (
      <svg className="w-12 h-12 text-[color:var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="3" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14v7m0-16v3m5.657-1.657l-2.121 2.121M6.464 6.464l2.121 2.121M4 12h3m10 0h3m-3.657 5.657l2.121 2.121M6.464 17.536l2.121-2.121" />
      </svg>
    ),
  },
  {
    title: 'Share with Friends',
    description: 'Easily share your child’s adventures with family and friends.',
    icon: (
      <svg className="w-12 h-12 text-[color:var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 9l5-5 5 5M12 4v12" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 19h14" />
      </svg>
    ),
  },
];

export default function FeatureGrid() {
  return (
    <section id="features" className="py-20 bg-[var(--color-bg-section)]">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-12">Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow">
              {feature.icon}
              <h3 className="mt-4 text-xl font-semibold text-gray-900">{feature.title}</h3>
              <p className="mt-2 text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
