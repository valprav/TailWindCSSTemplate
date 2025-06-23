import { useState } from 'react';

export default function StoryGenerator() {
  const [step, setStep] = useState(1);
  const [selectedInterests, setSelectedInterests] = useState([]);
  const [storyType, setStoryType] = useState('');
  const [theme, setTheme] = useState('Fantasy');
  const [showModal, setShowModal] = useState(false);
  const [hairColor, setHairColor] = useState('');
  const [hairLength, setHairLength] = useState('');
  const [eyeColor, setEyeColor] = useState('');
  const [faceShape, setFaceShape] = useState('');
  const [skinTone, setSkinTone] = useState('');
  const [heightOpt, setHeightOpt] = useState('');
  const next = () => setStep((s) => Math.min(4, s + 1));
  const prev = () => setStep((s) => Math.max(1, s - 1));

  const interestOptions = ['Space', 'Animals', 'Sports', 'Magic', 'Dragons'];
  const storyOptions = ['Bedtime', 'Adventure', 'Life Lessons', 'Special Event', 'Other'];
  const themes = ['Fantasy', 'Space', 'Animals', 'Friendship'];
  const hairColors = [
    { name: 'Blonde', color: '#f5d76e' },
    { name: 'Brown', color: '#8d5524' },
    { name: 'Black', color: '#000000' },
    { name: 'Red', color: '#b55239' },
  ];
  const hairLengths = ['Short', 'Medium', 'Long'];
  const eyeColors = ['Black', 'Brown', 'Blue', 'Green'];
  const faceShapes = ['Round', 'Square', 'Oval'];
  const skinTones = [
    { name: 'Tone1', color: '#FFDBAC' },
    { name: 'Tone2', color: '#F1C27D' },
    { name: 'Tone3', color: '#E0AC69' },
    { name: 'Tone4', color: '#C68642' },
    { name: 'Tone5', color: '#8D5524' },
  ];
  const heights = ['Short', 'Medium', 'Tall'];

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
        <div className="relative w-[65%] h-full bg-white rounded-3xl shadow-2xl p-6 pt-20 flex flex-col">
          <div className="absolute left-1/2 top-[10%] -translate-x-1/2 w-4/5 h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-[var(--color-primary)] transition-all duration-700"
              style={{ width: `${((step - 1) / 3) * 100}%` }}
            />
          </div>
          <h3 className="text-xl font-semibold text-center mb-6">
            {headings[step - 1]}
          </h3>
          <div className="relative flex-grow overflow-hidden mt-4">
          {/* Step 1 */}
          <div className={stepClass(1)}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <label className="flex flex-col items-center justify-center h-32 border-2 border-dashed rounded-lg bg-white shadow-md cursor-pointer hover:shadow-lg">
                <span className="mb-2 font-medium">Upload Photo</span>
                <input type="file" className="hidden" />
              </label>
              <button
                type="button"
                onClick={() => setShowModal(true)}
                className="flex flex-col items-center justify-center h-32 border-2 border-dashed rounded-lg bg-white shadow-md hover:shadow-lg"
              >
                <span className="font-medium">Describe Your Child</span>
              </button>
            </div>
            <button className="mt-6 mx-auto px-4 py-2 bg-[var(--color-primary)] text-white rounded hover:opacity-90">
              Generate Avatar
            </button>
            {showModal && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
                <div className="bg-white rounded-xl shadow-xl p-6 w-11/12 max-w-md animate-fade-in">
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="text-lg font-semibold">Describe Your Child</h4>
                    <button
                      onClick={() => setShowModal(false)}
                      aria-label="Close"
                      className="text-2xl leading-none"
                    >
                      &times;
                    </button>
                  </div>
                  <div className="space-y-4 max-h-[70vh] overflow-y-auto">
                    <div>
                      <p className="font-medium mb-1">Hair Color</p>
                      <div className="flex gap-2">
                        {hairColors.map((h) => (
                          <button
                            key={h.name}
                            aria-label={h.name}
                            onClick={() => setHairColor(h.name)}
                            className={`w-8 h-8 rounded-full border-2 ${hairColor === h.name ? 'ring-2 ring-[var(--color-primary)]' : ''}`}
                            style={{ background: h.color }}
                          />
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="font-medium mb-1">Hair Length</p>
                      <div className="flex gap-2">
                        {hairLengths.map((l) => (
                          <button
                            key={l}
                            onClick={() => setHairLength(l)}
                            className={`px-3 py-1 rounded-full border ${hairLength === l ? 'bg-[var(--color-primary)] text-white' : 'bg-gray-100'}`}
                          >
                            {l}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="font-medium mb-1">Eye Color</p>
                      <div className="flex gap-2">
                        {eyeColors.map((c) => (
                          <button
                            key={c}
                            onClick={() => setEyeColor(c)}
                            className={`px-3 py-1 rounded-full border ${eyeColor === c ? 'bg-[var(--color-primary)] text-white' : 'bg-gray-100'}`}
                          >
                            {c}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="font-medium mb-1">Face</p>
                      <div className="flex gap-2">
                        {faceShapes.map((f) => (
                          <button
                            key={f}
                            onClick={() => setFaceShape(f)}
                            className={`px-3 py-1 rounded-full border ${faceShape === f ? 'bg-[var(--color-primary)] text-white' : 'bg-gray-100'}`}
                          >
                            {f}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="font-medium mb-1">Skin Tone</p>
                      <div className="flex gap-2">
                        {skinTones.map((t) => (
                          <button
                            key={t.name}
                            aria-label={t.name}
                            onClick={() => setSkinTone(t.name)}
                            className={`w-8 h-8 rounded-full border-2 ${skinTone === t.name ? 'ring-2 ring-[var(--color-primary)]' : ''}`}
                            style={{ background: t.color }}
                          />
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="font-medium mb-1">Height</p>
                      <div className="flex gap-2">
                        {heights.map((h) => (
                          <button
                            key={h}
                            onClick={() => setHeightOpt(h)}
                            className={`px-3 py-1 rounded-full border ${heightOpt === h ? 'bg-[var(--color-primary)] text-white' : 'bg-gray-100'}`}
                          >
                            {h}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 text-right">
                    <button
                      onClick={() => setShowModal(false)}
                      className="px-4 py-2 bg-[var(--color-primary)] text-white rounded hover:opacity-90"
                    >
                      Done
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Step 2 */}
          <div className={stepClass(2)}>
            <div className="space-y-4 animate-fade-in">
              <div className="bg-white rounded-lg shadow p-4">
                <label htmlFor="name" className="block mb-1 font-medium">
                  Name
                </label>
                <input id="name" type="text" className="w-full bg-gray-50 border border-gray-300 rounded p-2 focus:outline-none" />
              </div>
              <div className="bg-white rounded-lg shadow p-4">
                <label htmlFor="age" className="block mb-1 font-medium">
                  Age
                </label>
                <input id="age" type="number" className="w-full bg-gray-50 border border-gray-300 rounded p-2 focus:outline-none" />
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
                  className="w-full accent-[var(--color-primary)]"
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
