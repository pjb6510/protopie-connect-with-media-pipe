import { Results } from '@mediapipe/holistic';
import { ResultsHandler } from '../models/ResultsHandler';

const createResultsListener =
  ($canvas: HTMLCanvasElement, ...funcs: ResultsHandler[]) =>
  (results: Results) => {
    let acc: unknown = null;

    for (const func of funcs) {
      acc = func({ results, $canvas, acc });
    }
  };

export default createResultsListener;
