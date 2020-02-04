import React, {useEffect, useState} from "react";
import {randomInteger} from './utilits';

interface ISlot {
    list:any[],
    spinning?:number,
    num?:number,
    callbackAnimationEnd?():void,
    callAnimationIteration?():void,
    callAnimationStart?():void,
}


const Slot: React.FC<ISlot> = ({list,num,spinning,callAnimationStart,callAnimationIteration,callbackAnimationEnd}) =>{

    const [row,] = useState<number>(3);
    const [slotHeight,] = useState<number>(110);
    const [listArr,setListArr] = useState<any[]>([]);

    const [transformHeight,setTransformHeight] = useState<number>(0);
    const [transitionTime,setTransitionTime] = useState<number>(1);


    useEffect(()=>{

        const listCln = num ? list.slice(0,num) : list;

        setListArr(listCln);

            setTransformHeight((listCln.length - row - randomInteger(row,listCln.length)) * slotHeight - 15);
            setTransitionTime(randomInteger(600,1200));



    },[list,spinning,row,slotHeight]);


    const slotRender = listArr.map((itm:any,idx:number) =>(
        <li
            key={idx}
        ><img src={itm} alt={`pic-${idx}`} className={`icon`}/></li>
    ));

    return(<div
        className={`slot`}
    ><ul

        onAnimationStart={callAnimationStart}
        onAnimationIteration={callAnimationIteration}
        onAnimationEnd={callbackAnimationEnd}

        style={{
            transition: `transform ${transitionTime}ms linear`,
            transform: `translate3d(0,-${transformHeight}px,0)`
        }}

        >{slotRender}</ul></div>);


};

export default Slot;