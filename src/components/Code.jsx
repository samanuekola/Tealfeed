
import React, { useState, useEffect, useRef } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism.css'; 

const Code = () => {
  const [code, setCode] = useState('');
  const textareaRef = useRef(null);

  useEffect(() => {
    Prism.highlightAll();
  }, [code]);

  const handleChange = (e) => {
    setCode(e.target.value);
  };

  return (
    <div className="code-editor">
      <textarea
        ref={textareaRef}
        value={code}
        onChange={handleChange}
        className="code-input"
        spellCheck="false"
      />
      <pre className="code-output">
        <code className="language-js">{code}</code>
      </pre>
    </div>
  );
};

export default Code;
