import Image from "next/image";
import React, { Suspense } from "react";
import Loading from "../login/loading";
import Link from "next/link";

export interface IEvent {
  id?: string;
  imgUrl: string;
  title: string;
  date: string;
  details: string;
  eventLink?: string;
}

export default function Event(props: IEvent) {
  return (
    <Link href={"/"}>
      <Suspense fallback={<Loading />}>
        <Image
          src={props.imgUrl}
          alt={`Event image ${props.title}`}
          width={200}
          height={350}
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
          className="mx-auto aspect-auto"
        />
      </Suspense>
      <h3 className="capitalize  text-lg">{props.title}</h3>
      <p>{props.date}</p>
      <p>{props.details}</p>
    </Link>
  );
}
