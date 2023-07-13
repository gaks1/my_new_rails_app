import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMessage } from '../redux/greetings/greetingsSlice';
import { useEffect } from 'react';


const Greeting = () => {
    const { message, loading, fetched, error } = useSelector(
        (state) => state.greetings
    );
    const dispatch = useDispatch();

    useEffect(() => {
        if(!fetched) {
            dispatch(fetchMessage());
        }
    }, [dispatch, fetched]);
    
    if (loading) {
        return (
          <p>Loading...</p>
        );
      }

    return (
        <>
        <h1>Home</h1>
        <p>{message}</p>
        </>
    );
}

export default Greeting;