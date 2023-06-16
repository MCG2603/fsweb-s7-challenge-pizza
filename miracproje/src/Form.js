import React, { useState,useEffect,Dimensions } from 'react';
import * as Yup from 'yup'
import styled from 'styled-components';
import imgUrl  from '../src/MVP-OrderPizza.png'
import { Link } from 'react-router-dom';
import 'react-dropdown/style.css';
import PropTypes from 'prop-types';
import "./Form.css";

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
<h1>
  Teknolojik Yemekler
</h1>
<div class='div1'>
<Link to={`/`}>
                  
           <nav  href="default.asp" target="_blank">Anasayfa- </nav>
           </Link>
           <Link to={`/`}>
            <nav  href="default.asp" target="_blank">Sipariş ver- </nav>
            </Link>
            <Link to={`/`}>
            <nav  href="default.asp" target="_blank">Seçenekler </nav>
                </Link>
             
               
</div>


</div>
<div class='divmain'>
<div class='div2'>
<label>Müşteri İsmi
  <br/>
    <input data-cy="input-isim" id='name-input' type="text" name="isim" onChange={handleChange} value ={siparis.isim} size='56' height="48" placeholder='Lütfen isminizi girin...' />
    </label>
    </div>
        {formStateErr.isim &&(
          <>
 
        <span>{formStateErr.isim} </span>
        </>
        )}

<h2>Position Absoulate Acı Pizza</h2>
<div class='sss'>
  <div class='con'>
    <h3 >85.50</h3>
    </div>
  
<div class='con1'>
  
  <h5>4.9</h5>
  <h5>200</h5>
  </div>
</div>

<p>Frontend Dev olarak hala position Absoulate kullanıyorsan bu çok acı pizza tam sana göre.
              Pizza, domates,peynir ve genellikle çeşitli diğer Malzemeler ile kaplanmış, daha sonra 
              geleneksel olarak odun ateşindebir fırında yüksek sıcaklıkta pişiriliren, genellikle yuvarlak, düzeltirilmiş
              mayalı buğday bazlı hamurdan oluşan italyan kökenli lezzetli bir yemektir. Küçük bir pizzayı bazen pizetta denir.
            </p>
             <div class='con2'>
              <h2>Boyut Seç <span style={{color:'red'}}>*</span></h2>
              <h2>Boyut Seç <span style={{color:'red'}}>*</span></h2>
              </div>

              <div class='con2'>
              <label style={{fontSize: '13px'}}>
            <input type="radio" value="option1"  onChange={handleChange1} />
            Küçük
          </label>
          <div>
          <select id='size-dropdown' data-cy='select' onChange={handleChange3} value={selected}>
            <option  value="Pizza Boyutu" >Pizza Boyutu</option>
           <option value="Küçük" >Küçük</option>
          <option value="orta" >orta</option>
          <option value="Büyük"  >Büyük</option>

         </select>
          </div>
          </div>
          <br/>
          <div class='con2'>
          <label style={{fontSize: '13px'}}>
          <input type="radio" value="option1"  onChange={handleChange1} />
            Orta
          </label>
          {formStateErr.boyut &&(
        <span>{formStateErr.boyut}</span>
      
  )}
  </div>
       <br/>
          <label style={{fontSize: '13px'}}>
          <input type="radio" value="option1"  onChange={handleChange1} />
            Büyük
          </label>

<h2>
Ek Malzemeler
</h2>
<p>
En fazla 10 malzeme seçebilirsiniz. 5t
</p>

<div class='sss1'>

<label style={{fontSize: '13px'}}>
        <input data-cy='checkboxe1' name='malzeme1' type="checkbox" onChange={handleChange1} value={siparis.malzeme1} checked={siparis.malzeme1} />
        Pepperoni
      </label>
      <label style={{fontSize: '13px'}}>
        <input name='malzeme2' type="checkbox" onChange={handleChange1} value={siparis.malzeme2} checked={siparis.malzeme2} />
        Domates
      </label>
      <label style={{fontSize: '13px'}}>
        <input  data-cy='checkboxe3' name='malzeme3' type="checkbox" onChange={handleChange1} value={siparis.malzeme3} checked={siparis.malzeme3} />
        Biber 
             </label>
</div>
<br/>
<div class='sss1'>

<label style={{fontSize: '13px'}}>
        <input data-cy='checkboxe1' name='malzeme4' type="checkbox" onChange={handleChange1} value={siparis.malzeme4} checked={siparis.malzeme4} />
        Sosis
      </label>
      <label style={{fontSize: '13px'}}>
        <input name='malzeme5' type="checkbox" onChange={handleChange1} value={siparis.malzeme5} checked={siparis.malzeme5} />
        Mısır
      </label>
      <label style={{fontSize: '13px'}}>
        <input  data-cy='checkboxe3' name='malzeme6' type="checkbox" onChange={handleChange1} value={siparis.malzeme6} checked={siparis.malzeme6} />
        Sucuk 
             </label>
