import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { createAnnotation } from "@/lib/db";
import { useTitle } from "@/lib/useTitle";
import { SquareMinus } from "lucide-react";
import { Link } from "react-router-dom";
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
    <div>
      <Input
        placeholder="Título"
        id="title"
        className=" absolute w-3/4"
      ></Input>
      <Editor className="pt-10" />
      <Link to="/">
        <SquareMinus className="relative float-right mt-8 mr-12 h-10 w-10" />
      </Link>
      <Button onClick={() => createAnnotation} className="rounded-3xl m-8 text-base">
          Save
      </Button>
    </div>
  );
}
