import { sp } from "@pnp/sp";
export default function actions(dispatch:React.Dispatch<any>) {
    async function loadScriptsFromServer() {
        const allSiteScripts = await sp.siteScripts.getSiteScripts();
        addScripts(allSiteScripts);
    }
    async function addScriptToServer(payload:IAddScriptToServer) {
        const allSiteScripts = await sp.siteScripts.createSiteScript(payload.title, payload.description, payload.content);
        addScripts(allSiteScripts);
    }
    async function loadDesignsFromServer() {
        const allSiteDesigns = await sp.siteDesigns.getSiteDesigns();
        addDesigns(allSiteDesigns);
    }
    function addScripts(payload:any) {
        dispatch( {
            type: 'ADD_SCRIPTS',
            payload
        });
    }
    function addDesigns(payload:any) {
        dispatch( {
            type: 'ADD_DESIGNS',
            payload
        });
    }
    function clearScripts(payload:any) {
        dispatch( {
            type: 'CLEAR_SCRIPTS',
            payload
        });
    }
    return {loadScriptsFromServer, loadDesignsFromServer, addScripts, clearScripts};
}
export interface IAddScriptToServer {
    title:string;
    description:string;
    content:any;
}