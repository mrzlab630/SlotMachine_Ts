import React from "react";
import './NeonSign.scss';


interface INeonSign {
    children:any,
    fontSize?:number,
}


const NeonSign: React.FC<INeonSign> = ({fontSize,children}) =>{


    return(<div
                style={{fontSize:`${fontSize || 4.3}vw`}}
                className={`NeonSign`}
            >{children}</div>);
};


export default NeonSign;