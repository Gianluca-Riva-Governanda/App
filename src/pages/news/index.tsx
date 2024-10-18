import React, { memo } from "react";
import { AppHead } from "@/components/AppHead";

type NewsProps = {};

const News = memo(({}: NewsProps) => {
  return (
    <>
      <AppHead title="News" description="" />
      <p>Qui si possono trovare le news</p>
    </>
  );
});
News.displayName = "News";

export default News;
