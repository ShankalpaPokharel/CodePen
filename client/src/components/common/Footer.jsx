import React from "react";
import { FaCodepen } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="container relative py-10 bg-black">
      <div className="grid grid-cols-2 gap-8 px-[10px] sm:mb-2 sm:flex sm:flex-col sm:gap-0">
        <nav className="mb-2 text-primary-dark sm:flex sm:items-center sm:gap-2">
          <h4 className="text-xl font-bold text-primary">CodePen</h4>
          <p>About</p>
          <p>Blog</p>
          <p>Podcast</p>
          <p>Documentation</p>
          <p>Support</p>
          <p>Advertise</p>
        </nav>

        <nav className="mb-2 text-primary-dark sm:flex sm:items-center sm:gap-2">
          <h4 className="text-xl font-bold text-primary">For</h4>
          <p>Teams</p>
          <p>Education</p>
          <p>Privacy</p>
          <p>Embeds</p>
          <p>Asset Hosting</p>
        </nav>

        <nav className="mb-2 text-primary-dark sm:flex sm:items-center sm:gap-2">
          <h4 className="text-xl font-bold text-primary">Social</h4>
          <p>YouTube</p>
          <p>𝕏</p>
          <p>Instagram</p>
          <p>Mastodon</p>
        </nav>

        <nav className="mb-2 text-primary-dark sm:flex sm:items-center sm:gap-2">
          <h4 className="text-xl font-bold text-primary">Community</h4>
          <p>Spark</p>
          <p>Challenges</p>
          <p>Topics</p>
          <p>Code of Conduct</p>
        </nav>

        <div className="text-left text-xs text-primary-dark lg:absolute lg:right-5 lg:text-right lg:flex lg:flex-col lg:items-end">
          <div className="p-2 text-primary lg:hidden">
            <FaCodepen className="text-5xl" />
          </div>
          <div className="hidden h-[60px] w-[150px] md:flex">
            <svg
              viewBox="0 0 138 26"
              fill="none"
              stroke="#fff"
              strokeWidth="2.3"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              className="h-[74px]"
            >
              <path
                d="M15 8a7 7 0 1 0 0 10m7-8.7L33 2l11 7.3v7.4L33 24l-11-7.3zm0 0 11 7.4 11-7.4m0 7.4L33 9.3l-11 7.4M33 2v7.3m0 7.4V24M52 6h5a7 7 0 0 1 0 14h-5zm28 0h-9v14h9m-9-7h6m11 1h6a4 4 0 0 0 0-8h-6v14m26-14h-9v14h9m-9-7h6m11 7V6l11 14V6"
                className="h-full w-[150px]"
              ></path>
            </svg>
          </div>

          <p>© 2024 CodePen</p>
          <p>Demo or it didn't happen.</p>
          <p>Terms of Service - Privacy Policy</p>
        </div>
      </div>
    </footer>
  );
}
