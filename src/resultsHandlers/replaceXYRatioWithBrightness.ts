import { ResultsHandler } from '../models/ResultsHandler';

const replaceXYRatioWithBrightness: ResultsHandler = ({ acc }) => {
  if (!acc?.['xyRatio']?.y) {
    return;
  }

  const xyRatio = acc['xyRatio'] as { [axis: string]: number };
  const { x: removed1, y: removed2, ...restMessages } = xyRatio;

  const OFFSET = 1.6;
  let brightness =
    xyRatio.y > 0 ? 255 - Math.floor(255 * (xyRatio.y * OFFSET)) : 255;
  brightness = brightness < 0 ? 0 : brightness;

  return {
    ...(acc as Object),
    brightness,
  };
};

export default replaceXYRatioWithBrightness;
