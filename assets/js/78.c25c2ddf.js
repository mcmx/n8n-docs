(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{1836:function(t,e,s){"use strict";s.r(e);var n=s(26),a=Object(n.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"merge"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#merge"}},[t._v("#")]),t._v(" Merge")]),t._v(" "),n("p",[t._v("The Merge node is useful to merge data of multiple streams, once data of both streams is available.")]),t._v(" "),n("h2",{attrs:{id:"node-reference"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#node-reference"}},[t._v("#")]),t._v(" Node Reference")]),t._v(" "),n("h3",{attrs:{id:"mode"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#mode"}},[t._v("#")]),t._v(" Mode")]),t._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[t._v("💡 Keep in mind")]),t._v(" "),n("p",[t._v("The items passed into Input 1 of the Merge node will take precedence. For example, if 5 items are received in Input 1 and 10 items are received in Input 2, the Merge node will only process 5 items. The remaining 5 items from Input 2 will not be processed.")])]),t._v(" "),n("p",[t._v("You can specify how data of branches should be merged. The following options are available:")]),t._v(" "),n("ul",[n("li",[n("em",[n("strong",[t._v("Append:")])]),t._v(" Combines data of both inputs. The output will contain items of input 1 and input 2.")]),t._v(" "),n("li",[n("em",[n("strong",[t._v("Keep Key Matches:")])]),t._v(" Keeps data of input 1 if it finds a match with data of input 2.")]),t._v(" "),n("li",[n("em",[n("strong",[t._v("Merge By Index:")])]),t._v(" Merges data of both the inputs. The output will contain the data of input 1 merged with the data of input 2. The merge occurs based on the index of the items. For example, the first item of input 1 will be merged with the first item of input 2.")]),t._v(" "),n("li",[n("em",[n("strong",[t._v("Merge By Key:")])]),t._v(" Merges data of both the inputs. The output will contain the data of input 1 merged with the data of input 2. The merge occurs depending on a defined key.")]),t._v(" "),n("li",[n("em",[n("strong",[t._v("Multiples:")])]),t._v(" Merges each value of one input with each value of the other input. The output will contain (m*n) items where (m) and (n) are lengths of the inputs.")]),t._v(" "),n("li",[n("em",[n("strong",[t._v("Pass-through:")])]),t._v(" Passes through the data of one input. The output will contain items of the defined input.")]),t._v(" "),n("li",[n("em",[n("strong",[t._v("Remove Key Matches:")])]),t._v(" Keeps the data of input 1 if it does not find a match with the data of input 2.")]),t._v(" "),n("li",[n("em",[n("strong",[t._v("Wait:")])]),t._v(" Waits till the data of both the inputs is available. It will then output a single empty item.")])]),t._v(" "),n("h3",{attrs:{id:"additional-fields"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#additional-fields"}},[t._v("#")]),t._v(" Additional Fields")]),t._v(" "),n("ul",[n("li",[n("em",[n("strong",[t._v("Property Input 1:")])]),t._v(" The name of the property which decides which items of input 1 to merge. This field is displayed when 'Keep Key Matches', 'Merge By Key', or 'Remove Key Matches' is selected in the "),n("em",[n("strong",[t._v("Mode")])]),t._v(" dropdown list.")]),t._v(" "),n("li",[n("em",[n("strong",[t._v("Property Input 2:")])]),t._v(" The name of the property which decides which items of input 2 to merge. This field is displayed when 'Keep Key Matches', 'Merge By Key', or 'Remove Key Matches' is selected in the "),n("em",[n("strong",[t._v("Mode")])]),t._v(" dropdown list.")]),t._v(" "),n("li",[n("em",[n("strong",[t._v("Join:")])]),t._v(" Use this to specify how many items the output should contain if inputs contain different amount of items. This field is displayed when 'Merge By Index' is selected in the "),n("em",[n("strong",[t._v("Mode")])]),t._v(" dropdown list. You can select from the following options.\n"),n("ul",[n("li",[n("em",[n("strong",[t._v("Inner Join:")])]),t._v(" Merges as many items as both the inputs contains. For example, if input 1 contains 3 items and input 2 contains 3 items, the output will contain 3 items.")]),t._v(" "),n("li",[n("em",[n("strong",[t._v("Left Join:")])]),t._v(" Merges as many items as the first input contains. For example, if input 1 contains 3 items and input 2 contains 5 items, the output will contain 3 items.")]),t._v(" "),n("li",[n("em",[n("strong",[t._v("Outer Join:")])]),t._v(" Merges as many items as input contains with most items. For example, if input 1 contains 3 items and input 2 contains 5 items, the output will contain 5 items.")])])]),t._v(" "),n("li",[n("em",[n("strong",[t._v("Overwrite:")])]),t._v(" Select when to overwrite the values from Input1 with values from Input 2. This field is displayed when 'Merge By Key' is selected from the "),n("em",[n("strong",[t._v("Mode")])]),t._v(" dropdown list. You can select from the following options.\n"),n("ul",[n("li",[n("em",[n("strong",[t._v("Always:")])]),t._v(" Always overwrites everything.")]),t._v(" "),n("li",[n("em",[n("strong",[t._v("If Blank:")])]),t._v(" Overwrites only values of 'null', 'undefined' or the empty strings.")]),t._v(" "),n("li",[n("em",[n("strong",[t._v("If Missing:")])]),t._v(" Only adds values which do not exist yet.")])])]),t._v(" "),n("li",[n("em",[n("strong",[t._v("Output Data:")])]),t._v(" Defines which input data should be used as the output of the node. This field is displayed when 'Pass-through' is selected from the "),n("em",[n("strong",[t._v("Mode")])]),t._v(" dropdown list. You can select from the following options.\n"),n("ul",[n("li",[n("em",[n("strong",[t._v("Input 1")])])]),t._v(" "),n("li",[n("em",[n("strong",[t._v("Input 2")])])])])])]),t._v(" "),n("h2",{attrs:{id:"example-usage"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#example-usage"}},[t._v("#")]),t._v(" Example Usage")]),t._v(" "),n("p",[t._v("This workflow allows you to merge greetings for the users based on their associated language using the Merge node. You can also find the "),n("a",{attrs:{href:"https://n8n.io/workflows/655",target:"_blank",rel:"noopener noreferrer"}},[t._v("workflow"),n("OutboundLink")],1),t._v(" on n8n.io. This example usage workflow uses the following nodes.")]),t._v(" "),n("ul",[n("li",[n("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/Start/"}},[t._v("Start")])],1),t._v(" "),n("li",[n("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/Function/"}},[t._v("Funtion")])],1),t._v(" "),n("li",[n("a",{attrs:{href:""}},[t._v("Merge")])])]),t._v(" "),n("p",[t._v("The final workflow should look like the following image.")]),t._v(" "),n("p",[n("img",{attrs:{src:s(703),alt:"A workflow with the HTML Extract node"}})]),t._v(" "),n("h3",{attrs:{id:"_1-start-node"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-start-node"}},[t._v("#")]),t._v(" 1. Start node")]),t._v(" "),n("p",[t._v("The start node exists by default when you create a new workflow.")]),t._v(" "),n("h3",{attrs:{id:"_2-function-node"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-function-node"}},[t._v("#")]),t._v(" 2. Function node")]),t._v(" "),n("ol",[n("li",[t._v("Paste the following JavaScript code snippet in the "),n("em",[n("strong",[t._v("Function")])]),t._v(" field.")])]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("json")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("name")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Stefan'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("language")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'de'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("json")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("name")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Jim'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("language")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'en'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("json")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("name")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Hans'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("language")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'de'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("ol",{attrs:{start:"2"}},[n("li",[t._v("Click on "),n("em",[n("strong",[t._v("Execute Node")])]),t._v(" to run the node.")])]),t._v(" "),n("p",[n("img",{attrs:{src:s(704),alt:"Generate users information using the Function node"}})]),t._v(" "),n("div",{pre:!0},[n("h3",{pre:!0,attrs:{id:"_3-function1-node"}},[n("a",{pre:!0,attrs:{class:"header-anchor",href:"#_3-function1-node"}},[t._v("#")]),t._v(" 3. Function1 node")]),t._v(" "),n("ol",[n("li",[t._v("Paste the following JavaScript code snippet in the "),n("em",[n("strong",[t._v("Function")])]),t._v(" field.")])]),t._v(" "),n("div",{pre:!0,attrs:{class:"language-js extra-class"}},[n("pre",{pre:!0,attrs:{"v-pre":"",class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("json")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("greeting")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Hallo'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("language")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'de'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("json")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("greeting")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Hello'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("language")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'en'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("ol",{pre:!0,attrs:{start:"2"}},[n("li",[t._v("Click on "),n("em",[n("strong",[t._v("Execute Node")])]),t._v(" to run the node.")])])]),n("p",[n("img",{attrs:{src:s(705),alt:"Generate greetings information using the Function node"}})]),t._v(" "),n("div",{pre:!0},[n("h3",{pre:!0,attrs:{id:"_4-merge-node-mergebykey"}},[n("a",{pre:!0,attrs:{class:"header-anchor",href:"#_4-merge-node-mergebykey"}},[t._v("#")]),t._v(" 4. Merge node (mergeByKey)")]),t._v(" "),n("ol",[n("li",[t._v("Select 'Merge By Key' from the "),n("em",[n("strong",[t._v("Mode")])]),t._v(" dropdown list.")]),t._v(" "),n("li",[t._v("Enter "),n("code",[t._v("language")]),t._v(" in the "),n("em",[n("strong",[t._v("Property Input 1")])]),t._v(" field.")]),t._v(" "),n("li",[t._v("Enter "),n("code",[t._v("language")]),t._v(" in the "),n("em",[n("strong",[t._v("Property Input 2")])]),t._v(" field.")]),t._v(" "),n("li",[t._v("Click on "),n("em",[n("strong",[t._v("Execute Node")])]),t._v(" to run the node.")])])]),n("p",[n("img",{attrs:{src:s(706),alt:"Merge user information and greetings information using the Merge node"}})]),t._v(" "),n("h2",{attrs:{id:"further-reading"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#further-reading"}},[t._v("#")]),t._v(" Further Reading")]),t._v(" "),n("FurtherReadingBlog")],1)}),[],!1,null,null,null);e.default=a.exports},703:function(t,e,s){t.exports=s.p+"assets/img/workflow.598098da.png"},704:function(t,e,s){t.exports=s.p+"assets/img/Function_node.3a7485fd.png"},705:function(t,e,s){t.exports=s.p+"assets/img/Function1_node.8584dcc1.png"},706:function(t,e,s){t.exports=s.p+"assets/img/Merge_node.01a18f0d.png"}}]);