
'use client';
import { useState, useEffect } from "react";

const checklist = [
  "Ich weiß, warum ich handeln möchte",
  "Ich kann Verluste akzeptieren, ohne impulsiv zu werden",
  "Ich sehe jeden Trade als Übung, nicht als Einnahmequelle",
  "Ich bin bereit, mit sehr kleinem Kapital zu starten",
  "Ich habe mindestens ein Setup, das ich verstehe",
  "Ich kann Einstieg, SL & TP technisch umsetzen",
  "Ich kenne % Risiko und Positionsgrößen",
  "Ich habe eine Checkliste für Ein- & Ausstieg",
  "Ich habe einen seriösen Broker gewählt",
  "Ich weiß, wie ich einzahle und abhebe",
  "Ich handle mit maximal 1–2% Risiko pro Trade",
  "Ich dokumentiere meine Trades",
  "Ich erkenne emotionale Zustände und nehme bewusst Pausen"
];

export default function Echtgeldstart() {
  const [progress, setProgress] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("echtgeldChecklist");
      return saved ? JSON.parse(saved) : Array(checklist.length).fill(false);
    }
    return Array(checklist.length).fill(false);
  });

  useEffect(() => {
    localStorage.setItem("echtgeldChecklist", JSON.stringify(progress));
  }, [progress]);

  const toggle = (index: number) => {
    const updated = [...progress];
    updated[index] = !updated[index];
    setProgress(updated);
  };

  return (
    <main className="p-4 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">🧭 Vom Paper zur Realität</h2>
      <p className="mb-4">Diese Checkliste hilft dir beim sanften Einstieg ins Echtgeldtrading:</p>
      <ul className="space-y-2">
        {checklist.map((item, i) => (
          <li
            key={i}
            onClick={() => toggle(i)}
            className={\`cursor-pointer border p-3 rounded \${progress[i] ? "bg-green-100" : "hover:bg-gray-50"}\`}
          >
            <input type="checkbox" checked={progress[i]} readOnly className="mr-2" />
            {item}
          </li>
        ))}
      </ul>
    </main>
  );
}
