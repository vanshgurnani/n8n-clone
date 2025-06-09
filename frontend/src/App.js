import React from 'react';
import { PipelineToolbar } from './toolbar';
import { PipelineUI } from './ui';
import { SubmitButton } from './components/SubmitButton';

function App() {
  return (
    <div style={{ height: '100vh', width: '100vw', position: 'relative' }}>
      <PipelineToolbar />
      <PipelineUI />
      <SubmitButton />
    </div>
  );
}

export default App;
