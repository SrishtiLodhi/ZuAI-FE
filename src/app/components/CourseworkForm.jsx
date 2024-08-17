// components/CourseworkForm.tsx

"use client";  // Add this directive at the top

import { useState } from "react";
import  {useCourseworkStore}  from "../store/useCourseworkStore";

export default function CourseworkForm() {
  const [title, setTitle] = useState("");
  const [courseworkType, setCourseworkType] = useState("");
  const [subject, setSubject] = useState("");
  const { addCoursework } = useCourseworkStore();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addCoursework({ title, courseworkType, subject });
    setTitle("");
    setCourseworkType("");
    setSubject("");
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded-lg">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Coursework Title"
        className="w-full p-2 border rounded mb-4"
      />
      <input
        type="text"
        value={courseworkType}
        onChange={(e) => setCourseworkType(e.target.value)}
        placeholder="Coursework Type"
        className="w-full p-2 border rounded mb-4"
      />
      <input
        type="text"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
        placeholder="Subject"
        className="w-full p-2 border rounded mb-4"
      />
      <button type="submit" className="p-2 bg-blue-500 text-white rounded">
        Add Coursework
      </button>
    </form>
  );
}
