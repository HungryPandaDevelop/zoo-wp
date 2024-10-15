import { useState, useCallback } from "react";
import { useDispatch } from "react-redux";


export function useThunk(thunk) {
  const [isLoading, setIsLoaing] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const dispatch = useDispatch();

  const runThunk = useCallback((arg) => {
    setIsLoaing(true);
    dispatch(thunk(arg))
      .unwrap()
      .then(res => setData(res))
      .catch(err => setError(err))
      .finally(() => {
        setIsLoaing(false)
      })
  }, [dispatch, thunk])

  return [runThunk, isLoading, error];
}