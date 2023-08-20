"use client";

import React, { useState } from "react";
import Main from "./maintab";
import Archived from "./archived";
function Navbar() {
  const [selectTab, setSelectedTab] = useState("main");

  const handleSwitchTab = (tab: string) => {
    setSelectedTab(tab);
  };
  return (
    <div>
      <nav className="flex gap-6 border-[1px] p-4">
        <div
          className={`cursor-pointer flex flex-col text-gray-400 ${
            selectTab === "main"
              ? "text-gray-800 after:w-full after:h-[2px] after: gap-2 after:bg-black after:rounded-lg  after:content-['']"
              : ""
          }`}
          onClick={() => handleSwitchTab("main")}
        >
          Maintab
        </div>

        <div
          className={`cursor-pointer flex flex-col text-gray-400 ${
            selectTab === "archived"
              ? "text-gray-800 after:w-full after:h-[2px] after: gap-2 after:bg-black after:rounded-lg after:content-['']"
              : ""
          }`}
          onClick={() => handleSwitchTab("archived")}
        >
          Archived
        </div>
      </nav>
      {selectTab === "main" ? <Main /> : null}
      {selectTab === "archived" ? <Archived /> : null}
    </div>
  );
}

export default Navbar;
