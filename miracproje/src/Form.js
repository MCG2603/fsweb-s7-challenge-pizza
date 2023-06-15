import React, { useState,useEffect,Dimensions } from 'react';
import * as Yup from 'yup'
import styled from 'styled-components';
import imgUrl  from '../src/MVP-OrderPizza.png'
import { Link } from 'react-router-dom';
import 'react-dropdown/style.css';
import PropTypes from 'prop-types';

  
const Div= styled.div `
margin:auto;
width:40%




`;
const Div1= styled.div `
    width: 100%;
    height: 8vh;
    background-color:#CE2829;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    
    
    
`;
const Div2= styled.div `
    width: 100%;
    height: 5vh;
    background-color:#CE2829;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display:flex;
flex-direction:row;
`;
const Div3= styled.div `
    width: 100%;
    height: 4vh;
    background-color:White;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display:flex;
    flex-direction:row;
    margin-left:14.5%;
`
const Div4= styled.div `
    width: 100%;
    height: 4vh;
    display:flex;
    flex-direction:column;
    margin-left:8%;
    
`
const Div5= styled.div `
width: 31%;
height: 5vh;
display:flex;
flex-direction:row;
margin:auto;
justify-content:space-around
align-items: center;
`
const Div6= styled.div `
width: 43%;
padding-left:12%;
padding-top:2%;


margin:auto;

`
const Div7= styled.div `
  display:flex;
  flex:row;
  
  
`
const Div8= styled.div `
border-color: white;
border: 1px solid white;


`
const Div9= styled.div `
  display:flex;
  flex:row;
  justify-content: center;
  padding-left:34.5%;
  margin-bottom:5px;
  
  
`
const Div10= styled.div `
width: 31%;
height: 5vh;

margin-left:55%;
`

const H1=styled.h1 `
display:flex;
fontFamily: 'Barlow':
margin-inline-start: 15px;
height: 100%;
color:white;
text-align:center;
align-items:center;
justify-content:center;
`;
const H2=styled.h2`
margin-left:34.5%;
color:black;
font-size:15px
`
const H22=styled.h2`
margin-left:20.5%;
color:black;
font-size:15px
`
const H21=styled.h2`
margin-left:250px;
color:black;
font-size:15px
`
const H3=styled.h3`
margin-left:60px;
margin-top:2%;
color:black;
font-size:10px
`
const H4=styled.h4`
margin-left:60px;
margin-top:2%;
color:#878785;
font-size:9px
`
const Nav1= styled.a `

display:flex;
flex-direction:row;
align-items :flex-end
justify-content:flex-end;
margin_left:1350px;
color:white;
`;
const Nav2= styled.a `

display:flex;
flex-direction:row;
align-items :flex-end
justify-content:flex-end;
margin-left:34.5%;
color:white;
`;
const P1=styled.p`
margin-left:20.5%;
color:black;
font-weight:bold; 
font-size:20px;
`
const P2=styled.p`
color:#474545;
font-size:10px;
margin-left:250px;

`
const P3=styled.p`
color:#474545;
font-size:10px;
margin-left:150px;

`
const P4=styled.p`
color:#474545;
font-size:10px;
margin-left:62px;
margin-top:5%
`
const P5=styled.p`
color:#474545;
font-size:10px;
margin-left:34.5%;
margin-top:0.5%
`
const Inp=styled.input`
margin-left:34.5%;
font-size:7px

`
const Inp1=styled.input`
margin-left:45px;
font-size:7px
`
const Select=styled.select`
margin-right:46%;

`
const Button = styled.button`
  background-color: #FDC913;
  border-radius: 5px;
  width: "40px";
  height: "40px"
  border-style: solid;
  border-color:#FDC913;
`;
const Button1 = styled.button`
  background-color: #FDC913;
  border-radius: 5px;
  border-style: solid;
  border-color:#FDC913;
`;

