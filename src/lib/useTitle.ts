import { useEffect } from "react";
import { create } from "zustand";

interface TitleStore {
  title: string;
  setTitle: (newTitle: string) => void;
}

const Title = create<TitleStore>((set) => ({
  title: document.title,
  setTitle: (newTitle: string) => {
    set({ title: newTitle });
    document.title = newTitle;
  },
}));

export function useTitle(newTitle?: string) {
  const titleStore = Title();

  useEffect(() => {
    if (newTitle) {
      titleStore.setTitle(newTitle);
    }
  }, [newTitle]);

  return titleStore.title;
}
