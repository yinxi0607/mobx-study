import {makeAutoObservable} from "mobx";
import {observer} from "mobx-react";
import {FC, useEffect} from "react";

class Timer {
    secondsPassed = 0
    constructor() {
        makeAutoObservable(this)
    }
    increase(){
        this.secondsPassed++
    }
    reset(){
        this.secondsPassed = 0
    }
}

const myTimer = new Timer()

type PropsType = {timer: Timer}
const TimeerView = observer((props: PropsType)=> {
    const { timer }= props
    return <button onClick={()=>timer.reset()}>Seconds passed: {timer.secondsPassed}</button>
})

const Demo: FC = () => {
    useEffect(()=>{
        const id = setInterval(()=>{
            myTimer.increase()
        },1000)
        return ()=>clearInterval(id) //自己定义的定时器，一定要自己删除
    })
    return <div>
        <p>Basic Demo</p>
        <TimeerView timer={myTimer}/>
    </div>
}

export default Demo