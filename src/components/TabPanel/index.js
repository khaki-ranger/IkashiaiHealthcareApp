import React from 'react'
import Element from './Element';

const tabs = [
  {
    type: 'input',
    title: '入力',
    icon: 'check'
  },
  {
    type: 'record',
    title: '記録',
    icon: 'chart area'
  },
  {
    type: 'mypage',
    title: 'マイページ',
    icon: 'user'
  }
];

const TabPanel = () => (
  <div className='tabbar'>
    {
      tabs.map(tab => (
        <Element
          key={tab.type}
          type={tab.type}
          title={tab.title}
          icon={tab.icon}
          width={Math.floor(100/tabs.length) + '%'}
        />
      ))
    }
  </div>
);

export default TabPanel ;
