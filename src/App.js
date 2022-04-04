import React, {useState} from 'react';
import Counter from "./components/Counter";
import CounterClass from "./components/CounterClass";
import './styles/App.css'
import PostItem from "./components/PostItem";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'Post 1', body: 'text'},
        {id: 2, title: 'Post 2', body: 'text'},
        {id: 3, title: 'Post 3', body: 'text'},
    ])

    return (
        <div className="App">
            {posts.map((post) =>
                <PostItem post={post} key={post.id}/>
            )}
            <Counter/>
            <CounterClass/>

        </div>
    );
}

export default App;
