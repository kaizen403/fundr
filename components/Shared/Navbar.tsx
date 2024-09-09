import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";
import { Button } from "@nextui-org/button";
import Image from "next/image";

export default function Navbarr() {
  return (
    <Navbar
      className="bg-[#07102b] bg-opacity-50"
      style={{ zIndex: 1000, position: "sticky", top: 0 }}
    >
      <NavbarBrand>
        <Image src="/logo.png" alt="Logo" width={50} height={50} />{" "}
        <p className="font-bold font-lexend ml-1 text-white tracking-wide text-lg ">
          Fundline
        </p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link className="text-white" href="#">
            Startup
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" className="text-white" aria-current="page">
            Investor
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="shadow">
            Login
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
