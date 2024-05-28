import { useState } from "react";
import HeaderBar from "../common/HeaderBar";
import Header from "../common/Header";

import { RiMenuFold4Line } from "react-icons/ri";
import LandingPageContent from "../LandingPageContent";
import Signup from "../Signup";

function LandingPage() {
    // const [count, setCount] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const [navOpen, setNavOpen] = useState(true);

    return (
        
        <div className="overflow-clip">
            <div className="flex min-h-screen">
                {navOpen ? (
                    <div
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        className="relative"
                    >
                        <Header className="w-[180px] md:min-h-screen hidden md:block " />
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
                        <RiMenuFold4Line className="inline-block" />
                    </div>
                )}

                <div className="w-full overflow-clip"> 
                    <HeaderBar />
                    {/* <LandingPageContent/>  */}
                    <Signup/>
                    
                </div>
            
            </div>
            
        </div>
    
    );
}

export default LandingPage;
