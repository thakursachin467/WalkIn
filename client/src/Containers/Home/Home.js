import React, {Component} from 'react';
import './Home.css';
import Loader from '../../Components/Loader/Loader';
import Table from '../../Components/Table/Table';
class Home extends Component {
    constructor(props){
        super(props);
        this.state={
            loading: false
        }
    }
    componentDidMount() {
        this.setState({loading:true})
        fetch('http://localhost:5000/api/stores/all',{
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

export default Home;