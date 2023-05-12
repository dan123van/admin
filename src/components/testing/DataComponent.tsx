import React, { useEffect, useState } from 'react'
import AdminComponent from './AdminComponent';
import axios from 'axios'

const DataComponent = () => {
    const [data, setData] = useState([]);

    useEffect(() => {

        const fetchData = async () => {
            const result = await axios.get(process.env.URLBACKEND + '/admin')
            setData(result.data)
        }
        
        fetchData()
    }, [])

return <AdminComponent data={data}/>
}

export default DataComponent