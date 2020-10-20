import React from 'react'
import { connect } from 'react-redux';
import { selectTab } from '../../actions';
import { Icon } from 'semantic-ui-react'

const Element = ({ tab, selectTab, type, title, icon, width }) => (
  <div
    className={ tab === type ? 'active': '' }
    onClick={() => selectTab(type)}
    style={{ width: width }}
  >
    <div className='icon-box'>
      <Icon name={icon} size='large' />
    </div>
    <div className='title'>
      {title}
    </div>
  </div>
);

const mapStateToProps = state => ({
  tab: state.tab.selected,
});

export default connect(
  mapStateToProps,
  { selectTab }
)(Element);
