import React from 'react';
import { File } from '../../helpers/helpers';
import MyFirstChildSnippet from '../snippets/MyFirstChildSnippet';

const MyFirstChild = () => {
    return (
        <File fileName="MyFirstChild.js" note="">
            <ol start={4}>
                <li>Wrap the children, or the app component/s in the provider component<br />
                    <MyFirstChildSnippet />
                </li>
            </ol>
        </File>
    );
}

export default MyFirstChild;