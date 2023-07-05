import Image from "next/image";
import { Inter } from "next/font/google";
import Lottie from 'react-lottie';
import sitting from './lottie/sitting.json'
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: sitting,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div>
      <Lottie options={defaultOptions} height={400} width={400} />
    </div>
  );
}
