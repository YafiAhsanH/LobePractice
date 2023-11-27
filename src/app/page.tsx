"use client";
import Image from "next/image";
import Button from "./components/Button";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center ">
      <Navbar />
      <div className="flex flex-col w-full items-center text-center py-20">
        <p className="text-my-black font-bold text-6xl">
          Lobe <span className="text-my-green">Tour</span>
        </p>
        <p className="text-my-black text-2xl px-[30%] py-4">
          Build your first machine learning model in ten minutes. No code or
          experience required.
        </p>
        <div className="rounded-md py-16">
          <Image
            src={"/website.jpg"}
            alt="Website Image"
            width={800}
            height={50}
            className="rounded-3xl hover:cursor-pointer hover:scale-105 transition duration-[400] hover:shadow-[0_40px_90px_-15px_rgba(0,0,0,0.3)]  "
          />
        </div>
        <p className="text-my-black font-bold text-6xl px-[35%] py-14">
          Train your app with Lobe
        </p>
        <Button classes="py-3 px-11">Download</Button>
      </div>
      <Footer />
    </main>
  );
}
