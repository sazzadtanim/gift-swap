import React from "react";
import Event, { IEvent } from "./event";

const events: IEvent[] = [
  {
    date: "12-May-2024",
    details: "Mother's Day",
    imgUrl:
      "https://images.pexels.com/photos/3309878/pexels-photo-3309878.jpeg",
    title: "",
    id: "1",
  },
  {
    date: "14-Feb-2024",
    details: "valentine's day",
    imgUrl:
      "https://images.pexels.com/photos/5493229/pexels-photo-5493229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "",
    id: "2",
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
