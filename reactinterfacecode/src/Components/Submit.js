import React,{Component } from 'react';
import '../App.css';
import { Button,Navbar} from 'reactstrap';

class Submit extends Component{
    render(){
        return(
            <div className="Footer">
                <Navbar fixed="bottom" dark color="dark" text="light">
                    <Button onClick={this.props.onclick} variant="dark" size="lg" block>Submit {this.props.msg}</Button>
                </Navbar>
            </div>
        )
    }
}
export default Submit;