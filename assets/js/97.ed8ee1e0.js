(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{1934:function(o,e,t){"use strict";t.r(e);var s=t(26),l=Object(s.a)({},(function(){var o=this,e=o.$createElement,s=o._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":o.$parent.slotKey}},[s("h1",{attrs:{id:"google-books"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#google-books"}},[o._v("#")]),o._v(" Google Books")]),o._v(" "),s("p",[s("a",{attrs:{href:"https://books.google.com",target:"_blank",rel:"noopener noreferrer"}},[o._v("Google Books"),s("OutboundLink")],1),o._v(" is a service from Google to browse, buy, or borrow books online.")]),o._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[o._v("🔑 Credentials")]),o._v(" "),s("p",[o._v("You can find authentication information for this node "),s("RouterLink",{attrs:{to:"/nodes/credentials/Google/"}},[o._v("here")]),o._v(".")],1)]),o._v(" "),s("h2",{attrs:{id:"basic-operations"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#basic-operations"}},[o._v("#")]),o._v(" Basic Operations")]),o._v(" "),s("Resource",{attrs:{node:"n8n-nodes-base.googleBooks"}}),o._v(" "),s("h2",{attrs:{id:"example-usage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example-usage"}},[o._v("#")]),o._v(" Example Usage")]),o._v(" "),s("p",[o._v("This workflow allows you to get a volume and add it to your bookshelf using the Google Books node. You can also find the "),s("a",{attrs:{href:"https://n8n.io/workflows/771",target:"_blank",rel:"noopener noreferrer"}},[o._v("workflow"),s("OutboundLink")],1),o._v(" on n8n.io. This example usage workflow uses the following nodes.")]),o._v(" "),s("ul",[s("li",[s("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/Start/"}},[o._v("Start")])],1),o._v(" "),s("li",[s("a",{attrs:{href:""}},[o._v("Google Books")])])]),o._v(" "),s("p",[o._v("The final workflow should look like the following image.")]),o._v(" "),s("p",[s("img",{attrs:{src:t(963),alt:"A workflow with the Google Books node"}})]),o._v(" "),s("h3",{attrs:{id:"_1-start-node"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-start-node"}},[o._v("#")]),o._v(" 1. Start node")]),o._v(" "),s("p",[o._v("The Start node exists by default when you create a new workflow.")]),o._v(" "),s("h3",{attrs:{id:"_2-google-books-node-get-volume"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-google-books-node-get-volume"}},[o._v("#")]),o._v(" 2. Google Books node (get: volume)")]),o._v(" "),s("p",[o._v("This node will retrieve a volume from Google Books.")]),o._v(" "),s("ol",[s("li",[o._v("Select 'OAuth2' from the "),s("em",[s("strong",[o._v("Authentication")])]),o._v(" dropdown list.")]),o._v(" "),s("li",[o._v("Enter credentials for the Google Books node. You can find out how to enter credentials for this node "),s("RouterLink",{attrs:{to:"/nodes/credentials/Google/"}},[o._v("here")]),o._v(".")],1),o._v(" "),s("li",[o._v("Enter the ID of a volume in the "),s("em",[s("strong",[o._v("Volume ID")])]),o._v(" field.")]),o._v(" "),s("li",[o._v("Click on "),s("em",[s("strong",[o._v("Execute Node")])]),o._v(" to run the workflow.")])]),o._v(" "),s("p",[o._v("In the screenshot below, you will observe that the node retrieves the information of the volume that we specify.")]),o._v(" "),s("p",[s("img",{attrs:{src:t(964),alt:"Using the Google Books node to retrieve information of a volume"}})]),o._v(" "),s("h3",{attrs:{id:"_3-google-books1-node-add-bookshelfvolume"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-google-books1-node-add-bookshelfvolume"}},[o._v("#")]),o._v(" 3. Google Books1 node (add: bookshelfVolume)")]),o._v(" "),s("p",[o._v("This node will add the volume that we got from the previous node to a bookshelf in Google Books.")]),o._v(" "),s("div",{pre:!0},[s("ol",[s("li",[o._v("Select 'OAuth2' in the "),s("em",[s("strong",[o._v("Authentication")])]),o._v(" field.")]),o._v(" "),s("li",[o._v("Select the credentials that you entered in the previous Google Books node.")]),o._v(" "),s("li",[o._v("Select 'Bookshelf Volume' from the "),s("em",[s("strong",[o._v("Resource")])]),o._v(" dropdown list.")]),o._v(" "),s("li",[o._v("Select 'Add' from the "),s("em",[s("strong",[o._v("Operation")])]),o._v(" dropdown list.")]),o._v(" "),s("li",[o._v("Enter a bookshelf id in the "),s("em",[s("strong",[o._v("ID")])]),o._v(" field.")]),o._v(" "),s("li",[o._v("Click on the gears icon next to the "),s("em",[s("strong",[o._v("Volume ID")])]),o._v(" field and click on "),s("em",[s("strong",[o._v("Add Expression")])]),o._v(".")]),o._v(" "),s("li",[o._v("Select the following in the "),s("em",[s("strong",[o._v("Variable Selector")])]),o._v(" section: Nodes > Google Books > Output Data > JSON > id. You can also add the following expression: "),s("code",[o._v('{{$node["Google Books"].json["id"]}}')]),o._v(".")]),o._v(" "),s("li",[o._v("Click on "),s("em",[s("strong",[o._v("Execute Node")])]),o._v(" to run the workflow.")])])]),s("p",[o._v("In the screenshot below, you will notice that this node adds the volume that we got from the previous node to a bookshelf that we specified.")]),o._v(" "),s("p",[s("img",{attrs:{src:t(965),alt:"Using the Google Books node to add a volume to a bookshelf volume"}})]),o._v(" "),s("h3",{attrs:{id:"_4-google-books2-node-getall-bookshelfvolume"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-google-books2-node-getall-bookshelfvolume"}},[o._v("#")]),o._v(" 4. Google Books2 node (getAll: bookshelfVolume)")]),o._v(" "),s("p",[o._v("This node will return all the volumes in a bookshelf.")]),o._v(" "),s("div",{pre:!0},[s("ol",[s("li",[o._v("Select 'OAuth2' in the "),s("em",[s("strong",[o._v("Authentication")])]),o._v(" field.")]),o._v(" "),s("li",[o._v("Select the credentials that you entered in the previous Google Books node.")]),o._v(" "),s("li",[o._v("Select 'Bookshelf Volume' from the "),s("em",[s("strong",[o._v("Resource")])]),o._v(" dropdown list.")]),o._v(" "),s("li",[o._v("Select 'Get All' from the "),s("em",[s("strong",[o._v("Operation")])]),o._v(" dropdown list.")]),o._v(" "),s("li",[o._v("Toggle "),s("em",[s("strong",[o._v("My Library")])]),o._v(" to true. This will return the information for your account.")]),o._v(" "),s("li",[o._v("Click on the gears icon next to the "),s("em",[s("strong",[o._v("Bookshelf ID")])]),o._v(" field and click on "),s("em",[s("strong",[o._v("Add Expression")])]),o._v(".")]),o._v(" "),s("li",[o._v("Select the following in the "),s("em",[s("strong",[o._v("Variable Selector")])]),o._v(" section: Nodes > Google Books1 > Parameters > shelfId. You can also add the following expression: "),s("code",[o._v('{{$node["Google Books1"].parameter["shelfId"]}}')]),o._v(".")]),o._v(" "),s("li",[o._v("Click on "),s("em",[s("strong",[o._v("Execute Node")])]),o._v(" to run the workflow.")])])]),s("p",[o._v("In the screenshot below, you will notice that this node returns all the volumes in the bookshelf that we specified.")]),o._v(" "),s("p",[s("img",{attrs:{src:t(966),alt:"Using the Google Books node to get all the volumes in a bookshelf"}})])],1)}),[],!1,null,null,null);e.default=l.exports},963:function(o,e,t){o.exports=t.p+"assets/img/workflow.8cbff6e1.png"},964:function(o,e,t){o.exports=t.p+"assets/img/GoogleBooks_node.f7fa5f61.png"},965:function(o,e,t){o.exports=t.p+"assets/img/GoogleBooks1_node.c5335b4d.png"},966:function(o,e,t){o.exports=t.p+"assets/img/GoogleBooks2_node.d7bbabb4.png"}}]);