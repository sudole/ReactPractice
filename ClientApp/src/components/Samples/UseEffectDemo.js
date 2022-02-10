import React, { useState, useEffect } from "react";

function UseEffectDemo() {
    const [agree, setAgree] = useState(false);

    /*
    // 페이지가 로드되거나 변경될때
    useEffect(() => {
        console.log("페이지 로드 또는 변경")
    });
    */
   // 페이지가 처음 로드 될때만
    useEffect(() => {
        console.log("페이지 로드")
    }, []);

    return (
        <>
            <h1>UseEffectDemo</h1>
            <input type="checkbox" value={agree} 
                onChange={() => setAgree(agree => !agree)} />
            { agree ? "동의함" : "동의하지않음" }
        </>
    )
}

export default UseEffectDemo;