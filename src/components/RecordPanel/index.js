import React from 'react'
import { Tab } from 'semantic-ui-react'
import Chart from './Chart';

const panes = [
  { menuItem: '体重', 
    render: () => 
      <Tab.Pane>
        <Chart
          type='weight'
          color='#8884d8'
        />
      </Tab.Pane>
  },
  { menuItem: '体温', 
    render: () => 
      <Tab.Pane>
        <Chart
          type='temperature'
          color='#82ca9d'
        />
      </Tab.Pane>
  },
  { menuItem: '排便', render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> },
]

const RecordPanel = () => <Tab panes={panes} />

export default RecordPanel
