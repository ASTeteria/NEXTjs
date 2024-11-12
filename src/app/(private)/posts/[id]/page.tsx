import React from 'react';

type Params = { id: string }

const PostPage = async ({params}: { params: Params }) => {

    const post = await fetch('https://jsonplaceholder.typicode.com/posts/' + params.id).then(res => res.json());


    return (
        <div>
            <h1>{post.title}</h1>
            <p>UserID: {post. userId}</p>
            <p>body: {post.body}</p>
        </div>
    );
};

export default PostPage;