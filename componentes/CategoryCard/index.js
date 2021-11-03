import React, { useEffect, useState } from 'react'
import { Card, ContainerImage, Info } from './styles'
import Link from 'next/link';
import Image from 'next/image';


export default function CategoryCard(props) {

    const color =
    {
        "Normal": '#EEE8ED',

        "Fighting": '#B9812A',

        "Flying": "#95D8E7",

        "Poison": "#BE39E5",

        "Ground": "#6C4414",

        "Rock": "#524B4A",

        "Bug": "#42761C",

        "Ghost": "#3B0A50",

        "Steel": '#D1D1D1',

        "Fire": "#C81616",

        "Water": "#15C0F2",

        "Grass": "#3AC80C",

        "Electric": "#E2E975",

        "Psychic": "#9C75E9",

        "Ice": "#C1FBFD",

        "Dragon": "#AD4760",

        "Dark": "#282525",

        "Fairy": "#EF99F7",

    }


    const { im, data } = props;

    useEffect(() => {


    }, [])

    var randomColor = require('randomcolor');



    return (
        <Card image={im} colorBack={color[data?.type[0]]}>
            <Info>
                <h5>{data?.name?.english}</h5>
            </Info>
        </Card>


    )
}
