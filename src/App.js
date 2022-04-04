import React, {useState} from 'react';

function App() {
    const [value, setValue] = useState("Template");


    return (
        <div className="App">
            <h1>Надпись</h1>
            <h1>{value}</h1>
            <input
                type="text"
                value={value}
                onChange={event => setValue((event.target.value))}
            />

        </div>
    );
}

export default App;
