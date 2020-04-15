import React, { Component } from 'react';

class Products extends Component {
    render() {
        return (
            <div className="col-4">
  <div className="card text-left">
    <img className="card-img-top" src={this.props.img} alt="" />
    <div className="card-body">
        <h5 className="card-title float-left">{this.props.ProductName}</h5>
      <h5 className="card-title float-right">{this.props.ProductPrice} $</h5>
    </div>
  </div>
</div>
        );
    }
}

export default Products;