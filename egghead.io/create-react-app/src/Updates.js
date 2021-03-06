import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
    constructor() {
        super();
        this.state = { increasing: false };
    }
    update(e) {
        ReactDOM.render(<App val={this.props.val + 1} />, document.getElementById("root"))
    }
    componentWillReceiveProps(nextProps) {
        this.setState({ increasing: nextProps.val > this.props.val })
    }
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.val % 3 === 0;
    }
    render() {
        console.log(this.state.increasing);
        return (
            <button onClick={this.update.bind(this) }>
                {this.props.val}
            </button>
        )
    }
    componentDidUpdate(prevProps, prevState){
        console.log(`prevProps: ${prevProps.val}`)
    }
}

App.defaultProps = { val: 0 }

export default App;
