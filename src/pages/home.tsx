import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import Citation from "@/components/ui/citation";
import { DatePickerWithRange } from "@/components/ui/date-ranger-picker";
import { Input } from "@/components/ui/input";
import { Search, SquarePlus } from "lucide-react";
import { Form, Link } from "react-router-dom";

export default function home() {
  return (
    <div>
      <nav>
        <Citation />
        <DatePickerWithRange className="absolute mt-6 ml-24 invert" />
        <Input
          id="inputSearch"
          placeholder="Pesquisa"
          className="relative invert w-5/12 ml-96 mt-6 bg-black rounded-3xl"
        ></Input>
        <Button 
          id="search" 
          className="bg-slate-500 rounded-3xl w-44 pl-8 pr-8 relative flex left-3/4 -mt-9"
        >
          <Search className="mr-2" />
          Pesquisar
        </Button>
      </nav>

      <Link to="/editor">
        <SquarePlus className="relative float-right mt-8 mr-12 h-10 w-10" />
      </Link>
      <ModeToggle />
    </div>
  );
}
