import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";

import VideoComponent from "./VideoComponent";

import injectTapEventPlugin from "react-tap-event-plugin";
injectTapEventPlugin();

let dom = document.getElementById("app");
render(
   
        <BrowserRouter>
            <div>
                <VideoComponent />
            </div>
        </BrowserRouter>
   
    ,
    dom
);