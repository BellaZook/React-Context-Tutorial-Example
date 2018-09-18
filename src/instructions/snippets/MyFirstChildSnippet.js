import React from 'react';
import {
    RedText, BlueText, PurpleText, GreenText, BlackText,
    CodeBlock, OrangeText, AddBorders
} from '../../helpers/helpers';

const App = () => {
    return (
        <CodeBlock >
            <pre >
                <code>
                    <ul>
                        <li>import SecondChild from './SecondChild';</li>
                        <li>import &#123; <RedText>MyMessageContext</RedText> } from './MyMessageContext ';</li>
                        <li><br /></li>
                        <li>
                            const FirstChild = () => &#123;
                                <ul>
                                <li>
                                    return (
                                        <ul>
                                        <li>
                                            &#60;div className="child1">
                                                <ul>
                                                <li>&#60;h2>Child 1&#60;/h2></li>
                                                <li>&#60;p>Secret message to child 4:  1 is greater than 4&#60;/p></li>
                                                <li>&#60;<RedText>MyMessageContext.<AddBorders className="border-green">Consumer</AddBorders></RedText>>
                                                    <ul>
                                                        <li>
                                                            &#123;
                                                                <ul>
                                                                <li>
                                                                    (<BlackText>context</BlackText>) => (
                                                                            <ul><li>&#60;p>Child 4 reply:  <AddBorders className="border-black">&#123;<BlackText>context</BlackText>.state.reply}</AddBorders>&#60;/p></li></ul>
                                                                    )
                                                                </li>
                                                            </ul>
                                                            }
                                                        </li>
                                                    </ul>
                                                    &#60;/<RedText>MyMessageContext.<AddBorders className="border-green">Consumer</AddBorders></RedText>>
                                                    </li>
                                                <li>&#60;SecondChild /></li>
                                            </ul>
                                            &#60;/div>
                                        </li>
                                    </ul>
                                    );
                                    </li>
                            </ul>
                            }
                        </li>
                        export default FirstChild;
                    </ul>
                </code>
            </pre>
        </CodeBlock>
    )
}
export default App;

