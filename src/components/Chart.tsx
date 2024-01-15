import React, { useEffect } from 'react'
import db from './Firebase'
import { DataSnapshot, off, onValue, ref } from 'firebase/database';
import { LineChart } from '@mui/x-charts/LineChart';
import { ThemeProvider, createTheme } from '@mui/material/styles';
const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});



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
            off(humidref, 'value')
        }
    }, [])


    console.log(time)
    console.log(temp)
    return (
        <ThemeProvider theme={darkTheme}>
            <div className=''>

                <LineChart
                    sx={{
                        '& .MuiChartsAxis-tick': {
                            fill: 'white',
                            color: 'white',
                        },

                        '.MuiAreaElement-series-Temperature': {
                            fill: "url('#GradientT')",
                        },
                        '.MuiAreaElement-series-Humidity': {
                            fill: "url('#GradientH')",
                        },

                    }}

                    tooltip={{ trigger: 'item' }}
                    series={[{ color: '#3b82f6', id: 'Temperature', data: temp, area: true, showMark: false, stack: 'total' }, { color: '#f43f5e', id: 'Humidity', data: humid, area: true, showMark: false, stack: 'total' }]}
                    xAxis={[{ scaleType: 'point', data: time, }]}
                    height={230}>
                    <defs>
                        <linearGradient id="GradientT" gradientTransform="rotate(90)">
                            <stop offset="5%" stopColor="#3b82f6" />
                            <stop offset="95%" stopColor="black" />
                        </linearGradient>
                        <linearGradient id="GradientH" gradientTransform="rotate(90)">
                            <stop offset="5%" stopColor="#f43f5e" />
                            <stop offset="95%" stopColor="black" />
                        </linearGradient>
                    </defs>
                </LineChart>
            </div>
        </ThemeProvider>
    )
}
