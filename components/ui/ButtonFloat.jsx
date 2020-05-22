import React from 'react';

const ButtonFloat = () => {
    return ( 
        <>

        <div className="cards">
        </div>

        <a href="#!">
        <div className="floating-button btn-primary" href="#toast" data-toggle="toast" data-toast-posy="top" data-toast-posx="right" data-toast-inner="You have added a new element" data-toast-delay="5" >+</div>
        <style>{`
        .floating-button {
          position: fixed;
          z-index: 100;
          width: 50px;
          height: 50px;
          color: #FFF;
          font-size: 2em;
          border-radius: 50%;
          top: 30vh;
          right: 10%;
          margin-top: -25px;
          display: -webkit-box;
          display: -moz-box;
          display: -ms-flexbox;
          display: -webkit-flex;
          display: flex;
          -webkit-align-items: center;
          align-items: center;
          -webkit-justify-content: center;
          justify-content: center;
          -webkit-flex-direction: column;
          flex-direction: column;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.26);
          -moz-box-shadow: 0 2px 5px rgba(0, 0, 0, 0.26);
          -webkit-box-shadow: 0 2px 5px rgba(0, 0, 0, 0.26);
          -webkit-transition: all 0.3s linear;
          -o-transition: all 0.3s linear;
          -moz-transition: all 0.3s linear;
          -ms-transition: all 0.3s linear;
          -kthtml-transition: all 0.3s linear;
          transition: all 0.3s linear;
}

.floating-button:hover {
  box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.3);
  -webkit-box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.3);
  margin-top: -30px;
}

.floating-button:active {
  box-shadow: 0 10px 15px 0 rgba(0, 0, 0, 0.4);
  -moz-box-shadow: 0 10px 15px 0 rgba(0, 0, 0, 0.4);
  -webkit-box-shadow: 0 10px 15px 0 rgba(0, 0, 0, 0.4);
  margin-top: -32px;
  background: #EC407A;
}

@media screen and (max-width: 768px) {
  header {
    height: 50vh;
  }
  .floating-button {
    top: 90vh;
    bottom: 10px;
    right: 10px;
    
  }
@media screen and (max-width: 1200px) {
  .floating-button {
    right: 10px;
    top:90vh;
  }
}
`}</style>
        </a>
        </>
     );        
}
 
export default ButtonFloat;