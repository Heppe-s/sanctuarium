import Categorie from "@/components/categories/format";
import { Button } from "@/components/ui/button";
import { CollapsibleContent } from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";
import { Collapsible, CollapsibleTrigger } from "@radix-ui/react-collapsible";

export function AnnotationPreview({ className }: { className?: string }) {
  return (
    <Collapsible
      className={cn(
        className,
        "w-[10/12] rounded-md p-2 lex flex-col justify-between"
      )}
    >
      <CollapsibleTrigger asChild>
        <Button className="bg-white text-black w-full relative rounded-full pr-0">
          Arquivo aqui
          <div className="border-l-4 border-slate-500 bg-white rounded-r-full h-9 w-1/5 ml-auto flex justify-center items-center cursor-default">
            <h1 className="text-black text-center">01/01/1999</h1>
          </div>
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent>
        <div>
          <Item className="p-4" />
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}

function Item({ className }: { className: string }) {
  return (
    <div className={cn("", className)}>
      <ItemPreview />
    </div>
  );
}

function ItemPreview() {
  return (
    <div className="w-[10/12] h-full rounded-xl bg-white p-4">
      <Categorie/>
      
      <TextIn />
    </div>
  );
}

function TextIn() {
  return (
    <div className="bg-white border-slate-500 border-solid border-2 rounded-2xl flex justify-center ml-auto mr-auto mt-8 h-2/4 w-12/12"></div>
  );
}

/*
const ItemsLength = Array.from({ length: getIndex() }).map(
    (_, i, a) => `v1.2.0-beta.${a.length - i}`
  )

function getIndex(length: int){
    return length
}*/
