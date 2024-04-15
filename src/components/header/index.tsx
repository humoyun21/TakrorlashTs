import "./style.scss";
import { Container } from "@containers";
import { Link, Outlet } from "react-router-dom";

const index = () => {
  return (
    <>
      <header className="bg-[#0d1028] w-full fixed top-0">
        <Container>
          <nav className="flex justify-between items-center py-[20px]">
            <h1 className="text-white font-bold text-[25px]">LOGO</h1>
            <ul className="flex gap-[30px]">
              <Link className="text-white text-[20px] font-normal hover:text-[coral] duration-200" to={"/"}>Home</Link>
              <Link className="text-white text-[20px] font-normal hover:text-[coral] duration-200" to={"/about"}>About</Link>
              <Link className="text-white text-[20px] font-normal hover:text-[coral] duration-200" to={"/contact"}>Contact</Link>
            </ul>
          </nav>
        </Container>
      </header>
      <Outlet/>
    </>
  );
};

export default index;
