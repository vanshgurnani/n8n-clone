import React, { useState } from 'react';
import BaseNode from '../components/BaseNode';

export const TransformNode = ({ id, data }) => {
  const [transformation, setTransformation] = useState(data?.transformation || 'uppercase');
  const [customFormat, setCustomFormat] = useState(data?.customFormat || '');

  return (
    <BaseNode
      id={id}
      title="Transform Node"
      inputs={[{ id: 'input', name: 'Input' }]}
      outputs={[{ id: 'output', name: 'Output' }]}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <div>
          <label style={{ display: 'block', marginBottom: '4px', fontSize: '12px' }}>
            Transformation:
          </label>
          <select
            value={transformation}
            onChange={(e) => setTransformation(e.target.value)}
            style={{
              width: '100%',
              padding: '4px',
              border: '1px solid #ddd',
              borderRadius: '4px'
            }}
          >
            <option value="uppercase">To Uppercase</option>
            <option value="lowercase">To Lowercase</option>
            <option value="capitalize">Capitalize</option>
            <option value="trim">Trim</option>
            <option value="custom">Custom Format</option>
          </select>
        </div>

        {transformation === 'custom' && (
          <div>
            <label style={{ display: 'block', marginBottom: '4px', fontSize: '12px' }}>
              Custom Format:
            </label>
            <input
              type="text"
              value={customFormat}
              onChange={(e) => setCustomFormat(e.target.value)}
              placeholder="Enter custom format..."
              style={{
                width: '100%',
                padding: '4px',
                border: '1px solid #ddd',
                borderRadius: '4px'
              }}
            />
          </div>
        )}
      </div>
    </BaseNode>
  );
}; 