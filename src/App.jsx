import React, { useState, useRef } from 'react';
import TemplateSelector from './components/TemplateSelector';
import Canvas from './components/Canvas';
import TextEditor from './components/TextEditor';
import ColorPicker from './components/ColorPicker';
import FontSelector from './components/FontSelector';
import SizeSelector from './components/SizeSelector';
import ShapeSelector from './components/ShapeSelector';
import DownloadButton from './components/DownloadButton';
import { templates } from './templates';
import './App.css';

function App() {
  const [selectedTemplate, setSelectedTemplate] = useState(templates[0]); // Default to first template
  const [textValues, setTextValues] = useState({});
  const canvasRef = useRef(null);

  // Customization state
  const [selectedColorScheme, setSelectedColorScheme] = useState(0);
  const [selectedFontOption, setSelectedFontOption] = useState(0);
  const [selectedSizeOption, setSelectedSizeOption] = useState('medium');
  const [selectedShapeOption, setSelectedShapeOption] = useState(0);

  const handleTemplateSelect = (template) => {
    setSelectedTemplate(template);
    // Reset text values and customization options when switching templates
    setTextValues({});
    setSelectedColorScheme(0);
    setSelectedFontOption(0);
    setSelectedSizeOption('medium');
    setSelectedShapeOption(0);
  };

  const handleTextChange = (textAreaId, value) => {
    setTextValues(prev => ({
      ...prev,
      [textAreaId]: value
    }));
  };

  // Customization handlers
  const handleColorSchemeChange = (index) => {
    setSelectedColorScheme(index);
  };

  const handleFontOptionChange = (index) => {
    setSelectedFontOption(index);
  };

  const handleSizeOptionChange = (sizeOption) => {
    setSelectedSizeOption(sizeOption);
  };

  const handleShapeOptionChange = (index) => {
    setSelectedShapeOption(index);
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
          selectedColorScheme={selectedColorScheme}
          selectedFontOption={selectedFontOption}
          selectedSizeOption={selectedSizeOption}
          selectedShapeOption={selectedShapeOption}
        />

        <TextEditor
          template={selectedTemplate}
          textValues={textValues}
          onTextChange={handleTextChange}
        />

        <div className="customization-section">
          <h2 className="customization-title">Customize Your Post</h2>
          <div className="customization-controls">
            <ColorPicker
              template={selectedTemplate}
              selectedColorScheme={selectedColorScheme}
              onColorSchemeChange={handleColorSchemeChange}
            />

            <FontSelector
              template={selectedTemplate}
              selectedFontOption={selectedFontOption}
              onFontOptionChange={handleFontOptionChange}
            />

            <SizeSelector
              template={selectedTemplate}
              selectedSizeOption={selectedSizeOption}
              onSizeOptionChange={handleSizeOptionChange}
            />

            <ShapeSelector
              template={selectedTemplate}
              selectedShapeOption={selectedShapeOption}
              onShapeOptionChange={handleShapeOptionChange}
            />
          </div>
        </div>

        <DownloadButton
          canvasRef={canvasRef}
          disabled={!selectedTemplate}
        />
      </main>
    </div>
  );
}

export default App;