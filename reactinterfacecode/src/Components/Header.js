import React from 'react';
const Header = (props) => {
    return (<div className="header" >
    <div id="logo"><img src={props.logo} alt={props.title} height="70" width="70" /></div>
    <div id="heading">{props.title}</div>
</div>);
}

export default Header;