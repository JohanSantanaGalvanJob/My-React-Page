import { useEffect } from "react";
import "./draw_canvas";

export default function MenuItem(props) {
  
  useEffect(() => {

  }, []);

  return (
    <>
      <a-assets>
        <canvas id={`my-canvas-${props.stop}`} width="1000" height="100"></canvas>
      </a-assets>
      {
        props.available ?
          <a-plane class="clickable" material={`src: #my-canvas-${props.stop}; transparent: true`}
            animation={`property: position; to: ${props.x} ${props.y - 0.225 * props.pos} -2; dur: 2000; easing: linear; loop: false`}
            rotation="0 0 0"
            position={`${props.x} ${props.y} -2`} scale="1 0.2 0" draw-canvas={`textToShow: ${props.textToShow}; route: ${props.route}; stop: ${props.stop}; available: true`}></a-plane>
          :
          <a-plane material={`src: #my-canvas-${props.stop}; transparent: true`}
            animation={`property: position; to: ${props.x} ${props.y - 0.225 * props.pos} -2; dur: 2000; easing: linear; loop: false`}
            rotation="0 0 0"
            position={`${props.x} ${props.y} -2`} scale="1 0.2 0" draw-canvas={`textToShow: ${props.textToShow}; route: ${props.route}; stop: ${props.stop}; available: false`}></a-plane>
      }
    </>
  );
}