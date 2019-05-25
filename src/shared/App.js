import React from 'react';

function App({ person }) {
    return (
        <div>
            {`Hey there ${person.name}`}
        </div>
    );
}

export default App;