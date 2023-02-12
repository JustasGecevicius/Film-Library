import { useEffect, useState } from "react";

export const useFocus = () => {
  const [focus, setFocus] = useState(true);
  useEffect(() => {
    const search = document.getElementById("search");

    const onClickEvent = (event: MouseEvent) => {
      if (search) {
        const isClickInsideSearchElement = search.contains(
          event.target as Node
        );
        setFocus(true);
        if (!isClickInsideSearchElement) {
          setFocus(false);
        }
      }
    };
    document.addEventListener("click", onClickEvent, false);

    return () => {
      document.removeEventListener("click", onClickEvent);
    };
  }, []);

  return focus
};
