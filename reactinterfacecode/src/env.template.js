var site_config;
export default site_config = {
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
      {count:8 ,rule: "minimum" },{count:8, rule: "exactly"},
                    {count:6, rule: "exactly"}]
};