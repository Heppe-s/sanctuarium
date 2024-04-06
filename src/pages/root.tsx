import { TitleBar } from "@/components/bars/title";
import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <div className="grid grid-rows-[auto_1fr] w-screen h-screen">
      <TitleBar />
      <div className="w-full h-full overflow-auto">
        <Outlet />
      </div>
    </div>
  );
}
