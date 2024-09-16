const getDetails = async (id) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();
  return data;
};

const PostDetailsPage = async ({ params }) => {
  const { title, body } = await getDetails(params.id);


  return (
    <div>
      <div>
        <h6>Title: {title}</h6>
        <h6>Description: {body}</h6>
      </div>
    </div>
  );
};

export default PostDetailsPage;
