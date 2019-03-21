import Bootstrap from "./bootstrap";
import Link from "next/link";

function Header() {
  return (
    <div>
      <Bootstrap />
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <Link class="navbar-brand" href="/demo">Zack Reiter</Link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <Link class="nav-item nav-link active" href="/demo">Home</Link>
            <Link class="nav-item nav-link" href="/experience">Work Experience</Link>
            <Link class="nav-item nav-link" href="/projects">Projects</Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
