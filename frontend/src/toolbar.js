// toolbar.js
import React from 'react';
import { DraggableNode } from './draggableNode';

export const PipelineToolbar = () => {
  return (
    <div style={{ 
      padding: '16px',
      backgroundColor: 'white',
      borderBottom: '1px solid #e2e8f0',
      boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)'
    }}>
      <div style={{ 
        display: 'flex',
        flexWrap: 'wrap',
        gap: '12px',
        alignItems: 'center'
      }}>
        <DraggableNode type='customInput' label='Input' color='#4299e1' />
        <DraggableNode type='llm' label='LLM' color='#48bb78' />
        <DraggableNode type='customOutput' label='Output' color='#ed8936' />
        <DraggableNode type='text' label='Text' color='#9f7aea' />
      </div>
    </div>
  );
};
