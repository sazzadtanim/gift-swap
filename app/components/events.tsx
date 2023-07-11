import React from "react";
import Event, { IEvent } from "./event";

const events: IEvent[] = [
  {
    date: "2/22/2022",
    details: "",
    imgUrl:
      "https://images.pexels.com/photos/3309878/pexels-photo-3309878.jpeg",
    title: "",
    id: "1",
  },
  {
    date: "2/22/2022",
    details: "",
    imgUrl:
      "https://images.pexels.com/photos/5493229/pexels-photo-5493229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "",
    id: "2",
  },
  {
    date: "2/22/2022",
    details: "",
    imgUrl:
      "https://images.pexels.com/photos/5913907/pexels-photo-5913907.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "",
    id: "3",
  },
];

export default function Events() {
  return (
    <div className="flex gap-10">
      {events.map((event) => (
        <Event
          key={event.id}
          date={event.date}
          details={event.details}
          imgUrl={event.imgUrl}
          title={event.title}
        />
      ))}
    </div>
  );
}
