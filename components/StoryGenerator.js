import { useState } from 'react';

export default function StoryGenerator() {
  const [step, setStep] = useState(1);
  const [selectedInterests, setSelectedInterests] = useState([]);
  const [storyType, setStoryType] = useState('');
  const [theme, setTheme] = useState('Fantasy');
  const next = () => setStep((s) => Math.min(4, s + 1));
  const prev = () => setStep((s) => Math.max(1, s - 1));

  const interestOptions = ['Space', 'Animals', 'Sports', 'Magic', 'Dragons'];
  const storyOptions = ['Bedtime', 'Adventure', 'Life Lessons', 'Special Event', 'Other'];
  const themes = ['Fantasy', 'Space', 'Animals', 'Friendship'];

  const toggleInterest = (interest) => {
    setSelectedInterests((ints) =>
      ints.includes(interest) ? ints.filter((i) => i !== interest) : [...ints, interest]
    );
  };

  const stepClass = (index) => {
    if (index === step) return 'absolute inset-0 transition-all duration-700';
    if (index < step)
      return 'absolute inset-0 transition-all duration-700 transform -translate-x-full opacity-0 pointer-events-none';
    return 'absolute inset-0 transition-all duration-700 transform translate-x-full opacity-0 pointer-events-none';
  };

  return (
    <section id="generator" className="py-20 bg-[var(--color-bg-section)]">
      <div className="max-w-xl mx-auto px-4">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
          Create Your Story
        </h2>
        <div className="relative h-96 overflow-hidden">
          {/* Step 1 */}
          <div className={stepClass(1)}>
            <div className="border-2 border-dashed rounded-lg p-6 text-center mb-6 bg-white shadow animate-pulse">
              <p className="mb-2 font-medium">Upload Photo</p>
              <input id="avatar" type="file" className="mx-auto" />
            </div>
            <label htmlFor="description" className="block mb-2 font-medium">
              Or Describe Your Child
            </label>
            <textarea
              id="description"
              rows="3"
              className="w-full border rounded-md p-2"
              placeholder="Describe your child's appearance"
            />
          </div>

          {/* Step 2 */}
          <div className={stepClass(2)}>
            <div className="space-y-4 bg-white p-4 rounded-lg shadow animate-fade-in">
              <div>
                <label htmlFor="name" className="block mb-1 font-medium">
                  Name
                </label>
                <input id="name" type="text" className="w-full border rounded-md p-2" />
              </div>
              <div>
                <label htmlFor="age" className="block mb-1 font-medium">
                  Age
                </label>
                <input id="age" type="number" className="w-full border rounded-md p-2" />
              </div>
              <div>
                <p className="mb-1 font-medium">Interests</p>
                <div className="flex flex-wrap gap-2">
                  {interestOptions.map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => toggleInterest(opt)}
                      className={`px-3 py-1 rounded-full border transition-colors ${selectedInterests.includes(opt) ? 'bg-[var(--color-primary)] text-white' : 'bg-gray-100'}`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className={stepClass(3)}>
            <div className="grid grid-cols-2 gap-4">
              {storyOptions.map((opt) => (
                <label
                  key={opt}
                  className={`cursor-pointer p-4 rounded-lg shadow text-center transition-transform ${storyType === opt ? 'bg-[var(--color-secondary)] scale-105' : 'bg-white'}`}
                >
                  <input
                    type="radio"
                    name="storyType"
                    value={opt}
                    className="hidden"
                    onChange={() => setStoryType(opt)}
                  />
                  {opt}
                </label>
              ))}
            </div>
          </div>

          {/* Step 4 */}
          <div className={stepClass(4)}>
            <div className="space-y-4">
              <div>
                <p className="mb-2 font-medium">Theme</p>
                <div className="grid grid-cols-2 gap-3">
                  {themes.map((t) => (
                    <label
                      key={t}
                      className={`cursor-pointer p-4 rounded-lg shadow text-center transition-transform ${theme === t ? 'bg-[var(--color-secondary)] scale-105' : 'bg-white'}`}
                    >
                      <input
                        type="radio"
                        name="theme"
                        value={t}
                        className="hidden"
                        onChange={() => setTheme(t)}
                      />
                      {t}
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <label htmlFor="size" className="block mb-1 font-medium">
                  Story Length
                </label>
                <input
                  id="size"
                  type="range"
                  min="1"
                  max="3"
                  className="w-full"
                />
                <div className="flex justify-between text-sm mt-1">
                  <span>Short</span>
                  <span>Medium</span>
                  <span>Long</span>
                </div>
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
            <button className="ml-auto px-4 py-2 bg-[var(--color-accent)] text-[color:var(--color-primary)] font-semibold rounded hover:opacity-90">
              Generate Story
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
