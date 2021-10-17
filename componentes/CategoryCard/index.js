import { Card, ContainerImage, Info } from './styles'
import Link from 'next/link';
import Image from 'next/image';


export default function CategoryCard({ image, name }) {

    return (
       
        <Card image={image}>               

            <Info>
                <h5>{name}</h5>            
            </Info>
        </Card>
       

    )
}