import { useState, useEffect } from "react";
import './App.css';
export default function App() {
  const [searchText, setSerchText] = useState("");
  const [products, setProduct] = useState([]);

  useEffect(() => {
    fetch('/fakeData.JSON')
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [searchText]);

  const handleSeacrField = (e) => {
    const searchTextValue = e.target.value;
    setSerchText(searchTextValue);
  };
  return (
    <div className="App">
      <div className="d-flex flex-column justify-content-center align-items-center">
        <h1 style={{ color: '#123456' }} className="mt-3 mb-3">Search Your <span className="text-warning">Mobile</span></h1>
        <div className="input-group w-50 mb-3">
          <input onChange={handleSeacrField} type="text" class="form-control" placeholder="Search....." aria-label="Recipient's username" aria-describedby="button-addon2" />
          <button className="btn btn-outline-dark btn-lg " type="button" id="button-addon2"> <i className="fas fa-search"></i></button>
        </div>
      </div>
      <div class="container">
        <div className="row">
          {
            products.filter((result) => {
              if (searchText === "") {
                return result
              } else if (result.name.toLowerCase().includes(searchText.toLowerCase())) {
                return result
              }
            }).map((product) =>
              <div className="col-md-3 mt-5">
                <div className="card mb-5 border-dark text-center">
                  <div className="card-img-top div-image">
                    <img className="img-fluid" src={product.img} alt="" />
                  </div>
                  <div className="card-body">
                    <h4 className="card-title">{product.name}</h4>
                    <p className="card-text">{product.price}</p>
                    <button className="btn btn-primary w-50">Details</button>
                  </div>
                </div>
              </div>
            )
          }
        </div>
      </div>
    </div>
  );
};
