import { ReactNode } from "react";

export default function BaseBanner({
  image,
  imagePos = "left",
  children,
}: {
  image: string;
  imagePos?: "left" | "right";
  children: ReactNode;
}) {
  return (
    <section
      className={`grid grid-cols-1 md:grid-cols-2 items-center gap-10 py-20 ${
        imagePos === "right" ? "md:flex-row-reverse" : ""
      }`}
    >
      <img
        src={image}
        alt="Banner Visual"
        className="rounded-xl w-full h-[384px] object-cover"
      />

      <div>
        {children}
      </div>
    </section>
  );
}
