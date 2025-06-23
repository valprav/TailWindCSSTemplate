export default function StoryList({ stories = [], onSelect }) {
  const sample = [
    { id: 1, title: 'Maya\'s Adventure', cover: 'https://picsum.photos/seed/story1/400/250' },
    { id: 2, title: 'Space Quest', cover: 'https://picsum.photos/seed/story2/400/250' },
    { id: 3, title: 'Dragon Tale', cover: 'https://picsum.photos/seed/story3/400/250' },
  ];
  const items = stories.length ? stories : sample;
  return (
    <section className="max-w-4xl mx-auto">
      <h3 className="text-xl font-semibold mb-4">Your Stories</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((s) => (
          <button
            key={s.id}
            onClick={() => onSelect && onSelect(s)}
            className="bg-white rounded-lg shadow hover:shadow-lg text-left overflow-hidden"
          >
            <img src={s.cover} alt="story cover" className="w-full h-40 object-cover" />
            <div className="p-4">
              <h4 className="font-medium">{s.title}</h4>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}
