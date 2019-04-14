import React, {Component} from 'react';
import Loader from '../../Components/Loader/Loader';
import Table from "../../Components/TableUser/Table";
class StoreOwner extends Component {
    constructor(props){
        super(props);
        this.state={
            loading: false,
            data:[]
        }
    }

    sendSms =(userId)=>{
        console.log(userId,this.props.match.params.id);
    };

    componentDidMount() {
        const storeId= this.props.match.params.id;
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
    render() {
        const {loading,data}= this.state;
        let content=<Loader/>;
        if(!loading){
            content = <Table data={data} sendSms={this.sendSms} />
        }

        return (
            <div className='table'>
                {content}
            </div>
        );
    }
}

export default StoreOwner;