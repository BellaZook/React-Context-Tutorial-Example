import React from 'react';
import FirstChild from '../children-components/FirstChild';
import { WrapperContextProvider } from './File1_WrapperContextProvider';

const MyAppWithContext = () => {
    return (
        <div className="parent">
            <p>I'm their Mother</p>
            <WrapperContextProvider>
                <FirstChild />
            </WrapperContextProvider>
        </div>

    );
}

export default MyAppWithContext;