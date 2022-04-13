import React from 'react'
import {publications} from "@assets/constants/Publications"
const PublicationCard = () => {
    return (
        <>
        {publications.map((publication, idx) =>(
            <div key={publication?.title || idx} className=" w-full my-8 p-4 border rounded shadow-lg bg-mantis-950">
            <p className="text-base leading-relaxed px-4"><span className="font-semibold mr-4 text-mantis-700">Title:</span>{publication?.title || ""} </p>
            <p className="text-base leading-relaxed px-4"><span className="font-semibold mr-4 text-mantis-700">Contributors:</span>{publication?.team || ""}</p>
            <p className="text-base leading-relaxed px-4"><span className="font-semibold mr-4 text-mantis-700">Citation:</span> {publication?.citation|| ""}</p>
            <p className="  text-base leading-relaxed px-4 w-full"><span className="font-semibold mr-4 text-mantis-700">Available from:</span> <a href={publication?.link || ""} className="border text-blue-700 break-words">{publication?.link || ""}</a></p>
        </div>
        ))}
        </>
    )
}

export default PublicationCard