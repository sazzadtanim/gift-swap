import React from "react";
import style from "./loading.module.css";

export default function Loading() {
  return (
    <div className={`${style.lds_ellipsis} mx-auto`}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}
