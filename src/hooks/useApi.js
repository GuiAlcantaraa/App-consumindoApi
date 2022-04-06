import { useEffect, useState } from "react";
import axios from "axios";

export function useApi(url) {

    const [data, setData] = useState(null)

    useEffect(() => {
        axios.get(url)
            .then((response) => {
                setData(response.data)
            })
            .catch(error => console.log(error));
    }, []);

    return { data }
}