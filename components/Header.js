import Image from "next/image"


const Header = ()=> {
  return(
    <>
      <nav className="navbar header-n" role="navigation" aria-label="main navigation">
        <div className="navbar-brand mt-5 ml-5">
          <a className="navbar-item" href="https://public.ortex.com/">
            <Image src= "/img/ortex-logo.jpg" width= "28" height="28" />
            <div className= "header-n logo-n ml-5">ORTEX</div>
          </a>

          <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
          </div>
        </div>
      </nav>
    </>
  )
}


export default Header;