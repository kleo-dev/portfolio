const Navbar = () => {
  return (
    <nav className="p-4 flex items-center justify-center">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div
          className="space-x-4 text-white block font-bold"
        >
          <a href="/" className="hover:text-red transition-colors duration-300">
            Home
          </a>
          <a href="/about" className="hover:text-red transition-colors duration-300">
            About
          </a>
          <a href="/contact" className="hover:text-red transition-colors duration-300">
            Contact
          </a>
          <a href="/services" className="hover:text-red transition-colors duration-300">
            Pricing
          </a>
          <a href="/blog" className="hover:text-red transition-colors duration-300">
            Blog
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
