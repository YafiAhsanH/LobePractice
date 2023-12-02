import React from "react";
import TrainYourApp from "../components/page/TrainYourApp";
import PageDescription from "../components/page/PageDescription";
import PageTitle from "../components/page/PageTitle";
import CardLayout from "../components/page/cards/CardLayout";

const test = () => {
  return (
    <main className="flex min-h-screen flex-col items-center ">
      <div className="flex flex-col w-full items-center text-center py-20">
        <PageTitle title="Blog" />
        <PageDescription>
          Read about our newest releases, and get tips on how to create custom
          machine learning models with Lobe.
        </PageDescription>
        <CardLayout />
        <TrainYourApp />
      </div>
    </main>
  );
};

export default test;
