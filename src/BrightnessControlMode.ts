import './style.css';

import createResultsListener from './libs/createResultsListener';
import drawHands from './resultsHandlers/drawHands';
import sendMessages from './resultsHandlers/sendMessages';
import getFingerTipXYRatio from './resultsHandlers/getFingerTipXYRatio';
import replaceXYRatioWithBrightness from './resultsHandlers/replaceXYRatioWithBrightness';
import init from './init';
import filterMessagesWithRecognition from './resultsHandlers/filterMessagesWithRecognition';

const $canvas = document.querySelector('.output-canvas') as HTMLCanvasElement;
const resultsListener = createResultsListener(
  $canvas,
  drawHands,
  getFingerTipXYRatio,
  replaceXYRatioWithBrightness,
  filterMessagesWithRecognition,
  sendMessages
);

init(resultsListener);
