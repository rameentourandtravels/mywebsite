import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="flexCenter pb-14 pt-20 bg-pattern bg-cover bg-center bg-no-repeat">
      <div className="flex flex-col rounded-xl">
        <div className="flex flex-col items-start justify-center gap-[10%] md:flex-row p-8 bg-primary rounded-t-xl">
          <div className="flex flex-wrap gap-8 sm:justify-between md:flex-1">
            {FOOTER_LINKS.map((col) => (
              <FooterColumn key={col.title} title={col.title}>
                <ul className="flex flex-col gap-4 regular-14 text-gray-20">
                  {col.links.map((link) => (
                    <Link href={link.link} key={link.text}>
                      {link.text}
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            ))}
            <div className="flex flex-col gap-5">
              <FooterColumn title={FOOTER_CONTACT_INFO.title}>
                {FOOTER_CONTACT_INFO.links.map((link) => (
                  <Link href="/" key={link.label} className="flex gap-4 md:flex-col lg:flex-row">
                    <p>{link.label}:</p><p className="medium-14">{link.value}</p>
                  </Link>
                ))}
              </FooterColumn>
            </div>
            <div className="flex">
              <FooterColumn title={SOCIALS.title}>
                <ul className="flex gap-4">
                {SOCIALS.links.map((link,index) => (
                  <Link href={link.link} key={index}>
                    <Image src={link.img} alt="logo" height={22} width={22}/>
                  </Link>
                ))}
                </ul>
              </FooterColumn>
            </div>
          </div>
        </div>
        <p className="regular-16 bg-secondary text-white py-2 px-8 rounded-b-xl flexBetween "><span>Rameen Tour and Travels</span><span>All rights reserved</span></p>
      </div>
    </footer>
  );
};
type FooterColumnProps = {
  title: string;
  children: React.ReactNode;
};

const FooterColumn = ({ title, children }: FooterColumnProps) => {
  return (
    <div className="flex flex-col gap-5">
      <h4 className="bold-18 whitespace-nowrap">{title}</h4>
      {children}
    </div>
  );
};

export default Footer;
