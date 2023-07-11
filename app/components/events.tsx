import React from "react";
import Event, { IEvent } from "./event";

const events: IEvent[] = [
  { date: "2/22/2022", details: "", imgUrl: "", title: "", id: "1" },
  { date: "2/22/2022", details: "", imgUrl: "", title: "", id: "2" },
  { date: "2/22/2022", details: "", imgUrl: "", title: "", id: "3" },
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