</div>
<br/>
<div class='sss1'>

<label style={{fontSize: '13px'}}>
        <input data-cy='checkboxe1' name='malzeme7' type="checkbox" onChange={handleChange1} value={siparis.malzeme7} checked={siparis.malzeme7} />
        Kanada Jambonu
      </label>
      <label style={{fontSize: '13px'}}>
        <input name='malzeme8' type="checkbox" onChange={handleChange1} value={siparis.malzeme8} checked={siparis.malzeme8} />
        pastırma
      </label>
      <label style={{fontSize: '13px'}}>
        <input  data-cy='checkboxe3' name='malzeme9' type="checkbox" onChange={handleChange1} value={siparis.malzeme9} checked={siparis.malzeme9} />
        Ananas 
             </label>
</div>
<br/>
<div class='sss1'>

<label style={{fontSize: '13px'}}>
        <input data-cy='checkboxe1' name='malzeme10' type="checkbox" onChange={handleChange1} value={siparis.malzeme10} checked={siparis.malzeme10} />
        Tavuk Izgara
      </label>
      <label style={{fontSize: '13px'}}>
        <input name='malzeme11' type="checkbox" onChange={handleChange1} value={siparis.malzeme11} checked={siparis.malzeme11} />
        Jalepeno
      </label>
      <label style={{fontSize: '13px'}}>
        <input  data-cy='checkboxe3' name='malzeme12' type="checkbox" onChange={handleChange1} value={siparis.malzeme12} checked={siparis.malzeme12} />
        Kabak 
             </label>
</div>
{formStateErr.malzemesayisi &&(
          
 
          <span>{formStateErr.malzemesayisi} </span>
         
          )}

          <h2>
          Özel Seçimler
          </h2>
          <input  type="text" name="ozel" onChange={handleChange} value ={siparis.ozel} size='75' height="48" placeholder='Özel isteğinizi belirtebilirsiniz' />
          <h2>Sipariş Notu</h2>
          <input type="text"  name="siparisNot" onChange={handleChange}value ={siparis.siparisNot}  size='75' height="48" placeholder='Siparişinize eklemek istediğiniz bir not var mı?' />
          <br/>
          <div class='sss1'>
         <div class='div2'>
          <button type="button" name="negatif" onClick={handleChange2}style={{border:"none",backgroundColor:"yellow", outline: 'none', width: "40px", height: "40px",}}>-</button>
   <button type="button" style={{ color:"black",backgroundColor:"white", width: "40px", height: "40px",border:"none"}}>{siparisSayisi}</button>
   <button type="button" name="pozitif" onClick={handleChange2} style={{border:"none",backgroundColor:"yellow",outline: 'none', width: "40px", height: "40px",}} >+</button>
 </div>
 
 <div class='con3'> 
   <div class='div3'>
    <div class='con4'>
   <h7 style={{fontSize:"20px",fontWeight:"bold"}}>Sipariş Toplamı</h7>
   </div >
   <div class='sss2'>
   <span style={{fontSize:"15px",fontWeight:"bold",marginTop:"5%"}}>Seçimler</span>
   <span  style={{fontSize:"15px",fontWeight:"bold",marginTop:"5%"}}>{malzemeNumber1*5*siparisSayisi+ozelSecim*siparisSayisi}tl</span>
   </div>
  
   <div class='sss2'>
   <span style={{fontSize:"15px",color:"red",fontWeight:"bold",marginTop:"3%"}}>Toplam</span>
   <span  style={{fontSize:"15px",color:"red",fontWeight:"bold",marginTop:"3%"}}>{(malzemeNumber1*5+ozelSecim+85)*siparisSayisi}tl</span>
   </div>
   
   <div class='sss3'>
   <button data-cy="btn" style={{fontWeight:"bold",fontSize:"15px",backgroundColor:"yellow",color:"black",outline: 'none', width: "190%"}} type="submit" disabled={valid} onChange={handleChange1}>SİPARİŞ VER</button>
   </div>
   </div>
   </div>
   

   <Link to={`/success`}>
                <button id='order-pizza'  name="sayfa" disabled="true" style={ {fontSize:"0.00000000005px" ,  border: "white",display:'hidden', outline: 'none', color:"white"}}>
                    ACIKTIM
                </button>
                </Link>

                </div>
</div>
       
</form>


      /*
     
        
      

     
      
      
      
    <H2>Sipariş Notu</H2>

      
  
   


   </Div9>

   
            
                  
        </form>
        
        
        
 
*/
    )
}
