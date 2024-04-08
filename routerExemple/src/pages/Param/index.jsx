import React from 'react';
import {useParams} from "react-router-dom";

const Param = () => {

    const {id} = useParams()
    console.log(id)

    return (
        <div>
            id : {id}
        </div>
    );
};

export default Param;