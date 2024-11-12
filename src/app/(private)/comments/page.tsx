import React from 'react';
import CommentsComponent from "@/app/components/comments/commentsComponent";

const CommentsPage = async () => {

    const comments = await fetch('https://jsonplaceholder.typicode.com/comments')
        .then(value => value.json());


    return (
        <div>
            <CommentsComponent comments={comments}/>
        </div>
    );
};

export default CommentsPage;