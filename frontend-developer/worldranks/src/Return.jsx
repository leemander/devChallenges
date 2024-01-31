import { useState } from "react";

export default function Return() {
  const [show, setShow] = useState(false);

  window.addEventListener("scroll", () => {
    console.log(window.scrollY, show);

    if (window.scrollY > 500) {
      setShow(true);
    } else {
      setShow(false);
    }
  });

  return (
    <button
      aria-label="return to top"
      className={`app__return ${show ? "show" : ""}`}
      onClick={() => window.scrollTo(0, 0)}
    ></button>
  );
}
