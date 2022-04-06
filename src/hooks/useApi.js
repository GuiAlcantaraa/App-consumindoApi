import { useEffect, useState } from "react";
import axios from "axios";
import api from '../services/api'


export function useApi(url) {

    const [data, setData] = useState(null)

    useEffect(() => {
        api.get(url)
            .then((response) => {
                setData(response.data)
            })
            .catch(error => console.log(error));
    }, []);

    return { data }
}