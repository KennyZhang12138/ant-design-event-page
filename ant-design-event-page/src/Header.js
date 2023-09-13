import React from "react";
import { Layout, Menu } from "antd";

const { Header } = Layout;

const AppHeader = () => {
  return (
    <Header>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
        <Menu.Item key="1">Dashborad</Menu.Item>
        <Menu.Item key="2">Match</Menu.Item>
        <Menu.Item key="3">Events</Menu.Item>
        <Menu.Item key="4">Teams</Menu.Item>
        <Menu.Item key="5">Rewards</Menu.Item>
        <Menu.Item key="6">Messaging</Menu.Item>
        <Menu.Item key="7">Profile</Menu.Item>
        <Menu.Item key="8">Settings</Menu.Item>
        {/* Add more menu items as needed */}
      </Menu>
    </Header>
  );
};

export default AppHeader;
