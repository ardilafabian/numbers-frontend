import React from "react";
import Loader from "react-loader-spinner";
import "@assets/styles/components/LoaderCircle.scss";

const LoaderCircle = () => (
  <section className="LoaderCircle">
    <Loader type="Puff" color="#3483FA" height={100} width={100} />
  </section>
);
export default LoaderCircle;
