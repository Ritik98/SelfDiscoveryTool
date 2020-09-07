import React,{Component,useState} from 'react';
import '../App.css'
import {Button,ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

function DataButton(props) {
  const [dropdownOpen, setOpen] = useState(false);

  const toggle = () => setOpen(!dropdownOpen);
    if(props.check)
    return (
      <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
        <Button className="itemButton" id={props.idButton} onClick={props.onClick}>{props.value}</Button>
        <DropdownToggle caret color="primary" />
        <DropdownMenu>
            <DropdownItem header>{props.meaning}</DropdownItem>
        </DropdownMenu>
    </ButtonDropdown>
    );
    else
    return (
      <Button className="itemButton" id={props.idButton} onClick={props.onClick}>{props.value}</Button>
    );
  }
  class DataSet extends Component {
    renderButton(i){
      let item=this.props.item;
      let idButton="qual_"+i;
      return (
        <DataButton
            key={idButton}
            idButton={idButton}
            value={item[i].Property}
            meaning={item[i].Meaning}
            check={this.props.enablemeaning}
            onClick={() => this.props.onClick(i)}
          />
      )
    }
    render() {
      const rows=[];
      var i;    
      for (i=0;i<this.props.item.length;i++)
        {
          if(this.props.item[i].Level===String(this.props.level)){
              rows.push(
              this.renderButton(i)
              );
          }
        }
        return (<div className="itemGroup">{rows}</div>)
    }
  }

export default DataSet;