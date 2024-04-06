import QuoteIcon from "@/components/quote";
import Typography from "@/components/ui/typography";
import "@/globals.css";
import { cn } from "@/lib/utils";

export default function Citation({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "bg-slate-500 text-white w-full h-auto rounded-xl relative pt-14 pb-10 px-16",
        className
      )}
    >
      <QuoteIcon className="w-11 h-11 left-4 top-2 absolute rotate-180" />
      <Typography variant="h4" className="">
        O verdadeiro teste não é se você evitará esse fracasso, porque não o
        fará. É se você deixa que isso endureça ou envergonhe-o pela inércia, ou
        se você aprende com ele; se você escolhe perseverar.”
      </Typography>
      <Typography variant="p" className="italic text-right">
        - Barack Obama
      </Typography>
    </div>
  );
}
