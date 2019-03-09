import React from 'react';

export default (props) => {
    console.log('props value is ' +  props.shareprice); 
    return (<div> {props.shareprice}</div>);
}