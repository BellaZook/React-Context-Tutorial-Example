import React from 'react';

//   STEP 1:  Create Context
export const MyContext = React.createContext();

//   STEP 2:  Create Provider
export class WrapperContextProvider extends React.Component {
    constructor(props) {
        super(props);
        // this.replyToMessage = this.replyToMessage.bind();
        this.state = {
            messageFromMom: 'Hi!',
            secreateMessage: '1 is greater than 4',
            reply: ''
        };
    }

    replyToMessage = (replyText) => {
        console.log("message was sent", replyText)
        this.setState(() => {
            return { reply: replyText };
        });
    }

    render() {
        return (
            <MyContext.Provider
                //Add props and state inside value
                value={{
                    state: this.state,
                    replyToMessage: this.replyToMessage
                }}
            >
                {this.props.children}
            </MyContext.Provider>
        )
    }
}
