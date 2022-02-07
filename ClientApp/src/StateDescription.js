import React from 'react';

class StateDescription extends React.Component {
    // 생성자
    constructor() {
        super();
        this.state = {
            title: "React",
            message: "state 개체를 사용하여 클래스 컴포넌트에서 상태 관리",
        };
    }
    render() {
        return (<h1>{this.state.title} - {this.state.message}</h1>);
    }
}

export default StateDescription;