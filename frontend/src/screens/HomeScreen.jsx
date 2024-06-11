import React from 'react'
import Header from '../components/Header'
import asideimg from '../assets/asideimg.png'
import {Row, Col, Button} from 'react-bootstrap'
import cartoon from '../assets/cartoon.png'


const HomeScreen = () => {
  return (
    <>
    <body md={8}>
      <img src={asideimg} alt="img" style={{position:'absolute', right:'0px', width:'1061px', height:'550px'}} />
    </body>
    <Header/>
    <Row style={{position:"relative", left:'20px', top:'30px'}}>
      <Col md={6}>
      <p style={{fontWeight:'bolder', color:'black', fontSize:'50px', fontFamily:'roboto'}}>
        We help people to get Appointment Online
      </p>
      <Col md={6}>
      <p style={{color:'black'}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum inventore modi nisi temporibus. Aliquid dolorem similique cum voluptatibus ducimus, odio provident dignissimos officia, ad distinctio dicta eaque beatae, atque animi?</p>
      </Col>
      
      <Button  variant='outline-light ' style={{borderRadius:'3px'}} >
        Tour
      </Button>
      </Col>
      
    </Row>
    <Row style={{position:'relative', top:'80px', left:"20px"}}>
      <Col md={6}>
        <img src={cartoon} alt="cartoon" style={{width:'550px', height:'550px'}} />
      </Col>
      <Col md={6} style={{position:'relative', top:'55px'}}>
      <h6 style={{color:'black'}}>Biography</h6>
      <h3 style={{color:'black'}}>Who we are</h3>
      <span style={{color:'black'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto suscipit esse dolorem non accusantium accusamus dolores, pariatur quasi corrupti. Suscipit nesciunt minus voluptas, animi aspernatur adipisci optio similique voluptatum nulla.</span>
      <br />
      <br />
      <span style={{color:'black'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. </span>
      <br />
      <br />
      <span style={{color:'black'}}>We are your social media marketting agency</span>
      </Col>
    </Row>
    </>
  )
}

export default HomeScreen