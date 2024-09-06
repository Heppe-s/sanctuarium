import Typography from "@/components/ui/typography";

export default function Categories() {
  return (
    <div>
      <Typography variant="p" className="font-light">
        Categorias
      </Typography>
      <div className="flex space-x-2">
        <Category>Estudos</Category>
        <Category>Estudos</Category>
        <Category>Estudos</Category>
      </div>
    </div>
  );
}

export function CreatedAt() {
  return (
    <div className="flex flex-col justify-between text-center">
      <Typography variant="p" className="font-light">
        Criado em:
      </Typography>
      <Typography variant="p" affects="removePMargin">
        01/01/1999 12:00
      </Typography>
    </div>
  );
}

export function Category({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-slate-900 mt-2 rounded-full w-24 h-7 pt-0.5 text-white flex place-content-center">
      {children}
    </div>
  );
}
