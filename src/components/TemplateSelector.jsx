import React from 'react';
import { templates } from '../templates';

const TemplateSelector = ({ selectedTemplate, onTemplateSelect }) => {
  return (
    <div className="template-selector">
      <h2 className="template-title">Choose a Template</h2>
      <div className="template-grid">
        {templates.map((template) => (
          <button
            key={template.id}
            className={`template-card ${selectedTemplate?.id === template.id ? 'active' : ''}`}
            onClick={() => onTemplateSelect(template)}
          >
            <div className="template-icon">{template.icon}</div>
            <div className="template-name">{template.name.split(' ')[0]}</div>
            <div className="template-indicator">
              {selectedTemplate?.id === template.id ? '●' : '○'}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default TemplateSelector;