var site_config;
export default site_config = {
    branding: {"name" : "Wings2Life" },
    heads:{"Welcome":"Select your Beliefs",
    "Ordering":"Prioritise your beliefs",
    "Result":"Congratulations these are your Beliefs"},
    tableheads:["Belief","Counter Belief"],
    display:{"dropdown":false, "meaning_in_table":false},
    popup:[
      "Select as many beliefs as you resonate with",
      "Use drag and drop to arrange these Beliefs in the order of importance they hold for you"
    ],
    title: "Beliefs",
    category: "NCodes",
    icon: "./wings2life.png",
    apiUrl: "https://ix61k6qun9.execute-api.ap-southeast-1.amazonaws.com/prod/lifetoolsdataset?category=NCodes",
    levelDetails: [
      {count:6 ,rule: "minimum" },{count:6, rule: "exactly"},
                    {count:6, rule: "exactly"}]
};