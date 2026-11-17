import { useState } from "react";
import "./App.css";
import type { FileItem } from "./types.ts";
import { Sidebar } from "./components/Sidebar.tsx";
import { Editor } from "./components/Editor.tsx";

const initialFiles: FileItem[] = [
  { id: "1", name: "readme.md", content: "# Hello" },
  { id: "2", name: "notes.txt", content: "Some notes" },
  { id: "3", name: "app.js", content: "console.log('hi');" },
];

export default function App() {
  const [files, setFiles] = useState<FileItem[]>(initialFiles);
  const [activeId, setActiveId] = useState(initialFiles[0].id);

  const activeFile = files.find((f) => f.id === activeId)!;

  function updateContent(text: string) {
    setFiles(
      files.map((f) => (f.id === activeId ? { ...f, content: text } : f))
    );
  }

  return (
    <div className="app">
      <Sidebar files={files} activeId={activeId} onSelect={setActiveId} />
      <main className="main">
        <div className="tabs">{activeFile.name}</div>
        <Editor file={activeFile} onChange={updateContent} />
      </main>
    </div>
  );
}