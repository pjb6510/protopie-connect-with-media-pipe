import { Camera } from "@mediapipe/camera_utils";
import { Hands } from "@mediapipe/hands";

export default function createCamera($video: HTMLVideoElement, hands: Hands) {
  const camera = new Camera($video, {
    onFrame: async () => {
      await hands.send({ image: $video });
    },
    width: 1280,
    height: 720,
  });

  return camera;
}
