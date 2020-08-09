import React, { Component } from 'react';
import { Container, Header, Tab, Tabs, Left, Body, Right, Title, } from 'native-base';
import Tab1 from './Tabs/tab1';
import Tab2 from './Tabs/tab2';
import Tab3 from './Tabs/tab3';
export default class TabsExample extends Component {
  render() {
    return (
      <Container>
        <Header hasTabs >
              <Title>News App</Title>
        </Header>
        <Tabs>
          <Tab heading="Tab1">
            <Tab1 />
          </Tab>
          <Tab heading="Tab2">
            <Tab2 />
          </Tab>
          <Tab heading="Govt">
            <Tab3 />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}

