import Image from "next/image";
import { SignUpButton } from "@clerk/nextjs";

function Hero() {
  return (
    <section className="flex justify-between items-center">
      <article className="flex">
        <div className="">
          <h1 className="text-6xl font-bold">
            More than just
            <br /> shorter links
          </h1>
          <p className="text-lg my-4">
            Build your brand recognition and get detailed
            <br />
            insights on how your links are performing.
          </p>

          <SignUpButton>
            <button className="px-4 py-2 bg-blue-800 text-white rounded-full hover:bg-blue-900">
              Get started
            </button>
          </SignUpButton>
        </div>
      </article>
      <div className="flex">
        <Image
          src="/hero-image.svg"
          alt="Woman working at desk"
          className="max-w-full h-auto pt-4"
          width={400}
          height={400}
        />
      </div>
    </section>
  );
}

export default Hero;
