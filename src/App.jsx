import React, { useState, useRef } from 'react';
import TemplateSelector from './components/TemplateSelector';
import Canvas from './components/Canvas';
import TextEditor from './components/TextEditor';
import DownloadButton from './components/DownloadButton';
import { templates } from './templates';
import './App.css';

function App() {
  const [selectedTemplate, setSelectedTemplate] = useState(templates[0]); // Default to first template
  const [textValues, setTextValues] = useState({});
  const canvasRef = useRef(null);

  const handleTemplateSelect = (template) => {
    setSelectedTemplate(template);
    // Reset text values when switching templates
    setTextValues({});
  };

  const handleTextChange = (textAreaId, value) => {
    setTextValues(prev => ({
      ...prev,
      [textAreaId]: value
    }));
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1 className="app-title">
          <span className="app-icon">📸</span>
          Insta Post Creator
        </h1>
      </header>

      <main className="app-main">
        <TemplateSelector
          selectedTemplate={selectedTemplate}
          onTemplateSelect={handleTemplateSelect}
        />

        <Canvas
          template={selectedTemplate}
          textValues={textValues}
          canvasRef={canvasRef}
        />

        <TextEditor
          template={selectedTemplate}
          textValues={textValues}
          onTextChange={handleTextChange}
        />

        <DownloadButton
          canvasRef={canvasRef}
          disabled={!selectedTemplate}
        />
      </main>
    </div>
  );
}

export default App;