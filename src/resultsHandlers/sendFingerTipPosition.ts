import sendMessage from "../libs/sendMessage";
import { ResultsHandler } from "../model/ResultsHandler";

const sendFingerTipPosition: ResultsHandler = ({ results, $canvas }) => {
  if (!results.rightHandLandmarks) {
    return;
  }

  const indexFingerTip = results.rightHandLandmarks[8];

  const { x: xRatio, y: yRatio } = indexFingerTip;
  const x = $canvas.width - $canvas.width * xRatio;
  const y = $canvas.height * yRatio;

  sendMessage<number>("x", x);
  sendMessage<number>("y", y);
};

export default sendFingerTipPosition;
