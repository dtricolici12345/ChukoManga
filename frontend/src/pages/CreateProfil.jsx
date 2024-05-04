/* eslint-disable react/button-has-type */
// import React, { useState } from "react";
import Adresse from "../components/DetailsPersonalAndAdrees/Adresse";
import DetailsPersonal from "../components/DetailsPersonalAndAdrees/DetailsPersonal";
import "../components/DetailsPersonalAndAdrees/DetailsPersonal.css";

function CreateProfil() {
  return (
    <div className="container_of_createprofil">
      <h1 className="title_of_create_profil">Modifier ton profil</h1>
      <DetailsPersonal />
      <Adresse />
    </div>
  );
}

export default CreateProfil;
