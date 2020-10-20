import React from 'react'
import Element from './Element';

const TabPanel = () => (
  <div className='tabbar'>
    <Element
      type='input'
      title='入力'
      icon='check'
    />
    <Element
      type='record'
      title='記録'
      icon='chart area'
    />
  </div>
);

export default TabPanel ;
