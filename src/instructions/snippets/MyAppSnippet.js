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
                        <li>import FirstChild from '../FirstChild';</li>
                        <li>import &#123;<BlueText>MyMessageContextProvider</BlueText>} from './MyMessageContextProvider';</li>
                        <li><br /></li>
                        <li>
                            const MyAppWithContext = () => &#123;
                            <ul>
                                <li>
                                    return (
                                    <ul>
                                        <li>&#60;div className="parent">
                                        <ul>
                                                <li>&#60;p>I'm their Mother&#60;/p></li>
                                                <li>&#60;<BlueText>MyMessageContextProvider</BlueText>>
                                                    <ul><li>&#60;FirstChild /></li></ul>
                                                    &#60;/<BlueText>MyMessageContextProvider</BlueText>>
                                                </li>
                                            </ul>
                                            &#60;/div>
                                        </li>
                                    </ul>
                                    );
                                </li>
                            </ul>
                            }
                        </li>
                        <li>export default MyAppWithContext;</li>
                    </ul>
                </code>
            </pre>
        </CodeBlock>
    )
}
export default App;

