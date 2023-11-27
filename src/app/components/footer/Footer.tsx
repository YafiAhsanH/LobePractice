import React from "react";
import FooterColumn from "./FooterColumn";
import FooterItem from "./FooterItem";
import Logo from "../Logo";
import Button from "../Button";
import Image from "next/image";

const Footer = () => {
  const aboutSection = ["Download", "Overview", "Examples", "Blog"];
  const generalSection = ["Notice", "License", "Press Inquiry", "Press Images"];
  const resourcesSection = ["Help", "Tour", "Contact", "Privacy"];

  return (
    <div className="flex flex-col w-full justify-center px-[15%] pb-24">
      <hr className="mt-6 mb-16 border-slate-400 border-1"></hr>
      <div className="flex w-full h-fit justify-around">
        <FooterColumn>
          <FooterItem active={false}>A product by Microsoft.</FooterItem>
          <FooterItem active={false}>All rights reserved.</FooterItem>
          <FooterItem active={false}>© Microsoft 2021</FooterItem>
        </FooterColumn>
        <FooterColumn title="About">
          {aboutSection.map((aboutItem) => (
            <FooterItem key={aboutItem}>{aboutItem}</FooterItem>
          ))}
        </FooterColumn>
        <FooterColumn title="General">
          {generalSection.map((generalItem) => (
            <FooterItem key={generalItem}>{generalItem}</FooterItem>
          ))}
        </FooterColumn>
        <FooterColumn title="Resources">
          {resourcesSection.map((resourcesItem) => (
            <FooterItem key={resourcesItem}>{resourcesItem}</FooterItem>
          ))}
        </FooterColumn>
        <div className="flex">
          <Button classes="p-2">
            <Image
              src="/messageIcon.png"
              alt="Message Icon"
              width={17.5}
              height={15.5}
            />
          </Button>
          <hr className="p-2"></hr>
          <Button classes="p-2">
            <Image
              src="/twitterIcon.png"
              alt="Twitter Icon"
              width={17.5}
              height={15.5}
            />
          </Button>
          <hr className="p-2"></hr>
          <Button classes="p-2">
            <Image
              src="/playIcon.png"
              alt="Play Icon"
              width={17.5}
              height={15.5}
            />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
