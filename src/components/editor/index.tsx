import EditorJS from "@editorjs/editorjs";
import { useEffect, useRef } from "react";
import { i18n, tools } from "./constants";

export default function Editor() {
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
        className="border py-4 w-full min-h-[500px] rounded-md"
        id="Editor"
      />
    </>
  );
}
