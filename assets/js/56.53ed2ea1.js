(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{1103:function(t,e,o){t.exports=o.p+"assets/img/workflow.5f4bd389.png"},1104:function(t,e,o){t.exports=o.p+"assets/img/MicrosoftOutlook_node.74096e70.png"},1105:function(t,e,o){t.exports=o.p+"assets/img/HTTPRequest_node.51538e38.png"},1106:function(t,e,o){t.exports=o.p+"assets/img/MicrosoftOutlook1_node.964856e8.png"},1107:function(t,e,o){t.exports=o.p+"assets/img/MicrosoftOutlook2_node.2fd5559c.png"},1990:function(t,e,o){"use strict";o.r(e);var s=o(26),a=Object(s.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"microsoft-outlook"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#microsoft-outlook"}},[t._v("#")]),t._v(" Microsoft Outlook")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://outlook.live.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Microsoft Outlook"),s("OutboundLink")],1),t._v(" is a personal information manager software system from Microsoft. Microsoft Outlook is an email client that includes calendaring, task managing, contact managing, note-taking, journal logging, and web browsing.")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("🔑 Credentials")]),t._v(" "),s("p",[t._v("You can find authentication information for this node "),s("RouterLink",{attrs:{to:"/nodes/credentials/Microsoft/"}},[t._v("here")]),t._v(".")],1)]),t._v(" "),s("h2",{attrs:{id:"basic-operations"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#basic-operations"}},[t._v("#")]),t._v(" Basic Operations")]),t._v(" "),s("Resource",{attrs:{node:"n8n-nodes-base.microsoftOutlook"}}),t._v(" "),s("h2",{attrs:{id:"example-usage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example-usage"}},[t._v("#")]),t._v(" Example Usage")]),t._v(" "),s("p",[t._v("This workflow allows you to create, add an attachment, and send a draft using the Microsoft Outlook node. You can also find the "),s("a",{attrs:{href:"https://n8n.io/workflows/867",target:"_blank",rel:"noopener noreferrer"}},[t._v("workflow"),s("OutboundLink")],1),t._v(" on n8n.io. This example usage workflow uses the following nodes.")]),t._v(" "),s("ul",[s("li",[s("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/Start/"}},[t._v("Start")])],1),t._v(" "),s("li",[s("a",{attrs:{href:""}},[t._v("Microsoft Outlook")])]),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/HTTPRequest/"}},[t._v("HTTP Request")])],1)]),t._v(" "),s("p",[t._v("The final workflow should look like the following image.")]),t._v(" "),s("p",[s("img",{attrs:{src:o(1103),alt:"A workflow with the Microsoft Outlook node"}})]),t._v(" "),s("h3",{attrs:{id:"_1-start-node"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-start-node"}},[t._v("#")]),t._v(" 1. Start node")]),t._v(" "),s("p",[t._v("The start node exists by default when you create a new workflow.")]),t._v(" "),s("h3",{attrs:{id:"_2-microsoft-outlook-node-create-draft"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-microsoft-outlook-node-create-draft"}},[t._v("#")]),t._v(" 2. Microsoft Outlook node (create: draft)")]),t._v(" "),s("p",[t._v("This node will create a draft message that we will send using the Microsoft Outlook node later in the workflow.")]),t._v(" "),s("ol",[s("li",[t._v("First of all, you'll have to enter credentials for the Microsoft Outlook node. You can find out how to do that "),s("RouterLink",{attrs:{to:"/nodes/credentials/Microsoft/"}},[t._v("here")]),t._v(".")],1),t._v(" "),s("li",[t._v("Select 'Draft' from the "),s("em",[s("strong",[t._v("Resource")])]),t._v(" dropdown list.")]),t._v(" "),s("li",[t._v("Enter the subject in the "),s("em",[s("strong",[t._v("Subject")])]),t._v(" field.")]),t._v(" "),s("li",[t._v("Enter the following content in the "),s("em",[s("strong",[t._v("Body Content")])]),t._v(" field.")])]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("h1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Hello from n8n!"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("h1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("We are sending this email using the Microsoft Outlook node in "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("a")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("https://n8n.io"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("n8n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("a")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Best,"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Sender"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("ol",{attrs:{start:"5"}},[s("li",[t._v("Click on "),s("em",[s("strong",[t._v("Add Field")])]),t._v(" and select 'Body Content Type' from the dropdown list.")]),t._v(" "),s("li",[t._v("Click on "),s("em",[s("strong",[t._v("Execute Node")])]),t._v(" to run the node.")])]),t._v(" "),s("p",[t._v("In the screenshot below, you will notice that the node creates a new draft with the subject "),s("code",[t._v("Hello from n8n!")]),t._v(" and HTML body content.")]),t._v(" "),s("p",[s("img",{attrs:{src:o(1104),alt:"Using the Microsoft Outlook node to create a draft"}})]),t._v(" "),s("h3",{attrs:{id:"_3-http-request-node-get"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-http-request-node-get"}},[t._v("#")]),t._v(" 3. HTTP Request node (GET)")]),t._v(" "),s("p",[t._v("This node will fetch the logo of n8n from a URL. We will attach this file to our draft message that we created earlier. If you want to attach a different file, enter the URL of that file instead.")]),t._v(" "),s("ol",[s("li",[t._v("Enter "),s("code",[t._v("https://n8n.io/n8n-logo.png")]),t._v(" in the "),s("em",[s("strong",[t._v("URL")])]),t._v(" field.")]),t._v(" "),s("li",[t._v("Select 'File' from the "),s("em",[s("strong",[t._v("Response Format")])]),t._v(" dropdown list.")]),t._v(" "),s("li",[t._v("Click on "),s("em",[s("strong",[t._v("Execute Node")])]),t._v(" to run the node.")])]),t._v(" "),s("p",[t._v("In the screenshot below, you will notice that the node returns the n8n logo. We will attach this file to the draft message that we created using the previous node.")]),t._v(" "),s("p",[s("img",{attrs:{src:o(1105),alt:"Using the HTTP Request to get a file"}})]),t._v(" "),s("h3",{attrs:{id:"_4-microsoft-outlook1-node-add-messageattachment"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-microsoft-outlook1-node-add-messageattachment"}},[t._v("#")]),t._v(" 4. Microsoft Outlook1 node (add: messageAttachment)")]),t._v(" "),s("p",[t._v("This node will attach the file that we received from the previous node to the drat message we created using the Microsoft Outlook node.")]),t._v(" "),s("div",{pre:!0},[s("ol",[s("li",[t._v("Select the credentials that you entered in the previous Microsoft Outlook node.")]),t._v(" "),s("li",[t._v("Select 'Message Attachment' from the "),s("em",[s("strong",[t._v("Resource")])]),t._v(" dropdown list.")]),t._v(" "),s("li",[t._v("Click on the gears icon next to the "),s("em",[s("strong",[t._v("Message ID")])]),t._v(" field and click on "),s("em",[s("strong",[t._v("Add Expression")])]),t._v(".")]),t._v(" "),s("li",[t._v("Select the following in the "),s("em",[s("strong",[t._v("Variable Selector")])]),t._v(" section: Nodes > Microsoft Outlook > Output Data > JSON > id. You can also add the following expression: "),s("code",[t._v('{{$node["Microsoft Outlook"].json["id"]}}')]),t._v(".")]),t._v(" "),s("li",[t._v("Click on the "),s("em",[s("strong",[t._v("Add Field")])]),t._v(" button.")]),t._v(" "),s("li",[t._v("Enter "),s("code",[t._v("n8n.png")]),t._v(" in the "),s("em",[s("strong",[t._v("File Name")])]),t._v(" field.")]),t._v(" "),s("li",[t._v("Click on "),s("em",[s("strong",[t._v("Execute Node")])]),t._v(" to run the node.")])])]),s("p",[t._v("In the screenshot below, you will notice that the node attaches the file to the draft message that we created using the Microsoft Outlook node.")]),t._v(" "),s("p",[s("img",{attrs:{src:o(1106),alt:"Using the Microsoft Outlook node to add an attachment to a draft message"}})]),t._v(" "),s("h3",{attrs:{id:"_5-microsoft-outlook2-node-send-draft"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-microsoft-outlook2-node-send-draft"}},[t._v("#")]),t._v(" 5. Microsoft Outlook2 node (send: draft)")]),t._v(" "),s("p",[t._v("This node will send the draft message that we created using the Microsoft Outlook node to a recipient.")]),t._v(" "),s("div",{pre:!0},[s("ol",[s("li",[t._v("Select the credentials that you entered in the previous node.")]),t._v(" "),s("li",[t._v("Select 'Draft' from the "),s("em",[s("strong",[t._v("Resource")])]),t._v(" dropdown list.")]),t._v(" "),s("li",[t._v("Select 'Send' from the "),s("em",[s("strong",[t._v("Operation")])]),t._v(" dropdown list.")]),t._v(" "),s("li",[t._v("Click on the gears icon next to the "),s("em",[s("strong",[t._v("Message ID")])]),t._v(" field and click on "),s("em",[s("strong",[t._v("Add Expression")])]),t._v(".")]),t._v(" "),s("li",[t._v("Select the following in the "),s("em",[s("strong",[t._v("Variable Selector")])]),t._v(" section: Nodes > Microsoft Outlook > Output Data > JSON > id. You can also add the following expression: "),s("code",[t._v('{{$node["Microsoft Outlook"].json["id"]}}')]),t._v(".")]),t._v(" "),s("li",[t._v("Click on the "),s("em",[s("strong",[t._v("Add Field")])]),t._v(" button.")]),t._v(" "),s("li",[t._v("Enter the recipient's email address in the "),s("em",[s("strong",[t._v("Recipients")])]),t._v(" field.")]),t._v(" "),s("li",[t._v("Click on "),s("em",[s("strong",[t._v("Execute Node")])]),t._v(" to run the node.")])])]),s("p",[t._v("In the screenshot below, you will notice that the node sends the draft message that we created using the Microsoft Outlook node to a recipient.")]),t._v(" "),s("p",[s("img",{attrs:{src:o(1107),alt:"Using the Microsoft Outlook node to send a draft"}})])],1)}),[],!1,null,null,null);e.default=a.exports}}]);