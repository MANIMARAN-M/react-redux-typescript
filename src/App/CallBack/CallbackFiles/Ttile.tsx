import React, { FC } from "react";

const Ttile: FC = (): JSX.Element => {
  console.log("Rendering Title");
  return <h4>useCallback Hook</h4>;
};

export default React.memo(Ttile);
