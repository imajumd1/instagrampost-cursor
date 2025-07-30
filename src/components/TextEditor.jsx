import React from 'react';

const TextEditor = ({ template, textValues, onTextChange }) => {
  if (!template) return null;

  const handleInputChange = (textAreaId, value) => {
    const textArea = template.textAreas.find(ta => ta.id === textAreaId);
    if (textArea && value.length <= textArea.maxLength) {
      onTextChange(textAreaId, value);
    }
  };

  return (
    <div className="text-editor">
      <h3 className="editor-title">Edit Text</h3>
      <div className="text-inputs">
        {template.textAreas.map((textArea) => (
          <div key={textArea.id} className="text-input-group">
            <label className="text-label">
              {textArea.id === 'main-text' && 'Main Text'}
              {textArea.id === 'author' && 'Author'}
              {textArea.id === 'title' && 'Title'}
              {textArea.id === 'subtitle' && 'Subtitle'}
              {textArea.id === 'date' && 'Date'}
              {textArea.id === 'main-message' && 'Message'}
              {textArea.id === 'signature' && 'Signature'}
            </label>
            <div className="input-container">
              <textarea
                className="text-input"
                placeholder={textArea.placeholder}
                value={textValues[textArea.id] || ''}
                onChange={(e) => handleInputChange(textArea.id, e.target.value)}
                maxLength={textArea.maxLength}
                rows={textArea.id === 'main-text' || textArea.id === 'subtitle' || textArea.id === 'main-message' ? 3 : 1}
              />
              <div className="character-count">
                {(textValues[textArea.id] || '').length}/{textArea.maxLength}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TextEditor;