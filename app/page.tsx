import Image from "next/image";

export default function Home() {
  return (
    <div className="items-center justify-center">
      <Image
        src="/black_hole.jpg"
        width={1000}
        height={760}
        className="md:block"
        alt="Screenshots of the dashboard project showing desktop version"
      ></Image>
      <section className="Portfolio now h-11 bg-green-400"></section>
      <section className="Portfolio history h-11 bg-red-400"></section>
      <section className="Portfolio transactions history h-11 bg-purple-400"></section>
    </div>
  );
}
