import React, {Component} from 'react';
import Loader from '../../Components/Loader/Loader';
import Table from "../Home/Home";
class StoreOwner extends Component {
    constructor(props){
        super(props);
        this.state={
            loading: false
        }
    }
    componentDidMount() {
        this.setState({loading:true});
        const storeId= this.props.match.params.id;
        fetch(`http://localhost:5000/api/subscribers/${storeId}`,{
            method: 'GET',
            headers:{
                'Content-Type':'application/json',
            }
        }).then(res=>{
            this.setState({loading:false});
            console.log(res);
        })
            .catch(err=>{
                this.setState({loading:false});
                console.log(err);
            })

    }
    render() {
        const {loading}= this.state;
        let content=<Loader/>;
        if(!loading){
            content = <Table/>
        }

        return (
            <div className='table'>
                {content}
            </div>
        );
    }
}

export default StoreOwner;