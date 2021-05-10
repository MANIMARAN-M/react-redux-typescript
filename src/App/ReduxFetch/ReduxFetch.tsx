import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { getData } from "../store/Actions/DataAction";
import { DataMainType } from "../store/BigStore";
import axios from "axios";
import {
  DATA_FETCH_FAILED,
  DATA_FETCH_LOADING,
  DATA_FETCH_SUCCESS,
} from "../store/Actions/DataActionTypes";

const ReduxFetch: FC<{}> = () => {
  const dispatch = useDispatch();
  const MainData = useSelector((state: DataMainType) => state.Data);

  useEffect((): void => {
    dispatch({
      type: DATA_FETCH_LOADING,
    });
    axios("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        dispatch({
          type: DATA_FETCH_SUCCESS,
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: DATA_FETCH_FAILED,
          payload: err.message,
        });
      });
    // dispatch(getData());
  }, []);

  console.log("render 1");
  return (
    <div>
      {MainData.errorMessage?.length === 0 ? null : (
        <p>{MainData.errorMessage}</p>
      )}
      {MainData.loading ? (
        <div>
          <p>Loading</p>
        </div>
      ) : (
        MainData.data.map((datas: any) => {
          return (
            <div key={datas.id}>
              <p>{datas.name}</p>
            </div>
          );
        })
      )}
    </div>
  );
};

export default React.memo(ReduxFetch);
