import React from "react";
import { ColorPickerComponent } from "@syncfusion/ej2-react-inputs";

import { Header } from "../components";
import { useStateContext } from "../contexts/ContextProvider";

const change = (args) => {
  document.getElementById("preview").style.backgroundColor =
    args.currentValue.hex;
};

const ColorPicker = () => {
  const { currentMode } = useStateContext();
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl dark:bg-secondary-dark-bg">
      <Header title="Color Picker" category="App" />
      <div className="text-center">
        <div id="preview" className="dark:bg-secondary-dark-bg" />
        <div className="flex justify-center items-center gap-20 flex-wrap">
          <div>
            <p className="text-2xl font-semibold mt-2 mb-4">Inline Palette</p>
            <ColorPickerComponent
              id="inline-palette"
              mode="Palette"
              modeSwitcher={false}
              inline={true}
              showButtons={false}
              change={change}
              backgroundColor={currentMode === "Dark" ? "#33373E" : "#FFF"}
            />
          </div>

          <div>
            <p className="text-2xl font-semibold mt-2 mb-4">Inline Picker</p>
            <ColorPickerComponent
              id="inline-palette"
              mode="Picker"
              modeSwitcher={false}
              inline={true}
              showButtons={false}
              change={change}
              backgroundColor={currentMode === "Dark" ? "#33373E" : "#FFF"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorPicker;
