import { HAND_CONNECTIONS } from "@mediapipe/hands";
import { drawConnectors, drawLandmarks } from "@mediapipe/drawing_utils";
import { ResultsHandler } from "../model/ResultsHandler";

const drawHands: ResultsHandler = ({ results, $canvas }) => {
  const ctx = $canvas.getContext("2d");

  ctx.save();
  ctx.clearRect(0, 0, $canvas.width, $canvas.height);
  ctx.drawImage(results.image, 0, 0, $canvas.width, $canvas.height);

  if (results.multiHandLandmarks.length) {
    for (const landmarks of results.multiHandLandmarks) {
      drawConnectors(ctx, landmarks, HAND_CONNECTIONS, {
        color: "#00FF00",
        lineWidth: 5,
      });
      drawLandmarks(ctx, landmarks, {
        color: "#FF0000",
        lineWidth: 2,
      });
    }
  }

  ctx.restore();
};

export default drawHands;
