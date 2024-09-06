import Categories, {
  Category,
  CreatedAt,
} from "@/components/categories/format";
import { Button } from "@/components/ui/button";
import { CollapsibleContent } from "@/components/ui/collapsible";
import Typography from "@/components/ui/typography";
import { cn } from "@/lib/utils";
import { Collapsible, CollapsibleTrigger } from "@radix-ui/react-collapsible";

export function AnnotationPreview({ className }: { className?: string }) {
  return (
    <Collapsible
      className={cn(
        className,
        "w-[10/12] rounded-md flex flex-col justify-between"
      )}
    >
      <CollapsibleTrigger>
        <Item />
      </CollapsibleTrigger>
      <CollapsibleContent>
        <div className="py-2">
          <ItemPreview />
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}

function Item() {
  return (
    <div className="bg-white text-black flex flex-row rounded-lg">
      <div className="text-left w-4/5 pl-6 pr-0 py-2 text-lg font-bold h-auto">
        Nome da Anotação
      </div>
      <div className="mx-4">
        <Category>Estudos</Category>
      </div>
      <div className="border-l-4 border-slate-500 bg-white rounded-r-lg h-auto w-1/5 ml-auto flex justify-center items-center cursor-default">
        <h1 className="text-black text-center font-semibold">01/01/1999</h1>
      </div>
    </div>
  );
}

function ItemPreview() {
  return (
    <div className="w-[10/12] h-full rounded-xl bg-white pt-4 pb-2">
      <div className="flex justify-between px-4">
        <Categories />
        <CreatedAt />
      </div>

      <div className="px-4">
        <TextIn />
      </div>

      <div className="flex justify-between items-center border-t-2 border-slate-500 mt-4 px-4 pt-1">
        <Typography variant="p" className="font-light">
          Ultima edição em 00/00/0000 21:00
        </Typography>
        <Button className="bg-slate-900 rounded-2xl flex mt-2 ml-auto w-2/12 text-md">
          Abrir
        </Button>
      </div>
    </div>
  );
}

function TextIn() {
  return (
    <div className="bg-white border-slate-500 border-solid border-2 rounded-xl rounded-br-sm flex justify-center ml-auto mr-auto mt-8 h-40 resize-y overflow-auto"></div>
  );
}

/*
const ItemsLength = Array.from({ length: getIndex() }).map(
    (_, i, a) => `v1.2.0-beta.${a.length - i}`
  )

function getIndex(length: int){
    return length
}*/
