import React, { Component } from 'react';
import { Prompt } from 'react-router-dom';

export default class Shop extends Component {

    state = {
        name: ''
    }

    render() {
        return (
            <div>
                Shop
                <Prompt
                    when={ !!this.state.name }
                    message={ '去欸的那个离开吗？' }
                />
                <input type="text" value={ this.state.name } onChange={ (e) => this.setState({ name: e.target.value }) } />
            </div>
        )
    }
}
