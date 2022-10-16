type Props = {};

function Footer({}: Props) {
  return (
    <div
      className="py-10 flex flex-col items-center leading-10 h-44"
      data-scroll-section
    >
      <p className="text-center font-light text-sm">
        Built with Next.js, TypeScript, TailwindCSS, Sanity CMS, Framer Motion.
      </p>
      <a href="mailto:k.aliu@me.com?body=Hi">
        <span className="">✉️</span>
        <p className="hidden md:inline-flex ml-1 text-sm text-neutral-100 cursor-pointer ">
          Get In Touch
        </p>
      </a>
    </div>
  );
}

export default Footer;
