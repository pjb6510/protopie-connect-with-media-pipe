import createResultsListener from "./libs/createResultsListener";
import createHolistic from "./libs/createHolistic";
import createCamera from "./libs/createCamera";
import drawHands from "./resultsHandlers/drawHands";
import sendFingerTipPosition from "./resultsHandlers/sendFingerTipPosition";

const init = () => {
  const $video = document.querySelector(".input_video") as HTMLVideoElement;
  const $canvas = document.querySelector(".output_canvas") as HTMLCanvasElement;

  const resultsListener = createResultsListener($canvas, [
    drawHands,
    sendFingerTipPosition,
  ]);

  const holistic = createHolistic(resultsListener);
  const camera = createCamera($video, holistic);

  camera.start();
};

export default init;
