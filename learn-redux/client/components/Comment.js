import React from 'react';

const Comment = React.createClass({
renderComment(comment, i){
    return(
      <div className="comment" key={i}>
      <p>
        <strong>{comment.user}</strong>
        {comment.text}
        <button className="remove-comment" onClick={
          this.props.removeComment.bind(null,this.props.params.postId,i)}>
          &times;</button>
      </p>
      </div>
    );
},

handleSubmit(e){
  e.preventDefault();
  this.props.addComment(
    this.props.params.postId,
    this.refs.author.value,
    this.refs.comment.value);
  this.refs.commentForm.reset();
},

render(){
    const {postComments} = this.props;
      return(
        <div className="comments">
          {postComments.map(this.renderComment)}
          <form ref="commentForm" className="comment-form" onSubmit={this.handleSubmit}>
            <input type="text" ref="author" placeholder="author"/>
            <input type="text" ref="comment" placeholder="comment"/>
            <input type="submit" hidden />
          </form>
        </div>
      )
}

});
export default Comment;
