import React, { Component } from 'react';
import axios from 'axios';

const addProductAction = (product_name,product_price,img) => {
    return axios.post('add',{product_name,product_price,img})
    .then((resp)=>resp.data);
}

class AddProduct extends Component {

    constructor(props) {
        super(props);
        this.state = {
            product_name:'',
            product_price:'',
            img:''
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
        console.log(JSON.stringify(this.state));
        var {product_name,product_price,img} = this.state;
        addProductAction(product_name,product_price,img).then((response)=>{
            console.log(response)
        })
    }
    render() {
        return (
            <div className="container">
  <div className="row">
    <div className="col-12">
      <hr />
    </div>
    <div className="col-8 mx-auto">
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
        <button type="reset" onClick={()=>this.handleClick()} className="btn btn-info">Add New </button>
      </form>
    </div>
  </div>
</div>

        );
    }
}

export default AddProduct;