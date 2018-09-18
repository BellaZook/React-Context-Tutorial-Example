import React from 'react';
import ThirdChild from './ThirdChild';

const SecondChild = () => {
    return (
        <div className="child2">
            <h4>This is Child 2</h4>
            <ThirdChild />
        </div>
    );
}

export default SecondChild;