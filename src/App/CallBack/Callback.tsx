import React, { FC, useCallback, useState } from "react";
import Button from "./CallbackFiles/Button";
import Count from "./CallbackFiles/Count";
import Ttile from "./CallbackFiles/Ttile";

const Callback: FC<{}> = (): JSX.Element => {
  const [age, setage] = useState(25);
  const [salary, setsalary] = useState(50000);
  const increment = useCallback(() => {
    setage(age + 1);
  }, [age]);
  const decrement = useCallback(() => {
    setsalary(salary + 1000);
  }, [salary]);
  return (
    <div>
      <Ttile />
      <Count text="Age" count={age} />
      <Button handlechange={increment}>Increment</Button>
      <Count text="Salary" count={salary} />
      <Button handlechange={decrement}>Decrement</Button>
    </div>
  );
};

export default Callback;
