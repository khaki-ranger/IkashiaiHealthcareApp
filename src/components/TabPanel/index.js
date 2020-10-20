import React from 'react'
import { Icon } from 'semantic-ui-react'

const TabPanelElement = ({ active, title, icon }) => (
  <div className={ active ? 'active': '' }>
    <div className='icon-box'>
      <Icon name={icon} size='large' />
    </div>
    <div className='title'>{title}</div>
  </div>
);

class TabPanel extends React.Component {

  render() {
    return (
      <div className='tabbar'>
        <TabPanelElement active={true} title='入力' icon='check' />
        <TabPanelElement active={false} title='記録' icon='chart area' />
      </div>
    )
  }
};

export default TabPanel;
