import React from 'react';


interface infoProps {
    info: string
}

const ErrorIndicator: React.FC<infoProps> = ({info}) =>{

    return (
        <div className='ErrorIndicator'>
            <div className="alert alert-danger" role="alert">
                <h4 className="alert-heading">Error!</h4>
                <p>{info || ':('}</p>
                <p className="mb-0"></p>
            </div>
        </div>
    );
};

export default ErrorIndicator;