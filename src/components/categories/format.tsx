import Typography from "@/components/ui/typography";

export default function Categories() {
  return (
    <div>
      <p>Categorias</p>
      <div className="flex justify-between">
        <div className="bg-slate-900 mt-2 rounded-full w-24 h-7 pt-0.5 text-white flex place-content-center">
          <p>Estudos</p>
        </div>
        <div className="-mt-6">
          <Typography variant={"p"} className="flex justify-center ">
            Criado em:
          </Typography>
          <div className="">01/01/1999 12:00</div>
        </div>
      </div>
    </div>
  );
}
