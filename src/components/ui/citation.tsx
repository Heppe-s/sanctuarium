import QuoteIcon from "@/components/quote";
import Typography from "@/components/ui/typography";
import "@/globals.css";
import { cn } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";
import { invoke } from "@tauri-apps/api/core";

interface DailyVerse {
  title: string;
  text: string;
}

export default function Citation({ className }: { className?: string }) {
  const { data, isLoading } = useQuery<DailyVerse>({
    queryKey: ["dailyVerse"],
    queryFn: async () => {
      let verse: DailyVerse = {
        title: "",
        text: "",
      };
      try {
        verse = await invoke("get_verse");
        localStorage.setItem("dailyVerse", JSON.stringify(verse));
      } catch (error) {
        const localVerse = localStorage.getItem("dailyVerse");
        if (localVerse) {
          verse = JSON.parse(localVerse);
        }
      }
      return verse;
    },
  });

  return (
    <div
      className={cn(
        "bg-slate-500 text-white w-full h-auto rounded-xl relative pt-14 pb-10 px-16",
        className
      )}
    >
      <QuoteIcon className="w-11 h-11 left-4 top-2 absolute rotate-180" />
      {isLoading ? (
        <div>carregando...</div>
      ) : (
        <>
          <Typography variant="h4" className="">
            {data?.text}
          </Typography>
          <Typography variant="p" className="italic text-right">
            - {data?.title}
          </Typography>
        </>
      )}
    </div>
  );
}
