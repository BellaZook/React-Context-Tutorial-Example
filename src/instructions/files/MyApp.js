import React from 'react';
import { File } from '../../helpers/helpers';
import MyAppSnippet from '../snippets/MyAppSnippet';

const MyApp = () => {
    return (
        <File fileName="MyAppWithContext.js" note="">
            <ol start={3}>
                <li>Wrap the children, or the app component/s in the provider component<br />
                    <MyAppSnippet />
                </li>
            </ol>
        </File>
    );
}

export default MyApp;