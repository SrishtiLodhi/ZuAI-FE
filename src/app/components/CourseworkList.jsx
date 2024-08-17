// components/CourseworkList.tsx

"use client";
import { useCourseworkStore } from "../store/useCourseworkStore";
import Link from "next/link";

export default function CourseworkList() {
    const { courseworkList } = useCourseworkStore();

  return (
    <div className="p-4 border rounded-lg">
      <h2 className="mb-4">Uploaded Coursework</h2>
      <ul>
        {courseworkList.map((coursework: any) => (
          <li key={coursework.id} className="mb-4">
            <Link href={`/coursework/${coursework.id}`}>
              <a className="text-blue-500 underline">{coursework.title}</a>
            </Link>
            <p>Subject: {coursework.subject}</p>
            <p>Type: {coursework.courseworkType}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
