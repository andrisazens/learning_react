import React, { Component } from 'react';

class Events extends Component {
    constructor() {
        super();
        this.state = { currentEvent: "---" }
        this.update = this.update.bind(this)
    }
    update(e) {
        this.setState({ currentEvent: e.type });
    }
    render() {
        return (
            <div>
                <textarea onKeyPress={this.update} 
                    onCopy={this.update} onPaste={this.update}/>
                <h1>{this.state.currentEvent}</h1>
            </div>
        );
    }
}

export default Events;
