import "@/globals.css";
import QuoteIcon from "../quote";
import Typography from "../typograph";

export default function Citation(){
    return(
    <div className="bg-slate-500 text-slate m-10 w-10/12 h-1/5 bg-center rounded-xl">
        <QuoteIcon className="bg-clip-padding w-16 h-16 m-2 absolute rotate-180" />
        <Typography variant={"h4"} className=" ml-24 pt-10 pr-4 relative">
            O verdadeiro teste não é se você evitará esse fracasso, 
            porque não o fará. É se você deixa que isso endureça ou 
            envergonhe-o pela inércia, ou se você aprende com ele; 
            se você escolhe perseverar.”
        </Typography>
        <Typography variant={"p"} className="pr-10 italic opacity-70 pb-2 relative text-right">
            - Barack Obama
        </Typography>
    </div>
    )
}
