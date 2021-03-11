(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{461:function(e,t,r){"use strict";r.r(t);var n=r(114),a=Object(n.a)({},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"running-the-development-environment"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#running-the-development-environment"}},[e._v("#")]),e._v(" Running the development Environment")]),e._v(" "),r("p",[e._v("Now that we have our new project configured, we want to run it.")]),e._v(" "),r("p",[e._v("Open Visual Studio code in the folder of your project ("),r("code",[e._v("my-project")]),e._v(" in our case).")]),e._v(" "),r("h2",{attrs:{id:"understanding-the-different-servers"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#understanding-the-different-servers"}},[e._v("#")]),e._v(" Understanding the different servers")]),e._v(" "),r("p",[e._v("When developing an angular application in a dev environment we'll need two servers,")]),e._v(" "),r("ol",[r("li",[e._v("Angular dev server - used by Angular for the front end development (the ui that'll run in the browser). This server will use port 4200")]),e._v(" "),r("li",[e._v("Node JS web server - is the Actual server, where all the data access will be and all the heavy lifting will be done. this server will use port 3000.")])]),e._v(" "),r("h2",{attrs:{id:"running-the-servers"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#running-the-servers"}},[e._v("#")]),e._v(" Running the servers")]),e._v(" "),r("p",[e._v("We'll use visual studio tasks to run our common tasks.")]),e._v(" "),r("p",[e._v("To run a visual studio task, we'll go to the menu "),r("code",[e._v("Terminal\\Run Task...")]),e._v(" and select the task we want to run.")]),e._v(" "),r("p",[e._v("Alternatively you can click "),r("kbd",[e._v("Control")]),e._v(" + "),r("kbd",[e._v("Shift")]),e._v(" + "),r("kbd",[e._v("P")]),e._v(" to open visual studio's code "),r("code",[e._v("command pallet")]),e._v("\nand select "),r("code",[e._v("Tasks:Run Task")]),e._v(" "),r("img",{attrs:{src:"/2019-09-23_14h40_29.png",alt:""}})]),e._v(" "),r("p",[e._v("And then the task you want to run.")]),e._v(" "),r("h3",{attrs:{id:"_1-run-the-node-js-server-npm-node-serve"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-run-the-node-js-server-npm-node-serve"}},[e._v("#")]),e._v(" 1. Run the Node JS server - "),r("code",[e._v("npm:node-serve")])]),e._v(" "),r("ol",[r("li",[e._v('Go to menu `Terminal\\Run Task..."')]),e._v(" "),r("li",[e._v("Select "),r("code",[e._v("npm:node-serve")])])]),e._v(" "),r("h3",{attrs:{id:"_2-run-the-angular-dev-server-npm-ng-serve"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-run-the-angular-dev-server-npm-ng-serve"}},[e._v("#")]),e._v(" 2. Run the Angular dev server "),r("code",[e._v("npm:ng-serve")])]),e._v(" "),r("ol",[r("li",[e._v('Go to menu `Terminal\\Run Task..."')]),e._v(" "),r("li",[e._v("Select "),r("code",[e._v("npm:ng-serve")])])]),e._v(" "),r("p",[r("strong",[e._v("Great, now we can start")]),e._v("\nOnce both tasks settle down you should see at the bottom of your screen the output of both tasks:\n"),r("img",{attrs:{src:"/2019-10-06_12h04_03.png",alt:""}})]),e._v(" "),r("p",[e._v("Simply open a browser with the url "),r("code",[e._v("http://localhost:4200")]),e._v(" and you'll see your application running")]),e._v(" "),r("p",[r("img",{attrs:{src:"/the-first-application-stage.png",alt:""}})]),e._v(" "),r("h2",{attrs:{id:"a-little-more-information"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#a-little-more-information"}},[e._v("#")]),e._v(" A little more information")]),e._v(" "),r("ul",[r("li",[r("p",[e._v("the task "),r("code",[e._v("npm:node-serve")]),e._v(" build the code that will run on the NodeJS server and runs it.")]),e._v(" "),r("p",[e._v("Whenever a code file changes, it'll automatically rebuild the project and restart it.")])]),e._v(" "),r("li",[r("p",[e._v("The task "),r("code",[e._v("npm:ng-serve")]),e._v(" runs the angular dev server, after it completes, you can open a browser using the "),r("code",[e._v("http://localhost:4200")]),e._v(" url.")]),e._v(" "),r("p",[e._v("Whenever a code file changes, it'll automatically refresh the browser to reflect that change.")]),e._v(" "),r("p",[e._v("To read more about this see the "),r("a",{attrs:{href:"architecture"}},[e._v("Architecture page")])])])])])},[],!1,null,null,null);t.default=a.exports}}]);