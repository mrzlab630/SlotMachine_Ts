import React from "react";
import './Button.scss';



interface IButton {
    name?:string,
    info?:string,
    color?:string,
    callback():void
}

const Button: React.FC<IButton> = ({name,color='yellow',info,callback}) =>{



    return(<div
                className={`Button`}
                >
                                    <button
                                        onClick={callback}
                                        className={`round ${color}`}
                                    >{name}
                                    <div
                                        className="round"
                                    >{info}</div>
                                    </button>
        </div>);
};



export default Button;