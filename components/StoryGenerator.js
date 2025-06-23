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

  const headings = [
    'Upload Photo or Describe Your Child',
    'Tell Us About Your Child',
    'Choose Story Type',
    'Select Theme and Length',
  ];

  return (
    <section id="generator" className="py-20 bg-[var(--color-bg-section)]">
      <div className="max-w-4xl mx-auto h-[36rem] flex items-center justify-center px-4">
        <div className="relative w-[65%] h-full bg-white rounded-3xl shadow-2xl p-6 pt-20">
          <div className="absolute left-1/2 top-[10%] -translate-x-1/2 w-4/5 h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-[var(--color-primary)] transition-all duration-700"
              style={{ width: `${((step - 1) / 3) * 100}%` }}
            />
          </div>
          <h3 className="text-xl font-semibold text-center mb-6">
            {headings[step - 1]}
          </h3>
          <div className="relative flex-grow overflow-hidden">
          {/* Step 1 */}
          <div className={stepClass(1)}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <label className="flex flex-col items-center justify-center h-32 border-2 border-dashed rounded-lg bg-white shadow-md cursor-pointer hover:shadow-lg">
                <span className="mb-2 font-medium">Upload Photo</span>
                <input type="file" className="hidden" />
              </label>
              <div className="flex flex-col h-32 border-2 border-dashed rounded-lg bg-white shadow-md p-4">
                <label htmlFor="description" className="mb-2 font-medium text-center">
                  Describe Your Child
                </label>
                <textarea
                  id="description"
                  className="flex-1 resize-none bg-transparent outline-none"
                  placeholder="Describe appearance"
                />
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className={stepClass(2)}>
            <div className="space-y-4 animate-fade-in">
              <div className="bg-white rounded-lg shadow p-4">
                <label htmlFor="name" className="block mb-1 font-medium">
                  Name
                </label>
                <input id="name" type="text" className="w-full border-none bg-transparent focus:outline-none" />
              </div>
              <div className="bg-white rounded-lg shadow p-4">
                <label htmlFor="age" className="block mb-1 font-medium">
                  Age
                </label>
                <input id="age" type="number" className="w-full border-none bg-transparent focus:outline-none" />
              </div>
              <div className="bg-white rounded-lg shadow p-4">
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
              <div className="bg-white rounded-lg shadow p-4">
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
              <div className="bg-white rounded-lg shadow p-4">
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
      </div>
    </section>
  );
}
