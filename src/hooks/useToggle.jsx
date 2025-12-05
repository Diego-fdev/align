import { useState, useEffect, useRef } from "react";

export function useToggleMenu(defaultState = false) {
  const [toggle, setToggle] = useState(defaultState);
  const ref = useRef(null);

  const handleToggle = () => setToggle((prev) => !prev);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setToggle(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return { toggle, setToggle, handleToggle, ref };
}
