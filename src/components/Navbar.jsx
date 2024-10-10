import {FaGithub, FaLinkedin} from "react-icons/fa"

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between text-white text-2xl">
        <div className="ml-4">Max's portfolio</div>
        <div className="m-8 flex items-center justify-center gap-4">
            <FaLinkedin/>
            <FaGithub/>
        </div>
    </nav>
  );
};

export default Navbar;
