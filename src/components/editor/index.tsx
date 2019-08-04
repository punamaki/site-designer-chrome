import * as React from "react";
import "./editor.css";
import "./a11y-light.css";
import SiteScriptEditor from "site-script-editor";
import { ISiteScriptContainer } from "site-script-editor/dist/types";
import { CommandBar } from "office-ui-fabric-react/lib/CommandBar";
import samples from "../../samples";
import { autobind } from "@uifabric/utilities";
import { UseStoreContext } from "../../store";
import { useState, FunctionComponent, useEffect } from "react";

const Editor: FunctionComponent<{}> = ({}) => {
  const [siteScriptContainer, setSiteScriptContantainer] = useState();
  const [showPanel, setShowPanel] = useState();
  const { state, actions } = UseStoreContext();
  function getSamples() {
    return samples.map(sample => ({
      key: sample.id,
      text: sample.title,
      onClick: () => {
        setSample(sample.id);
      }
    }));
  }

  useEffect(() => {
    if (!siteScriptContainer) {
      var siteScriptContainerStr = '{"title":"New Site Script","id":"new","siteScript":{"$schema":"schema.json","actions":[],"bindata":{},"version":1}}';
      if (siteScriptContainerStr) {
        const siteScriptContainerJson = JSON.parse(siteScriptContainerStr);
        setSiteScriptContantainer(siteScriptContainerJson);
      } else {
        setSample("starter");
      }
      actions.loadScriptsFromServer();
      actions.loadDesignsFromServer();
    }
  });

  function setSample(key: string) {
    var sampleContainer = samples.find(sample => sample.id === key);
    if (sampleContainer) {
      setSiteScriptContantainer(sampleContainer);
    }
  }
  function setEmpty() {
    var emptyContainer = {
      title: "New Site Script",
      id: "new",
      siteScript: {
        $schema: "schema.json",
        actions: [],
        bindata: {},
        version: 1
      }
    };
    setSiteScriptContantainer(emptyContainer);
  }

  function onSiteScriptContainerChange(
    newSiteScriptContainer: ISiteScriptContainer
  ) {
    localStorage.setItem(
      "siteScriptContainer",
      JSON.stringify(newSiteScriptContainer)
    );
  }

  function closePanel() {
    setShowPanel(false);
  }

  var commandItems = [
    {
      key: "1",
      name: "Open",
      subMenuProps: {
        items: [
          {
            key: "newItem",
            name: "New",
            onClick: setEmpty
          },
          {
            key: "Samples",
            name: "Samples",
            items: getSamples()
          },
          {
            key: "Tenant",
            name: "Tenant",
            items: state.scripts.map(script => ({
              text: script.Title,
              key: script.Id
            }))
          }
        ]
      }
    },
    {
      key: "2",
      name: "Export",
      onClick: () => setShowPanel(true)
    }
  ];
  return (
    <div className="sd_main">
      <header className="sd_header_container">
        <CommandBar items={commandItems} />
      </header>
      <div className="sd_body">
        <SiteScriptEditor
          siteScriptContainer={siteScriptContainer}
          onSiteScriptContainerChange={onSiteScriptContainerChange}
        />{" "}
      </div>
    </div>
  );
};

export default Editor;
