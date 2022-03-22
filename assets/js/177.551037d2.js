(window.webpackJsonp=window.webpackJsonp||[]).push([[177],{1404:function(e,t,o){e.exports=o.p+"assets/img/workflow.8182d625.png"},1405:function(e,t,o){e.exports=o.p+"assets/img/EmeliaTrigger_node.5dd5ded8.png"},1406:function(e,t,o){e.exports=o.p+"assets/img/Mattermost_node.4c5ff435.png"},2112:function(e,t,o){"use strict";o.r(t);var a=o(26),s=Object(a.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"emelia-trigger"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#emelia-trigger"}},[e._v("#")]),e._v(" Emelia Trigger")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://emelia.io",target:"_blank",rel:"noopener noreferrer"}},[e._v("Emelia"),a("OutboundLink")],1),e._v(" is a cold-mailing tool.")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("🔑 Credentials")]),e._v(" "),a("p",[e._v("You can find authentication information for this node "),a("RouterLink",{attrs:{to:"/nodes/credentials/Emelia/"}},[e._v("here")]),e._v(".")],1)]),e._v(" "),a("h2",{attrs:{id:"events"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#events"}},[e._v("#")]),e._v(" Events")]),e._v(" "),a("ul",[a("li",[e._v("Email Bounced")]),e._v(" "),a("li",[e._v("Email Opened")]),e._v(" "),a("li",[e._v("Email Replied")]),e._v(" "),a("li",[e._v("Email Sent")]),e._v(" "),a("li",[e._v("Link Clicked")]),e._v(" "),a("li",[e._v("Unsubscribed Contact")])]),e._v(" "),a("h2",{attrs:{id:"example-usage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-usage"}},[e._v("#")]),e._v(" Example Usage")]),e._v(" "),a("p",[e._v("This workflow allows you to send a message on Mattermost when a lead replies to your email. You can also find the "),a("a",{attrs:{href:"https://n8n.io/workflows/1039",target:"_blank",rel:"noopener noreferrer"}},[e._v("workflow"),a("OutboundLink")],1),e._v(" on n8n.io. This example usage workflow would use the following node.")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:""}},[e._v("Emelia Trigger")])]),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/nodes/nodes-library/nodes/Mattermost/"}},[e._v("Mattermost")])],1)]),e._v(" "),a("p",[e._v("The final workflow should look like the following image.")]),e._v(" "),a("p",[a("img",{attrs:{src:o(1404),alt:"A workflow with the Emelia Trigger node"}})]),e._v(" "),a("h3",{attrs:{id:"_1-emelia-trigger"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-emelia-trigger"}},[e._v("#")]),e._v(" 1. Emelia Trigger")]),e._v(" "),a("p",[e._v("The Emelia Trigger node will trigger the workflow when a lead sends a reply to the campaign "),a("code",[e._v("n8n")]),e._v(". If you have a different campaign, use that instead.")]),e._v(" "),a("ol",[a("li",[e._v("First of all, you'll have to enter credentials for the Emelia Trigger node. You can find out how to do that "),a("RouterLink",{attrs:{to:"/nodes/credentials/Emelia/"}},[e._v("here")]),e._v(".")],1),e._v(" "),a("li",[e._v("Select a campaign from the "),a("em",[a("strong",[e._v("Campaign")])]),e._v(" dropdown list.")]),e._v(" "),a("li",[e._v("Select 'Email Replied' from the "),a("em",[a("strong",[e._v("Events")])]),e._v(" dropdown list.")]),e._v(" "),a("li",[e._v("Click on "),a("em",[a("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),a("p",[e._v("In the screenshot below, you will notice that the node triggers the workflow when a lead sends a reply. This output is passed on to the next node in the workflow.")]),e._v(" "),a("p",[a("img",{attrs:{src:o(1405),alt:"Using the Emelia Trigger node to trigger the workflow"}})]),e._v(" "),a("h2",{attrs:{id:"_2-mattermost-node-post-message"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-mattermost-node-post-message"}},[e._v("#")]),e._v(" 2. Mattermost node (post: message)")]),e._v(" "),a("p",[e._v("This node will send a message to the "),a("code",[e._v("Leads")]),e._v(" channel in Mattermost. If you have a different channel, use that instead.")]),e._v(" "),a("ol",[a("li",[e._v("First of all, you'll have to enter credentials for the Mattermost node. You can find out how to enter credentials for this node "),a("RouterLink",{attrs:{to:"/nodes/credentials/Mattermost/"}},[e._v("here")]),e._v(".")],1),e._v(" "),a("li",[e._v("Select a channel from the "),a("em",[a("strong",[e._v("Channel ID")])]),e._v(" dropdown list.")]),e._v(" "),a("li",[e._v("Click on the gears icon next to the "),a("em",[a("strong",[e._v("Message")])]),e._v(" field click on "),a("em",[a("strong",[e._v("Add Expression")])]),e._v(".")])]),e._v(" "),a("div",{pre:!0},[a("ol",{pre:!0,attrs:{start:"4"}},[a("li",[e._v("Enter the following message in the "),a("em",[a("strong",[e._v("Expression")])]),e._v(" field. "),a("code",[e._v('{{$json["contact"]["firstName"]}} from {{$json["contact"]["company"]}} has replied back to your campaign.')])]),e._v(" "),a("li",[e._v("Click on "),a("em",[a("strong",[e._v("Execute Node")])]),e._v(" to run the workflow.")])])]),a("p",[e._v("In the screenshot below, you will notice that the node sends a message with a reply to the "),a("code",[e._v("Leads")]),e._v(" channel in Mattermost.")]),e._v(" "),a("p",[a("img",{attrs:{src:o(1406),alt:"Using the Mattermost node to send a message"}})]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("💡 Activate workflow for production")]),e._v(" "),a("p",[e._v("You'll need to save the workflow and then click on the Activate toggle on the top right of the screen to activate the workflow. Your workflow will then be triggered as specified by the settings in the Emelia Trigger node.")])])])}),[],!1,null,null,null);t.default=s.exports}}]);