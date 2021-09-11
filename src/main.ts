import createResultsListener from "./libs/createResultsListener";
import createHands from "./libs/createHands";
import createCamera from "./libs/createCamera";
import drawHands from "./resultsHandlers/drawHands";
import sendMessage from "./resultsHandlers/sendMessage";

const init = () => {
  const $video = document.querySelector(".input_video") as HTMLVideoElement;
  const $canvas = document.querySelector(".output_canvas") as HTMLCanvasElement;

  const resultsListener = createResultsListener($canvas, [
    drawHands,
    sendMessage,
  ]);

  const hands = createHands(resultsListener);
  const camera = createCamera($video, hands);

  camera.start();
};

export default init;
