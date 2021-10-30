import { ResultsHandler } from '../models/ResultsHandler';
import createPointUpGesture from '../handGestures/createPointUpGesture';
import { GestureEstimator } from 'fingerpose';
import { IGestureEstimator } from '../models/Fingerpose';
import formatLandmarksToArr from '../libs/arrayifyLandmarkList';
import createVGesture from '../handGestures/createVGesture';
import createWGesture from '../handGestures/createWGesture';
import { GestureNames } from '../handGestures/GestureNames';
import { GestureQueue } from '../models/Accumulator';

const enqueueGesture = (
  prevQueue: GestureQueue | undefined,
  newGesture: string
): GestureQueue => {
  const MAXIMUM = 10;

  if (!prevQueue) {
    return [newGesture];
  }

  const result = [...prevQueue, newGesture];

  if (result.length > MAXIMUM) {
    result.shift();
    return result;
  }

  return result;
};

const isReadyToSend = (
  gestureQueue: GestureQueue,
  currentGesture: string
): boolean => {
  return gestureQueue.every((gesture) => gesture === currentGesture);
};

const sendBrightnessByGesture: ResultsHandler = ({ results, acc }) => {
  if (!results.rightHandLandmarks) {
    return;
  }

  const pointUpGesture = createPointUpGesture();
  const vGesture = createVGesture();
  const wGesture = createWGesture();

  const gestureEstimator = new GestureEstimator([
    pointUpGesture,
    vGesture,
    wGesture,
  ]) as IGestureEstimator;
  const landmarks = formatLandmarksToArr(results.rightHandLandmarks);

  const recognition = gestureEstimator.estimate(landmarks, 7);
  const brightness = acc.brightness
  const gestureQueue = acc?.prev?.gestureQueue;

  if (recognition?.gestures?.[0]) {
    const gestureName = recognition.gestures[0].name;
    const result = { ...acc };

    const newGestureQueue = enqueueGesture(gestureQueue, gestureName);
    result.prev = { ...result.prev, gestureQueue: newGestureQueue };

    if (isReadyToSend(newGestureQueue, gestureName)) {
      switch (gestureName) {
        case GestureNames.pointUpGesture:
          result.messages = { first: brightness };
          break;
        case GestureNames.vGesture:
          result.messages = { second: brightness };
          break;
        case GestureNames.wGesture:
          result.messages = { third: brightness };
          break;
        default:
          break;
      }
    }

    return result;
  }
};

export default sendBrightnessByGesture;
