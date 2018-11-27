import React, { Component } from 'react';
import {
  Nav, NavList, NavItem, NavVariants,
} from '@patternfly/react-core';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: 0,
    };

    this.onSelect = this.onSelect.bind(this);
  }

    onSelect = (result) => {
      this.setState({
        activeItem: result.itemId,
      });
    };

    render() {
      return (
        <div style={{ backgroundColor: '#292e34', padding: '1rem' }}>
          <Nav onSelect={this.onSelect} aria-label="Primary Nav Horizontal">
            <div className="container">
              <NavList variant={NavVariants.horizontal}>
                <NavItem to="/home" itemId={0} isActive={this.state.activeItem === 0}>
                                Home
                </NavItem>
                <NavItem to="/skills" itemId={1} isActive={this.state.activeItem === 1}>
                                Skills
                </NavItem>
                <NavItem to="/taskTypes" itemId={2} isActive={this.state.activeItem === 2}>
                                Task types
                </NavItem>
                <NavItem to="/customers" itemId={3} isActive={this.state.activeItem === 3}>
                                Customers
                </NavItem>
                <NavItem to="/employees" itemId={4} isActive={this.state.activeItem === 4}>
                                Employees
                </NavItem>
                <NavItem to="/tasks" itemId={5} isActive={this.state.activeItem === 5}>
                                Tasks
                </NavItem>
              </NavList>
            </div>
          </Nav>
        </div>
      );
    }
}

export default Header;