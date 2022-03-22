(window.webpackJsonp=window.webpackJsonp||[]).push([[612],{1812:function(t,a,e){"use strict";e.r(a);var s=e(26),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"date-and-time-with-luxon"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#date-and-time-with-luxon"}},[t._v("#")]),t._v(" Date and time with Luxon")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://github.com/moment/luxon/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Luxon"),e("OutboundLink")],1),t._v(" is a JavaScript library that makes it easier to work with date and time. For full details of how to use Luxon, refer to "),e("a",{attrs:{href:"https://moment.github.io/luxon/#/?id=luxon",target:"_blank",rel:"noopener noreferrer"}},[t._v("Luxon's documentation"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("h2",{attrs:{id:"variables"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#variables"}},[t._v("#")]),t._v(" Variables")]),t._v(" "),e("p",[t._v("n8n uses Luxon to provide two custom variables:")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("$now")]),t._v(": a Luxon object containing the current timestamp. Equivalent to "),e("code",[t._v("DateTime.now()")]),t._v(".")]),t._v(" "),e("li",[e("code",[t._v("$today")]),t._v(": a Luxon object containing the current timestamp, rounded down to the day. Equivalent to "),e("code",[t._v("DateTime.now().set({ hour: 0, minute: 0, second: 0, millisecond: 0 })")]),t._v(".")])]),t._v(" "),e("p",[t._v("Note that these variables can return different time formats when cast as a string. This is the same behavior as Luxon's "),e("code",[t._v("DateTime.now()")]),t._v(".")]),t._v(" "),e("div",{pre:!0},[e("div",{pre:!0,attrs:{class:"language-js extra-class"}},[e("pre",{pre:!0,attrs:{"v-pre":"",class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("$now"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// Returns [Object: "<ISO formatted timestamp>"]')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// For example [Object: "2022-03-09T14:00:25.058+00:00"]')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("$now"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Returns the ISO formatted timestamp")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// For example 2022-03-09T14:02:37.065+00:00")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Today\'s date is "')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" $now"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// Returns "Today\'s date is <unix timestamp>"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// For example "Today\'s date is 1646834498755"')]),t._v("\n")])])]),e("h2",{pre:!0,attrs:{id:"common-tasks"}},[e("a",{pre:!0,attrs:{class:"header-anchor",href:"#common-tasks"}},[t._v("#")]),t._v(" Common tasks")]),t._v(" "),e("p",[t._v("This section provides examples for some common operations. Many more examples, and detailed guidance, are available in "),e("a",{pre:!0,attrs:{href:"https://moment.github.io/luxon/#/?id=luxon",target:"_blank",rel:"noopener noreferrer"}},[t._v("Luxon's own documentation"),e("OutboundLink",{pre:!0})],1),t._v(".")]),t._v(" "),e("h3",{pre:!0,attrs:{id:"get-n-days-from-today"}},[e("a",{pre:!0,attrs:{class:"header-anchor",href:"#get-n-days-from-today"}},[t._v("#")]),t._v(" Get n days from today")]),t._v(" "),e("p",[t._v("Get a number of days before or after today.")]),t._v(" "),e("p",[t._v("For example, you want to set a field to always show the date seven days before the current date.")]),t._v(" "),e("p",[t._v("In the expressions editor, enter:")]),t._v(" "),e("div",{pre:!0,attrs:{class:"language-js extra-class"}},[e("pre",{pre:!0,attrs:{"v-pre":"",class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("$today"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("minus")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("days")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("On the 23rd June 2019, this returns "),e("code",[t._v('[Object: "2019-06-16T00:00:00.000+00:00"]')]),t._v(".")]),t._v(" "),e("p",[t._v("This example uses n8n's custom variable "),e("code",[t._v("$today")]),t._v(" for convenience. It is the equivalent of "),e("code",[t._v("DateTime.now().set({ hour: 0, minute: 0, second: 0, millisecond: 0 }).minus({days: 7})")]),t._v(".")]),t._v(" "),e("p",[t._v("For more detailed information and examples, refer to:")]),t._v(" "),e("ul",[e("li",[t._v("Luxon's "),e("a",{pre:!0,attrs:{href:"https://moment.github.io/luxon/#/math",target:"_blank",rel:"noopener noreferrer"}},[t._v("guide to math"),e("OutboundLink",{pre:!0})],1)]),t._v(" "),e("li",[t._v("Their API documentation on "),e("a",{pre:!0,attrs:{href:"https://moment.github.io/luxon/api-docs/index.html#datetimeplus",target:"_blank",rel:"noopener noreferrer"}},[t._v("DateTime plus"),e("OutboundLink",{pre:!0})],1),t._v(" and "),e("a",{pre:!0,attrs:{href:"https://moment.github.io/luxon/api-docs/index.html#datetimeminus",target:"_blank",rel:"noopener noreferrer"}},[t._v("DateTime minus"),e("OutboundLink",{pre:!0})],1)])]),t._v(" "),e("h3",{pre:!0,attrs:{id:"create-human-readable-dates"}},[e("a",{pre:!0,attrs:{class:"header-anchor",href:"#create-human-readable-dates"}},[t._v("#")]),t._v(" Create human-readable dates")]),t._v(" "),e("p",[t._v("In "),e("a",{pre:!0,attrs:{href:"#get-n-days-from-today"}},[t._v("Get n days from today")]),t._v(", the example gets the date seven days before the current date, and returns it as "),e("code",[t._v('[Object: "yyyy-mm-dd-T00:00:00.000+00:00"]')]),t._v(". To make this more readable, you can use Luxon's formatting functions.")]),t._v(" "),e("p",[t._v("For example, you want the field containing the date to be formatted as DD/MM/YYYY.")]),t._v(" "),e("p",[t._v("This expression gets the date seven days before today, and converts it to the DD/MM/YYYY format. So on the 23rd June 2019, it returns 23/06/2019:")]),t._v(" "),e("div",{pre:!0,attrs:{class:"language-js extra-class"}},[e("pre",{pre:!0,attrs:{"v-pre":"",class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("$today"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("minus")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("days")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("toLocaleString")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("You can alter the format. For example:")]),t._v(" "),e("div",{pre:!0,attrs:{class:"language-js extra-class"}},[e("pre",{pre:!0,attrs:{"v-pre":"",class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("$today"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("minus")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("days")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("toLocaleString")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("month")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'long'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("day")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'numeric'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("year")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'numeric'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v('On 23rd June 2019, this returns "16 June 2019".')]),t._v(" "),e("p",[t._v("Refer to Luxon's guide on "),e("a",{pre:!0,attrs:{href:"https://moment.github.io/luxon/#/formatting?id=tolocalestring-strings-for-humans",target:"_blank",rel:"noopener noreferrer"}},[t._v("toLocaleString (strings for humans)"),e("OutboundLink",{pre:!0})],1),t._v(" for more information.")]),t._v(" "),e("h3",{pre:!0,attrs:{id:"convert-date-string-to-luxon"}},[e("a",{pre:!0,attrs:{class:"header-anchor",href:"#convert-date-string-to-luxon"}},[t._v("#")]),t._v(" Convert date string to Luxon")]),t._v(" "),e("p",[t._v("You can convert date strings and other date formats to a Luxon DateTime object. You can convert from standard formats and from arbitrary strings.")]),t._v(" "),e("p",[t._v("If you have a date in a supported standard technical format:")]),t._v(" "),e("p",[t._v("Luxon provides functions to handle the conversion. Refer to Luxon's guide to "),e("a",{pre:!0,attrs:{href:"https://moment.github.io/luxon/#/parsing?id=parsing-technical-formats",target:"_blank",rel:"noopener noreferrer"}},[t._v("Parsing technical formats"),e("OutboundLink",{pre:!0})],1),t._v(" for details.")]),t._v(" "),e("p",[t._v("If you have a date as a string that does not use a standard format:")]),t._v(" "),e("p",[t._v("Use Luxon's "),e("a",{pre:!0,attrs:{href:"https://moment.github.io/luxon/#/parsing?id=ad-hoc-parsing",target:"_blank",rel:"noopener noreferrer"}},[t._v("Ad-hoc parsing"),e("OutboundLink",{pre:!0})],1),t._v(". To do this, use the "),e("code",[t._v("fromFormat()")]),t._v(" function, providing the string and a set of "),e("a",{pre:!0,attrs:{href:"https://moment.github.io/luxon/#/parsing?id=table-of-tokens",target:"_blank",rel:"noopener noreferrer"}},[t._v("tokens"),e("OutboundLink",{pre:!0})],1),t._v(" that describe the format.")]),t._v(" "),e("p",[t._v("For example, you have n8n's founding date, 23rd June 2019, formatted as '23-06-2019'. You want to turn this into a Luxon object:")]),t._v(" "),e("div",{pre:!0,attrs:{class:"language-js extra-class"}},[e("pre",{pre:!0,attrs:{"v-pre":"",class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("DateTime"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("fromFormat")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"23-06-2019"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"dd-MM-yyyy"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("When using ad-hoc parsing, note Luxon's warning about "),e("a",{pre:!0,attrs:{href:"https://moment.github.io/luxon/#/parsing?id=limitations",target:"_blank",rel:"noopener noreferrer"}},[t._v("Limitations"),e("OutboundLink",{pre:!0})],1),t._v(". If you see unexpected results, try their "),e("a",{pre:!0,attrs:{href:"https://moment.github.io/luxon/#/parsing?id=debugging",target:"_blank",rel:"noopener noreferrer"}},[t._v("Debugging"),e("OutboundLink",{pre:!0})],1),t._v(" guide.")]),t._v(" "),e("h3",{pre:!0,attrs:{id:"get-the-time-between-two-dates"}},[e("a",{pre:!0,attrs:{class:"header-anchor",href:"#get-the-time-between-two-dates"}},[t._v("#")]),t._v(" Get the time between two dates")]),t._v(" "),e("p",[t._v("To get the time between two dates, use Luxon's diffs feature. This subtracts one date from another and returns a duration.")]),t._v(" "),e("p",[t._v("For example, get the number of months between two dates:")]),t._v(" "),e("div",{pre:!0,attrs:{class:"language-js extra-class"}},[e("pre",{pre:!0,attrs:{"v-pre":"",class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("DateTime"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("fromISO")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'201-06-23'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("diff")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("DateTime"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("fromISO")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2019-05-23'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'months'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("toObject")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("This returns "),e("code",[t._v('[Object: {"months":1}]')]),t._v(".")]),t._v(" "),e("p",[t._v("Refer to Luxon's "),e("a",{pre:!0,attrs:{href:"https://moment.github.io/luxon/#/math?id=diffs",target:"_blank",rel:"noopener noreferrer"}},[t._v("Diffs"),e("OutboundLink",{pre:!0})],1),t._v(" for more information.")]),t._v(" "),e("h3",{pre:!0,attrs:{id:"a-longer-example-how-many-days-to-christmas"}},[e("a",{pre:!0,attrs:{class:"header-anchor",href:"#a-longer-example-how-many-days-to-christmas"}},[t._v("#")]),t._v(" A longer example: how many days to Christmas?")]),t._v(" "),e("p",[t._v("This example brings together several Luxon features, uses JMESPath, and does some basic string manipulation.")]),t._v(" "),e("p",[t._v("The scenario: you want a countdown to 25th December. Every day, it should tell you the number of days remaining to Christmas. You don't want to update it for next year - it needs to seamelessly work for every year.")]),t._v(" "),e("div",{pre:!0,attrs:{class:"language-js extra-class"}},[e("pre",{pre:!0,attrs:{"v-pre":"",class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"There are "')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" $today"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("diff")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("DateTime"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("fromISO")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("$today"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("year "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'-12-25'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'days'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("toObject")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("days"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("substring")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('" days to Christmas!"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("This outputs "),e("code",[t._v('"There are <number of days> days to Christmas!"')]),t._v('. For example, on 9th March, it outputs "There are 291 days to Christmas!".')]),t._v(" "),e("p",[t._v("A detailed explanation of what the expression does:")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("{{")]),t._v(": indicates the start of the expression.")]),t._v(" "),e("li",[e("code",[t._v('"There are "')]),t._v(": a string.")]),t._v(" "),e("li",[e("code",[t._v("+")]),t._v(": used to join two strings.")]),t._v(" "),e("li",[e("code",[t._v("$today.diff()")]),t._v(": This is similar to the example in "),e("a",{pre:!0,attrs:{href:"#get-the-time-between-two-dates"}},[t._v("Get the time between two dates")]),t._v(", but it uses n8n's custom "),e("code",[t._v("$today")]),t._v(" variable.")]),t._v(" "),e("li",[e("code",[t._v("DateTime.fromISO($today.year + '-12-25'), 'days'")]),t._v(": this part gets the current year using "),e("code",[t._v("$today.year")]),t._v(", turns it into an ISO string along with the month and date, and then takes the whole ISO string and converts it to a Luxon DateTime data structure. It also tells Luxon that you want the duration in days.")]),t._v(" "),e("li",[e("code",[t._v("toObject()")]),t._v(" turns the result of diff() into a more usable object. At this point, the expression returns "),e("code",[t._v('[Object: {"days":-<number-of-days>}]')]),t._v(". For example, on 9th March, "),e("code",[t._v('[Object: {"days":-291}]')]),t._v(".")]),t._v(" "),e("li",[e("code",[t._v(".days")]),t._v(" uses JMESPath syntax to retrieve just the number of days from the object. For more information on using JMESPath with n8n, refer to our "),e("RouterLink",{pre:!0,attrs:{to:"/nodes/expressions/jmespath.html"}},[t._v("JMESpath")]),t._v(" documentation. This gives you the number of days to Christmas, as a negative number.")],1),t._v(" "),e("li",[e("code",[t._v(".toString().substring(1)")]),t._v(" turns the number into a string and removes the "),e("code",[t._v("-")]),t._v(".")]),t._v(" "),e("li",[e("code",[t._v('+ " days to Christmas!"')]),t._v(": another string, with a "),e("code",[t._v("+")]),t._v(" to join it to the previous string.")]),t._v(" "),e("li",[e("code",[t._v("}}")]),t._v(": indicates the end of the expression.")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);