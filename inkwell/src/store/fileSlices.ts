import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { FileItem } from "../types";

export type FileState ={
    items: FileItem[],
    activeId: string,
}

const initialFiles: FileItem[] = [
    { id: "1", name: "readme.md", content: "# Hello" },
    { id: "2", name: "notes.txt", content: "Some notes" },
    { id: "3", name: "app.js", content: "console.log('hi');" },
]

const initialState: FileState = {
    items: initialFiles,
    activeId: initialFiles[0].id,
}

const filesSlice = createSlice({
    name: "files",
    initialState,
    reducers: {
        setActiveId(state, action: PayloadAction<string>) {
            state.activeId = action.payload;
        },
        updateContent(state, action: PayloadAction<{id: string, content: string}>) {
            const file = state.items.find((f) => f.id === action.payload.id);
            if(file) {
                file.content = action.payload.content;
            }
        }
    }
})

export default filesSlice.reducer;
export const {setActiveId, updateContent} = filesSlice.actions;