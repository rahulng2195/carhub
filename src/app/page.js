import Image from "next/image";
import Banner from "./Banner/page";
import CarSlider from "./CarSlider/page";
import Explore from "./Explore/page";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Banner/>
      <CarSlider/>
      <Explore/>
    </main>
  );
}
