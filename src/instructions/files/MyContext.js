import React from 'react';
import { RedText, CodeBlock, OrangeText, File } from '../../helpers/helpers';
import MyContextSnippet from '../snippets/MyContextSnippet';

const MyContext = () => {
    return (
        <File fileName="MyMessageContext.js" note="">
            <ol>
                <li>Create context:<br />
                    <CodeBlock><pre><code><ul><li><OrangeText>export</OrangeText> const <RedText >MyMessageContext</RedText> = React.createContext();</li></ul></code></pre></CodeBlock>
                </li>
                <br />
                <li>Create Provider<br />
                    Note: This is a warpper component<br />
                    <MyContextSnippet />
                </li>
            </ol>
        </File>
    );
}

export default MyContext;