import React from 'react';
import SecondChild from './SecondChild';
import { MyContext } from '../context/File1_WrapperContextProvider';

const FirstChild = () => {
    return (
        <div className="child1">
            <h2>Child 1</h2>
            <p><strong>Secret message to child 4:</strong>  1 is greater than 4</p>
            <MyContext.Consumer>
                {
                    (context) => (
                        <p><strong>Child 4 reply:</strong>  {context.state.reply}</p>
                    )
                }
            </MyContext.Consumer>

            <SecondChild />
        </div>
    );
}

export default FirstChild;