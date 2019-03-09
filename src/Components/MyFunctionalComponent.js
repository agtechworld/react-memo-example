import React from 'react';

export default React.memo((props) => {
    console.log('props value is ' +  props.shareprice); 
    return (<div> {props.shareprice}</div>);
})