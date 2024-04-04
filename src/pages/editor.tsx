import { Link } from "react-router-dom";
import Editor from "../components/editor";
import { SquareMinus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

export default function editor(){
  
  
  function register(id: string, confirm: boolean){
    var text = `${id}, `
    if(confirm == false){
      text = `${text}, ${id}`
    } else if (confirm == true){
      return console.log(`id = ${text}`)
    }
  }

  return(
    <div>
      <Input placeholder="Título" id="title" className=" absolute w-3/4"></Input>
      <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="relative float-right w-1/4">Grupo</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => register("0", false)}>
          <Checkbox/>
            <label className="ml-2">
              id0
            </label>
        </DropdownMenuItem>

        <DropdownMenuItem onClick={() => register("1", false)}>
          <Checkbox/>
            <label className="ml-2">
              id1
            </label>
        </DropdownMenuItem>

        <DropdownMenuItem onClick={() => register("2", false)}>
          <Checkbox/>
            <label className="ml-2">
              id2
            </label>
        </DropdownMenuItem>

        <DropdownMenuItem onClick={() => register(" /notOk/ ", false)}>
          <Button onClick={() => register(" /Ok/ ", true)}>Confirm</Button>
        </DropdownMenuItem>

      </DropdownMenuContent>
      </DropdownMenu>
      <Editor className="pt-10"/>
      <Link to="/"><SquareMinus className="relative float-right mt-8 mr-12 h-10 w-10" /></Link>
      <Button className="rounded-3xl m-8 text-base">Save</Button>
    </div>
  )
}


/*
const editor: React.FC = () => {
  return (
    <div>
      <h1>Editor</h1>
      <Editor/>
    </div>
  );
};

export default editor;
*/