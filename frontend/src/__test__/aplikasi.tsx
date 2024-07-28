import React from "react";
import DropdownMenu from "./tes";

const AplikasiTes: React.FC = () => {
  const jsItems = [
    "Intro",
    "Variable",
    "Data Type",
    "Function",
    "Branching",
    "Looping",
    "Asynchronous",
  ];
  const tsItems = ["Intro", "Type System"];
  const htmlItems = ["Intro", "CSS"];

  return (
    <div>
      <div>
        <h1
          onClick={() =>
            subHeading !== slinks.Head
              ? setSubHeading(slinks.Head)
              : setSubHeading("")
          }
          className="py-4 pl-7 font-semibold md:pr-0 pr-5 flex justify-between items-center md:pr-0 pr-5"
        >
          {slinks.Head}

          <span className="text-xl md:mt-1 md:ml-2 inline">TES</span>
        </h1>
        <div
          className={`${subHeading === slinks.Head ? "md:hidden" : "hidden"}`}
        >
          {slinks.sublink.map((slink) => (
            <li className="py-3 pl-14">
              <Link to={slink.link}>{slink.name}</Link>
            </li>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AplikasiTes;
