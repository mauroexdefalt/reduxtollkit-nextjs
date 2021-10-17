import React,{useEffect} from 'react'
import { Container, Small, Large } from "./styles";
import { useSelector, useDispatch } from 'react-redux';
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
  addToCart,
} from '../../redux/carrinho.slice';

import CategoryCard from '../../componentes/CategoryCard'

export default function Home() {

    const carrinho = useSelector((state) => state.cart);
    const dispatch = useDispatch();


    useEffect(() => {
          
    }, [])


    return (
        <Container>
            <button onClick={()=>{dispatch(addToCart())}}>  teste</button>
            {carrinho.value}
       
            <Small>

                <CategoryCard image="https://imgur.com/uKQqsuA.png" name="Xbox" />
                <CategoryCard image="https://imgur.com/3Y1DLYC.png" name="PS5" />
                <CategoryCard image="https://imgur.com/Dm212HS.png" name="Switch" />
            </Small>
            <Large>
                <CategoryCard image="https://imgur.com/qb6IW1f.png" name="PC" />
                <CategoryCard
                    image="https://imgur.com/HsUfuRU.png"
                    name="Accessories"
                />
            </Large>



        </Container>
    )



}




