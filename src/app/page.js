"use client";

import Card from "./components/Card";
import Thankspage from "./components/Thankspage";
import { useState } from "react";

export default function Home() {
  const [show, setShow] = useState(false);
  const render = () => {
    if (selected == null) return;
    setShow(true);
    console.log(show);
  };
  const [selected, setSelected] = useState(false);
  const handleSelected = (e) => setSelected(e.target.value);

  return (
    <main>
      {show == false ? (
        <Card
          setShow={setShow}
          selected={selected}
          setSelected={setSelected}
          handleSelected={handleSelected}
          show={show}
          render={render}
        ></Card>
      ) : (
        <Thankspage selected={selected}></Thankspage>
      )}
    </main>
  );
}
