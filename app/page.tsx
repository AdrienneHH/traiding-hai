
'use client';
import Link from "next/link";

export default function Home() {
  return (
    <main className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Der Weg des Hais 🦈</h1>
      <ul className="space-y-4">
        <li className="border rounded-lg p-4 hover:shadow">
          <Link href="/echtgeldstart" className="text-blue-600 font-medium">🧭 Vom Paper zur Realität</Link>
        </li>
      </ul>
    </main>
  );
}
