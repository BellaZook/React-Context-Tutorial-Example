import React from 'react';
import { MyContext } from '../context/File1_WrapperContextProvider';

const reply = "4 is greater than 1.  It inherits from 1, 2 and 3!";

const FourthChild = () => {
    return (
        <div className="child4">
            <h4>This is Child 4</h4>
            <MyContext.Consumer>
                {
                    (context) =>
                        <React.Fragment>
                            <p><strong>Message from mom:</strong> {context.state.messageFromMom}</p>
                            <p><strong>Secreat message from Child 1:</strong> {context.state.secreateMessage}</p>
                            <button onClick={() => { context.replyToMessage(reply) }}>
                                Send reply
                            </button>
                        </React.Fragment>
                }
            </MyContext.Consumer>
        </div>
    );
}

export default FourthChild;