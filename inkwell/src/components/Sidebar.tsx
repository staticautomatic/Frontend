import type { FileItem } from "../types";

type Props = {
  files: FileItem[];
  activeId: string; // для подсветки выбранного файла
  onSelect: (id: string) => void; // колбэк, который сообщает родителю, что пользователь выбрал файл
};

// сам Sidebar ничего не хранит: состояние живёт в родителе, а это «глупый» (presentational) компонент 
export function Sidebar({ files, activeId, onSelect }: Props) {
  return (
    <aside className="sidebar">
      <h2>Files</h2>
      <ul>
        {files.map((f) => (
          <li
            key={f.id}
            className={f.id === activeId ? "active" : ""}
            onClick={() => onSelect(f.id)}
          >
            {f.name}
          </li>
        ))}
      </ul>
    </aside>
  );
}