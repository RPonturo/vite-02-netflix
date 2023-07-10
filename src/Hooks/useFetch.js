import { useEffect, useState } from "react";

const useFetch = (url, defaultData) => {
    const [data, setData] = useState(defaultData);
    const key = `?api_key=${
        import.meta.env.VITE_API_KEY
    }&language=it-IT&include_image_language=it,en,null`;
    useEffect(() => {
        fetch(url + key)
            .then((res) => res.json())
            .then((data) => setData(data))
            .catch((err) => console.log(err));
    }, [url]);

    return { data };
};

export default useFetch;
