import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux';

const array = [
    {id:1,name:"product 1",price:100,quantity:20},
    {id:1,name:"product 1",price:100,quantity:20},
    {id:1,name:"product 1",price:100,quantity:20},
    {id:1,name:"product 1",price:100,quantity:20},
    {id:1,name:"product 1",price:100,quantity:20},
    {id:1,name:"product 1",price:100,quantity:20},
    {id:1,name:"product 1",price:100,quantity:20},


]

function ListProductScreen() {

    const [data,setData] = useState()
    const {allProducts} = useSelector((state)=>state.products)
useEffect(() => {
   console.log('hai');

    if(allProducts){
        console.log("------------");
        setData(allProducts)
}

  
}, [allProducts])


    return (
        <Container>
            <Row className='text-center text-uppercase my-5'>
                <h2>all Products</h2>
            </Row>
            <Row>
                <Col className='border shadow mx-auto' lg={10}>
                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">No</th>
                                <th scope="col">Product Code</th>
                                <th scope="col">Product Name</th>
                                <th scope="col">Quantity</th>
                            </tr>
                        </thead>
                        <tbody>
                            
                            { allProducts && allProducts.map((data,index)=>(
                                 <tr key={data.id} >
                                 <th scope="row">{index+1}</th>
                                 <td> {data.name}</td>
                                
                                 <td>{data.quantity}</td>
                             </tr>

                            ))}
                           
                           
                            
                        </tbody>
                    </table>
                </Col>
            </Row>
        </Container>
    )
}

export default ListProductScreen