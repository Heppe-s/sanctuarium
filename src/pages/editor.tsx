import { EditorHeader } from "@/components/editor/header";
import { useTitle } from "@/lib/useTitle";
import Editor from "../components/editor";

export default function editor() {
  useTitle("Editor");

  function register(id: string, confirm: boolean) {
    var text = `${id}, `;
    if (confirm == false) {
      text = `${text}, ${id}`;
    } else if (confirm == true) {
      return console.log(`id = ${text}`);
    }
  }

  return (
    <div className="h-full w-full flex flex-col justify-between">
      <EditorHeader />
      <Editor className="h-full" />
    </div>
  );
}
