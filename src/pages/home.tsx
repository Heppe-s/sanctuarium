import { Link } from "lucide-react";

export default function home() {
    return (
      <div>
        <h1>Home</h1>
        {/* Conteúdo da página */}
        <nav>
          <h1>Citação aqui</h1>
        </nav>
        <button>
          <Link to="/editor" />
            {/* <img src=""></img> */}
        </button>
      </div>
    );
  };
