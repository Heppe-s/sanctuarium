// import { ScrollAreaHome } from "@/components/scroll-area-home";
import { AnnotationShow } from "@/components/annotation-show";
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

function SearchBar() {
  return (
    <div className="w-full flex justify-between space-x-5 py-7">
      <DatePickerWithRange />
      <Input
        id="inputSearch"
        placeholder="Pesquisa"
        className="w-2/3 rounded-full"
      />
      <Button id="search" className="rounded-full">
        <Search className="mr-2" />
        Pesquisar
      </Button>
    </div>
  );
}

function NotesList() {
  return (
    <div className="bg-slate-500 rounded-2xl w-full h-4/6 overflow-y-auto">
      <AnnotationShow />
    </div>
  );
}

export default function home() {
  useTitle("Sanctuarium");

  return (
    <div className="flex flex-col items-center pt-10 h-full w-full">
      <div className="pb-10 w-3/4 h-[inherit]">
        <Citation />
        <SearchBar />
        <NotesList />
      </div>
      <NewAnnotationButton />
    </div>
  );
}
