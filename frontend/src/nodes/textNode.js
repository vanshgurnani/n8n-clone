// textNode.js

import React, { useState, useEffect, useRef } from 'react';
import { BaseNode } from '../components/BaseNode';

export const TextNode = ({ id, data }) => {
  const [text, setText] = useState(data?.text || '');
  const [variables, setVariables] = useState([]);
  const textareaRef = useRef(null);

  // Auto-resize textarea
  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = 'auto';
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  }, [text]);

  // Detect variables in the format {{variableName}}
  useEffect(() => {
    const regex = /\{\{([^}]+)\}\}/g;
    const matches = [...text.matchAll(regex)];
    const newVariables = matches.map(match => ({
      id: match[1],
      name: match[1]
    }));
    setVariables(newVariables);
  }, [text]);

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  return (
    <BaseNode
      id={id}
      title="Text Node"
      inputs={variables}
      outputs={[{ id: 'output', name: 'Output' }]}
      style={{ minWidth: 250 }}
    >
      <textarea
        ref={textareaRef}
        value={text}
        onChange={handleTextChange}
        placeholder="Enter text here... Use {{variableName}} for variables"
        style={{
          width: '100%',
          minHeight: '60px',
          resize: 'none',
          border: '1px solid #ddd',
          borderRadius: '4px',
          padding: '8px',
          fontFamily: 'inherit'
        }}
      />
      {variables.length > 0 && (
        <div style={{ marginTop: '8px', fontSize: '12px', color: '#666' }}>
          Detected variables:
          <ul style={{ margin: '4px 0', paddingLeft: '20px' }}>
            {variables.map(v => (
              <li key={v.id}>{v.name}</li>
            ))}
          </ul>
        </div>
      )}
    </BaseNode>
  );
};
