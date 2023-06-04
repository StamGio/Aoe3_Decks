import { Img } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a
          className="container-fluid d-flex justify-content-center align-items-center"
          href="http://127.0.0.1:5173/#"
        >
          <Img
            src="./src/assets/Images/aoe3_logo.png"
            alt="AOE3 Logo"
            width="30"
            height="24"
          />
        </a>
        {/* Rest of the navbar content */}
      </div>
    </nav>
  );
};

export default Navbar;
