import { useEffect, useRef, useState } from "react";

export const DropItem = ({items,title}) => {
    const [drop, setDrop] = useState(true);
    const style = true
    const dropRef = useRef(null);
  
    useEffect(() => {
      function handleClickOutside(event) {
        if (dropRef.current && !dropRef.current.contains(event.target)) {
          setDrop(true);
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [dropRef]);
    return (
      <div className={!style?"relative flex-1":"relative flex-1 border rounded-sm border-[#eee]"} ref={dropRef}>
        <button
          onClick={() => setDrop(!drop)}
          className="bg-white w-full px-3 py-2 rounded-sm flex justify-between items-center drop"
        >
          <span>{title}</span>
          <svg
            className="fill-current h-3 w-3"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
          </svg>
        </button>
        <ul
          className={`absolute ${
            drop ? "hidden" : ""
          } pt-1 bg-[#f3f3f3] w-full aspect-square overflow-y-scroll`}
        >
          {items.map(item => (
            <li key={item} className="mb-0.5">
            <a
              className="bg-white hover:bg-[#ff0033] hover:text-white py-2 px-4 block whitespace-no-wrap"
              href="#"
            >
              {item}
            </a>
          </li>
          ))}
          
        </ul>
      </div>
    );
  }
  