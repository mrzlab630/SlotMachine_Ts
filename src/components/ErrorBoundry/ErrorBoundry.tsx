import React, { Component } from 'react';
import ErrorIndicator from '../ErrorIndicator';


interface IState{
    hasError: boolean | null,
    readonly error: Error | null | undefined;
    errorInfo:any ,

}

interface IProps{

}



export default class ErrorBoundry extends Component<IProps, IState>{


    constructor(props: IProps) {
        super(props);

        this.state = {
            hasError: null,
            error: null,
            errorInfo: null
        };
    }



    componentDidCatch(error: Error | null, errorInfo: any) {

        this.setState({
                             hasError:true,
                                error,
                              errorInfo
                            })
    }

    render() {

        if(this.state.hasError){


            return <ErrorIndicator
                info={`${this.state.error && this.state.error.toString() || 'NoNe'} ${ this.state.errorInfo && this.state.errorInfo.componentStack || 'NoNe'}`}/>;
        }

        return this.props.children;

    }
}