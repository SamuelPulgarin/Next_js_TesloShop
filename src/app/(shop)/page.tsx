import { titleFont } from "@/config/fonts";
import Image from "next/image";

export default function Home() {
  return (

    <main className="">
      <h1>Hello page</h1>
      <h1 className={titleFont.className}></h1>
    </main>
  );
}
