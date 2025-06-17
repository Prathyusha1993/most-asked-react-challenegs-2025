import React, { useEffect, useState } from "react";
import useFetchCustomHook from "../fetchAPIandSideEffects/useFetchCustomHook";

function AutoCompleteInput() {
  const [typedText, setTypedText] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);
  const [debounceText, setDebounceText] = useState("");

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounceText(typedText);
    }, 300);
    return () => clearTimeout(handler);
  }, [typedText]);

  const { data, loading, error } = useFetchCustomHook(
    debounceText.length >= 2
      ? `https://api.datamuse.com/sug?s=${debounceText}`
      : null
  );

// const { data, loading, error } = useFetchCustomHook(
//        `https://api.datamuse.com/sug?s=${typedText}`
//   );

  const handleShowSelected = (item) => {
    setSelectedItem(item);
    setTypedText(item.word);
  };

  return (
    <div>
      <h3>AutoCompleteInput</h3>
      <input
        type="text"
        value={typedText}
        onChange={(e) => setTypedText(e.target.value)}
        placeholder="Enter Text to AutoComplete"
      />
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {typedText && data && (
        <ul>
          {data.map((item, index) => (
            <li key={index} onClick={() => handleShowSelected(item)}>
              {item.word}
            </li>
          ))}
        </ul>
      )}
      {selectedItem && <p>You selected item:{selectedItem.word}</p>}
    </div>
  );
}

export default AutoCompleteInput;
