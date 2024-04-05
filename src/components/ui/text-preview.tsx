import { cn } from "@/lib/utils";

export default function textPreview({
    className,
}:{className: string}){

    return(
        <div className={cn("h-10/12 w-96 rounded-2xl", className)}>

        </div>
    )

}