import Link from "next/link";

function NavBar() {

  return (
    <>
      <header className="bg-grey">
        <nav className="sm:px-12 sm:py-8 flex sm:justify-end justify-center">
          <div className="sm:flex grid grid-cols-2 gap-x-[70%] sm:gap-x-0">
            <Link href="/Accueil" className="btn btn-ghost rounded-btn">Accueil</Link>
            <Link href="/works" className="btn btn-ghost rounded-btn">Travaux</Link>
            <Link href="/about" className="btn btn-ghost rounded-btn">A propos</Link>
            <Link href="/Admin/LoginPage" className="btn btn-ghost rounded-btn">Connexion</Link>
          </div>
        </nav>
      </header>
    </>
  );
}

export default NavBar;