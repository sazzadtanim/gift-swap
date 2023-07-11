import Link from "next/link";
import React from "react";

interface INavigationOption {
  title: string;
  url: string;
}
const navOptionsLeft: INavigationOption[] = [
  { title: "Your families", url: "families" },
  { title: "Your Events", url: "events" },
];

const navOptionsRight: INavigationOption[] = [
  { title: "signup", url: "signup" },
  {
    title: "login",
    url: "login",
  },
];

export default function Navigation() {
  return (
    <nav className="flex justify-between py-4 capitalize">
      <ul className="flex gap-5">
        {navOptionsLeft.map((option, index) => (
          <Link href={option.url} key={index}>
            {option.title}
          </Link>
        ))}
      </ul>
      <ul className="flex gap-5">
        {navOptionsRight.map((option, index) => (
          <Link href={option.url} key={index}>
            {option.title}
          </Link>
        ))}
      </ul>
    </nav>
  );
}
