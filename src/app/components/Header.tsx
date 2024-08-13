import Image from "next/image";
import React from "react";

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <Image
          className="header__logo"
          src="/images/logo.png"
          width={200}
          height={100}
          alt="Logo"
        ></Image>
      </div>
    </header>
  );
}
