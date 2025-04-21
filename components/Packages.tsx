import { PACKAGES } from "@/constants";
import Image from "next/image";
import React from "react";
import {
  RiMapPinLine,
  RiSearchLine,
  RiStarFill,
  RiStarHalfFill,
  RiTimeLine,
} from "react-icons/ri";
import Button from "./Button";
import Link from "next/link";
import {
  TbStar,
  TbStarFilled,
  TbStarHalf,
  TbStarHalfFilled,
} from "react-icons/tb";

const Packages = () => {
  return (
    <section className="max-container padding-container py-16 xl:py-28 bg-slate-10" id="listing">
      <div className="mx-4">
          <h4 className="bold-18 text-secondary">DISCOVER YOUR PERFECT ESCAPE</h4>
          <h3 className="h3 max-w-lg">Find the Right Package</h3>
          <p className="max-w-lg text-gray-30">
          Whether you are planning a romantic honeymoon, a fun-filled family vacation, or a 
          solo journey of self-discovery, we have got a perfect travel package waiting for 
          you. Explore handpicked destinations tailored to your travel style.
          </p>
        </div>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 py-12">
        {PACKAGES.map((elem) => (
          <PackageItem
            key={elem.URL}
            URL={elem.URL}
            title={elem.title}
            location={elem.location}
            price={elem.price}
            des={elem.des}
            duration={elem.duration}
          />
        ))}
      </div>
    </section>
  );
};

type PackageItem = {
  URL: string;
  title: string;
  location: string;
  price: string;
  des: string;
  duration: string;
};

const PackageItem = ({ URL, title, location, price, des, duration, }: PackageItem) => {
  return (
    <div className="overflow-hidden rounded-tl-xl rounded-tr-xl  group">
      <Link href={'/booking'} className="overflow-hidden relative">
        <Image
          src={URL}
          alt="img"
          height={366}
          width={640}
        />
        <span className="bold-16 text-white bg-tertiary absolute bottom-0 right-1/2 translate-x-1/2 translate-y-1/2 px-2 py-1 rounded-full group-hover:bg-secondary font-nunito">
        Get Best Deal
        </span>
      </Link>
      <div className="p-4 bg-white">
        <div className="capitalize medium-22">
          <span>{title}</span>
          <div className="flex items-center gap-x-2 my-1">
            <RiMapPinLine className="text-gray-50" />
            <span className="regular-16 text-gray-50">{location}</span>
          </div>
        </div>
        <hr className="mt-3" />
        <p className="my-3">{des}</p>
        <hr className="mb-3" />
        <div className="flexBetween">
          <div className="flexCenter gap-x-4">
            <div className="flexCenter gap-x-2 text-secondary">
              <TbStarFilled />
              <TbStarFilled />
              <TbStarFilled />
              <TbStarHalfFilled />
            </div>
            <span className="medium-16">(22)</span>
          </div>
          <div className="flexStart gap-2 text-gray-50">
            <RiTimeLine className="text-lg" />
            <span className="medium-16">{duration}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Packages;
