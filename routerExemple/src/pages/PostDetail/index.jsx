import React, {useEffect} from 'react';
import {useParams, useNavigate, Navigate} from "react-router-dom";
import {usePostContext} from "../../utils/context/postContext.jsx";

const PostDetail = () => {

    const {id} = useParams()
    const {state: {posts}} = usePostContext()
    const naviguate = useNavigate()
    const post = posts.find(post => post.id === Number(id))


    // useEffect(() => {
    //     const post = posts.find(post => post.id === Number(id))
    //     if(post === undefined) {
    //         naviguate('/')
    //     }
    // }, []);

    return (
        post ? <div>
            <h3>{post?.title}</h3>
            <p>
                {post?.content}
            </p>
        </div> : <Navigate to={'/'} />
    );
};

export default PostDetail;