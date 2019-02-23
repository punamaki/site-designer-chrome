var sample0Json = require("./starter.json");
var sample1Json = require("./install-appcat-solution.json");
var sample2Json = require("./site-create-lists-add-to-site-nav.json");
var sample3Json = require("./site-script-column-row-formatting-on-list.json");
var sample4Json = require("./applyCompanyTheme.json");
var sample5Json = require("./apply-external-sharing-capability.json");
var sample6Json = require("./applyJoinHubSite.json");
var sample7Json = require("./apply-principal-to-spgroup.json");
var sample8Json = require("./apply-regional-settings.json");
var sample9Json = require("./remove-default-team-template-links.json");
var sample10Json = require("./site-create-advanced-lists.json");
var sample11Json = require("./site-create-advanced-lists2.json");
var sample12Json = require("./create-formatted-lists.json");
var sample13Json = require("./create-list-add-links-to-sitenav.json");
var sample14Json = require("./site-script-add-spfieldxml-with-lookup.json");
var sample15Json = require("./register_extension.json");

 const samples = [
    {
        id:"starter",
        title: "One list, one group",
        description:"Starter example",
        siteScript: sample0Json
    },
    {
        id:"install-appcat-solution",
        title: "Install SharePoint Framework solution",
        description:"The installSolution allows you to install a solution you have deployed to the tenant app catalog and enabled using the new ALM APIs.",
        siteScript: sample1Json
    },
    {
        id:"site-create-lists-add-to-site-nav",
        title: "Create lists with specific schema",
        description:"site-create-lists-add-to-site-nav",
        siteScript: sample2Json
    },
    {
        id:"site-apply-column-and-row-formatting",
        title: "Apply Custom Column and View formatting to a list",
        description:"site-apply-column-and-row-formatting",
        siteScript: sample3Json
    },
    {
        id:"applyCompanyTheme",
        title: "Applying custom theme",
        description:"You can use a site script to apply a company theme to a modern site. The following example uses the applyTheme action to set a pre-loaded company theme after site creation. This action requires simply referencing a company theme name, so one must be first installed to your tenant gallery. For more details on this check out https://aka.ms/spsitetheming - and if you need help creating a theme be sure to check out the theme generator at https://aka.ms/spthemebuilder.",
        siteScript: sample4Json
    },
    {
        id:"apply-external-sharing-capability",
        title: "Configure external sharing setting",
        description:"You can use the setSiteExternalSharingCapability action to configure the external sharing settings of the site.",
        siteScript: sample5Json
    },
    {
        id:"applyJoinHubSite",
        title: "Joining site to a hub site",
        description:"You can use the setSiteExternalSharingCapability action to configure the external sharing settings of the site.",
        siteScript: sample6Json
    },
    {
        id:"apply-principal-to-spgroup",
        title: "Adding  users and groups to the site",
        description:"You can use the addPrincipaltoSPGroup action to add other users and groups to the site SharePoint groups. Note: not O365 Groups.",
        siteScript: sample7Json
    },
    {
        id:"apply-regional-settings",
        title: "Configure Regional Settings for site",
        description:"You can use the setRegionalSettings action to configure the regional settings of the site (/_layouts/15/regionalsetng.aspx)",
        siteScript: sample8Json
    },
    {
        id:"remove-default-team-template-links",
        title: "Remove links from the site navigation list",
        description:"You can use the removeNavLink script action to remove links from the site navigation list. This can be especially useful for removing links that are added by default with the collaboration and communication templates.",
        siteScript: sample9Json
    },
    {
        id:"site-create-advanced-lists",
        title: "Create Advanced Lists",
        description:"This sample illustrates several new advanced list actions and associated sub-actions",
        siteScript: sample10Json
    },
    {
        id:"site-create-advanced-lists2",
        title: "Create Advanced Lists 2",
        description:"This sample is another example illustrating several new list actions and associated subactions",
        siteScript: sample11Json
    },
    {
        id:"create-formatted-lists",
        title: "Create formatted lists",
        description:"You can use the createSPList action to also apply custom column formatting - by including the formatting JSON directly in the site script",
        siteScript: sample12Json
    },
    {
        id:"create-list-add-links-to-sitenav",
        title: "Create lists with specific schema",
        description:"You can use the createSPList action to create lists and libraries with a specific schema - and even add them to the site nav",
        siteScript: sample13Json
    },
    {
        id:"site-script-add-spfieldxml-with-lookup",
        title: "Create lookup fields with field xml",
        description:"This sample illustrates using Field XML to create complex list fields - including lookup columns!",
        siteScript: sample14Json
    },
    {
        id:"register_extension",
        title: "Associate SharePoint Framework extension to a site",
        description:"Use the associateExtension action to register a deployed SharePoint Framework extension from the tenant app catalog.",
        siteScript: sample15Json
    }
];
export default samples;