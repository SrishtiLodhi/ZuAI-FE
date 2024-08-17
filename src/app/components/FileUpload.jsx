// components/FileUpload.tsx
"use client"
import { useState } from "react";

export default function FileUpload() {
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile && selectedFile.size <= 25 * 1024 * 1024) {
      setFile(selectedFile);
      localStorage.setItem("uploadedFile", JSON.stringify(selectedFile));
      setError(null);
    } else {
      setError("File size exceeds 25 MB.");
    }
  };

  return (
    <div className="flex flex-col items-center p-4 border rounded-lg background">

      <input
        type="file"
        onChange={handleFileUpload}
        className="hidden"
        id="file-upload"
        accept="application/pdf"
      />
      {/* <label
        htmlFor="file-upload"
        className="flex items-center justify-center w-full h-32 p-4 border-2 border-dashed rounded-lg cursor-pointer"
      >
        {file ? (
          <p>{file.name}</p>
        ) : (
          <p>Drag and drop your file here or click to upload</p>
        )}
      </label>
      {error && <p className="text-red-500">{error}</p>} */}
    </div>
  );
}
