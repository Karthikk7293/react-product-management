import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import { EMPTY_PRODUCT } from '../images'
import { addProducts } from '../Redux/Action'

function AddProductScreen() {
    const [value, setValue] = useState([])
    const [view,setView] = useState(true)
    const dispatch = useDispatch()
    const [result, setResult] = useState([])
    const [products, setProducts] = useState([])

    const { register, handleSubmit, formState: { errors } } = useForm();
    
    const  [limit,setLimit] = useState(2)


    const handleClick = (e) => {
        let component = []
        setView(!view)
        e.preventDefault()
        for (let i = 0; i < limit; i++) {
            component.push({ id: i + 1, name: "", price: "" })
        }
        setValue(...value, component)
    }
   

    const onSubmit = data => {


        let name, code, qty, pro
        let chec = []
        for (let i = 0; i < limit; i++) {
            name = data[`ProductName ${i}`]
            code = data[`ProductCode ${i}`]
            qty = data[`Quantity ${i}`]
            pro = { 'proname': name, 'procode': code, 'qty': qty }
            chec.push(pro)
            

        }
        console.log(chec);

        dispatch(addProducts(chec))
        setProducts(chec)
        setLimit(0)

    }

   
    return (
        <Container className='border' style={{minHeight:"100vh"}} >
            <Row className='my-3 mx-auto border'>
                <h2 className='text-center' onClick={handleClick}>Add Products</h2>
            </Row>
            <form action="" onSubmit={handleSubmit(onSubmit)}>
                <Row className='my-3 mx-auto border d-flex justify-content-between px-2 ' style={{minHeight:"75vh"}}>
                    {value.map((val, index) => (

                        <Col className=' mx-2 my-3 rounded shadow p-4' key={index} lg={3}>

                            <Row className='m-2 my-4'>
                                <label htmlFor="">Product Code</label>
                                <input type="text" className=' p-1' {...register(`ProductCode ${index}`, { required: true })} placeholder='Enter Product Code' />
                            </Row>
                            <Row className='m-2 my-4'>
                                <label htmlFor="">Product Name</label>
                                <input type="text" className=' p-1' {...register(`ProductName ${index}`, { required: true })} placeholder='Enter Product Name' />
                            </Row>
                            <Row className='m-2 my-4'>
                                <label htmlFor="">Product Quanity</label>
                                <input type="number" className=' p-1' {...register(`Quantity ${index}`, { required: true })} placeholder='Enter Product Quanity' />
                            </Row>

                        </Col>
                    ))}
                    <div className='text-center'>
                       {view && <img className='w-50' src={EMPTY_PRODUCT} alt="" /> } 
                    </div>
                    
                </Row>
                

                <Row className='mb-3'>
                {!view && <button className="w-25 mx-auto border-0 bg-success py-2 px-0 text-white">create Product</button> } 
                        
                    </Row>
            </form>
        </Container>
    )
}

export default AddProductScreen