const Navbar = () => {
  return (
    <nav className="py-4 flex">
      <div className="mx-auto flex">
        <div className="space-x-4 text-white block font-bold">
          <a href="/" className="hover:text-red transition-colors duration-300">
            Home
          </a>
          <a href="/pricing" className="hover:text-red transition-colors duration-300">
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
