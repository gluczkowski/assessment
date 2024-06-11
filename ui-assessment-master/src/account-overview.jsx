import React from "react";

import CardHeadSupport from "./CardHeadSupport";
import SalesCard from "./SalesCard";
import SummaryCard from "./SummaryCard";
import { getPercentual } from "./Utils/Utils"
import "./account-overview.css";

export const AccountOverview = ({ data }) => {

  return (
    <>
      <CardHeadSupport data={data} />
      <SalesCard data={data.salesOverview}>
        <SummaryCard percent={getPercentual(data.salesOverview.successfulUploads, data.salesOverview.uploads)} text="UPLOAD SUCCESS" />
        <SummaryCard percent={getPercentual(data.salesOverview.linesSaved, data.salesOverview.linesAttempted)} text="LINES SAVED" />
      </SalesCard>
    </>
  );
};

export default AccountOverview;
