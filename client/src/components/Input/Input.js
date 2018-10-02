import React from "react";

// This component lets us use a bootstrap input element without worrying about class names
// or manually wrapping the input with a form-group div
// All of the props passed to this component are spread onto the input element
const Input = props => (
  <form className="search-form">
    <div className="input" id="topic-input">

    </div>
    <div className="input" id="startyear-input">
      
    </div>
    <div className="input" id="endyear-input">
      
    </div>
  
  </form>
  <div className="input-group input-group-lg">
    <input className="form-control" type="text" {...props} />
  </div>
);

export default Input;
