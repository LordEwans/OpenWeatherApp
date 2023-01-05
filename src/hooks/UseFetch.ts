import { useState, useEffect } from 'react';

interface Data {
    current?: {
        temperature: number
    },
    success?: boolean,
    error?: object
}

const useFetch = (func: Function, data: Data) => {
    return (data.success == undefined) ? func() : null;
}

export default useFetch;