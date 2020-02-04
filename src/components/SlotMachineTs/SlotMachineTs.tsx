import React, {useEffect, useState} from "react";

import {getShuffledArr} from './utilits';

import Slot from './Slot';
import Button from '../Button';
import NeonSign from '../NeonSign';

import './SlotMachineTs.scss';



interface ISlotMachineTs {
    slotsList:any[],
    slots?:number,
    row?:number,
}


const SlotMachineTs: React.FC<ISlotMachineTs> = ({slotsList,row=3,slots= 1}) =>{


    const [slotNum,] = useState<number>(0);

    const [oneRowHeight,] = useState<number>(110);

    const [allRowsHeight,setAllRowsHeight] = useState<number>(oneRowHeight*row);

    const [slotArr, setSlotArr] = useState<any[]>(getShuffledArr(slotsList));

    const [spinning, setSpinning] = useState<number>(0);


    useEffect(()=>{
        setAllRowsHeight(oneRowHeight*row)
    },[row]);


    const handleClickRepeat = ():void =>{
        setSpinning(Date.now());

    };



    const onAnimationEnd = ():void =>{
            console.log(`onAnimationEnd`,{spinning});
    };


    const slotsrender =  ():any[] =>{
                                        let result:any[] = [];

                                            for(let i:number = 1; i<=slots;i++){
                                                result.push(<Slot
                                                    spinning={spinning}
                                                    callbackAnimationEnd={onAnimationEnd}
                                                    key={`slotsrender-${i}`}
                                                    num={slotNum}
                                                    list={getShuffledArr(slotArr)}
                                                />);
                                            }
                                            return result;
                                        };



    return(<div className={`SlotMachineTs`}>

        <div className={`wrap`}>

            <div className={`title`}>
                <NeonSign>
                    SlotMachine_Ts
                </NeonSign>

            </div>

            <div className={`slots`}>
                <div
                    style={{height:allRowsHeight + 10}}
                    className={`col`}
                >

                   {
                       !slots
                           ? <Slot
                               callbackAnimationEnd={onAnimationEnd}
                                    spinning={spinning}
                                    num={slotNum}
                                    list={slotArr}
                                />
                           : slotsrender()
                   }

                </div>

            </div>

            <div className={`refresh`}>
                <Button
                name={`go`}
                info={`repeat`}
                callback={handleClickRepeat}
                />

            </div>

        </div>


    </div>);
};


export default SlotMachineTs;