import React from 'react';
import { mount } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';
import ListItem from 'components/Schemas/List/ListItem';

import { schemas } from './fixtures';

describe('ListItem', () => {
  const wrapper = mount(
    <Router>
      <table>
        <tbody>
          <ListItem subject={schemas[0]} />
        </tbody>
      </table>
    </Router>
  );

  it('renders schemas', () => {
    expect(wrapper.find('NavLink').length).toEqual(1);
    expect(wrapper.find('td').length).toEqual(3);
  });

  it('matches snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
