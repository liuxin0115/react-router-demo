import React, { Component } from 'react';
import MineDemo from '../MineDemo/MineDemo';

export default class Mine extends Component {

    clickHandle = () => {
        console.log(this.props);
        this.props.history.push('/');
        // this.props.history.replace('/');
    }

    render() {
        return (
            <div>
                Mine
                <button onClick={ this.clickHandle }>回到Home</button>
                <MineDemo />
            </div>
        )
    }
}
