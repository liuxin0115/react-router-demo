import React, { Component } from 'react';
import { withRouter } from "react-router-dom";

class MineDemo extends Component {

    clickHandle = () => {
        console.log(this.props);
        this.props.history.replace('/');
    }

    render() {
        return (
            <div>
                MineDemo
                <button onClick={ this.clickHandle }>回到home</button>
            </div>
        )
    }
}

export default withRouter(MineDemo)
