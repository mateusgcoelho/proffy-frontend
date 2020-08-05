import React, { TextareaHTMLAttributes } from 'react';

import './styles.css';

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    label: string;
    reference: string;
}

const Textarea: React.FC<Props> = ({ label, reference, ...rest }) => {
  return (
    <div className="textarea-block">
        <label htmlFor={reference}>{label}</label>
        <textarea id={reference} {...rest} />
    </div>
  );
}
export default Textarea;