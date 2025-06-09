import React, { useState, useEffect } from 'react';
import BaseNode from '../components/BaseNode';

export const TemplateNode = ({ id, data }) => {
  const [template, setTemplate] = useState(data?.template || 'Hello {{name}}!');
  const [variables, setVariables] = useState([]);

  // Detect variables in the format {{variableName}}
  useEffect(() => {
    const regex = /\{\{([^}]+)\}\}/g;
    const matches = [...template.matchAll(regex)];
    const newVariables = matches.map(match => ({
      id: match[1],
      name: match[1]
    }));
    setVariables(newVariables);
  }, [template]);

  return (
    <BaseNode
      id={id}
      title="Template Node"
      inputs={variables}
      outputs={[{ id: 'output', name: 'Output' }]}
      style={{ minWidth: 250 }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <div>
          <label style={{ display: 'block', marginBottom: '4px', fontSize: '12px' }}>
            Template:
          </label>
          <textarea
            value={template}
            onChange={(e) => setTemplate(e.target.value)}
            placeholder="Enter template with {{variables}}..."
            style={{
              width: '100%',
              minHeight: '60px',
              padding: '8px',
              border: '1px solid #ddd',
              borderRadius: '4px',
              fontFamily: 'inherit'
            }}
          />
        </div>

        {variables.length > 0 && (
          <div style={{ fontSize: '12px', color: '#666' }}>
            Required inputs:
            <ul style={{ margin: '4px 0', paddingLeft: '20px' }}>
              {variables.map(v => (
                <li key={v.id}>{v.name}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </BaseNode>
  );
}; 