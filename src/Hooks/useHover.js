import { useEffect, useRef, useState } from "react";

const useHover = () => {
  const [value, setValue] = useState(false);

  const ref = useRef(null);

  const onMouseOver = () => setValue(true);
  const onMouseOut = () => setValue(false);

  useEffect(() => {
    const node = ref.current;
    if (node) {
      node.addEventListener("mouseover", onMouseOver);
      node.addEventListener("mouseout", onMouseOut);
      return () => {
        node.removeEventListener("mouseover", onMouseOver);
        node.removeEventListener("mouseout", onMouseOut);
      };
    }
  }, []);

  return [ref, value];
};

export default useHover;
