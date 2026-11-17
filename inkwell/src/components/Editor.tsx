import type { FileItem } from "../types";

type Props = {
  file: FileItem;
  onChange: (text: string) => void;
};

export function Editor({ file, onChange }: Props) {
  return (
    <textarea
      className="editor"
      value={file.content}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}