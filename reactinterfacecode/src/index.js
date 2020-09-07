import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
var config;

config = {
  branding: {"name" : "SkillPill" },
  heads:{"Welcome":"Select your Beliefs",
  "Ordering":"Prioritise your beliefs",
  "Result":"Congratulations these are your Beliefs"},
  tableheads:["Beliefs","Counter Belief"],
  display:{"dropdown":true, "meaning_in_table":true},
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
  }


fetch("./env.json")
.then((response) => response.json())
.then((data) =>
{
if (data!==undefined)
config=data.config;
ReactDOM.render(
  <React.StrictMode>
    <App initial={config}/>
  </React.StrictMode>,
  document.getElementById('root')
)
}
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
);
serviceWorker.unregister();
