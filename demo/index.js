import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link} from 'react-router';
import {createHistory} from 'history';

import '../src/theme.scss';
import GridPage from './general/grid';
import FlexGridPage from './general/flex-grid';
import VisibilityPage from './general/visibility';
import FloatPage from './general/float';
import BaseTypographyPage from './typography/base';
import TypographyHelpersPage from './typography/helpers';
import TextAlignmentPage from './typography/text-alignment';
import ButtonPage from './controls/button';
import ButtonGroupPage from './controls/button-group';
import CloseButtonPage from './controls/close-button';
import SwitchPage from './controls/switch';
import BadgePage from './media/badge';
import FlexVideoPage from './media/flex-video';
import LabelPage from './media/label';
import ProgressBarPage from './media/progress-bar';
import ThumbnailPage from './media/thumbnail';

const history = createHistory();

class HomePage extends Component {
  static propTypes = {
    children: PropTypes.node
  };

  render() {
    return (
      <div>
        <Link to='/general/grid'>Grid</Link>
        &nbsp;|&nbsp;
        <Link to='/general/flex-grid'>Flex Grid</Link>
        &nbsp;|&nbsp;
        <Link to='/general/visibility'>Visibility</Link>
        &nbsp;|&nbsp;
        <Link to='/general/float'>Float</Link>
        &nbsp;|&nbsp;
        <Link to='/typography/base'>Base Typography</Link>
        &nbsp;|&nbsp;
        <Link to='/typography/helpers'>Typography Helpers</Link>
        &nbsp;|&nbsp;
        <Link to='/typography/text-alignment'>Text Alignment</Link>
        &nbsp;|&nbsp;
        <Link to='/controls/button'>Button</Link>
        &nbsp;|&nbsp;
        <Link to='/controls/button-group'>Button Group</Link>
        &nbsp;|&nbsp;
        <Link to='/controls/close-button'>Close Button</Link>
        &nbsp;|&nbsp;
        <Link to='/controls/switch'>Switch</Link>
        &nbsp;|&nbsp;
        <Link to='/media/badge'>Badge</Link>
        &nbsp;|&nbsp;
        <Link to='/media/flex-video'>Flex Video</Link>
        &nbsp;|&nbsp;
        <Link to='/media/label'>Label</Link>
        &nbsp;|&nbsp;
        <Link to='/media/progress-bar'>Progress Bar</Link>
        &nbsp;|&nbsp;
        <Link to='/media/thumbnail'>Thumbnail</Link>
        <br/>
        {this.props.children}
      </div>
    );
  }
}

class Demo extends Component {
  render() {
    return (
      <Router history={history}>
        <Route component={HomePage} path='/'>
          <Route component={GridPage} path='/general/grid'/>
          <Route component={FlexGridPage} path='/general/flex-grid'/>
          <Route component={VisibilityPage} path='/general/visibility'/>
          <Route component={FloatPage} path='/general/float'/>
          <Route component={BaseTypographyPage} path='/typography/base'/>
          <Route component={TypographyHelpersPage} path='/typography/helpers'/>
          <Route component={TextAlignmentPage} path='/typography/text-alignment'/>
          <Route component={ButtonPage} path='/controls/button'/>
          <Route component={ButtonGroupPage} path='/controls/button-group'/>
          <Route component={CloseButtonPage} path='/controls/close-button'/>
          <Route component={SwitchPage} path='/controls/switch'/>
          <Route component={BadgePage} path='/media/badge'/>
          <Route component={FlexVideoPage} path='/media/flex-video'/>
          <Route component={LabelPage} path='/media/label'/>
          <Route component={ProgressBarPage} path='/media/progress-bar'/>
          <Route component={ThumbnailPage} path='/media/thumbnail'/>
        </Route>
      </Router>
    );
  }
}

ReactDOM.render(<Demo/>, document.getElementById('app'));
