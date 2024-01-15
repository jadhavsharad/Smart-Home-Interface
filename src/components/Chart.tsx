import React, { useEffect } from 'react'
import db from './Firebase'
import { DataSnapshot, off, onValue, ref } from 'firebase/database';
import { LineChart } from '@mui/x-charts/LineChart';



export default function Chart() {
    const fixedSize = 5;
    const [time, setTime] = React.useState([0, 0, 0, 0, 0]);
    const [temp, setTemp] = React.useState([0, 0, 0, 0, 0]);
    const [humid, setHumid] = React.useState([0, 0, 0, 0, 0]);
    const dbRef = ref(db, '/Time/');
    const tempRef = ref(db, '/Temperature/')
    const humidref = ref(db, '/Temperature/')

    useEffect(() => {
        onValue(dbRef, (snapshot: DataSnapshot) => {
            const time = snapshot.val();
            setTime((prevTime) => {
                const newTime = [...prevTime, time];
                if (newTime.length > fixedSize) {
                    newTime.shift();
                }
                return newTime
            });
            {
                onlyOnce: true;
            }
        })

        setInterval(() => {
            onValue(tempRef, (snapshot: DataSnapshot) => {
                const temp = snapshot.val();
                setTemp((prevTemp) => {
                    const newTemp = [...prevTemp, temp];
                    if (newTemp.length > fixedSize) {
                        newTemp.shift();
                    } else {
                        newTemp.push(temp);
                    }
                    return newTemp
                });
                {
                    onlyOnce: true
                }
            })
        }, 3000)

        setInterval(() => {
            onValue(humidref, (snapshot: DataSnapshot) => {
                const humid = snapshot.val();
                setHumid((prevTemp) => {
                    const newHumid = [...prevTemp, humid];
                    if (newHumid.length > fixedSize) {
                        newHumid.shift();
                    } else {
                        newHumid.push(humid);
                    }
                    return newHumid
                });
                {
                    onlyOnce: true
                }
            })
        }, 3000)

        return () => {
            off(dbRef, 'value')
            off(tempRef, 'value')
        }
    }, [])


    console.log(time)
    console.log(temp)
    return (
        <div className=''>
            
            <LineChart
                sx={{
                    
                    '& .MuiChartsAxis-tickLabel': {
                        fill: 'white',
                    },
                    '& .MuiAreaElement-series-Temperature':{
                        fill: "url('#GradientT')",
                    },
                    '& .MuiAreaElement-series-Humidity':{
                        fill: "url('#GradientH')",
                    },
                }}

                tooltip={{ trigger: 'item' }}
                series={[{ id: 'Temperature', data: temp, area: true, showMark: false, stack: 'total' }, { id: 'Humidity', data: humid, area: true, showMark: false, stack: 'total' }]}
                xAxis={[{ scaleType: 'point', data: time, }]}
                 height={200}>
                <defs>
                    <linearGradient id="GradientT" gradientTransform="rotate(90)">
                        <stop offset="0%" stopColor="#089688" />
                        <stop offset="100%" stopColor="transparent" />
                    </linearGradient>
                    <linearGradient id="GradientH" gradientTransform="rotate(90)">
                        <stop offset="0%" stopColor="#0080ff" />
                        <stop offset="100%" stopColor="transparent" />
                    </linearGradient>
                </defs>
            </LineChart>
        </div>
    )
}
