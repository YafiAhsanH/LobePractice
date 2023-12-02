"use client";
import React, { useEffect, useState } from "react";
import Card from "./Card";

const CardLayout = () => {
  const cards: any[] = [
    {
      id: 0,
      title: "Use your model in Power Platform",
      desc: "Were excited to announce a new integration with Microsoft Power Platform.",
      date: "November 15, 2021",
      imgUrl: "/cardImg.jpg",
    },
    {
      id: 1,
      title: "Introducing new ways to use your model",
      desc: "Lobe 0.9 introduces new ways of using and exporting your model to your app.",
      date: "March 23, 2021",
      imgUrl: "/cardImg2.jpg",
    },
    {
      id: 2,
      title: "Using your model 101",
      desc: "Learn everything you need to know to export your model and use it in your app.",
      date: "March 23, 2021",
      imgUrl: "/cardImg3.jpg",
    },
    {
      id: 3,
      title: "Machine learning Kit with Adafruit",
      desc: "Introducing a brand new machine learning kit from Adafruit and Lobe.",
      date: "March 31, 2021",
      imgUrl: "/cardImg4.jpg",
    },
    {
      id: 4,
      title: "Four New Features in Lobe",
      desc: "Select your camera source, export your model to new formats, and more in the new Lobe.",
      date: "December 10, 2020",
      imgUrl: "/cardImg5.jpg",
    },
  ];

  const [oddCards, setOddCards] = useState(false);

  useEffect(() => {
    if (cards.length >= 2 && cards.length % 2 === 1) {
      setOddCards(true);
    }
  }, [cards.length]);

  function calculateOddColumns(array: any[]) {
    return array
      .reduce((acc, currVal, currIndex) => {
        if (currIndex % 2 === 0) {
          acc.push(currVal);
        }
        return acc;
      }, [])
      .map((card: any) => (
        <Card
          key={card.id}
          title={card.title}
          desc={card.desc}
          date={card.date}
          imgUrl={card.imgUrl}
        />
      ));
  }

  function calculateEvenColumns(array: any[]) {
    return array
      .reduce((acc, currVal, currIndex) => {
        if (currIndex % 2 === 1) {
          acc.push(currVal);
        }
        return acc;
      }, [])
      .map((card: any) => (
        <Card
          key={card.id}
          title={card.title}
          desc={card.desc}
          date={card.date}
          imgUrl={card.imgUrl}
        />
      ));
  }

  return (
    <>
      {/* desktop layout */}
      <div className="lg:flex flex-col w-full px-[12%] py-12 hidden ">
        <div className="flex w-full justify-between">
          <div className="flex flex-col w-full p-5">
            {oddCards
              ? calculateOddColumns(cards.slice(0, cards.length - 2))
              : calculateOddColumns(cards)}
          </div>
          <div className="flex flex-col w-full p-5">
            {calculateEvenColumns(cards)}
          </div>
        </div>
        {(oddCards || cards.length === 1) && (
          <div className="flex w-full justify-between px-[25%]">
            <div className="flex w-full">
              <Card
                key={cards[cards.length - 1].id}
                title={cards[cards.length - 1].title}
                desc={cards[cards.length - 1].desc}
                date={cards[cards.length - 1].date}
                imgUrl={cards[cards.length - 1].imgUrl}
              />
            </div>
          </div>
        )}
      </div>
      {/* mobile layout */}
      <div className="flex flex-col w-full md:px-[12%] py-12 lg:hidden">
        <div className="flex w-full justify-between">
          <div className="flex flex-col w-full p-5">
            {cards.map((card) => (
              <Card
                key={card.id}
                title={card.title}
                desc={card.desc}
                date={card.date}
                imgUrl={card.imgUrl}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CardLayout;
