import Header from "@/app/components/Header/Header";
import InfoSection from "@/app/components/InfoSection/InfoSection";
import IconsBlock from "@/app/components/IconsBlock/IconsBlock";
import localFont from "next/font/local";
const pacifico = localFont({
  src: "./fonts/pacifico-regular.ttf",
  variable: "--font-pacifico",
  weight: "100 900",
});

const guerrilla = localFont({
  src: "./fonts/protestguerrilla-regular.ttf",
  variable: "--font-guerrilla",
  weight: "100 900",
});
export default function Home() {
  return (
    <div className={`${pacifico.variable} ${guerrilla.variable}`}>
      <Header />
      <InfoSection />
      <IconsBlock />
    </div>
  );
}
