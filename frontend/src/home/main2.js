import { useState, useEffect } from "react"
import axios from "axios"
import '../App.css'
import Naav from "./navbar"
import { Button, Carousel } from 'react-bootstrap';
function Shopnew(){
    const [data,setData] = useState([])
    useEffect(()=>{
      axios.get('http://localhost:5288/getallproduts').then((res)=>{
        setData(res.data)
      })
    })
    
    return(
        <>
        
            <Naav />
            <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="wp1.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="wp7.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="wp3.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
    <br></br>
    <h1 className="App">Latest Anime</h1>
            <div className="products-list">
            {
              data.map((ele,i)=>{
                return (
                  <div className="card1" key={i}>
                    <img src={`http://localhost:5288/images/${ele.productpic}`} alt="" />
                    <p>{ele.title}</p>
                    <p>{ele.description}</p>
                    <p>{ele.category}</p>
                    <Button href="https://aniwatch.to/watch/one-piece-film-red-18236?ep=96071">Watch Now</Button>
                  </div>
                )
            })
          }




          
          </div>
            
        </>
    )
}
export default Shopnew