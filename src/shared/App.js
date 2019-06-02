import React from 'react';

function App({ initialData }) {
    return (
        <div>
            {`Hey there ${initialData.name}`}
        </div>
    );
}

export default App;