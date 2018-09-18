import React from 'react';
import {
    RedText, BlueText, PurpleText, GreenText, BlackText,
    CodeBlock, OrangeText, AddBorders, AddBordersBlock
} from '../../helpers/helpers';

const MyProvider = () => {
    return (
        <CodeBlock >
            <pre >
                <code>
                    <ul>
                        <li>
                            <OrangeText>export</OrangeText> class <BlueText>MyMessageContextProvider</BlueText>  extends React.Component &#123;
                        <ul>
                                <li> constructor(props) &#123;
                            <ul>
                                        <li>super(props);</li>
                                        <li>
                                            <BlackText>this.state</BlackText> = &#123;
                                    <ul>
                                                <li>message: 'Hi!',</li>
                                                <li>secreateMessage: '1 is greater than 4',</li>
                                                <li>reply: ''</li>
                                            </ul>
                                            };
                                    </li>

                                    </ul>
                                    }
                            </li>
                            </ul>
                            <ul>
                                <li>
                                    <BlackText>replyToMessage</BlackText> = (replyText) => &#123;
                                <ul>
                                        <li>
                                            this.setState(() => &#123;
                                            <ul><li>return &#123; reply: replyText }</li></ul>
                                            });
                                        </li>
                                    </ul>
                                    }
                            </li>
                            </ul>
                            <ul>
                                <li>
                                    render() &#123;
                                <ul>
                                        <li>
                                            return (
                                        <ul>
                                                <li>
                                                    &#60;<RedText>MyMessageContext.<AddBorders className="border-blue">Provider</AddBorders></RedText>
                                                    <ul>
                                                        <li><GreenText>&#47; &#47; Add props and state inside value</GreenText></li>
                                                        <li>
                                                            <AddBordersBlock className="border-green">
                                                                <PurpleText>value = &#123;&#123;</PurpleText>
                                                                <ul>
                                                                    <li>state: <BlackText>this.sate</BlackText>,</li>
                                                                    <li>replyToMessage: <BlackText>this.replyToMessage</BlackText></li>
                                                                </ul>
                                                                <PurpleText>}}</PurpleText>
                                                            </AddBordersBlock>
                                                        </li>
                                                    </ul>
                                                    >
                                                <ul>
                                                        <li><AddBorders className="border-green"><PurpleText>&#123;this.props.children}</PurpleText></AddBorders></li>
                                                    </ul>
                                                    &#60;/<RedText>MyMessageContext.<AddBorders className="border-blue">Provider</AddBorders></RedText>>
                                            </li>
                                            </ul>
                                            )
                                    </li>
                                    </ul>
                                    }
                        </li>
                            </ul>
                            }
                        </li>
                    </ul>
                </code>
            </pre>
        </CodeBlock >
    )
}
export default MyProvider;

