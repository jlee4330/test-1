import React from "react";
import * as S from "./styles";
import useMousePos from "utils/hooks/useMousePos";

export default function MouseMoveVisual() {
  const mousePos = useMousePos();

  return (
    <S.Container>
      <S.KaonashiImage
        src="/assets/id412/w1/mouse-move/2.png"
        alt="Kaonashi"
        style={{
          left: `${mousePos.x * 100}%`,
          top: `${mousePos.y * 100}%`,
        }}
      />
    </S.Container>
  );
}
