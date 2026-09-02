'use client';

import { FormEvent, useState } from 'react';

export default function WhatsAppTestPage() {
const [phone, setPhone] = useState('');
const [message, setMessage] = useState(
'Hello! This is a test message from my Next.js application 🚀'
);
const [loading, setLoading] = useState(false);
const [result, setResult] = useState('');

const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
e.preventDefault();

setLoading(true);
setResult('');

try {
  const response = await fetch('/api/whatsapp/send', {
    method: 'POST',

    headers: {
      'Content-Type': 'application/json',
    },

    body: JSON.stringify({
      to: phone,
      message,
    }),
  });

  const data = await response.json();

  if (data.success) {
    setResult(
      `✅ Message sent successfully! Message ID: ${
        data?.data?.messages?.[0]?.id || 'Received'
      }`
    );
  } else {
    setResult(
      `❌ ${
        data?.error?.error?.message ||
        data?.message ||
        'Failed to send message'
      }`
    );
  }

} catch (error) {
  console.error(error);
  setResult('❌ Something went wrong while connecting to the API');
} finally {
  setLoading(false);
}


};

return ( <main className="min-h-screen bg-zinc-950 flex items-center justify-center p-6"> <div className="w-full max-w-xl rounded-2xl border border-zinc-800 bg-zinc-900 p-8 shadow-2xl">

    <div className="mb-8">
      <h1 className="text-3xl font-bold text-white">
        WhatsApp API Test 🚀
      </h1>

      <p className="mt-2 text-zinc-400">
        Test your Meta WhatsApp Cloud API integration.
      </p>
    </div>

    <form
      onSubmit={handleSubmit}
      className="space-y-5"
    >
      <div>
        <label className="mb-2 block text-sm font-medium text-zinc-300">
          Recipient WhatsApp Number
        </label>

        <input
          type="text"
          placeholder="919876543210"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full rounded-xl border border-zinc-700 bg-zinc-800 px-4 py-3 text-white outline-none transition focus:border-green-500"
          required
        />

        <p className="mt-2 text-xs text-zinc-500">
          Include country code. Example: 919876543210
        </p>
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-zinc-300">
          Message
        </label>

        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={6}
          className="w-full resize-none rounded-xl border border-zinc-700 bg-zinc-800 px-4 py-3 text-white outline-none transition focus:border-green-500"
          required
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-xl bg-green-600 py-4 font-semibold text-white transition hover:bg-green-500 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {loading ? 'Sending Message...' : 'Send WhatsApp Message'}
      </button>
    </form>

    {result && (
      <div className="mt-6 rounded-xl border border-zinc-700 bg-zinc-800 p-4 text-sm text-white">
        {result}
      </div>
    )}

  </div>
</main>

);
}
