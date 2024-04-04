import Citation from "@/components/ui/citation";
import { SquarePlus } from "lucide-react";
import { Link } from "react-router-dom";

export default function home() {
    return (
      <div>
        <h1>Home</h1>
        {/* Conteúdo da página */}
        <Citation/>
        <nav>
          <h1>Citação aqui</h1>
        </nav>
        <Link to="/editor"><SquarePlus /></Link>
      </div>
    );
  };
