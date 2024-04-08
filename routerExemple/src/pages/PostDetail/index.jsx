import React from 'react';
import {useParams, Outlet, NavLink, useLocation} from "react-router-dom";
import {usePostContext} from "../../utils/context/postContext.jsx";

const PostDetail = () => {

    const {id} = useParams()
    const {state: {posts}} = usePostContext()


    const post = posts.find(post => post.id === Number(id))


    return (
        <div>
            <nav>
                <NavLink to={"/post/"+id}>Detail</NavLink>
                <NavLink to={"content"}>Contenu</NavLink>
            </nav>
            <Outlet context={post} />
        </div>
    );
};

export default PostDetail;