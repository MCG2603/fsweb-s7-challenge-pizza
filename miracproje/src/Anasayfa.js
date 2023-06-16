import React, { useState,useEffect } from 'react';
import * as Yup from 'yup'
import styled from 'styled-components';
import imgUrl  from '../src/mvp-banner.png'
import { Link } from 'react-router-dom';
import 'react-dropdown/style.css';
import PropTypes from 'prop-types';
import "./Anasayfa.css";

export function Anasayfa(){




    return(
    <div class='connn5'>
        <div class='connn'>
      <h1>Teknolojik Yemekler   
                </h1>
                </div>
                <div class='connn1'>
                    <div>
                    <span class='spannn'>

                        KOD ACIKTIRIR
                    </span>

                    </div>
               
              <div>
               <span class='spannn'>

                      PİZZA,DOYURUR
                         </span>
                         </div>
                          </div>


                
                
              
                <div class='connn'>
                <Link to={`/pizza`}>
                <button class='Button111' id='order-pizza'>
                     ACIKTIM
                </button>
                </Link>
              
                </div>
                <div class="image">

                </div>
                </div>

               
      
            
           
        
    )
}