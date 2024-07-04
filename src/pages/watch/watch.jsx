import { useEffect, useState } from 'react'
import './watch.css'

function Watch() {
    const [time, setTime] = useState(0)
    let stopWatch;
    let a;
    const [step, setStep] = useState(1)
    const [lapList, setLapList] = useState([])

    function timeConvertion(time) {
        const minutes = Math.floor(time / 6000);
        const seconds = Math.floor((time / 100) % 60);
        const milliseconds = Math.floor(time % 100);
        return `${(minutes < 10 ? '0' : '') + minutes}:${(seconds < 10 ? '0' : '') + seconds}.${(milliseconds < 10 ? '0' : '') + milliseconds} `;
    }

    useEffect(() => {
        // console.log('step',step);
        if (step === 1) {
            setTime(0)
            setLapList([])
        }
        else if (step === 2) {
            stopWatch = setInterval(() => {
                setTime(state => state + 1)
            }, 10);
            setStep(2)
        }

        return () => clearInterval(stopWatch)
    }, [step])

    return (
        <>
            <div className='bg-white w-96 rounded-lg'>
                <h3 className='text-center font-bold text-lg pb-5 pt-2.5'>STOPWATCH</h3>
                <h1 className='text-center text-6xl'>{timeConvertion(time)}</h1>
                <div className='flex justify-center p-10'>
                    {step === 1 ?
                        <button className='border border-solid border-black px-6 py-2 rounded-2xl border-button-border shadow-button-shadow font-bold text-button-color w-32' onClick={() => setStep(2)}>START</button>
                        :
                        step === 2 ?
                            <div className='grid gap-x-8 grid-cols-2'>
                                <button className='border border-solid border-black px-6 py-2 rounded-2xl border-button-border shadow-button-shadow font-bold text-button-color w-32' onClick={() => setLapList(state => [timeConvertion(time), ...state])}>Lap</button>
                                <button className='border border-solid border-black px-6 py-2 rounded-2xl border-button-border shadow-button-shadow font-bold text-button-color w-32' onClick={() => setStep(3)}>STOP</button>
                            </div>
                            :
                            step === 3 ?
                                <div className='grid gap-x-8 grid-cols-2'>
                                    <button className='border border-solid border-black px-6 py-2 rounded-2xl border-button-border shadow-button-shadow font-bold text-button-color w-32' onClick={() => setStep(1)}>RESET</button>
                                    <button className='border border-solid border-black px-6 py-2 rounded-2xl border-button-border shadow-button-shadow font-bold text-button-color w-32' onClick={() => setStep(2)}>RESUME</button>
                                </div>
                                :
                                <></>
                    }
                </div>
                <div className='h-80'>
                    {
                        lapList.map((lapTime, index) => {
                            return (
                                <div key={index}>
                                    <p>Lap {index+1}</p>
                                    <p>{lapTime}</p>
                                </div>

                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}
export default Watch