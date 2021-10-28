import createResultsListener from './libs/createResultsListener';
import createHolistic from './libs/createHolistic';
import createCamera from './libs/createCamera';
import drawHands from './resultsHandlers/drawHands';
import sendMessages from './resultsHandlers/sendMessages';
import sendHandGesture from './resultsHandlers/sendHandGesture';
import getFingerTipPosition from './resultsHandlers/getFingerTipPosition';

const init = () => {
  const $video = document.querySelector('.input-video') as HTMLVideoElement;
  const $canvas = document.querySelector('.output-canvas') as HTMLCanvasElement;

  const resultsListener = createResultsListener(
    $canvas,
    drawHands,
    getFingerTipPosition,
    sendHandGesture,
    sendMessages,
  );

  const holistic = createHolistic(resultsListener);
  const camera = createCamera($video, holistic);

  camera.start();
};

export default init;
