import React,{Component } from 'react';
import '../App.css';
import {Table} from 'reactstrap';
class TableSet extends Component {
    render() {
      var i,k=1,show=false;
      const rows=[];
      var test="",headtest="";
      if(this.props.check){
      show=true;
      headtest=<th>{this.props.heads[1]}</th>;
      }
      for(i=0;i<this.props.data.length;i++){
        if(show)
        test=<td>{this.props.data[i].cbelief}</td>;
          rows.push(
            <tr key={i}>
              <th scope="row">{k}</th>
              <td>{this.props.data[i].belief}</td>
              {test}
            </tr>
          )
          k++;
      }
      return (<div className="tableset">
      <Table striped>
        <thead>
          <tr>
            <th>#</th>
            <th>{this.props.heads[0]}</th>
            {headtest}
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
      </div>
      );
    }
  }

  export default TableSet;