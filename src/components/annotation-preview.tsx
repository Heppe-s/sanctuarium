import Categories from "@/components/categories/format";
import { Button } from "@/components/ui/button";
import { CollapsibleContent } from "@/components/ui/collapsible";
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
      <div className="border-l-4 border-slate-500 bg-white rounded-r-lg h-auto w-1/5 ml-auto flex justify-center items-center cursor-default">
        <h1 className="text-black text-center font-semibold">01/01/1999</h1>
      </div>
    </div>
  );
}

function ItemPreview() {
  return (
    <div className="w-[10/12] h-full rounded-xl bg-white p-4">
      <Categories />

      <TextIn />

      <Button className="bg-slate-900 rounded-2xl flex mt-2 ml-auto">
        Abrir
      </Button>
    </div>
  );
}

function TextIn() {
  return (
    <div className="bg-white border-slate-500 border-solid border-2 rounded-2xl flex justify-center ml-auto mr-auto mt-8 h-40"></div>
  );
}

/*
const ItemsLength = Array.from({ length: getIndex() }).map(
    (_, i, a) => `v1.2.0-beta.${a.length - i}`
  )

function getIndex(length: int){
    return length
}*/
