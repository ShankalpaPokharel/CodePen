import { useState } from "react";
import HeaderBar from "./components/common/HeaderBar";
import Header from "./components/common/Header";

import { RiMenuFold4Line } from "react-icons/ri";

function App() {
    // const [count, setCount] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const [navOpen, setNavOpen] = useState(true);

    return (
        <div className="font-lato flex">
            {navOpen ? (
                <div
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    className="relative"
                >
                    <Header className="w-[180px] hidden md:block " />
                    {isHovered ? (
                        <div
                            onClick={(e) => setNavOpen(false)}
                            className={`px-2 py-1 bg-[#5A5F73] rotate-180 absolute top-3 left-[180px] text-white`}
                        >
                            <RiMenuFold4Line className="inline-block text-red " />
                        </div>
                    ) : null}
                </div>
            ) : (
                <div
                    onClick={(e) => setNavOpen(true)}
                    className={`px-2 py-1 bg-[#5A5F73]  absolute top-5 left-1 text-white`}
                >
                    <RiMenuFold4Line className="inline-block text-red" />
                </div>
            )}
            <HeaderBar />
        </div>
    );
}

export default App;
