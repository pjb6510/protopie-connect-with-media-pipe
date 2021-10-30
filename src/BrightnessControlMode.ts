import './style.css';

import createResultsListener from './libs/createResultsListener';
import drawHands from './resultsHandlers/drawHands';
import sendMessages from './resultsHandlers/sendMessages';
import getFingerTipXYRatio from './resultsHandlers/getFingerTipXYRatio';
import replaceXYRatioWithBrightness from './resultsHandlers/replaceXYRatioWithBrightness';
import init from './init';
import sendBrightnessByGesture from './resultsHandlers/sendBrightnessByGesture';

const resultsListenerPipeline = createResultsListener(
  drawHands,
  getFingerTipXYRatio,
  replaceXYRatioWithBrightness,
  sendBrightnessByGesture,
  sendMessages
);

init(resultsListenerPipeline);
