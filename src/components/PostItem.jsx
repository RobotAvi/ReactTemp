import React from 'react';
import InputWithApiCall from "./InputWithApiCall";

const PostItem = (props) => {
    console.log(props)
    return (
        <div className="post">
            <div className="post__content">
                <strong>Надпись</strong>
                <InputWithApiCall/>
                <div>你好</div>
            </div>
            <div className="post__buttons">
                <button>Remove</button>
            </div>
        </div>
    );
};

export default PostItem;