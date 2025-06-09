import React from 'react';
import { Handle, Position } from 'reactflow';

export const BaseNode = ({ 
  id, 
  title, 
  children, 
  inputs = [], 
  outputs = [], 
  className = '',
  style = {}
}) => {
  return (
    <div 
      className={`node-container ${className}`} 
      style={{
        width: 200,
        backgroundColor: 'white',
        border: '1px solid #e2e8f0',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        ...style
      }}
    >
      {/* Header */}
      <div 
        className="node-header" 
        style={{
          padding: '8px 12px',
          borderBottom: '1px solid #e2e8f0',
          borderTopLeftRadius: '8px',
          borderTopRightRadius: '8px',
          background: '#1C2536',
          color: 'white',
          fontSize: '14px',
          fontWeight: '500'
        }}
      >
        {title}
      </div>

      {/* Content */}
      <div 
        className="node-content" 
        style={{ 
          padding: '12px',
          fontSize: '13px'
        }}
      >
        {children}
      </div>

      {/* Input Handles */}
      {inputs.map((input, index) => (
        <Handle
          key={`${id}-input-${index}`}
          type="target"
          position={Position.Left}
          id={`${id}-${input.id}`}
          style={{
            top: `${((index + 1) * 100) / (inputs.length + 1)}%`,
            width: 8,
            height: 8,
            background: '#4299e1',
            border: '2px solid #2b6cb0'
          }}
        />
      ))}

      {/* Output Handles */}
      {outputs.map((output, index) => (
        <Handle
          key={`${id}-output-${index}`}
          type="source"
          position={Position.Right}
          id={`${id}-${output.id}`}
          style={{
            top: `${((index + 1) * 100) / (outputs.length + 1)}%`,
            width: 8,
            height: 8,
            background: '#48bb78',
            border: '2px solid #2f855a'
          }}
        />
      ))}
    </div>
  );
}; 