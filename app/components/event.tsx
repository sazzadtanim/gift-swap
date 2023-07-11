import Image from "next/image";
import React from "react";

export interface IEvent {
  id?: string;
  imgUrl: string;
  title: string;
  date: string;
  details: string;
}

export default function Event(props: IEvent) {
  return (
    <div>
      <Image
        src={props.imgUrl}
        alt={""}
        width={200}
        height={350}
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
        className="mx-auto"
      />
      <h3>{props.title}</h3>
      <p>{props.date}</p>
      <p>{props.details}</p>
    </div>
  );
}
