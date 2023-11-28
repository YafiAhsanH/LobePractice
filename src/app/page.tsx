"use client";
import Image from "next/image";
import PageTitle from "./components/page/PageTitle";
import PageDescription from "./components/page/PageDescription";
import TrainYourApp from "./components/page/TrainYourApp";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center ">
      {/* <Navbar /> */}
      <div className="flex flex-col w-full items-center text-center py-20">
        <PageTitle title="Tour" />
        <PageDescription>
          Build your first machine learning model in ten minutes. No code or
          experience required.
        </PageDescription>
        <div className="rounded-md py-16">
          <Image
            src={"/website.jpg"}
            alt="Website Image"
            width={800}
            height={50}
            className="rounded-3xl hover:cursor-pointer hover:scale-105 transition duration-[400] hover:shadow-[0_40px_90px_-15px_rgba(0,0,0,0.3)]  "
          />
        </div>
        <TrainYourApp />
      </div>
      {/* <Footer /> */}
    </main>
  );
}
