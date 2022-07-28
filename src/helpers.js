import { useCallback, useState } from "react";

export const useCenteredTree = () => {
  const [translate, setTranslate] = useState({ x: 0, y: 0 });
  const [translateLeft, setTranslateLeft] = useState({ x: 0, y: 0 });

  const containerRef = useCallback((containerElem) => {
    if (containerElem !== null) {
      const { width, height } = containerElem.getBoundingClientRect();
      setTranslate({ x: 0, y: height / 2 });
    }
  }, []);

  const containerRefLeft = useCallback((containerElem) => {
    if (containerElem !== null) {
      const { width, height } = containerElem.getBoundingClientRect();
      setTranslateLeft({ x: width / 1.1 , y: height / 2 });
    }
  }, []);
  return [translate, translateLeft , containerRef, containerRefLeft];
};
