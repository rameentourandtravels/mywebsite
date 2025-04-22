import Link from "next/link";
import { LINKS } from "@/constants";

type navProps = {
  containerStyles: string;
  linkStyles: string;
};

const Nav = ({ containerStyles, linkStyles }: navProps) => {
  return (
    <nav className={`${containerStyles}`}>
      {LINKS.map((link) => (
        <Link
          key={link.title}
          href={`/#${link.path}`}
          scroll={true} // still allows scroll behavior
          className={`${linkStyles}`}
        >
          {link.title}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
