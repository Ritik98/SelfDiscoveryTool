import React,{Component } from 'react';
import './App.css';
import $ from 'jquery';
import Header from './Components/Header';
import DataSet from './Components/ButtonGroup';
import PopUp from './Components/PopUp';
import Submit from './Components/Submit';
import DragDrop from './Components/DragDrop';
import TableSet from './Components/TableSet';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: true,
      item:[],
      selected:0,
      config:{},
      level:1,
      titlehead:props.initial.heads.Welcome,
      msg:"",
      selectedoutof:"",
      buttongroup:true,
      dragdrop:false,
      tableset:false,
      drgdrpset:[]
    };
    this.toggle=this.toggle.bind(this);
    this.updateSelection=this.updateSelection.bind(this);
    this.submit = this.submit.bind(this);
    this.levelCheck = this.levelCheck.bind(this);
  }

  static getDerivedStateFromProps(props,state){
    var temp="",outoftext="";
    if(state.level===1)
    temp=props.initial.popup[0];
    else if(state.level===(props.initial.levelDetails.length+1))
    temp=props.initial.popup[1];
    else
    temp="Select "+props.initial.levelDetails[state.level-1].rule+" "+props.initial.levelDetails[state.level-1].count+" "+props.initial.title;
    if(state.level===1)
    outoftext=state.selected+"/"+state.item.length;
    else if(state.level<=props.initial.levelDetails.length)
    outoftext=state.selected+"/"+props.initial.levelDetails[state.level-1].count
    return {
      config:props.initial,
      msg:temp,
      selectedoutof:outoftext
    };
  }


  componentDidMount() {
    const apiUrl = this.props.initial.apiUrl;
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => this.setState({item:data}));
    $("#favlogo").attr('href',this.state.config.icon);
    $("#title").text(this.state.config.branding.name);
  }
  toggle(){
    this.setState({
      modal: !this.state.modal
    });
  }
  updateSelection(i){
    let property = document.getElementById('qual_'+i);
    if(this.state.config.levelDetails[this.state.level-1].rule==="exact" && this.state.item[i].Status==='0' && this.state.config.levelDetails[this.state.level-1].count===this.state.selected){
      alert("You can't select more than "+this.state.selected+" beliefs");
      return;
    }
    else if(this.state.item[i].Status==='0')
    {
      property.style.backgroundColor="#00cc00";
      let testItem = Object.assign({}, this.state);
      testItem.item[i].Status = "1";
      testItem.selected+=1;
      this.setState(testItem);
    }
    else if(this.state.item[i].Status==='1')
    {
      property.style.backgroundColor="#0000FF";
      let testItem = Object.assign({}, this.state);
      testItem.item[i].Status = "0";
      testItem.selected-=1;
      this.setState(testItem);
    }
  }
  levelCheck(){
    if(this.state.config.levelDetails[this.state.level-1].rule==="minimum" && this.state.config.levelDetails[this.state.level-1].count<=this.state.selected)
    {
         return "true";
    }
     else if(this.state.config.levelDetails[this.state.level-1].rule==="exact" && this.state.config.levelDetails[this.state.level-1].count===this.state.selected)
    {
        return "true";
    }
    else
    return "false";
  }
  submit(){
    var i;
    if(this.state.level<this.state.config.levelDetails.length){
      if (this.levelCheck()==="true")
      {                                         
        this.updateStatusLevel();
      }
    }
    else if(this.state.level===this.state.config.levelDetails.length)
    {
      if (this.levelCheck()==="true")
      var testItem = Object.assign({}, this.state);
        testItem.buttongroup= false;
        testItem.titlehead=testItem.config.heads.Ordering;
        testItem.dragdrop=true;
        testItem.level+=1;
        testItem.modal=true;
        for(i=0;i<testItem.item.length;i++)
        {
          if(testItem.item[i].Status==='1')
          {
             testItem.drgdrpset.push(
               {"belief":testItem.item[i].Property,"cbelief":testItem.item[i].Meaning}
             )
          }
        }
      this.setState(testItem);
    }
    else
    {
      testItem = Object.assign({}, this.state);
      testItem.titlehead=testItem.config.heads.Result;
      testItem.tableset= true;
      testItem.dragdrop=false;
      this.setState(testItem);
    }
  }
  updateStatusLevel()
  {
    var i;
    let testItem = Object.assign({}, this.state);
    testItem.selected=0;
    testItem.level+=1;
    testItem.modal=true;
    for(i=0;i<this.state.item.length;i++)
    {
      if(this.state.item[i].Status==='1')
      {
        testItem.item[i].Level=String(parseInt(testItem.item[i].Level)+1);
        testItem.item[i].Status='0';
        document.getElementById('qual_'+i).style.backgroundColor="#0000FF";
      }
    }
    this.setState(testItem);
  }


  render() {
    let btngrp,drgdrp,tblst;
    if (this.state.buttongroup)
      btngrp = <DataSet item={this.state.item} onClick={(i) => this.updateSelection(i)} level={this.state.level} enablemeaning={this.state.config.dropdown}/>;
    if (this.state.dragdrop)
      drgdrp= <DragDrop data={this.state.drgdrpset} ondrag={newState => {this.setState({ drgdrpset: newState })}}/>;
    if (this.state.tableset)
      tblst= <TableSet data={this.state.drgdrpset} heads={this.state.config.tableheads}/>;
    return (<div>
    <Header logo={this.state.config.icon} title={this.state.titlehead}/>
    <PopUp isOpen={this.state.modal} toggle={this.toggle} logo={this.props.initial.icon} title={this.state.config.branding.name} msg={this.state.msg}/>
    {btngrp}
    {drgdrp}
    {tblst}
    <Submit onclick={this.submit} msg={this.state.selectedoutof}/>
    </div>
    )}
}

export default App;
