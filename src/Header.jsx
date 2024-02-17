import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="w-100 bg-warning text-center pt-3">
      <h1 className="">Bibliothèque</h1>
      <nav>
        <Link to={"/"} className="mx-3">Acceuil</Link>
        <Link to={"/details-livre"} className="mx-3">Details</Link>
      </nav>
    </header>
  );
}
