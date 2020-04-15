import React, { Component } from 'react';
import './App.css';
import Headtitle from './components/Headtitle'
import Products from './components/Products';
import axios from 'axios';

const getProductData = () => axios.get('/getdata')
                    .then( (res)=>res.data)

const addProductAction = (product_name,product_price,img) => {
    return axios.post('add',{product_name,product_price,img})
    .then((resp)=>resp.data);
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state ={
      data:null,
      product_name:'',
        product_price:'',
        img:''
    }
  }
  
  componentWillMount() {
    if (this.state.data === null) {
      getProductData().then((res)=>{
        this.setState({
          data:res
        });
      })  
    }
  }
   printData = () => {
      if (this.state.data !== null) {
          return this.state.data.map((value,key) => {
            return (<Products 
            key = {key}
            ProductName = {value.ProductName} 
            ProductPrice = {value.ProductPrice} 
            img={value.img}  />)
             
          })
      }
   }
   isChange = (event) => {
    var name = event.target.name;
    var value = event.target.value;   
    this.setState({
       [name]:value
    });
}
handleClick = () => {
   
   var {product_name,product_price,img} = this.state;
   var dataTemp = [];
   var item = {};
   item.product_name=product_name;
   item.product_price=product_price;
   item.img = img;
   dataTemp=this.state.data;
   if (item.product_name!==''){
    
       dataTemp.push(item);
       this.setState({
          data:dataTemp
       });
  
  }
   
   addProductAction(product_name,product_price,img).then((response)=>{
       console.log(response)
   })

}
  


  render() {
    console.log(this.state.data);
  

    return (
      <div>
        <Headtitle/>
        
      <div className="container">
         <div className="row">
         
         <div className="col-8">
         <div className="row">
           {this.printData()}
            </div>
           </div>
           <div className="col-4">
           <div className="row">
    
    <div className="mx-auto">
      <form >
        <div className="form-group">
          <label htmlFor="product_name">Product Name</label>
          <input onChange = {(event)=>this.isChange(event)} type="text" className="form-control" name="product_name" id="product_name" aria-describedby="name_text" placeholder="Input Text" />
          <small id="name_text" className="form-text text-muted">Input text</small>
        </div>

        <div className="form-group">
          <label htmlFor="product_price">Product Price</label>
          <input onChange = {(event)=>this.isChange(event)} type="text" className="form-control" name="product_price" id="product_price" aria-describedby="name_text" placeholder="Input Price" />
          <small id="name_text" className="form-text text-muted">Input text</small>
        </div>

        <div className="form-group">
          <label htmlFor="img">Product Image Link</label>
          <input onChange = {(event)=>this.isChange(event)} type="text" className="form-control" name="img" id="img" aria-describedby="name_text" placeholder="Input Text" />
          <small id="name_text" className="form-text text-muted">Input text</small>
        </div>
        <button type="reset" onClick={()=>this.handleClick()} className="btn btn-block btn-info">Add New </button>
      </form>
    </div>
  </div>
             </div>
           </div>
         </div>
      </div>
    );
  }
}

export default App;


