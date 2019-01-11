import * as React from 'react';
import { Icon, Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';

const { Sider } = Layout;

export class LayoutSidebar extends React.Component {
  public state = {
    collapsed: false,
  };

  public toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  public render() {
    return (
      <Sider
        trigger={null}
        theme={'dark'}
        collapsible
        collapsed={this.state.collapsed}
        width={250}
      >
        <div className="logo"/>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">
            <Link to={`/employees`}>
              <Icon type="user"/>
              <span>Pracownicy</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to={`/leave`}>
              <Icon type="video-camera"/>
              <span>Urlopy</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to={`/settlement`}>
              <Icon type="line-chart"/>
              <span>Rozliczenia Pracowników</span>
            </Link>
          </Menu.Item>
        </Menu>
      </Sider>
    );
  }
}