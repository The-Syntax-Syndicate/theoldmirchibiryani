import Link from "next/link";
import Image from "next/image";

// component
import Button from "@/components/Button";

export default function NotFound() {
  return (
    <div className="flex justify-center relative">
      <div className="flex flex-col justify-center items-center p-1">
        <h2 className="lg:text-5xl md:text-4xl sm:text-3xl text-2xl text-secondary-text font-bold drop-shadow-[5px_4px_4px_0px_rgba(0,0,0,0.77)]">
          Not Found
        </h2>
        <p className="mt-4 lg:text-4xl md:text-3xl sm:text-2xl text-xl text-text font-medium drop-shadow-[4px_4px_4.9px_0px_rgba(0,0,0,0.741)]">
          Could not find requested resource
        </p>
        <div>
          <Image
            src="/assets/logo.jpg"
            alt="logo"
            width={0}
            height={0}
            sizes="100vw"
            style={{
              maxWidth: "500px",
              maxHeight: "400px",
              width: "100%",
              height: "auto",
              objectFit: "cover",
            }}
          />
        </div>
        <Button>
          <Link href="/">Return Home</Link>
        </Button>
      </div>
    </div>
  );
}
