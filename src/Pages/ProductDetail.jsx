import { useParams } from "react-router-dom"
import axios from 'axios'
import { useState , useEffect } from "react"

const ProductDetail =()=>{
    
    const {id}= useParams()
    const [productDetail, setProductDetail ]= useState({})
    useEffect(()=>{

    },[])
    
    const getDetail=()=>{
        axios
        .get(`https://e-commerce-api-v2.academlo.tech/api/v1/products/${id}/`)
        .then(resp=>{
            console.log(resp.data)
            setProductDetail(resp.data)
        })
        .catch(error=>console.error(error))
    }
    return(
        <main>
            <h1>{productDetail.title}</h1>
        </main>
    )
}
export default ProductDetail