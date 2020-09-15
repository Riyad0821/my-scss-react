import React from 'react';

const Home = (props) => {
    const {count, setCount} = props;
    return (
        <div>
            <h1>This is Header: {count}</h1>
        </div>
    );
};

export default Home;