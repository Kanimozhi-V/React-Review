import React, { useEffect, useState } from 'react'

function useDebounce(value,delay) {

    const [debouncedValue,setDebouncedValue] = useState(value);
    useEffect(()=>{
        const timeOutHandler = setTimeout(()=>{
            setDebouncedValue(value);
        },delay);

        console.log("time: "+delay)

        return() => clearTimeout(timeOutHandler)

    },[value,delay]);

  return debouncedValue;
}

export default useDebounce