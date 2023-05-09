import React, { useEffect, useState } from 'react'
import AdminComponent from './AdminComponent';
import axios from 'axios'

const DataComponent = () => {
    const [data, setData] = useState([]);

    useEffect(() => {

        const fetchData = async () => {
            const result = await axios.get('https://rich-tan-panther-veil.cyclic.app/admin/1')
            console.log('result ', result);
            setData(result.data)
        }
        
        fetchData()
    }, [])

return <AdminComponent data={data}/>
}

export default DataComponent