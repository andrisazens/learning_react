import React, { Component } from 'react';

class Refs extends Component {
    constructor() {
        super();
        this.state = { a: "" }
        this.update = this.update.bind(this)
    }
    // update(e) {
    //     this.setState({ a: e.target.value, b: e.target.value });
    // }
    update() {
        this.setState({ a: this.a.value, b: this.refs.b.value });
    }
    render() {
        return (
            <div>
                <input type="text" ref={node => this.a = node} onChange={this.update.bind(this) } /> {this.state.a}
                <hr/>
                <input type="text" ref="b" onChange={this.update.bind(this) } /> {this.state.b}
            </div>
        );
    }
}

export default Refs;
