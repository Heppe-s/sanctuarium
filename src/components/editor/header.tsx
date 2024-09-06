import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import {
  AArrowDown,
  AArrowUp,
  ALargeSmall,
  Pencil,
  Redo2,
  Subscript,
  Superscript,
  Undo2,
} from "lucide-react";

export function EditorHeader() {
  return (
    <div>
      <div className="h-9 bg-primary pl-4 flex items-center">
        <HeaderGroupButton selected>Início</HeaderGroupButton>
        <Separator orientation="vertical" className="h-2/3" />
        <HeaderGroupButton>Inserir</HeaderGroupButton>
      </div>
      <div className="h-20 bg-slate-300 py-2 flex items-center">
        <div className="flex flex-col justify-center h-full w-16 p-4 gap-1">
          <IconButton>
            <Undo2 size={18} />
          </IconButton>
          <IconButton>
            <Redo2 size={18} />
          </IconButton>
        </div>
        <Separator orientation="vertical" className="bg-primary" />
        <div className="grid grid-cols-11 grid-rows-2 h-full px-4 gap-1">
          <div className="col-span-6 w-full h-full bg-white rounded-lg"></div>
          <div className="col-span-2 w-full h-full bg-white rounded-lg"></div>
          <IconButton>
            <AArrowUp size={18} />
          </IconButton>
          <IconButton>
            <AArrowDown size={18} />
          </IconButton>
          <div>{/* only a space ignore */}</div>
          <IconButton>
            <div className="font-black text-md">N</div>
          </IconButton>
          <IconButton>
            <div className="font-semibold italic text-md">/</div>
          </IconButton>
          <IconButton>
            <div className="font-semibold underline text-md">S</div>
          </IconButton>
          <IconButton>
            <div className="font-semibold line-through text-md">ab</div>
          </IconButton>
          <IconButton>
            <Subscript size={18} />
          </IconButton>
          <IconButton>
            <Superscript size={18} />
          </IconButton>
          <div className="col-span-2">{/* only a space ignore */}</div>
          <IconButton>
            <ALargeSmall size={18} />
          </IconButton>
          <IconButton>
            <Pencil size={18} />
          </IconButton>
          <IconButton>
            <div className="font-semibold text-md">A</div>
          </IconButton>
        </div>
      </div>
    </div>
  );
}

function IconButton({ children }: { children: React.ReactNode }) {
  return (
    <Button
      variant="ghost"
      className="p-1 border border-slate-300 hover:border-accent"
    >
      {children}
    </Button>
  );
}

function HeaderGroupButton({
  selected,
  children,
}: {
  selected?: boolean;
  children: React.ReactNode;
}) {
  return (
    <Button variant="default" className="rounded-none text-md w-20">
      <div className={cn(selected && "border-b-2 border-white")}>
        {children}
      </div>
    </Button>
  );
}
