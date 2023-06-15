import React, { useState,useEffect } from 'react';
import * as Yup from 'yup'
import styled from 'styled-components';
import imgUrl  from '../src/mvp-banner.png'
import { Link } from 'react-router-dom';
import 'react-dropdown/style.css';
import PropTypes from 'prop-types';


const Div= styled.div `
background-color:#CE2829;
padding-top:0;
margin-top:0;
`
const Div1= styled.div `
background-color:#CE2829;
padding-top:0;
margin-top:0;

    `
const Div2= styled.div `
background-image:url(${imgUrl});
height:16vw;
width:75vw;
background:cover
margin:auto;

    `

const H1=styled.h1 `
padding-top:70px;
display:flex;
fontFamily: 'Barlow':
margin-inline-start: 15px;
height: 100%;
color:white;
text-align:center;
align-items:center;
justify-content:center;
`;
const H2=styled.h1 `
display:flex;
margin-inline-start: 15px;
height: 100%;
color:white;
text-align:center;
align-items:center;
justify-content:center;
font-size:45px;
font-family: Quattrocento;
margin-top:150px
`;
const Button1 = styled.button`
  background-color: #FDC913;
  border-radius: 5px;
  border-style: solid;
  border-color:#FDC913;
  margin-left:600px;
  font-size:20px;
  margin-bottom:20px;
  margin-top:60px;
`;


export function SiparisSuccess(){


    return(
    <Div>
            <Div1  >
      <H1>Teknolojik Yemekler   
                </H1>
                < H2>

                    TEBRIKLER!
                    <br/>
                    SIPARIŞINIZ ALINDI
                </H2>
              
              
              

               
                  
                <Div2>
               
                <Link to={`/pizza`}>
                <Button1 id='order-pizza'>
                    TEKRAR ACIKTIM
                </Button1>
                </Link>
           
              </Div2>
      
            </Div1>
            </Div>
        
    )
}