import { useState, useEffect } from 'react'

export default function Game() {
    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(false)

    const fetchData = async () => {
        setLoading(true)
        fetch('/api/getAllClass')
            .then((res) => res.json())
            .then((data) => {
                setData(data)
                console.log(data)
                setLoading(false)
            })
    }

    return (
        <div>
            <button onClick={fetchData} className='bg-white'>Fetch Data</button>
            {
                data ? <p>Loading...</p> : <p>{data}</p>
            }
        </div>
    )
}