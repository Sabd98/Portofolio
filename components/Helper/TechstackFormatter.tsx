import React, { useState } from 'react';

interface TechstackFormatterProps {
  techstacks: string;
  maxLength?: number;
}

export const TechstackFormatter: React.FC<TechstackFormatterProps> = ({ 
  techstacks, 
  maxLength = 60 
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  // Remove "Techstacks:" prefix if it exists
  const cleanTechstacks = techstacks.replace(/^Techstacks:\s*/, '');
  
  // Check if we need to truncate
  const shouldTruncate = cleanTechstacks.length > maxLength;
  const displayText = shouldTruncate && !isExpanded 
    ? cleanTechstacks.substring(0, maxLength) + '...'
    : cleanTechstacks;

  return (
    <div className="project-techstack">
      <p className="text-sm text-gray-600 dark:text-gray-300 leading-tight">
        <span className="font-semibold">Tech Stack: </span>
        {displayText}
        {shouldTruncate && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="ml-2 text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 text-sm font-medium transition-colors"
          >
            {isExpanded ? 'Show Less' : 'Show More'}
          </button>
        )}
      </p>
    </div>
  );
};