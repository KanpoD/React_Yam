import React from 'react';
import {useOutletContext} from "react-router-dom";

const PostDetailItem = () => {

    const post = useOutletContext()


    return (
        <div>
            <h2>{post.title}</h2>
            <p>
                {post.author}
            </p>
        </div>
    );
};

export default PostDetailItem;