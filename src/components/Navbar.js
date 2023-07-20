import Link from "next/link";

function NavBar() {

  return (
    <>
      <header className="bg-grey">
        <nav className="sm:px-12 sm:py-8 sm:flex sm:justify-end grid grid-cols-2">
          <div className="m-auto sm:m-0">
            <Link href="/Accueil" className="btn btn-ghost rounded-btn">Accueil</Link>
          </div>
          <div className="m-auto sm:m-0">
            <Link href="/works" className="btn btn-ghost rounded-btn">Travaux</Link>
          </div>
          <div className="m-auto sm:m-0">
            <Link href="/about" className="btn btn-ghost rounded-btn">A propos</Link>
          </div>
          <div className="m-auto sm:m-0">
            <Link href="/Admin/LoginPage" className="btn btn-ghost rounded-btn">Connexion</Link>
          </div>
        </nav>
      </header>
    </>
  );
}

export default NavBar;