import { useState } from 'react';

const faqs = [
  {
    question: 'How do I create a story?',
    answer: 'Simply sign up, enter your child\'s name and interests, and our app will generate a story instantly.',
  },
  {
    question: 'Can I download the illustrations?',
    answer: 'Yes, higher tiers allow you to download high-resolution images of the story.',
  },
  {
    question: 'Is it safe for kids?',
    answer: 'Absolutely! We use child-friendly language and imagery throughout the app.',
  },
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="faq" className="py-20 bg-[var(--color-bg-section)]">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-[color:var(--color-accent)] rounded-lg">
              <button
                className="w-full px-4 py-3 flex justify-between items-center text-left focus:outline-none hover:bg-[color:var(--color-accent)/0.1]"
                aria-expanded={openIndex === index}
                aria-controls={`faq-${index}`}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-medium text-gray-900">{faq.question}</span>
                <svg
                  className={`w-5 h-5 transform transition-transform ${openIndex === index ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === index && (
                <div id={`faq-${index}`} className="px-4 py-3 text-gray-600">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
