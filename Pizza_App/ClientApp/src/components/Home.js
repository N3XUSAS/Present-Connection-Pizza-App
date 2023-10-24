import React, { Component } from 'react';

export class Home extends Component {
  static displayName = Home.name;

  render() {
      return (
          <div class="row" style={{ backgroundColor: "Orange", height: "89.7vh" }}>
            <div class="col align-self-center"></div>
              <div class="col-8 align-self-center Creator">
                <h1>Welcome to Pizza Place</h1>
                <h3>In Orders you can see all previously made orders</h3>
                <h3>In Pizza Creator you can order pizza</h3>
              </div>
              <div class="col align-self-center"></div>
          </div>
    );
  }
}
