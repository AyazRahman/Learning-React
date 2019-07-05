import React from "react";

const Spinner = props => {
  return (
    <div class="ui active dimmer" bis_skin_checked="1">
      <div class="ui text loader" bis_skin_checked="1">
        {props.msg}
      </div>
    </div>
  );
};

Spinner.defaultProps = {
  msg: "Loading..."
};

export default Spinner;
