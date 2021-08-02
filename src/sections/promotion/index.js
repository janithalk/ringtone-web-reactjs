import React from "react";
import { PromoCard } from "./PromoCard";

class Promotion extends React.Component {
  render() {
    return (
      <section className="promotion">
        <div className="container">
          <div className="row">
            <PromoCard
              title="Packages"
              content="Lorem ipsum dolor sit ametd."
              LinkText="View packages"
            />
            <PromoCard
              title="Gift to friend"
              content="Lorem ipsum dolor sit ametd."
              LinkText="Learn more"
            />
            <PromoCard
              title="Summer Release"
              content="Lorem ipsum dolor sit ametd."
              LinkText="Browse more"
            />
          </div>
        </div>
      </section>
    );
  }
}

export default Promotion;
