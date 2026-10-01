import { SiInstagram } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="grid grid-cols-[1fr_auto_1fr] items-center bg-[#E8DDD0] px-5 py-4 text-xs text-[#2C211C]/45">
      <div />

      <p className="whitespace-nowrap text-center">
        © 2026 Elior. All rights reserved.
      </p>

      <div className="flex justify-end gap-4">
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="transition-colors hover:text-[#2C211C]"
        >
          <SiInstagram size={16} />
        </a>

        <a
          href="https://www.zomato.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Zomato"
          className="transition-colors hover:text-[#2C211C]"
        >
          <span className="flex size-[17px] items-center justify-center font-serif text-[15px] font-medium">
            Z
          </span>
        </a>
      </div>
    </footer>
  );
}