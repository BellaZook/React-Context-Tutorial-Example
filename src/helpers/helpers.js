import React from 'react';

export const RedText = (props) => {
    return (
        <strong className="red">{props.children}</strong>
    );
}

export const BlueText = (props) => {
    return (
        <strong className="blue">{props.children}</strong>
    )
}

export const PurpleText = (props) => {
    return (
        <strong className="purple">{props.children}</strong>
    )
}

export const GreenText = (props) => {
    return (
        <span className="green">{props.children}</span>
    )
}

export const BlackText = (props) => {
    return (
        <strong className="black">{props.children}</strong>
    )
}
export const OrangeText = (props) => {
    return (
        <strong className="orange">{props.children}</strong>
    )
}
export const CodeBlock = (props) => {
    return (
        <div className="code-block">
            {props.children}
        </div>
    )
}
export const AddBorders = (props) => {
    return (
        <span className={props.className}>
            {props.children}
        </span>
    )
}
export const AddBordersBlock = (props) => {
    return (
        <div className={props.className}>
            {props.children}
        </div>
    )
}
export const File = (props) => {
    return (
        <div className="file-container">
            <h3>{props.fileName}</h3>
            <ul><li><p>{props.note}</p></li></ul>
            <div className="file">
                {props.children}
            </div>
        </div>
    )
}