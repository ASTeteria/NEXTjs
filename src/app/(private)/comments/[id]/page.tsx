import React from 'react';

type Params = { id: string }

const CommentPage = async ({params}: { params: Params }) => {

    const comment = await fetch('https://jsonplaceholder.typicode.com/comments/' + params.id).then(res => res.json());


    return (
        <div>
            <h1>{comment.name}</h1>
            <p>UserID: {comment. postId}</p>
            <p>body: {comment.body}</p>
        </div>
    );
};

export default CommentPage;