import React from "react";
import { useParams } from "react-router";


export default function User() {

    const {userid} = useParams()


    return(
        <div className="text-center bg-gray-500 p-4 text-xl">User: {userid}</div>
    )
}