import React from "react";
import { getData } from "../services/postApi";
import Link from "next/link";



const PostPage = async () => {
  const posts = await getData();


  return (
    <div className=" px-24 py-10">
      <h1 className="text-3xl font-bold mb-4">All Post:{posts?.length}</h1>

      <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6'>
        {posts?.slice(0,20)?.map(({ title, body, id }) => (
          <div key={id} className="border-2 p-6 rounded-md space-y-3">
            <h2>Title: {title}</h2>
                <p>Description: {body}</p>
                <button className='btn bg-red-500 ps-3 py-1 rounded-md'><Link href={`/posts/${id}`}>View More</Link></button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostPage;
