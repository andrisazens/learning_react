$ = jQuery = require('jquery');
var React = require("react");
var Home = require("./components/homePage");
var About = require("./components/about/aboutPage");
var Header = require("./components/common/header");

var App = React.createClass({       
    render: function(){
        "use strict";
        
        var Child;
        
        console.log(this.props.route);
        switch(this.props.route){
            case 'about': 
                Child = About; 
                break;
            default:
                Child = Home;
        }
        
        return (
            <div>
                <Header/>
                <Child/>
            </div>
        );
    }
});

function render() {
    "use strict";
    
    var route = window.location.hash.substr(1);
    React.render(<App route={route} />, document.getElementById('app'));
}

window.addEventListener("hashChange", render);
render();