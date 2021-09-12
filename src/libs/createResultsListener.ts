import { Results } from "@mediapipe/holistic";
import { ResultsHandler } from "../model/ResultsHandler";

const createResultsListener =
  ($canvas: HTMLCanvasElement, funcs: ResultsHandler[]) =>
  (results: Results) => {
    for (const func of funcs) {
      func({ results, $canvas });
    }
  };

export default createResultsListener;
