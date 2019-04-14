import React, {Component} from 'react';
import { Message } from 'semantic-ui-react'
import Loader from '../../Components/Loader/Loader';
import Table from "../../Components/TableUser/Table";
class StoreOwner extends Component {
    constructor(props){
        super(props);
        this.state={
            loading: false,
            data:[],
            showMessage:'',
            visible:false
        }
    }

    fetchData=(storeId)=>{
        fetch(`http://localhost:5000/api/subscribers/${storeId}`,{
            method: 'GET',
            headers:{
                'Content-Type':'application/json',
            }
        }).then(res=>{
            res.json()
                .then((data)=>{
                    this.setState({loading:false});
                    this.setState({data:data.data});
                })
        })
            .catch(err=>{
                this.setState({loading:false});
                console.log(err);
            })
    }

    sendSms =(userId)=>{
        //sendSms/:userId/:storeId
        const storeId= this.props.match.params.id;
        fetch(`http://localhost:5000/api/subscribers/sendSms/${userId}/${storeId}`,{
            method: 'GET',
            headers:{
                'Content-Type':'application/json',
            }
        })
            .then((res)=>{
                res.json()
                    .then(data=>{
                        this.setState({visible:true,showMessage:data.data.message})
                        this.fetchData(storeId);
                    })
            })
            .catch(err=>{
             console.log(err);
        })
    };
    handleDismiss=()=>{
      this.setState({visible:false,showMessage:''})
    };
    componentDidMount() {
        const storeId= this.props.match.params.id;
        this.fetchData(storeId);
    }
    render() {
        const {loading,data,visible,showMessage}= this.state;
        let message;
        if (visible) {
            return (
                <Message
                    onDismiss={this.handleDismiss}
                    header={showMessage}
                />
            )
        }
        let content=<Loader/>;
        if(!loading){
            content = <Table data={data} sendSms={this.sendSms} />
        }

        return (
            <>
                {message}
            <div className='table'>
                {content}
            </div>
                </>
        );
    }
}

export default StoreOwner;