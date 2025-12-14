import React from "react";

function Universe() {
  const logoStyle = { maxHeight: '100px', width: 'auto', display: 'block', margin: '0 auto' };
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h1>The Zerodha Universe</h1>
        <p>Extend your trading and investment experience even further with our partner platforms</p>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/smallcaseLogo.png" alt="smallcase" style={logoStyle}/>
          <p className="text-small text-muted">Thematic investment platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/streakLogo.png" alt="streak" style={logoStyle}/>
          <p className="text-small text-muted">Systematic trading platform that allows you to create and backtest strategies without coding.</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/sensibullLogo.svg" alt="sensibull" style={logoStyle}/>
          <p className="text-small text-muted">Opens trading platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/zerodhaFundhouse.png" alt="Zerodha Fund House" style={logoStyle}/>
          <p className="text-small text-muted">Asset management</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/goldenpiLogo.png" alt="GoldenPi" style={logoStyle}/>
          <p className="text-small text-muted">Bonds trading platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/dittoLogo.png" alt="ditto" style={logoStyle}/>
          <p className="text-small text-muted">Personalized advice on life and health insurance. No spam and no mis-selling.</p>
        </div>
        <button className="p-2 btn btn-primary fs-5 mb-5" style={{width:"180px",margin:"0 auto"}}>Signup Now</button>
      </div>
    </div>
  );
}

export default Universe;