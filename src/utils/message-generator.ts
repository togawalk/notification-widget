import { v4 as uuid } from "uuid";

let titles = [
  {
    title: "Apple's newest iPhone is here",
    subtitle: "Watch our July event"
  },
  {
    title: "Your funds have been processed",
    subtitle: "See your latest deposit online"
  },
  {
    title: "This Week in Sports",
    subtitle: "The finals are heating up",
  },
  {
    title: "Changelog update",
    subtitle: "Edge subroutines and more",
  },
  {
    title: "React Hawaii is here!",
    subtitle: "Time for fun in the sun",
  }
];

export interface MessageData {
  id: string;
  content: {
    title: string,
    subtitle: string
  };
}

export const generateMessage = (): MessageData => {
  return {
    id: uuid(),
    content: titles[Math.floor(Math.random() * titles.length)],
  };
};