export function Form(props){
  let [siparislerHistory,setSiparislerHistory]=useState([]);
  
  
let {siparisler,setSiparisler}=props;
useEffect(()=>{
  
    
    if(siparislerHistory.length>0 ){
      document.getElementById("order-pizza").disabled=false;
       document.getElementById("order-pizza").click() ;

  } },[siparislerHistory])
  

 
const emptyData={
isim: "",
boyut: "pizza boyutu",
ozel:"",
siparisNot:"",
malzeme1: false,
malzeme2: false,
malzeme3: false,
malzeme4: false,
malzeme5: false,
malzeme6: false,
malzeme7: false,
malzeme8: false,
malzeme9: false,
malzeme10: false,
malzeme11: false,
malzeme12: false,
malzemesayisi:0,

}
const emptyData1={
  isim :"isim must be at least 2 characters long.",
  malzemeNumber:"en az 4 malzeme seçmelisiniz",
  ozel:"",
  siparisNot:"",
  boyut:"lütfen pizza boyutu seçiniz"}

const [formStateErr, setFormStateErr] = useState(emptyData1);

let [siparis,setSiparis]=useState(emptyData);
let [malzemeNumber1,setMalzemeNumber1]=useState(0);
const [valid,setValid]=useState (true);
let [siparisSayisi,setSiparisSayisi]=useState(1);
const options = [
  {value: '', text: '--Choose an option--'},
  {value: 'küçük', text: 'küçük'},
  {value: 'orta', text: 'orta'},
  {value: 'büyük', text: 'büyük'},
];

const [selected, setSelected] = useState(options[0].value);
const[ozelSecim,setOzelSecim]=useState(0);

const handleChange3 = e => {
  const{name,value}=e.target;

  Yup.reach(formSchema,'boyut' )
  .validate(value)
  .then(valid => { setFormStateErr({ ...formStateErr, 'boyut': "" }); })
  .catch(err => { setFormStateErr({ ...formStateErr, 'boyut': err.errors[0] }); }); 
  setSiparis({...siparis,boyut:value});
  setSelected(e.target.value);
};
useEffect(() => {
  let mlzsayisi=0;
  let text=siparis.ozel
  text.length>1? setOzelSecim(10):setOzelSecim(0);
  console.log(siparis.ozel)
  for(let i=1;i<13;i++){
 
    siparis["malzeme"+i]==true ? mlzsayisi=mlzsayisi+1 : mlzsayisi=mlzsayisi;
  }
  if(malzemeNumber1!=mlzsayisi || malzemeNumber1!=siparis.malzemesayisi ){
  malzemeNumber1=mlzsayisi;
  setMalzemeNumber1(malzemeNumber1);
  }
    }, [siparis]);
    useEffect(() => {
    
      if(malzemeNumber1!=siparis.malzemesayisi){
     
      setSiparis({...siparis,malzemesayisi:malzemeNumber1});
      
      }
        }, [malzemeNumber1]);

const formSchema = Yup.object().shape({
  boyut: Yup
  .string()
  .max(5,"lütfen pizza boyutu seçiniz"),
  ozel: Yup
  .string(),
  siparisNot: Yup
  .string(),
  isim: Yup
    .string()
    .required("*isim girmeniz gerekmektedir")
    .min(2, "*isim must be at least 2 characters long."),

    malzemesayisi: Yup
    .number()
    .min(4, "en az 4 malzeme seçmelisiniz")
   
});

const handleChange=(e)=>{
  const{name,value}=e.target;
  Yup.reach(formSchema, name)
  .validate(value)
  .then(valid => { setFormStateErr({ ...formStateErr, [name]: "" }); })
  .catch(err => { setFormStateErr({ ...formStateErr, [name]: err.errors[0] }); }); 
  setSiparis({...siparis,[name]:value});
}
const handleChange1=(e)=>{
  let x=0;
  const{name,checked}=e.target;
  checked? x=1+malzemeNumber1 :x=malzemeNumber1-1
  Yup.reach(formSchema, "malzemesayisi")
  .validate(x)
  .then(valid => { setFormStateErr({ ...formStateErr, "malzemesayisi": "" }); })
  .catch(err => { setFormStateErr({ ...formStateErr, "malzemesayisi": err.errors[0] }); }); 
  setSiparis({...siparis,[name]:checked});
}
const handleChange2=(e)=>{
  const{name}=e.target;
  if(name=="negatif" && siparisSayisi>1){
    siparisSayisi-=1;
    setSiparisSayisi(siparisSayisi);
  }
  if(name=="pozitif"){
    siparisSayisi+=1;
    setSiparisSayisi(siparisSayisi);
  }

}
const handleSubmit=(e)=>{
  e.preventDefault();
  
  setSiparislerHistory(siparisler);
  siparisler.push(siparis)
  setSiparisler(siparisler)
  
  setSiparis(emptyData);
  setSelected("Pizza Boyutu")
  setFormStateErr(emptyData1);
  setSiparisSayisi(1);
  console.log(siparis,siparisler,siparisler.length);
 
}

useEffect(() => {
        formSchema
            .isValid(siparis)
            .then(vld => setValid(!vld) );
          
          }, [siparis]);
  
          

    return (
      <form onSubmit = {handleSubmit}>
        <div id='pizza-form'>
          
            <Div1>
                <H1>Teknolojik Yemekler   
                </H1>
                <Link to={`/`}>
                <Div2>
               
              <Nav2 href="default.asp" target="_blank">Anasayfa- </Nav2>
              <Nav1 href="default.asp" target="_blank">Seçenekler- </Nav1>
              <Nav1 href="default.asp" target="_blank">Sipariş ver </Nav1>
              </Div2>
                </Link>
            </Div1>
            <Div1>

            </Div1>
            
            <Div5>
              <label>Müşteri İsmi
    <input data-cy="input-isim" id='name-input' type="text" name="isim" onChange={handleChange} value ={siparis.isim} size='75' height="48" placeholder='Lütfen isminizi girin...' />
    </label>
    </Div5>
    <br/>
    <Div5>
    {formStateErr.isim &&(
          <>
 
        <span>{formStateErr.isim} </span>
        </>
        )}
        </Div5>
            <H2>Position Absoulate Acı Pizza</H2>
            <Div3 >
            <P1>85t</P1>
            <P2>4.9</P2>
            <P3>(200)</P3>
            </Div3 >
            <Div>
            <P4>Frontend Dev olarak hala position Absoulate kullanıyorsan bu çok acı pizza tam sana göre.
              Pizza, domates,peynir ve genellikle çeşitli diğer Malzemeler ile kaplanmış, daha sonra 
              geleneksel olarak odun ateşindebir fırında yüksek sıcaklıkta pişiriliren, genellikle yuvarlak, düzeltirilmiş
              mayalı buğday bazlı hamurdan oluşan italyan kökenli lezzetli bir yemektir. Küçük bir pizzayı bazen pizetta denir.
            </P4>
              </Div>
              
              <Div3>
              <H22>Boyut Seç <span style={{color:'red'}}>*</span></H22>
              <H22>Boyut Seç <span style={{color:'red'}}>*</span></H22>

              </Div3>
              <Div3></Div3>
             
               <Div3>
              <Div4>
              <label style={{fontSize: '13px'}}>
            <Inp type="radio" value="option1"  onChange={handleChange1} />
            Küçük
          </label>
        <br/>
        <label style={{fontSize: '13px'}}>
            <Inp type="radio" value="option1" onChange={handleChange1} />
            Orta
          </label>
        <br/>

        <label style={{fontSize: '13px'}}>
            <Inp type="radio" value="option1" onChange={handleChange1} />
            Büyük
          </label>
      </Div4>

      <Select id='size-dropdown' data-cy='select' onChange={handleChange3} value={selected}>
  <option  value="Pizza Boyutu" >Pizza Boyutu</option>
  <option value="Küçük" >Küçük</option>
  <option value="orta" >orta</option>
  <option value="Büyük"  >Büyük</option>
 
 
    </Select>
      </Div3>
      <Div10>
      {formStateErr.boyut &&(
          <>
 
        <span><p>{formStateErr.boyut} </p></span>
        </>
  )}
      </Div10>
      <Div3></Div3>
      <Div3></Div3>
      

      <H2>Ek Malzemeler</H2>
      <P5>En fazla 10 malzeme seçebilirsiniz. 5t</P5>
      <Div5>
      <label style={{fontSize: '13px'}}>
        <input data-cy='checkboxe1' name='malzeme1' type="checkbox" onChange={handleChange1} value={siparis.malzeme1} checked={siparis.malzeme1} />
        Pepperoni
      </label>
      <label style={{marginLeft:"43px",fontSize: '13px'}}>
        <Inp1 name='malzeme2' type="checkbox" onChange={handleChange1} value={siparis.malzeme2} checked={siparis.malzeme2} />
        Domates
      </label>
      <label style={{fontSize: '13px'}}>
        <Inp1  data-cy='checkboxe3' name='malzeme3' type="checkbox" onChange={handleChange1} value={siparis.malzeme3} checked={siparis.malzeme3} />
        Biber      </label>
      </Div5>
      <Div5>
      <label style={{fontSize: '13px'}}>
        <input  name='malzeme4' type="checkbox" onChange={handleChange1} value={siparis.malzeme4} checked={siparis.malzeme4}/>
        Sosis
      </label>
      <label style={{marginLeft:"73px",fontSize: '13px'}}>
        <Inp1 data-cy='checkboxe5' name='malzeme5' type="checkbox" onChange={handleChange1} value={siparis.malzeme5} checked={siparis.malzeme5}/>
        Mısır
      </label>
      <label style={{marginLeft:"23px",fontSize: '13px'}}>
        <Inp1 name='malzeme6' type="checkbox" onChange={handleChange1} value={siparis.malzeme6} checked={siparis.malzeme6} />
        Sucuk
      </label>
      </Div5>
      <Div5>
      <label style={{fontSize: '13px'}}>
        <input data-cy='checkboxe7' name='malzeme7' type="checkbox" onChange={handleChange1} value={siparis.malzeme7} checked={siparis.malzeme7} />
        Kanada Jambonu
      </label>
      <label style={{marginLeft:"3px",fontSize: '13px'}}>
        <Inp1 name='malzeme8' type="checkbox" onChange={handleChange1} value={siparis.malzeme8} checked={siparis.malzeme8}/>
        Ananas
      </label>
      <label   style={{marginLeft:"9px",fontSize: '13px'}}>
        <Inp1 data-cy='checkboxe9' name='malzeme9' type="checkbox" onChange={handleChange1}  value={siparis.malzeme9} checked={siparis.malzeme9}/>
        Tavuk ızgara
      </label>
      </Div5>
      <Div5>
      <label style={{fontSize: '13px'}}>
        <input name='malzeme10' type="checkbox" onChange={handleChange1} value={siparis.malzeme10} checked={siparis.malzeme10}/>
        Jalepeno
      </label>
      <label style={{marginLeft:"51px",fontSize: '13px'}}>
        <Inp1 name='malzeme11' type="checkbox" onChange={handleChange1} value={siparis.malzeme11} checked={siparis.malzeme11}/>
        Kabak
      </label>
      <label style={{marginLeft:"16px",fontSize: '13px'}}>
        <Inp1 name='malzeme12' type="checkbox" onChange={handleChange1} value={siparis.malzeme12 } checked={siparis.malzeme12}/>
        Soğan
      </label>
      </Div5>
      <Div5>
      {formStateErr.malzemesayisi &&(
          <>
 
        <span>{formStateErr.malzemesayisi} </span>
        </>
        )}
      </Div5>
    <H2>Özel Seçimler</H2>
          <Div5>
  <input  type="text" name="ozel" onChange={handleChange} value ={siparis.ozel} size='75' height="48" placeholder='Özel isteğinizi belirtebilirsiniz' />
  </Div5>
    <H2>Sipariş Notu</H2>

      
  <div >
    <Div5>
    <input type="text"  name="siparisNot" onChange={handleChange}value ={siparis.siparisNot}  size='75' height="48" placeholder='Siparişinize eklemek istediğiniz bir not var mı?' />
    </Div5>
    <Div6>
    <hr
    />    </Div6>
   <Div7>
    
   <Div9 >
    
   <Button type="button" name="negatif" onClick={handleChange2}style={{ outline: 'none', width: "40px", height: "40px",}}>-</Button>
   <button type="button" style={{ color:"black",outline: 'none', width: "40px", height: "40px",}}>{siparisSayisi}</button>

   <Button type="button" name="pozitif" onClick={handleChange2} style={{outline: 'none', width: "40px", height: "40px",}} >+</Button>


   </Div9>

   <Div8 style={{ borderColor: "#d7d7d3", marginLeft:"75px",height: "135px", width: "360px"}}> 
   
   <H3>Sipariş Toplamı</H3>
   <Div7>
   <H4>Seçimler</H4>
   <H4  style={{ marginLeft:"145px"}}>{malzemeNumber1*5*siparisSayisi+ozelSecim*siparisSayisi}tl</H4>

   </Div7>
   <Div7>
   <H4 style={{color:"red", marginTop:"4px"}}>Toplam</H4>
   <H4  style={{color:"red",marginTop:"4px", marginLeft:"145px"}}>{(malzemeNumber1*5+ozelSecim+85)*siparisSayisi}tl</H4>

   </Div7>

   <Button1 data-cy="btn" style={{color:"black",outline: 'none', width: "100%", height: "47px"}} type="submit" disabled={valid} onChange={handleChange1}>SİPARİŞ VER</Button1>
   </Div8>
   </Div7>
   <Div3></Div3>

  
   <Link to={`/success`}>
                <button id='order-pizza'  name="sayfa" disabled="true" style={ {fontSize:"0.00000000005px" ,  border: "white",display:'hidden', outline: 'none', color:"white"}}>
                    ACIKTIM
                </button>
                </Link>

  </div>
  

            

                  </div>
            
        
        </form>
        
        
        
 

    )
}
