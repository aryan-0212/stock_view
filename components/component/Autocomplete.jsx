// components/Autocomplete.js
import { useState, useEffect } from 'react';

const Autocomplete = ({ suggestions }) => {
  const [inputValue, setInputValue] = useState('');
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  useEffect(() => {
    if (inputValue) {
        console.log(suggestions)
      const filtered = suggestions.filter(suggestion =>
        suggestion.toLowerCase().includes(inputValue.toLowerCase())
      );
      setFilteredSuggestions(filtered);
      setShowSuggestions(true);
    } else {
      setFilteredSuggestions([]);
      setShowSuggestions(false);
    }
  }, [inputValue, suggestions]);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleClick = (suggestion) => {
    setInputValue(suggestion);
    setShowSuggestions(false);
  };

  const handleBlur = () => {
    setTimeout(() => setShowSuggestions(false), 100);
  };

  return (
    <div className="relative">
      <input
        type="search"
        value={inputValue}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder="Search for stocks"
        className="w-full rounded-lg bg-primary-foreground/20 pl-8 pr-4 py-2 text-primary-foreground focus:outline-none focus:ring-2 focus:ring-primary-foreground focus:ring-opacity-50"
      />
      {showSuggestions && (
        <div className="absolute z-10 bg-white border border-gray-300 rounded-lg mt-1 w-full">
          {filteredSuggestions.length > 0 ? (
            filteredSuggestions.map((suggestion, index) => (
              <div
                key={index}
                onClick={() => handleClick(suggestion)}
                className="p-2 cursor-pointer hover:bg-gray-200"
              >
                {suggestion}
              </div>
            ))
          ) : (
            <div className="p-2">No suggestions</div>
          )}
        </div>
      )}
    </div>
  );
};

export default Autocomplete;
