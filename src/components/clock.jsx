import React, { useState, useEffect } from 'react';

function Clock() {

    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <div className='clock'>
            <h1 className='clock_hour'>{String(time.getHours()).padStart(2, '0')}</h1>
            <h1 className='clock_middle'>:</h1>
            <h1 className='clock_minute'>{String(time.getMinutes()).padStart(2, '0')}</h1>
            <h1 className='clock_middle'>:</h1>
            <h1 className='clock_second'>{String(time.getSeconds()).padStart(2, '0')}</h1>
        </div>
    )

}

export default Clock