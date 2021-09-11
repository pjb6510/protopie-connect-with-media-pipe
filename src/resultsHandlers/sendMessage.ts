import socket from "../libs/socket";
import { ResultsHandler } from "../model/ResultsHandler";

const sendMessage: ResultsHandler = ({ results, $canvas }) => {
  if (results.multiHandLandmarks.length === 0) {
    return;
  }

  const landmarks = results.multiHandLandmarks[0];
  const indexFingerTip = landmarks[8];

  const { x: xRatio, y: yRatio } = indexFingerTip;
  const x = $canvas.width - ($canvas.width * xRatio) ;
  const y = $canvas.height * yRatio;

  socket.sendMessage<number>("x", x);
  socket.sendMessage<number>("y", y);
};

export default sendMessage;
