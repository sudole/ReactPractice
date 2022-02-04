import React, { Component } from 'react';
import { SiteList } from './Shared/SiteList/SiteList';
import { TechList } from './Shared/TechList/TechList';

export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
      <div>
        <div>
          <h1>안녕하세요. 리액트 + 닷넷코어</h1>
        </div>
        <div className="row">
          <div className="col-md-6">
            <h3><i className="fa fa-wrench">현재 사이트에서 사용된 기술 리스트</i></h3>
            <TechList />
          </div>
          <div className="col-md-6">
            <h3><i className="fa fa-sitemap">현재 사이트와 관련된 추천 사이트</i></h3>
            <SiteList />
          </div>
        </div>
      </div>
    );
  }
}
