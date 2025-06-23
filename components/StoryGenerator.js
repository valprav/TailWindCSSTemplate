import { useState } from 'react';

export default function StoryGenerator() {
  const [step, setStep] = useState(1);

  const next = () => setStep((s) => Math.min(4, s + 1));
  const prev = () => setStep((s) => Math.max(1, s - 1));

  const stepClass = (index) =>
    `absolute inset-0 transition-all duration-500 ease-in-out ${
      step === index ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8 pointer-events-none'
    }`;

  return (
    <section id="generator" className="py-20 bg-[var(--color-bg-section)]">
      <div className="max-w-xl mx-auto px-4">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
          Create Your Story
        </h2>
        <div className="relative h-80 overflow-hidden">
          <div className={stepClass(1)}>
            <label className="block mb-2 font-medium" htmlFor="avatar">
              Upload Photo
            </label>
            <input
              id="avatar"
              type="file"
              className="block w-full text-gray-700 mb-4"
            />
            <label className="block mb-2 font-medium" htmlFor="description">
              Or Describe Your Child
            </label>
            <textarea
              id="description"
              rows="3"
              className="w-full border rounded-md p-2"
              placeholder="Describe your child's appearance"
            />
          </div>

          <div className={stepClass(2)}>
            <div className="space-y-4">
              <div>
                <label className="block mb-1 font-medium" htmlFor="name">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  className="w-full border rounded-md p-2"
                />
              </div>
              <div>
                <label className="block mb-1 font-medium" htmlFor="age">
                  Age
                </label>
                <input
                  id="age"
                  type="number"
                  className="w-full border rounded-md p-2"
                />
              </div>
              <div>
                <label className="block mb-1 font-medium" htmlFor="interests">
                  Interests
                </label>
                <input
                  id="interests"
                  type="text"
                  className="w-full border rounded-md p-2"
                  placeholder="e.g. space, dragons, sports"
                />
              </div>
            </div>
          </div>

          <div className={stepClass(3)}>
            <label className="block mb-2 font-medium" htmlFor="type">
              Type of Story
            </label>
            <select id="type" className="w-full border rounded-md p-2">
              <option>Bedtime</option>
              <option>Adventure</option>
              <option>Life Lessons</option>
              <option>Special Event</option>
              <option>Other</option>
            </select>
          </div>

          <div className={stepClass(4)}>
            <div className="space-y-4">
              <div>
                <label className="block mb-1 font-medium" htmlFor="theme">
                  Theme
                </label>
                <select id="theme" className="w-full border rounded-md p-2">
                  <option>Fantasy</option>
                  <option>Space</option>
                  <option>Animals</option>
                  <option>Friendship</option>
                </select>
              </div>
              <div>
                <label className="block mb-1 font-medium" htmlFor="size">
                  Story Length
                </label>
                <select id="size" className="w-full border rounded-md p-2">
                  <option>Short</option>
                  <option>Medium</option>
                  <option>Long</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between mt-8">
          {step > 1 && (
            <button
              onClick={prev}
              className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
            >
              Back
            </button>
          )}
          {step < 4 ? (
            <button
              onClick={next}
              className="ml-auto px-4 py-2 bg-[var(--color-accent)] text-[color:var(--color-primary)] font-semibold rounded hover:opacity-90"
            >
              Next
            </button>
          ) : (
            <button
              className="ml-auto px-4 py-2 bg-[var(--color-accent)] text-[color:var(--color-primary)] font-semibold rounded hover:opacity-90"
            >
              Generate Story
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
