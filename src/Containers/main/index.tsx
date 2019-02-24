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
export interface IState {
  showPanel: boolean;
}

const Main: FunctionComponent<{}> = ({}) => {
  const [showPanel, setShowPanel] = useState(true);
  useEffect(() => {
    initializeIcons();
  });

  return (
    <Panel
      isOpen={showPanel}
      type={PanelType.smallFluid}
      closeButtonAriaLabel="Close"
      onDismiss={() => setShowPanel(false)}
      hasCloseButton={false}
      className="SiteDesignerPanel"
      onRenderNavigation={()=>null}
    >
      <Editor />
    </Panel>
  );
};

export default Main;
