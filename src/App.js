import React from 'react';
import Counter from "./components/Counter";
import CounterClass from "./components/CounterClass";

function App() {


    return (
        <div className="App">
            <div className="post">
                <div className="post__content">
                    <strong>Надпись</strong>
                    <div>你好</div>
                </div>
                <div className="post__buttons">
                    <button>Remove</button>
                </div>
            </div>
            <Counter/>
            <CounterClass/>

        </div>
    );
}

export default App;
