import React from 'react';

const InputWithApiCall = () => {

    function callApi() {
        console.log("Calling API for inputBox ")
        return true
    }

    return (
        <div>
            <input className="inputBox" onSubmit={callApi()}/>
        </div>
    );
};

export default InputWithApiCall;