(window.webpackJsonp=window.webpackJsonp||[]).push([[495],{1569:function(t,a,e){"use strict";e.r(a);var s=e(26),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"docker-installation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#docker-installation"}},[t._v("#")]),t._v(" Docker Installation")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://www.docker.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Docker"),e("OutboundLink")],1),t._v(" is a quick and simple way to download and start automating with n8n. By using Docker you are able to:")]),t._v(" "),e("ul",[e("li",[t._v("Install to a pristine environment")]),t._v(" "),e("li",[t._v("Easily install and run your preferred database with n8n")]),t._v(" "),e("li",[t._v("Enjoy a quick and simplified installation experience regardless of your OS")])]),t._v(" "),e("h2",{attrs:{id:"prerequisites"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[t._v("#")]),t._v(" Prerequisites")]),t._v(" "),e("p",[t._v("Before proceeding ensure that you have installed "),e("a",{attrs:{href:"https://docs.docker.com/get-docker/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Docker Desktop"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("💡 Linux Users")]),t._v(" "),e("p",[t._v("Docker Desktop is only available for Mac and Windows. You must install "),e("a",{attrs:{href:"https://docs.docker.com/engine/install/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Docker Engine"),e("OutboundLink")],1),t._v(" and "),e("a",{attrs:{href:"https://docs.docker.com/compose/install/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Docker Compose"),e("OutboundLink")],1),t._v(" individually for your distribution.")])]),t._v(" "),e("h2",{attrs:{id:"starting-n8n"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#starting-n8n"}},[t._v("#")]),t._v(" Starting n8n")]),t._v(" "),e("p",[t._v("From your terminal, run:")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" run -it --rm "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n\t--name n8n "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n\t-p "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("5678")]),t._v(":5678 "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n\t-v ~/.n8n:/home/node/.n8n "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n\tn8nio/n8n\n")])])]),e("p",[t._v("This command will download all required n8n images and start your container, exposed on port "),e("code",[t._v("5678")]),t._v(". So that all your data is not lost when you stop the container, it also mounts a local directory, "),e("code",[t._v(".n8n")]),t._v(", to persist your data locally.")]),t._v(" "),e("p",[t._v("You can then access n8n by opening:\n"),e("a",{attrs:{href:"http://localhost:5678",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://localhost:5678"),e("OutboundLink")],1)]),t._v(" "),e("h2",{attrs:{id:"using-alternate-databases"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#using-alternate-databases"}},[t._v("#")]),t._v(" Using alternate databases")]),t._v(" "),e("p",[t._v("By default n8n uses SQLite to save credentials, past executions and workflows.\nn8n also supports PostgresDB, MySQL and MariaDB, configurable via\nenvironment variables as detailed below.")]),t._v(" "),e("p",[t._v("It is important to still persist data in the "),e("code",[t._v("/root/.n8n")]),t._v(" folder as it contains n8n user data and even more importantly the encryption key\nfor credentials. It is also the name of the webhook when the n8n tunnel is used.")]),t._v(" "),e("p",[t._v("If no directory is found, n8n creates automatically one on\nstartup. In this case, existing credentials saved with a different encryption key can not be used anymore.")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("💡 Keep in mind")]),t._v(" "),e("p",[t._v("Persisting the "),e("code",[t._v("/root/.n8n")]),t._v(" directory even when using alternate databases is the recommended best practice, but not explicitly required. The encryption key can be provided via the "),e("code",[t._v("N8N_ENCRYPTION_KEY")]),t._v(" "),e("RouterLink",{attrs:{to:"/reference/environment-variables.html#deployment"}},[t._v("environment variable")]),t._v(".")],1)]),t._v(" "),e("h3",{attrs:{id:"postgresdb"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#postgresdb"}},[t._v("#")]),t._v(" PostgresDB")]),t._v(" "),e("p",[t._v("To use n8n with Postgres, provide the corresponding "),e("RouterLink",{attrs:{to:"/getting-started/installation/advanced/configuration.html"}},[t._v("configuration")]),t._v(":")],1),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" run -it --rm "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n\t--name n8n "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n\t-p "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("5678")]),t._v(":5678 "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n\t-e "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("DB_TYPE")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("postgresdb "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n\t-e "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("DB_POSTGRESDB_DATABASE")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("POSTGRES_DATABASE"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n\t-e "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("DB_POSTGRESDB_HOST")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("POSTGRES_HOST"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n\t-e "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("DB_POSTGRESDB_PORT")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("POSTGRES_PORT"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n\t-e "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("DB_POSTGRESDB_USER")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("POSTGRES_USER"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n\t-e "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("DB_POSTGRESDB_SCHEMA")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("POSTGRES_SCHEMA"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n\t-e "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("DB_POSTGRESDB_PASSWORD")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("POSTGRES_PASSWORD"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n\t-v ~/.n8n:/home/node/.n8n "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n\tn8nio/n8n "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n\tn8n start\n")])])]),e("p",[t._v("A complete "),e("code",[t._v("docker-compose")]),t._v(" file for Postgres can be found "),e("a",{attrs:{href:"https://github.com/n8n-io/n8n/blob/master/docker/compose/withPostgres/README.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("h3",{attrs:{id:"mysql"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mysql"}},[t._v("#")]),t._v(" MySQL")]),t._v(" "),e("p",[t._v("To use n8n with MySQL, provide the corresponding "),e("RouterLink",{attrs:{to:"/getting-started/installation/advanced/configuration.html"}},[t._v("configuration")]),t._v(":")],1),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" run -it --rm "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n\t--name n8n "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n\t-p "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("5678")]),t._v(":5678 "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n\t-e "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("DB_TYPE")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("mysqldb "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n\t-e "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("DB_MYSQLDB_DATABASE")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("MYSQLDB_DATABASE"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n\t-e "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("DB_MYSQLDB_HOST")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("MYSQLDB_HOST"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n\t-e "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("DB_MYSQLDB_PORT")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("MYSQLDB_PORT"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n\t-e "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("DB_MYSQLDB_USER")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("MYSQLDB_USER"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n\t-e "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("DB_MYSQLDB_PASSWORD")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("MYSQLDB_PASSWORD"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n\t-v ~/.n8n:/home/node/.n8n "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n\tn8nio/n8n "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n\tn8n start\n")])])]),e("h2",{attrs:{id:"setting-timezone"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#setting-timezone"}},[t._v("#")]),t._v(" Setting timezone")]),t._v(" "),e("p",[t._v("To define the timezone n8n should use, the environment variable "),e("code",[t._v("GENERIC_TIMEZONE")]),t._v(" can be set. This gets used by schedule based nodes such as the Cron node.")]),t._v(" "),e("p",[t._v("The timezone of the system can also be set separately. This controls what\nsome scripts and commands return like "),e("code",[t._v("$ date")]),t._v(". The system timezone can be set via the environment variable "),e("code",[t._v("TZ")]),t._v(".")]),t._v(" "),e("p",[t._v("Example using the same timezone for both:")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" run -it --rm "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n\t--name n8n "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n\t-p "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("5678")]),t._v(":5678 "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n\t-e "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("GENERIC_TIMEZONE")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Europe/Berlin"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n\t-e "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("TZ")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Europe/Berlin"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n\tn8nio/n8n\n")])])]),e("h2",{attrs:{id:"further-reading"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#further-reading"}},[t._v("#")]),t._v(" Further reading")]),t._v(" "),e("p",[t._v("More information about Docker setup can be found in the README file of the "),e("a",{attrs:{href:"https://github.com/n8n-io/n8n/blob/master/docker/images/n8n/README.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("Docker Image"),e("OutboundLink")],1),t._v(".")])])}),[],!1,null,null,null);a.default=n.exports}}]);