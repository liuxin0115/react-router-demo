import React, { Component } from 'react'

const Demo = (props) => {
    console.log(props);
    return (
        <div>
            Demo：{ props.name }
        </div>
    )
}

export default Demo;
