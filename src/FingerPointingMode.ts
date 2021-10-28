import './style.css';

import createResultsListener from './libs/createResultsListener';
import drawHands from './resultsHandlers/drawHands';
import sendMessages from './resultsHandlers/sendMessages';
import getFingerTipXYRatio from './resultsHandlers/getFingerTipXYRatio';
import getFingerTipPosition from './resultsHandlers/getFingerTipPosition';
import init from './init';

const $canvas = document.querySelector('.output-canvas') as HTMLCanvasElement;
const resultsListener = createResultsListener(
  $canvas,
  drawHands,
  getFingerTipXYRatio,
  getFingerTipPosition,
  sendMessages
);

init(resultsListener);