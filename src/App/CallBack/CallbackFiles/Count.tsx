import React, { FC } from "react";

interface CountProps {
  count: number;
  text: string;
}
const Count: FC<CountProps> = ({ count, text }): JSX.Element => {
  console.log(`rendering ${text} `);
  return (
    <div>
      {text}, {count}
    </div>
  );
};

export default React.memo(Count);
