import './style.css';

import createHolistic from './libs/createHolistic';
import createCamera from './libs/createCamera';
import { ResultsListener } from '@mediapipe/holistic';

const init = (resultsListener: ResultsListener) => {
  const $video = document.querySelector('.input-video') as HTMLVideoElement;

  const holistic = createHolistic(resultsListener);
  const camera = createCamera($video, holistic);

  camera.start();
};

export default init;
