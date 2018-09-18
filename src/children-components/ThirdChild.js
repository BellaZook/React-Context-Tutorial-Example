import React from 'react';
import FourthChild from './FourthChild';

const ThirdChild = () => {
    return (
        <div className="child3">
            <h4>This is Child 3</h4>
            <FourthChild />
        </div>
    );
}

export default ThirdChild;