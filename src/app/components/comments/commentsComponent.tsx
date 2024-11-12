import React, {FC} from 'react';
import Link from "next/link";

type Props = {
    comments: {id: number, postId: number} []
}

const CommentsComponent: FC<Props> = ({comments}) => {
    return (
        <div>
            {
                comments.map(({id, postId}) => (<div key={id}>
                    <Link href={'/comments/' + id}>Post: {postId}</Link>

                </div>))
            }
        </div>
    );
};

export default CommentsComponent;