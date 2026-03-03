import logoImg from "../assets/img/Logo.webp";
import { HashLink } from "react-router-hash-link";

export default function Footer() {

  return (
    <footer className="p-12 min-h-40 bg-[#2a2c30]">
      <HashLink to="#home" className="mt-5 md:mt-0">
        <img
          src={logoImg}
          alt="Juan Felipe González Logo"
          className="h-full w-auto max-h-28 mx-auto"
          height="28"
          width="28"
        />
      </HashLink>
    </footer>
  );
}
