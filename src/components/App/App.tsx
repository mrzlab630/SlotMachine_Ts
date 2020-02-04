import React, {useState} from 'react';
import {SlotMachineTs} from '../SlotMachineTs';
import NeonSign from '../NeonSign';
import '../../assets/scss/style.scss';
import './App.scss';



import apple from "../../assets/icons/apple.svg";
import avocado from "../../assets/icons/avocado.svg";
import bananas from "../../assets/icons/bananas.svg";
import cherry from "../../assets/icons/cherry.svg";
import coconut from "../../assets/icons/coconut.svg";
import fig from "../../assets/icons/fig.svg";
import grapes from "../../assets/icons/grapes.svg";
import guava from "../../assets/icons/guava.svg";
import kiwi from "../../assets/icons/kiwi.svg";
import mangosteen from "../../assets/icons/mangosteen.svg";
import melon from "../../assets/icons/melon.svg";
import orange from "../../assets/icons/orange.svg";
import papaya from "../../assets/icons/papaya.svg";
import peach from "../../assets/icons/peach.svg";
import pear from "../../assets/icons/pear.svg";
import pineapple from "../../assets/icons/pineapple.svg";
import pitaya from "../../assets/icons/pitaya.svg";
import strawberry from "../../assets/icons/strawberry.svg";
import watermelon from "../../assets/icons/watermelon.svg";

interface IhandleChInput {
    id?:string,
}

const App: React.FC = () => {

    const [rowsAdd,setRowsAdd] = useState<number>(3);
    const [slotsAdd,setSlotsAddAdd] = useState<number>(3);

    const arrSlot: any[] = [apple,
        avocado,
        bananas,
        cherry,
        coconut,
        fig,
        grapes,
        guava,
        kiwi,
        mangosteen,
        melon,
        orange,
        papaya,
        peach,
        pear,
        pineapple,
        pitaya,
        strawberry,
        watermelon];



    const handleChInput = (id?:string) => (e: React.ChangeEvent<HTMLInputElement>) =>{

        if(!id){
        return false;
        }

        const val:number =parseInt(e.target.value, 10) || 1;

        if(id === 'rows'){
            setRowsAdd(val);
        }

        if(id === 'slots'){
            setSlotsAddAdd(val);
        }
        return false;

    };


    return (
        <div className="App">


            <div className={`tools`}>
                <ul>
                    <li>
                        <label
                            htmlFor={`rows`}
                        >
                            <NeonSign fontSize={4}>rows</NeonSign>
                        </label>
                        <input
                            id={`rows`}
                            min={1}
                            defaultValue={rowsAdd}
                            onChange={handleChInput(`rows`)}
                            placeholder={`rows`}
                            type={`number`}
                        />
                    </li>
                    <li>
                        <label
                            htmlFor={`slots`}
                        >
                            <NeonSign fontSize={4}>slots</NeonSign>

                        </label>
                        <input
                            id={`slots`}
                            min={1}
                            defaultValue={slotsAdd}
                            onChange={handleChInput(`slots`)}
                            placeholder={`slots`}
                            type={`number`}
                        />
                    </li>
                </ul>


            </div>

        <div className="author">
            <a href={`https://github.com/mrzlab630/SlotMachine_Ts`}> <NeonSign fontSize={4}>>by mrZLab630</NeonSign></a>
        </div>

           <SlotMachineTs
               row={rowsAdd}
               slots={slotsAdd}
               slotsList={arrSlot}
           />
        </div>
    );
};

export default App;