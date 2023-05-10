import React from "react";
import FilterMenu from "./components/FilterMenu";
import CardWrapper from "./components/CardWrapper";
import { tileData2 } from "./components/data";

function EventsPage() {
  return (
    <div className="parent">
      <FilterMenu type={true} />
      <CardWrapper title={false} images={tileData2} />
    </div>
  );
}

export default EventsPage;
