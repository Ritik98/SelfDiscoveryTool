import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import site_config from './env';
var config;
if (typeof site_config !== 'undefined') {
  // the variable is defined
  config = site_config;
}
else{
  config = {
    branding: {"name" : "SkillPill" },
    heads:{"Welcome":"Select your Beliefs",
    "Ordering":"Prioritise your beliefs",
    "Result":"Congratulations these are your Beliefs"},
    tableheads:["Beliefs","Counter Belief"],
    display:{"dropdown":false, "meaning_in_table":false},
    popup:[
      "Select as many beliefs as you resonate with",
      "Use drag and drop to arrange these Beliefs in the order of importance they hold for you"
    ],
    title: "Beliefs",
    category: "Baselines",
    icon: "./skillpill.png",
    apiUrl: "https://ix61k6qun9.execute-api.ap-southeast-1.amazonaws.com/prod/lifetoolsdataset?category=Baselines",
    levelDetails: [
      {count:5 ,rule: "minimum" },{count:4, rule: "exactly"},
                    {count:3, rule: "exactly"}]
};
}

ReactDOM.render(
  <React.StrictMode>
    <App initial={config}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
