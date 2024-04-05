import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import Citation from "@/components/ui/citation";
import { DatePickerWithRange } from "@/components/ui/date-range-picker";
import { Input } from "@/components/ui/input";
import NotesList from "@/components/ui/notes-list";
import { useTitle } from "@/lib/useTitle";
import { Search, SquarePlus } from "lucide-react";
import { Link } from "react-router-dom";

export default function home() {
  useTitle("Sanctuarium");

  return (
    <div>
      <nav>
        <Citation className="ml-auto mr-auto" />
        <DatePickerWithRange className="absolute mt-6 ml-28" />
        <Input
          id="inputSearch"
          placeholder="Pesquisa"
          className="relative invert w-5/12 ml-96 mt-6 bg-black rounded-3xl"
        ></Input>
        <Button
          id="search"
          className="bg-slate-900 text-white rounded-3xl w-44 pl-8 pr-8 relative flex ml-auto mr-28 -mt-9"
        >
          <Search className="mr-2" />
          Pesquisar
        </Button>
      </nav>
      <NotesList />

      <Link to="/editor">
        <SquarePlus className="relative float-right mt-8 mr-12 h-10 w-10" />
      </Link>
      <ModeToggle />
    </div>
  );
}
