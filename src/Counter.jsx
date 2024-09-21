import { useState } from "react"

export default function Counter(){

    const [count, setCount] = useState(0);

    const countUp = () => {

        const newCount = count + 1;
        setCount(newCount);
    }

    const countDown = () => {

        const newCount = count - 1;
        setCount(newCount);
    }

    return (

        <div style={{border : '2px solid tomato', borderRadius : '15px', padding : '15px'}}>
            <h4>Count : {count}</h4>
            <button onClick={countUp}>CountUp</button>
            <button onClick={countDown}>CountDown</button>
        </div>
    )
}