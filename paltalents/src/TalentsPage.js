import React from "react";
import FilterMenu from "./components/FilterMenu";
import CardWrapper from "./components/CardWrapper";
import { tileData } from "./components/data";

function TalentsPage() {
  return (
    <div className="parent">
      <FilterMenu type={false} />
      <CardWrapper title={true} images={tileData} />
    </div>
  );
}

export default TalentsPage;
