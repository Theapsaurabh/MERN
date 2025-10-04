const SinglePost = async (props) => {
  const  post =await  props.params; 

  return (
    <h1>
      user= {post.postId}
    </h1>
  );
};

export default SinglePost;
