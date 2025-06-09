import React, { useState } from 'react';
import BaseNode from '../components/BaseNode';

export const CodeNode = ({ id, data }) => {
  const [code, setCode] = useState(data?.code || '');
  const [language, setLanguage] = useState(data?.language || 'javascript');

  return (
    <BaseNode
      id={id}
      title="Code Node"
      inputs={[{ id: 'input', name: 'Input' }]}
      outputs={[{ id: 'output', name: 'Output' }]}
      style={{ minWidth: 300 }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <div>
          <label style={{ display: 'block', marginBottom: '4px', fontSize: '12px' }}>
            Language:
          </label>
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            style={{
              width: '100%',
              padding: '4px',
              border: '1px solid #ddd',
              borderRadius: '4px'
            }}
          >
            <option value="javascript">JavaScript</option>
            <option value="python">Python</option>
            <option value="java">Java</option>
            <option value="cpp">C++</option>
          </select>
        </div>

        <textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Enter your code here..."
          style={{
            width: '100%',
            minHeight: '120px',
            fontFamily: 'monospace',
            padding: '8px',
            border: '1px solid #ddd',
            borderRadius: '4px',
            backgroundColor: '#f8f8f8'
          }}
        />
      </div>
    </BaseNode>
  );
}; 