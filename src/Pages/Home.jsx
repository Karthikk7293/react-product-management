import React from 'react'
import { Container, Row ,Col} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function Home() {

    const navigate = useNavigate()

    const handleClick = (value)=>{
        navigate(`/${value}`)
    }

  return (
   <Container >
       <Row className='my-5 '>
           <Col lg={10} className='text-center mx-auto text-uppercase'> <h3>product management</h3></Col>
           <Col lg={4}>
             <div className="add-product-view rounded shadow  text-center py-5 my-5">
                 <h4>add product</h4>
                 <button className='border-0 px-5 py-2 bg-info shadow text-white ' onClick={((e)=>handleClick("add-product"))}>Add Products</button>
             </div>
           </Col>
           <Col lg={4}>  
             <div className="add-product-view rounded shadow text-center py-5 my-5">
                 <h4>remove product</h4>
                 <button className='border-0 px-5 py-2 bg-info shadow text-white' onClick={((e)=>handleClick("remove-product"))}>remove product</button>
             </div>
           </Col>
           <Col lg={4}>
             <div className="add-product-view rounded shadow text-center py-5 my-5">
                 <h4>list product</h4>
                 <button className='border-0 px-5 py-2 bg-info shadow text-white' onClick={((e)=>handleClick("list-product"))}>list Products</button>
             </div>
           </Col>
       </Row>
   </Container>
  )
}

export default Home