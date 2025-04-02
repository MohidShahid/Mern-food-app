import { Link } from "react-router-dom";
function Header() {
  return (
    <div className="border-b-2 border-b-orange-500 py-6">
      <div className="container flex mx-auto justify-between items-center">
        <Link to={"/"} className="font-bold tracking-tight text-3xl text-orange-500">BiteBoss</Link>
      </div>
    </div>
  );
}

export default Header;
