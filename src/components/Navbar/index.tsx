"use client";

import Link from "next/link";

type Props = {
  pages: any;
};

export default function Navbar({ pages }: Props) {
  return (
    <nav className="fixed top-0 h-20 flex justify-between w-full bg-primary_bg text-primary_font text-lg">
      <ul className="flex items-center px-2">
        <Link href="/">
          <svg
            width="15"
            height="15"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.75 26.5714H9.375V16.2857H20.625V26.5714H26.25V11.1429L15 3.42857L3.75 11.1429V26.5714ZM3.75 30C2.71875 30 1.83625 29.6646 1.1025 28.9937C0.3675 28.3217 0 27.5143 0 26.5714V11.1429C0 10.6 0.133125 10.0857 0.399375 9.6C0.664375 9.11429 1.03125 8.71428 1.5 8.4L12.75 0.685714C13.0938 0.457143 13.4531 0.285714 13.8281 0.171428C14.2031 0.0571427 14.5938 0 15 0C15.4062 0 15.7969 0.0571427 16.1719 0.171428C16.5469 0.285714 16.9062 0.457143 17.25 0.685714L28.5 8.4C28.9688 8.71428 29.3363 9.11429 29.6025 9.6C29.8675 10.0857 30 10.6 30 11.1429V26.5714C30 27.5143 29.6331 28.3217 28.8994 28.9937C28.1644 29.6646 27.2812 30 26.25 30H16.875V19.7143H13.125V30H3.75Z"
              fill="#F1D3B3"
            />
          </svg>
        </Link>
        {pages.map((page: any) => (
          <Link className="px-2" key={page.id} href={`/pages/${page.id}`}>
            {page.title}
          </Link>
        ))}
      </ul>
      <img width="150px" src="/wyw_logo.svg" alt="logo" />
      <ul className="flex items-center">
        <li className="px-2">Admin</li>
        <li className="px-2">My Favorites</li>
        <li className="px-2 border-2 border-primary_font">LOG IN</li>
      </ul>
    </nav>
  );
}
