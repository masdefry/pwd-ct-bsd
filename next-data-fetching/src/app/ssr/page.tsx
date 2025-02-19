async function fetchData() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
      cache: 'no-store',
    });
  
    if (!res.ok) {
      throw new Error('Failed Fetching Data');
    }
  
    return res.json();
}

async function SSRPage(){
    const data = await fetchData();
    console.log(data)

    return(
        <>
            {
                data.map((item: any, index: number) => {
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

export default SSRPage;