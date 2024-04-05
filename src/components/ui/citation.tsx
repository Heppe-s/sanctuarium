import Typography from "@/components/ui/typography";
import "@/globals.css";
import { cn } from "@/lib/utils";
import QuoteIcon from "../quote";

export default function Citation({ className }: { className: string }) {
  return (
    <div
      className={cn(
        "bg-slate-500 text-white mt-8 w-10/12 h-1/5 rounded-xl",
        className
      )}
    >
      <QuoteIcon className="bg-clip-padding w-16 h-16 m-2 absolute rotate-180" />
      <Typography variant={"h4"} className=" ml-24 pt-10 pr-4 relative">
        O verdadeiro teste não é se você evitará esse fracasso, porque não o
        fará. É se você deixa que isso endureça ou envergonhe-o pela inércia, ou
        se você aprende com ele; se você escolhe perseverar.”
      </Typography>
      <Typography
        variant={"p"}
        className="pr-10 italic opacity-70 pb-2 relative text-right"
      >
        - Barack Obama
      </Typography>
    </div>
  );
}
