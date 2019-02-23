import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Fabric } from "office-ui-fabric-react/lib/Fabric";
import Main from "./Containers/main";

var siteDesignerRoot = document.createElement('div');
siteDesignerRoot.id = "SiteDesignerExtension";
document.body.appendChild(siteDesignerRoot);
ReactDOM.render(
  <Fabric>
      <Main/>
  </Fabric>,
  siteDesignerRoot
);
