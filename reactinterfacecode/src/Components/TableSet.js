import React,{Component } from 'react';
import '../App.css';
import {Table} from 'reactstrap';
class TableSet extends Component {
    render() {
      var i,k=1;
      const rows=[];
      for(i=0;i<this.props.data.length;i++){
          rows.push(
            <tr key={i}>
              <th scope="row">{k}</th>
              <td>{this.props.data[i].belief}</td>
              <td>{this.props.data[i].cbelief}</td>
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
            <th>{this.props.heads[1]}</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
      </div>
      );
    }
  }

  export default TableSet;