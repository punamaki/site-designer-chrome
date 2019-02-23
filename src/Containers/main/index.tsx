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
      type={PanelType.extraLarge}
      headerText="Extra Large Panel"
      closeButtonAriaLabel="Close"
      onDismiss={() => setShowPanel(false)}
      hasCloseButton={true}
    >
      <Frame
        head={[
          <link
            type="text/css"
            rel="stylesheet"
            href={chrome.runtime.getURL("/static/css/main.css")}
          />
        ]}
      >
        <FrameContextConsumer>
          {// Callback is invoked with iframe's window and document instances
          ({ document, window }: any) => {
            // Render Children
            return (
              <Editor/>
            );
          }}
        </FrameContextConsumer>
      </Frame>
    </Panel>
  );
};

export default Main;
