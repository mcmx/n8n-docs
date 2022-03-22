(window.webpackJsonp=window.webpackJsonp||[]).push([[369],{1883:function(e,t,o){"use strict";o.r(t);var n=o(26),r=Object(n.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"baserow"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#baserow"}},[e._v("#")]),e._v(" Baserow")]),e._v(" "),n("p",[n("a",{attrs:{href:"https://baserow.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Baserow"),n("OutboundLink")],1),e._v(" is an open source no-code database and Airtable alternative.")]),e._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[e._v("🔑 Credentials")]),e._v(" "),n("p",[e._v("You can find authentication information for this node "),n("RouterLink",{attrs:{to:"/nodes/credentials/Baserow/"}},[e._v("here")]),e._v(".")],1)]),e._v(" "),n("h2",{attrs:{id:"basic-operations"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#basic-operations"}},[e._v("#")]),e._v(" Basic operations")]),e._v(" "),n("Resource",{attrs:{node:"n8n-nodes-base.baserow"}}),e._v(" "),n("h2",{attrs:{id:"example"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[e._v("#")]),e._v(" Example")]),e._v(" "),n("p",[e._v("This workflow allows you to create, find, and delete rows in Baserow default Customer table. This example workflow uses the following nodes.")]),e._v(" "),n("ul",[n("li",[n("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/Start/"}},[e._v("Start")])],1),e._v(" "),n("li",[n("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/Set/"}},[e._v("Set")])],1),e._v(" "),n("li",[n("a",{attrs:{href:""}},[e._v("Baserow")])])]),e._v(" "),n("p",[e._v("The final workflow should look like the following image:")]),e._v(" "),n("p",[n("img",{attrs:{src:o(825),alt:"A workflow with the Baserow node"}})]),e._v(" "),n("p",[e._v("For this workflow you need an account to any Baserow instance with the demo table "),n("code",[e._v("Customers")]),e._v(".")]),e._v(" "),n("h3",{attrs:{id:"_1-start-node"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-start-node"}},[e._v("#")]),e._v(" 1. Start node")]),e._v(" "),n("p",[e._v("The start node exists by default when you create a new workflow.")]),e._v(" "),n("h3",{attrs:{id:"_2-set-node"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-set-node"}},[e._v("#")]),e._v(" 2. Set node")]),e._v(" "),n("p",[e._v("We will use the Set node to set the values for the "),n("code",[e._v("name")]),e._v(" and "),n("code",[e._v("id")]),e._v(" fields of a new record.")]),e._v(" "),n("ol",[n("li",[e._v("Click on the "),n("em",[n("strong",[e._v("Add Value")])]),e._v(" button and select 'String' from the dropdown list.")]),e._v(" "),n("li",[e._v("Enter "),n("code",[e._v("Name")]),e._v(" in the "),n("em",[n("strong",[e._v("Name")])]),e._v(" field.")]),e._v(" "),n("li",[e._v("Enter a name in the "),n("em",[n("strong",[e._v("Value")])]),e._v(" field.")]),e._v(" "),n("li",[e._v("Click on the "),n("em",[n("strong",[e._v("Add Value")])]),e._v(" button and select 'String' from the dropdown list.")]),e._v(" "),n("li",[e._v("Enter "),n("code",[e._v("Last name")]),e._v(" in the "),n("em",[n("strong",[e._v("Name")])]),e._v(" field.")]),e._v(" "),n("li",[e._v("Enter a last name in the "),n("em",[n("strong",[e._v("Value")])]),e._v(" field.")]),e._v(" "),n("li",[e._v("Click on the "),n("em",[n("strong",[e._v("Add Value")])]),e._v(" button and select 'Boolean' from the dropdown list.")]),e._v(" "),n("li",[e._v("Enter "),n("code",[e._v("Active")]),e._v(" in the "),n("em",[n("strong",[e._v("Name")])]),e._v(" field.")]),e._v(" "),n("li",[e._v("Check the value.")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),n("h3",{attrs:{id:"_3-baserow-node-create"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-baserow-node-create"}},[e._v("#")]),e._v(" 3. Baserow node (Create)")]),e._v(" "),n("p",[e._v("This node will create a row in the "),n("code",[e._v("Customers")]),e._v(" table with the content from the previous node.")]),e._v(" "),n("ol",[n("li",[e._v("Enter your credentials for the Baserow node. You can find out how to create credentials "),n("RouterLink",{attrs:{to:"/nodes/credentials/Baserow/"}},[e._v("here")]),e._v(".")],1),e._v(" "),n("li",[e._v("Enter your Baserow instance URL (default value is for official version).")]),e._v(" "),n("li",[e._v("Select 'Create' from the "),n("em",[n("strong",[e._v("Operation")])]),e._v(" dropdown list.")]),e._v(" "),n("li",[e._v("Enter the Table ID in the "),n("em",[n("strong",[e._v("Table ID")])]),e._v(" field. For obtaining the Table ID, see the Database API page available from the database menu.")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),n("h3",{attrs:{id:"_4-baserow-node-list"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-baserow-node-list"}},[e._v("#")]),e._v(" 4. Baserow node (List)")]),e._v(" "),n("p",[e._v("This node will list all the rows with the name "),n("code",[e._v("Bill")]),e._v(". If you want to list records with a different name, use that name instead.")]),e._v(" "),n("div",{pre:!0},[n("ol",[n("li",[e._v("Select the credentials that you entered in the previous node.")]),e._v(" "),n("li",[e._v("Click on the gears icon next to the "),n("em",[n("strong",[e._v("Host")])]),e._v(" field and click on "),n("em",[n("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),n("li",[e._v("Select the following in the "),n("em",[n("strong",[e._v("Variable Selector")])]),e._v(" section: "),n("em",[n("strong",[e._v("Nodes > Baserow > Parameters > Host")])]),e._v(". You can also add the following expression: "),n("code",[e._v('{{$node["Baserow"].parameter["host"]}}')]),e._v(".")]),e._v(" "),n("li",[e._v("Select the 'List' option from the "),n("em",[n("strong",[e._v("Operation")])]),e._v(" dropdown list.")]),e._v(" "),n("li",[e._v("Click on the gears icon next to the "),n("em",[n("strong",[e._v("Table ID")])]),e._v(" field and click on "),n("em",[n("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),n("li",[e._v("Select the following in the "),n("em",[n("strong",[e._v("Variable Selector")])]),e._v(" section: "),n("em",[n("strong",[e._v("Nodes > Baserow > Parameters > Table")])]),e._v(". You can also add the following expression: "),n("code",[e._v('{{$node["Baserow"].parameter["table"]}}')]),e._v(".")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Add Option")])]),e._v(" and select 'Search' from the dropdown list.")]),e._v(" "),n("li",[e._v("Enter "),n("code",[e._v("Bill")]),e._v(" in the "),n("em",[n("strong",[e._v("Search")])]),e._v(" field.")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])])]),n("p",[e._v("You will notice that the node only returns the record with a column containing "),n("code",[e._v("Bill")]),e._v(".")]),e._v(" "),n("h3",{attrs:{id:"_5-baserow-node-delete"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-baserow-node-delete"}},[e._v("#")]),e._v(" 5. Baserow node (Delete)")]),e._v(" "),n("p",[e._v("This node will delete all the rows listed from the previous node.")]),e._v(" "),n("div",{pre:!0},[n("ol",[n("li",[e._v("Select the credentials that you entered in the previous node.")]),e._v(" "),n("li",[e._v("Click on the gears icon next to the "),n("em",[n("strong",[e._v("Host")])]),e._v(" field and click on "),n("em",[n("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),n("li",[e._v("Select the following in the "),n("em",[n("strong",[e._v("Variable Selector")])]),e._v(" section: "),n("em",[n("strong",[e._v("Nodes > Baserow > Parameters > Host")])]),e._v(". You can also add the following expression: "),n("code",[e._v('{{$node["Baserow"].parameter["host"]}}')]),e._v(".")]),e._v(" "),n("li",[e._v("Select the 'Delete' option from the "),n("em",[n("strong",[e._v("Operation")])]),e._v(" dropdown list.")]),e._v(" "),n("li",[e._v("Click on the gears icon next to the "),n("em",[n("strong",[e._v("Table ID")])]),e._v(" field and click on "),n("em",[n("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),n("li",[e._v("Select the following in the "),n("em",[n("strong",[e._v("Variable Selector")])]),e._v(" section: "),n("em",[n("strong",[e._v("Nodes > Baserow > Parameters > Table")])]),e._v(". You can also add the following expression: "),n("code",[e._v('{{$node["Baserow"].parameter["table"]}}')]),e._v(".")]),e._v(" "),n("li",[e._v("Click on the gears icon next to the "),n("em",[n("strong",[e._v("Row ID")])]),e._v(" field and click on "),n("em",[n("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),n("li",[e._v("Select the following in the "),n("em",[n("strong",[e._v("Variable Selector")])]),e._v(" section: "),n("em",[n("strong",[e._v("Current Node > Input Data > JSON > id")])]),e._v(". You can also add the following expression: "),n("code",[e._v('{{$json["id"]}}')]),e._v(".")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])])])],1)}),[],!1,null,null,null);t.default=r.exports},825:function(e,t,o){e.exports=o.p+"assets/img/workflow.50f35b7d.png"}}]);