import React from "react";
import { ButtonCustom } from "../../components/button";
import Icon from "../../utils/icomoon";

import "./promotion.scss";

export const PromoCard = (props) => {
  const ViewButton = (
    <ButtonCustom type="ghost view-button" btnClass="d-flex align-items-center">
      {props.LinkText}
      <Icon icon="arrow-right" size={12} className="ml-2" />
    </ButtonCustom>
  );

  return (
    <div className="col col-sm-6 col-md-4 mb-4 mb-md-0">
      <div className="card">
        <h3>{props.title}</h3>
        <p>{props.content}</p>
        {ViewButton}
      </div>
    </div>
  );
};
