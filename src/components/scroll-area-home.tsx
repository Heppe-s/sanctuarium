import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { cn } from "@/lib/utils"
import { Button } from "./ui/button"
import { Outlet } from "react-router-dom"
import TextPreview from "./ui/text-preview"

const tags = Array.from({ length: 50 }).map(
  (_, i, a) => `v1.2.0-beta.${a.length - i}`
)

function DropdownMenu(){
  return(
    <TextPreview className=""/>
  )
}

export function ScrollAreaHome({
  className
}:{className: string}) {
  return (
    <ScrollArea className={cn("h-72 w-48 rounded-md", className)}>
      <div className="p-4">
        <h4 className="mb-4 text-sm font-medium leading-none">Arquivos</h4>
        {tags.map((tag) => (
          <>
            <div key={tag} className="text-sm text-left">
              <Button 
              className=" bg-white text-black w-10/12 relative mr-auto rounded-l-2xl rounded-r-none"
              onClick={() => DropdownMenu()}
              >
                {tag}
                <div className="rounded-3xl text-white bg-slate-900 ml-auto p-0.5">Tags adicionais</div>
              </Button>
              <div className="bg-white w-1/6 h-9 ml-auto border-l-4 border-slate-500 -mt-9 rounded-r-2xl">
                <h1 className="text-black text-center pt-2">01/01/1999</h1>
              </div>
              <Outlet />
            </div>
            <Separator className="my-4" />
          </>
        ))}
      </div>
    </ScrollArea>
  )
}
