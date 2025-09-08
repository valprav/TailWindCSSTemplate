import { useState } from 'react';
import StoryPreview from './StoryPreview';

export default function StoryViewer({ childrenData = [] }) {
  const sampleData = [
    {
      id: 1,
      name: 'Maya',
      stories: [
        {
          id: 101,
          title: "Maya's Adventure",
          image: 'https://picsum.photos/seed/maya1/600/300',
          text: 'Sample story text for Maya.',
        },
        {
          id: 102,
          title: 'Dragon Quest',
          image: 'https://picsum.photos/seed/maya2/600/300',
          text: 'Another exciting tale about Maya.',
        },
      ],
    },
    {
      id: 2,
      name: 'Liam',
      stories: [
        {
          id: 201,
          title: "Liam's Space Trip",
          image: 'https://picsum.photos/seed/liam1/600/300',
          text: 'Liam explores the stars.',
        },
      ],
    },
  ];

  const data = childrenData.length ? childrenData : sampleData;
  const [filter, setFilter] = useState('');
  const [selectedChildId, setSelectedChildId] = useState(data[0].id);
  const [selectedStory, setSelectedStory] = useState(data[0].stories[0]);
  const [fullscreen, setFullscreen] = useState(false);

  const filteredChildren = data.filter((c) =>
    c.name.toLowerCase().includes(filter.toLowerCase())
  );

  const selectStory = (childId, story) => {
    setSelectedChildId(childId);
    setSelectedStory(story);
  };

  return (
    <section className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg flex overflow-hidden">
      <aside className="w-1/3 border-r p-4 space-y-4 overflow-y-auto">
        <input
          type="text"
          aria-label="Filter stories"
          placeholder="Filter..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="w-full border rounded px-2 py-1"
        />
        {filteredChildren.map((child) => (
          <div key={child.id}>
            <h4 className="font-semibold mb-1">{child.name}</h4>
            <ul className="ml-2 space-y-1">
              {child.stories.map((story) => (
                <li key={story.id}>
                  <button
                    onClick={() => selectStory(child.id, story)}
                    className={`text-left w-full px-2 py-1 rounded ${selectedStory.id === story.id ? 'bg-[var(--color-secondary)] text-white' : 'hover:bg-gray-100'}`}
                  >
                    {story.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </aside>
      <div className="flex-1 relative p-4 overflow-y-auto">
        <StoryPreview story={selectedStory} />
        <button
          onClick={() => setFullscreen(true)}
          className="absolute top-4 right-4 px-3 py-1 bg-[var(--color-accent)] text-[color:var(--color-primary)] rounded shadow hover:opacity-90"
        >
          Fullscreen
        </button>
        {fullscreen && (
          <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
            <div className="relative bg-white max-w-3xl w-full p-4 rounded-lg shadow-lg">
              <button
                onClick={() => setFullscreen(false)}
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                aria-label="Close fullscreen"
              >
                ✕
              </button>
              <StoryPreview story={selectedStory} />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

