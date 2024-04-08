import React from 'react';
import {useOutletContext} from "react-router-dom";

const PostContent = () => {

    const post = useOutletContext()

    return (
        <div>
            {post.content}
        </div>
    );
};

export default PostContent;