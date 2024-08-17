// components/ExploreCoursework.tsx
"use client"; 
import { useState } from "react";
import { useCourseworkStore } from "../store/useCourseworkStore";

export default function ExploreCoursework() {
  const { courseworkList } = useCourseworkStore();
  const [selectedSubject, setSelectedSubject] = useState("");

  const filteredCoursework = selectedSubject
    ? courseworkList.filter((coursework: any) => coursework.subject === selectedSubject)
    : courseworkList;

  return (
    <div className="p-4 border rounded-lg">
      <select
        value={selectedSubject}
        onChange={(e) => setSelectedSubject(e.target.value)}
        className="w-full p-2 border rounded mb-4"
      >
        <option value="">Select Subject</option>
        <option value="Math">Math</option>
        <option value="Science">Science</option>
        <option value="History">History</option>
      </select>
      <ul>
        {filteredCoursework.map((coursework: any) => (
          <li key={coursework.id} className="mb-4">
            <p>{coursework.title}</p>
            <p>Type: {coursework.courseworkType}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
