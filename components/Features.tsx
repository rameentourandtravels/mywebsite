"use client";
import { FEATURE } from "@/constants";
import Image from "next/image";
import Slider from "react-slick";
import {
  RiArrowRightSLine,
  RiArrowLeftSLine,
} from "react-icons/ri";
import Link from "next/link";

const Features = () => {
  const NextArrow = (props: any) => {
    const { onClick } = props;
    return (
      <div
        onClick={onClick}
        className=" bg-white text-2xl p-3 inline-block rounded-lg shadow-md absolute top-1/2 right-0 lg:-top-24 lg:right-4 z-10 ring-1 ring-slate-900/5 hover:bg-primary"
      >
        <RiArrowRightSLine />
      </div>
    );
  };
  const PrevArrow = (props: any) => {
    const { onClick } = props;
    return (
      <div
        onClick={onClick}
        className="bg-white  text-2xl p-3 inline-block rounded-lg shadow-md absolute top-1/2 lg:-top-24 lg:right-20 z-10 ring-1 ring-slate-900/5 hover:bg-primary"
      >
        <RiArrowLeftSLine />
      </div>
    );
  };

  var settings = {
    arrows: true,
    infinite: true,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <section className="max-container padding-containe py-4  bg-white" id="feature">
      <div className="w-[100%] m-auto">
        <div className="mx-4">
          <h4 className="bold-18 text-secondary">WHAT WE SERVE</h4>
          <h3 className="text-2xl ">Explore the Best of Kashmir with Us</h3>
          <p className=" text-gray-30 sm:max-w-lg">
            We are a trusted Kashmir tour and travel agency dedicated to providing unforgettable travel experiences.
            Whether you're seeking serene landscapes, adventure, or cultural insights, we offer customized tour packages
            that showcase the beauty and heritage of Kashmir. Let us guide you through the paradise on earth.
          </p>
        </div>
        {/* CONTAINER */}
        <div className="pt-12">
          <Slider {...settings}>
            {FEATURE.map((feature) => (
              <FeatureItem
                key={feature.URL}
                URL={feature.URL}
                title={feature.title}
                des={feature.des}
              />
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

type FeatureItem = {
  URL: string;
  title: string;
  des: string;
};

const FeatureItem = ({ URL, title, des }: FeatureItem) => {
  return (
    <div className="mx-4 overflow-hidden group">
      <Link href={"/#"} className="overflow-hidden relative">
        <div className="overflow-hidden rounded-md">
          <Image
            src={URL}
            alt="img"
            height={400}
            width={510}
            className=" hover:scale-105 transition-all duration-700 overflow-hidden"
          />
        </div>
        <h4 className="capitalize regular-22 absolute top-6 left-4 text-white">
          {title}
        </h4>
        <p className="regular-18 absolute bottom-6 right-0 bg-tertiary text-white pl-4 pr-4 py-2 rounded-l-full group-hover:bg-secondary  transition-all duration-300 text-xs">
          {des}
        </p>
      </Link>
    </div>
  );
};

export default Features;
