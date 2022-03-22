(window.webpackJsonp=window.webpackJsonp||[]).push([[108],{1126:function(e,t,o){e.exports=o.p+"assets/img/workflow.fe89232d.png"},1127:function(e,t,o){e.exports=o.p+"assets/img/MySQL_node.c3da8ac0.png"},1128:function(e,t,o){e.exports=o.p+"assets/img/Set_node.ac711aec.png"},1129:function(e,t,o){e.exports=o.p+"assets/img/MySQL1_node.d8818ea3.png"},2001:function(e,t,o){"use strict";o.r(t);var a=o(26),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"mysql"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mysql"}},[e._v("#")]),e._v(" MySQL")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://www.mysql.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("MySQL"),a("OutboundLink")],1),e._v(" is an open-source relational database management system. MySQL has stand-alone clients that allow users to interact directly with a MySQL database using SQL, but more often MySQL is used with other programs to implement applications that need relational database capability.")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("🔑 Credentials")]),e._v(" "),a("p",[e._v("You can find authentication information for this node "),a("RouterLink",{attrs:{to:"/nodes/credentials/MySQL/"}},[e._v("here")]),e._v(".")],1)]),e._v(" "),a("h2",{attrs:{id:"basic-operations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#basic-operations"}},[e._v("#")]),e._v(" Basic Operations")]),e._v(" "),a("Resource",{attrs:{node:"n8n-nodes-base.mySql"}}),e._v(" "),a("h2",{attrs:{id:"example-usage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-usage"}},[e._v("#")]),e._v(" Example Usage")]),e._v(" "),a("p",[e._v("This workflow allows you to create a table and insert data in it on a MySQL database. You can also find the "),a("a",{attrs:{href:"https://n8n.io/workflows/598",target:"_blank",rel:"noopener noreferrer"}},[e._v("workflow"),a("OutboundLink")],1),e._v(" on n8n.io. This example usage workflow would use the following nodes.")]),e._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/Start/"}},[e._v("Start")])],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/Set/"}},[e._v("Set")])],1),e._v(" "),a("li",[a("a",{attrs:{href:""}},[e._v("MySQL")])])]),e._v(" "),a("p",[e._v("The final workflow should look like the following image.")]),e._v(" "),a("p",[a("img",{attrs:{src:o(1126),alt:"A workflow with the MySQL node"}})]),e._v(" "),a("h3",{attrs:{id:"_1-start-node"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-start-node"}},[e._v("#")]),e._v(" 1. Start node")]),e._v(" "),a("p",[e._v("The start node exists by default when you create a new workflow.")]),e._v(" "),a("h3",{attrs:{id:"_2-mysql-node-execute-query"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-mysql-node-execute-query"}},[e._v("#")]),e._v(" 2. MySQL node (Execute Query)")]),e._v(" "),a("ol",[a("li",[e._v("First of all, you'll have to enter credentials for the MySQL node. You can find out how to do that "),a("RouterLink",{attrs:{to:"/nodes/credentials/MySQL/"}},[e._v("here")]),e._v(".")],1),e._v(" "),a("li",[e._v("Select 'Execute Query' from the "),a("em",[a("strong",[e._v("Operation")])]),e._v(" dropdown list.")]),e._v(" "),a("li",[e._v("Enter the following SQL query in the "),a("em",[a("strong",[e._v("Query")])]),e._v(" field: "),a("code",[e._v("CREATE TABLE test (id INT, name VARCHAR(255), PRIMARY KEY (id));")]),e._v(".")]),e._v(" "),a("li",[e._v("Click on "),a("em",[a("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),a("p",[a("img",{attrs:{src:o(1127),alt:"Using the MySQL node to create a table"}})]),e._v(" "),a("h3",{attrs:{id:"_3-set-node"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-set-node"}},[e._v("#")]),e._v(" 3. Set node")]),e._v(" "),a("ol",[a("li",[e._v("Set the "),a("em",[a("strong",[e._v("Keep Only Set")])]),e._v(" toggle to true.")]),e._v(" "),a("li",[e._v("Click on the "),a("em",[a("strong",[e._v("Add Value")])]),e._v(" button and select 'Number' from the dropdown list.")]),e._v(" "),a("li",[e._v("Enter "),a("code",[e._v("id")]),e._v(" in the "),a("em",[a("strong",[e._v("Name")])]),e._v(" field.")]),e._v(" "),a("li",[e._v("Click on the "),a("em",[a("strong",[e._v("Add Value")])]),e._v(" button and select 'String' from the dropdown list.")]),e._v(" "),a("li",[e._v("Enter "),a("code",[e._v("name")]),e._v(" in the "),a("em",[a("strong",[e._v("Name")])]),e._v(" field.")]),e._v(" "),a("li",[e._v("Enter the value for the name in the "),a("em",[a("strong",[e._v("Value")])]),e._v(" field.")]),e._v(" "),a("li",[e._v("Click on "),a("em",[a("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),a("p",[a("img",{attrs:{src:o(1128),alt:"Using the Set node to set data to be inserted by the MySQL node"}})]),e._v(" "),a("h3",{attrs:{id:"_4-mysql1-node-insert"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-mysql1-node-insert"}},[e._v("#")]),e._v(" 4. MySQL1 node (Insert)")]),e._v(" "),a("ol",[a("li",[e._v("Select the credentials that you entered in the previous MySQL node.")]),e._v(" "),a("li",[e._v("Enter "),a("code",[e._v("test")]),e._v(" in the "),a("em",[a("strong",[e._v("Table")])]),e._v(" field.")]),e._v(" "),a("li",[e._v("Enter "),a("code",[e._v("id, name")]),e._v(" in the "),a("em",[a("strong",[e._v("Columns")])]),e._v(" field.")]),e._v(" "),a("li",[e._v("Click on "),a("em",[a("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),a("p",[a("img",{attrs:{src:o(1129),alt:"Using the MySQL node to insert data into a table"}})])],1)}),[],!1,null,null,null);t.default=n.exports}}]);