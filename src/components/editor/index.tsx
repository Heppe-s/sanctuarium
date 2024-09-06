import { cn } from "@/lib/utils";
import EditorJS from "@editorjs/editorjs";
import { useEffect, useRef } from "react";
import { i18n, tools } from "./constants";

export default function Editor({ className }: { className?: string }) {
  const editorRef = useRef<EditorJS>();

  useEffect(() => {
    if (!editorRef.current) {
      editorRef.current = new EditorJS({
        holder: "Editor",
        placeholder: "Escreva aqui as Anotações...",
        inlineToolbar: true,
        i18n,
        tools,
        onChange(api, event) {
          console.log(api, event);
        },
      });
    }
  }, []);

  return (
    <>
      <div
        className={cn("border py-4 w-full min-h-[500px] rounded-md", className)}
        id="Editor"
      />
    </>
  );
}
