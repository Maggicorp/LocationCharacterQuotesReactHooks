import React, { useState, useEffect } from 'react';
import { isEmpty } from 'lodash';
import Filter from '../Filter/index.js';
import Content from '../Content/index.js';
import { fetchDataWithTypes } from '../../api/actions.js'
import { TITLE_TEXT, NO_SELECTED_FILTER_TEXT } from '../../Constants/text.js';
import './index.css';

function App() {
  const [selected, setSelected] = useState([]);
  const [content, setContent] = useState([])
  const [tagOptions, setTagOptions] = useState([])

  useEffect(() => {
    // needs to call fetchData in order to make async call to fetchDataWithTypes
    const fetchData = async () => {
      const { content, tagTypes } = await fetchDataWithTypes();
      setTagOptions(tagTypes)
      setSelected(tagTypes)
      setContent(content)
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {TITLE_TEXT}
      </header>
      <div className="App-filter">
        {tagOptions.map(tag => <Filter tagName={tag} selected={selected} setSelected={setSelected} key={tag} />
        )}
      </div>
      <div className="App-content">
        {isEmpty(selected) ? (<div>{NO_SELECTED_FILTER_TEXT} </div>) : (<Content content={content} selected={selected} />)}
      </div>
    </div>
  );
}

export default App;
