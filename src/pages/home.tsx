import { ScrollAreaHome } from "@/components/scroll-area-home";
import { Button } from "@/components/ui/button";
import Citation from "@/components/ui/citation";
import { DatePickerWithRange } from "@/components/ui/date-range-picker";
import { Input } from "@/components/ui/input";
import { useTitle } from "@/lib/useTitle";
import { Plus, Search } from "lucide-react";
import { Link } from "react-router-dom";

function NewAnnotationButton() {
  return (
    <Link
      to="/editor"
      className="fixed h-14 w-14 bottom-16 right-16 bg-primary text-secondary rounded-3xl flex justify-center items-center"
    >
      <Plus className="stroke-[4px]" />
    </Link>
  );
}
function NotesList() {
  return (
    <div className="bg-slate-500 rounded-2xl w-full h-4/6">
      <ScrollAreaHome className="w-[10/12] h-96 rounded-md p-2"></ScrollAreaHome>
    </div>
  );
}

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
      <NewAnnotationButton />
    </div>
  );
}
