import React, { useEffect, useState } from "react";

export default function Github(){

    const [data  , setData] = useState({})

    useEffect(() => {
        fetch('https://api.github.com/users/hiteshchoudhary')
        .then(res => res.json())
        .then((data) => {setData(data)})
    } , [])


    return(
        <>
        <div className="bg-green-500 p-4 text-center text-xl">GITHUB followers : {data.followers}</div>
        <img src={data.avatar_url} alt="Git picture" />
        </>
    )
}