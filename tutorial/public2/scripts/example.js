
var CommentList = React.createClass({
    render: function () {
        return (
            <div class="commentList">
                Hello, world! I am a CommentList
            </div>
        );
    }
});
var CommentForm = React.createClass({
    render: function () {
        return (
            <div class="commentForm">
                Hello, world! I am a CommentForm
            </div>
        );
    }
});

var CommentBox = React.createClass({
    render: function () {
        return (
            <div class="commentBox">
                <h1>Comments</h1>
                <CommentList/>
                <CommentForm/>
            </div>
        );
    }
});
ReactDOM.render(
    <CommentBox/>, document.getElementById('content')
);