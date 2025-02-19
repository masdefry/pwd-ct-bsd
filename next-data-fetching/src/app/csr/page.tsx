'use client';
import { useEffect, useState } from 'react';
import axios from 'axios';

type DataType = { id: number; name: string };
function CSRPage(){
    const [data, setData] = useState<DataType[]>([]);

    useEffect(() => {
        axios
          .get('https://jsonplaceholder.typicode.com/posts')
          .then((response) => {
            setData(response.data);
          })
          .catch((error) => {
            console.log(error)
          });
      }, []);

    return(
        <>
            {
                data?.map((item: any, index: number) => {
                    return(
                        <h1 key={index}>
                            {item.title}
                        </h1>
                    )
                })
            }
        </>
    )
}

export default CSRPage;