import { css } from "styled-system/css";
import { Squash as Hamburger } from "hamburger-react";
import { useState } from "react";

export function MobileNavbar() {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <button
        className={css({
          hideFrom: "md",
        })}
      >
        <Hamburger size={20} rounded toggled={isOpen} toggle={setOpen} />
      </button>
    </>
  );
}
