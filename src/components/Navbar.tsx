import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <header className="text-gray-600 body-font border-b border-gray-200" style={{ position: 'relative', zIndex: 1 }}>
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <span className="ml-3 text-xl">My Portfolio</span>
        </a>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <Link to="home" spy={true} smooth={true}>Home</Link>
          <Link to="about" spy={true} smooth={true}>About</Link>
          <Link to="projects" spy={true} smooth={true}>Projects</Link>
          <Link to="contact" spy={true} smooth={true}>Contact</Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
