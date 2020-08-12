import React from "react";

const ReporteCliente = () => {
  return (
    <>
      <div className="card">
        <div className="card-body">
          <h3 className="font-16">Sorting By</h3>
          <select className="form-control">
            <option>Followers</option>
            <option>Followers</option>
          </select>
        </div>
        <div className="card-body border-top">
          <h3 className="font-16">Influncer by Rating</h3>
          <div className="custom-control custom-radio">
            <input
              type="radio"
              id="customRadio1"
              name="customRadio"
              className="custom-control-input"
            />
            <label className="custom-control-label" for="customRadio1">
              <i className="fas fa-star rating-color fa-xs"></i>
            </label>
          </div>
          <div className="custom-control custom-radio">
            <input
              type="radio"
              id="customRadio2"
              name="customRadio"
              className="custom-control-input"
            />
            <label className="custom-control-label" for="customRadio2">
              <i className="fas fa-star rating-color fa-xs"></i>
              <i className="fas fa-star rating-color fa-xs"></i>
            </label>
          </div>
          <div className="custom-control custom-radio">
            <input
              type="radio"
              id="customRadio3"
              name="customRadio"
              className="custom-control-input"
            />
            <label className="custom-control-label" for="customRadio3">
              <i className="fas fa-star rating-color fa-xs"></i>
              <i className="fas fa-star rating-color fa-xs"></i>
              <i className="fas fa-star rating-color fa-xs"></i>
            </label>
          </div>
          <div className="custom-control custom-radio">
            <input
              type="radio"
              id="customRadio4"
              name="customRadio"
              className="custom-control-input"
            />
            <label className="custom-control-label" for="customRadio4">
              <i className="fas fa-star rating-color fa-xs"></i>
              <i className="fas fa-star rating-color fa-xs"></i>
              <i className="fas fa-star rating-color fa-xs"></i>
              <i className="fas fa-star rating-color fa-xs"></i>
            </label>
          </div>
          <div className="custom-control custom-radio">
            <input
              type="radio"
              id="customRadio5"
              name="customRadio"
              className="custom-control-input"
            />
            <label className="custom-control-label" for="customRadio5">
              <i className="fas fa-star rating-color fa-xs"></i>
              <i className="fas fa-star rating-color fa-xs fa-xs"></i>
              <i className="fas fa-star rating-color fa-xs fa-xs"></i>
              <i className="fas fa-star rating-color fa-xs fa-xs"></i>
              <i className="fas fa-star rating-color fa-xs fa-xs"></i>
            </label>
          </div>
        </div>
        <div className="card-body border-top">
          <h3 className="font-16">Social Media Platform</h3>
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck10"
            />
            <label className="custom-control-label" for="customCheck10">
              Facebook
            </label>
          </div>
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck11"
            />
            <label className="custom-control-label" for="customCheck11">
              Instagram
            </label>
          </div>
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck12"
            />
            <label className="custom-control-label" for="customCheck12">
              Pinterest
            </label>
          </div>
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck13"
            />
            <label className="custom-control-label" for="customCheck13">
              Twitter
            </label>
          </div>
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck14"
            />
            <label className="custom-control-label" for="customCheck14">
              Youtube
            </label>
          </div>
        </div>
        <div className="card-body border-top">
          <h3 className="font-16">Influncer Category</h3>
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck15"
            />
            <label className="custom-control-label" for="customCheck15">
              Business
            </label>
          </div>
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck16"
            />
            <label className="custom-control-label" for="customCheck16">
              Lifestyle
            </label>
          </div>
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck17"
            />
            <label className="custom-control-label" for="customCheck17">
              Fitness
            </label>
          </div>
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck18"
            />
            <label className="custom-control-label" for="customCheck18">
              Sports
            </label>
          </div>
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck19"
            />
            <label className="custom-control-label" for="customCheck19">
              Clothing
            </label>
          </div>
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck20"
            />
            <label className="custom-control-label" for="customCheck20">
              Pets &amp; Animals
            </label>
          </div>
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck21"
            />
            <label className="custom-control-label" for="customCheck21">
              Beauty &amp; Makeup
            </label>
          </div>
        </div>
        <div className="card-body border-top">
          <h3 className="font-16">Age Demographics</h3>
          <select className="form-control">
            <option selected="">Select the Age</option>
            <option value="20-30">20-30</option>
            <option value="30-40">30-40</option>
            <option value="40-50">40-50</option>
          </select>
        </div>
        <div className="card-body border-top">
          <a href="#" className="btn btn-secondary btn-lg btn-block">
            Submit
          </a>
        </div>
      </div>
    </>
  );
};

export default ReporteCliente;
