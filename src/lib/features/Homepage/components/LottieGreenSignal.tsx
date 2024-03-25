import Lottie, { Options } from "react-lottie";
import greenSignal from "@assets/lotties/green_signal.json";

interface LottieGreenSignalProps {
  width: string;
}

const LottieGreenSignal = (props: LottieGreenSignalProps) => {
  const defaultOptions: Options = {
    loop: true,
    autoplay: true,
    animationData: greenSignal,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return <Lottie options={defaultOptions} width={props.width} />;
};

export default LottieGreenSignal;
