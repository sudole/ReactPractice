import React from 'react';

// <div></div> 로 감싼 형태
function Demo1() {
    return (
        <div>
            <h2>React</h2><h2>Angular</h2>
        </div>
    );
}
// React.Fragment 사용
function Demo2() {
    return (
        <React.Fragment>
            <h2>Vue</h2><h2>Blazor</h2>
        </React.Fragment>
    );
}
// <></> 사용
function Demo3() {
    return (
        <>
            <h2>ASP.NET Core</h2><h2>Spring Boot</h2>
        </>
    );
}

function ReactFragementDemo() {
    return (
        <>
            <Demo1 /><Demo2 /><Demo3 />
        </>
    );
}

export default ReactFragementDemo;