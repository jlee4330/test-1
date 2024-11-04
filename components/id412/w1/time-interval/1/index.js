import React, { useState, useEffect } from "react";
import * as S from "./styles";

const MAX_COUNT = 100;
const INTERVAL = 1000; // 1 second

export default function TimeIntervalVisual() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const tick = () => {
      // Random increment between 1 and 10
      const randomIncrement = Math.floor(Math.random() * 10) + 1;
      // Random interval between 100ms and 1000ms
      const randomInterval = Math.floor(Math.random() * 900) + 100;

      setCount((prevCount) => (prevCount >= MAX_COUNT ? 0 : prevCount + randomIncrement));
      
      // Set up the next tick with a new random interval
      timeoutId = setTimeout(tick, randomInterval);
    };

    let timeoutId = setTimeout(tick, 100);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <S.Container>
      <S.Counter>{count}</S.Counter>
    </S.Container>
  );
}
