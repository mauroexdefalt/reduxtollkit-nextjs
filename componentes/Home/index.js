import React, { useEffect, useState } from 'react'
import { Container, Small, Large } from "./styles";
import { useSelector, useDispatch } from 'react-redux';
import {
    incrementQuantity,
    decrementQuantity,
    removeFromCart,
    addToCart,
} from '../../redux/carrinho.slice';
import axios from 'axios';

import CategoryCard from '../../componentes/CategoryCard'

export default function Home() {

    const [arr, setArr] = useState([])
    const [data, setData] = useState([])
    const [count, setCount] = useState(10)



    useEffect(() => {
        axios.get('http://localhost:5000/pokemon').then((res) => {
            setArr(res.data)
            setData(res.data.filter((item, index) => index <= count))
        })

    }, [])

    useEffect(() => {
        setData(arr.filter((item, index) => index <= count))
      
    }, [count])


    useEffect(() => {
        const intersectionObserver = new IntersectionObserver(entries => {
            if (entries.some(entry => entry.isIntersecting)) {
                console.log('fui observado', entries.some(entry => !entry.isIntersecting))
                
                
                
                    
                    setCount((count) => count + 40);
            
            }
        })
        intersectionObserver.observe(document.querySelector('#sentinela'));
        return () => intersectionObserver.disconnect();
    }, []);





    function details(e) {

        console.log(e)

    }


    function replacer(e, item) {


        if (String(e).length === 1) {
            return (
              
                    <CategoryCard key={e} im={`http://localhost:3000/images/00${e}.png`} data={item} />
               
            )
        }

        if (String(e).length === 2) {
            return (
              
                    <CategoryCard key={e} im={`http://localhost:3000/images/0${e}.png`} name="Xbox" data={item} />
               
            )
        }

        return (
          
                <CategoryCard key={e} im={`http://localhost:3000/images/${e}.png`} name="Xbox" data={item} />
          
        )
    }





    return (
        <Container>
         

            {count}<br />
            {data.length}
            <Small>
                {data ? data.map((item, index) =>


                    replacer(index + 1, item)


                ) :
                    ''
                }
            </Small>
          
            <div style={{
                display: 'flex',                
                width: '100%',
                alignItems: 'center',
                justifyContent: 'center',
                background: '#181b1d'
            }}
            id="sentinela">
                <img height='200px' src={'http://localhost:3000/load_pokeball.gif'} />
            </div>
        </Container >
    )

}




