import sound from '../../assets/images/sound_off.png'
import './AFrameHud.css'
export default function AFrameHud() {
  return (
    <>
      <div class="my-container" id="my-menu">
        <label for="opacity" class="form-label">Opacity:</label>
        <input type="range" class="form-range" id="opacity" name="opacity" min="0" max="1" value="0" step="0.1" />

        <label for="roughness" class="form-label">Roughness:</label>
        <input type="range" class="form-range" id="roughness" name="roughness" min="0" max="1" value="0" step="0.1" />

        <label for="color">Color:</label>
        <input type="color" id="color" name="color" value="#ff0000" />

        <div class="wireframe">
          <label class="switch">
            <input type="checkbox" id="wireframe" checked />
            <span class="slider round"></span>
          </label>
          Wireframe
        </div>
      </div>

      <div class="button-container">
        <button id="speaker-button">
          <img id="speaker-img" src={sound} alt="texture"/>
        </button>
      </div>
    </>
  );
}

