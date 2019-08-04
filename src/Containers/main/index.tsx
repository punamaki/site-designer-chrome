import React, {
  Component,
  FunctionComponent,
  useState,
  useEffect
} from "react";
import "./index.css";
import Frame, { FrameContextConsumer } from "react-frame-component";
import { Panel, PanelType } from "office-ui-fabric-react/lib/Panel";
import { initializeIcons } from "@uifabric/icons";
import Editor from "../../components/editor";
import { Fabric } from "office-ui-fabric-react/lib/Fabric";
import { UseStoreContext } from "../../store";
import { sp } from "@pnp/sp";

export interface IState {
  showPanel: boolean;
}

const Main: FunctionComponent<{}> = ({}) => {
  const [showPanel, setShowPanel] = useState(true);
  useEffect(() => {
    initializeIcons();
    var url = window.location.href;
    var arr = url.split("/");
    var rootUrl = arr[0] + "//" + arr[2];
    sp.setup({
      sp: {
        baseUrl: rootUrl
      }
    });
  });

  return (
    <div className="sd_main">
      <UseStoreContext.Provider>
          <Panel
            isOpen={showPanel}
            type={PanelType.smallFluid}
            closeButtonAriaLabel="Close"
            onDismiss={() => setShowPanel(false)}
            hasCloseButton={false}
            className="SiteDesignerPanel"
            onRenderNavigation={() => null}
          >
            <Editor />
          </Panel>
      </UseStoreContext.Provider>
    </div>
  );
};

export default Main;
