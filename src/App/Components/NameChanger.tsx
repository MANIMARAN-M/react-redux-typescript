import React, { useState, FC, FormEvent } from "react";
import { Link } from "react-router-dom";

interface NameDetails {
  name: string;
  onName: any;
}

const NameChanger: FC<{}> = (): JSX.Element => {
  const [Names, setNames] = useState<NameDetails>({
    onName: "",
    name: "",
  });
  const InputHandle = (e: FormEvent<HTMLInputElement>): void => {
    setNames({ ...Names, onName: e.currentTarget.value });
  };
  const NameHandle = (): void => {
    setNames({ ...Names, name: Names.onName });
  };

  console.log("render 2");
  return (
    <div className="HomeInputSection" data-testid="inputtest-1">
      <div>
        <h1 data-testid="inputtest-2">Enter somthing here</h1>
        <input
          type="text"
          value={Names.onName}
          onChange={(e) => InputHandle(e)}
        />
        <button onClick={NameHandle}>Enter</button>
        <h4>Result:</h4>
        <h3>{Names.name}</h3>
        <Link to="/listuser">
          <button className="LinkBtnUser">Go to User Page</button>
        </Link>
        <Link to="/reduxfetch">
          <button className="LinkBtnUser">Go to Redux Page</button>
        </Link>
      </div>
    </div>
  );
};

export default NameChanger;
