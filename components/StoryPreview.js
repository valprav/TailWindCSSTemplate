export default function StoryPreview({ story }) {
  const sample = {
    title: 'Sample Story',
    image: 'https://picsum.photos/seed/preview/600/300',
    text: 'Once upon a time, there was a brave child who loved adventures.\nThis is a placeholder story preview.'
  };
  const data = story || sample;
  return (
    <section className="max-w-3xl mx-auto bg-white rounded-xl shadow overflow-hidden">
      <img src={data.image} alt="story illustration" className="w-full h-64 object-cover" />
      <div className="p-6 space-y-4">
        <h3 className="text-2xl font-bold">{data.title}</h3>
        <p className="text-gray-700 whitespace-pre-line max-h-60 overflow-y-auto">{data.text}</p>
      </div>
    </section>
  );
}
