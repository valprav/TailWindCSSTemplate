import { useState } from 'react';

export default function UserProfile() {
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState('Jane Doe');
  const [email, setEmail] = useState('jane@example.com');
  const [avatar, setAvatar] = useState('https://picsum.photos/seed/profile/120');

  return (
    <section className="max-w-md mx-auto bg-white rounded-xl shadow p-6 space-y-4">
      <div className="flex items-center space-x-4">
        <img
          src={avatar}
          alt="User avatar"
          className="w-20 h-20 rounded-full object-cover"
        />
        {editing && (
          <input
            type="text"
            value={avatar}
            onChange={(e) => setAvatar(e.target.value)}
            className="flex-1 border rounded p-2"
          />
        )}
      </div>
      <div>
        <label htmlFor="name" className="block font-medium mb-1">
          Name
        </label>
        {editing ? (
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border rounded p-2"
          />
        ) : (
          <p>{name}</p>
        )}
      </div>
      <div>
        <label htmlFor="email" className="block font-medium mb-1">
          Email
        </label>
        {editing ? (
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border rounded p-2"
          />
        ) : (
          <p>{email}</p>
        )}
      </div>
      <div className="text-right">
        <button
          onClick={() => setEditing(!editing)}
          className="px-4 py-2 bg-[var(--color-primary)] text-white rounded hover:opacity-90"
        >
          {editing ? 'Save' : 'Edit Profile'}
        </button>
      </div>
    </section>
  );
}
