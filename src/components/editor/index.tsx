import * as React from "react";
import "./editor.css";
import "./a11y-light.css";
import SiteScriptEditor from "site-script-editor";
import { ISiteScriptContainer } from "site-script-editor/dist/types";
import { CommandBar } from "office-ui-fabric-react/lib/CommandBar";
import samples from "../../samples";
import { autobind } from "@uifabric/utilities";

export interface IDispatchProps {
  setSiteScript: (siteScriptContainer: ISiteScriptContainer) => void;
}


export interface IEditorState {
  siteScriptContainer: ISiteScriptContainer | null;
  showPanel: boolean;
}


class Editor extends React.Component<
{},  IEditorState
> {
  constructor() {
    super({});
    this.state = {
      siteScriptContainer: null,
      showPanel: false
    };
  }
  private getSamples() {
    return samples.map(sample => ({
      key: sample.id,
      text: sample.title,
      onClick: () => {
        this.setSample(sample.id);
      }
    }));
  }
  public componentDidMount() {
    var siteScriptContainerStr = localStorage.getItem("siteScriptContainer");
    if(siteScriptContainerStr) {
      const siteScriptContainer = JSON.parse(siteScriptContainerStr);
      this.setState({ siteScriptContainer});
    } else {
      this.setSample("starter");
    }
  
    // this.setEmpty()
  }
  @autobind
  private setSample(key: string) {
    var sampleContainer = samples.find(sample => sample.id === key);
    if (sampleContainer) {
      this.setState({ siteScriptContainer: sampleContainer });
    }
  }
  private setEmpty() {
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
    this.setState({ siteScriptContainer: emptyContainer });
  }

  @autobind
  private onSiteScriptContainerChange(
    newSiteScriptContainer: ISiteScriptContainer
  ) {
    localStorage.setItem("siteScriptContainer", JSON.stringify(newSiteScriptContainer));
  }
  @autobind
  public closePanel() {
    this.setState({showPanel:false});
  }
  render() {
    var commandItems = [
      {
        key: "1",
        name: "Open",
        subMenuProps: {
          items: [
            {
              key: "newItem",
              name: "New",
              onClick: this.setEmpty.bind(this)
            },
            {
              key: "Samples",
              name: "Samples",
              items: this.getSamples()
            }
          ]
        }
      },
      {
        key: "2",
        name: "Export",
        onClick: () =>
        this.setState({ showPanel: true})
      }
    ];
    return (
      <div className="sd_editor_container">
        <CommandBar items={commandItems} />
        <SiteScriptEditor
          siteScriptContainer={this.state.siteScriptContainer}
          onSiteScriptContainerChange={this.onSiteScriptContainerChange}
        />{" "}
      </div>
    );
  }
  
}

export default Editor
