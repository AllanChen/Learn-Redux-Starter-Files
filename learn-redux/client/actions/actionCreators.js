//increment
export function increment(index){
  return{
    type:'INCREMENT_LIKES',
    index
  }
}

//add comment
export function addComment(postId,comment,author){
  return{
    type:'ADD_COMMENT',
    postId,
    comment,
    author
  }
}


//remove comment

export function removeComment(postId,i){
  return{
    type:"REMOVE_COMMENT",
    i,
    postId
  }

}
