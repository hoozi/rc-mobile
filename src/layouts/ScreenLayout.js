import React, { Component } from "react";
import { NavBar } from "antd-mobile";
import styles from './ScreenLayout.less';
import { withRouter } from 'react-router-dom'

class ScreenLayout extends Component {
  handleBack() {
    const { history } = this.props;
    history.back();
  }
  render() {
    const { title, ...restProps } = this.props;
    return (
      <div className={styles.layout}>
        <NavBar
          mode="dark"
          className={styles.navBar}
          onLeftClick={this.handleBack}
          {...restProps}
        >
          {title}
        </NavBar>
        <div className={styles.screenContent}>{this.props.children}</div>
      </div>
    )
  }
}

export default withRouter(ScreenLayout)
