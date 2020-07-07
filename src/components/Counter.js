import React, { useState } from 'react';

export default React.forwardRef(function Counter(props, ref) {
    const [count, setCount] = useState(0);
    const handleIncre = () => {
        setCount(count + 1);
    }
    return (
        <div>
            Count: {count}
            <button onClick={handleIncre} style={{ marginLeft: '20px' }} ref={ref}>Inc</button>
        </div>
    )
})