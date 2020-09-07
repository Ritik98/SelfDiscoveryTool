import React, { Component } from "react";
import '../App.css'
import { ReactSortable } from "react-sortablejs";

class DragDrop extends Component{
  render() {
    return (
      <div className="dragdrop">
      <ReactSortable
        list={this.props.data}
        setList={this.props.ondrag}
      >
        {this.props.data.map(item => (
          <div key={item.cbelief} className="drgdrpdiv">{item.belief}</div>
        ))}
      </ReactSortable>
      </div>
    );
  }
}
export default DragDrop;