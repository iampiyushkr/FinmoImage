
import React, {  useEffect, useState } from "react";
import axios from "axios"
import "./FinMoImage.css"
import InfiniteScroll from "react-infinite-scroll-component";

import ReactLoading from 'react-loading';

import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
    margin:"auto",
  width: "50%",
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


export function Image(){
        const [mainData,setMainData]=useState([])
        const [data1,setData1]=useState([])
        const [data2,setData2]=useState([])
        const [data3,setData3]=useState([])
        const [data4,setData4]=useState([])
        const [data5,setData5]=useState([])
        const [viewImage,setViewImage]=useState("")
        const [loading,setLoading]=useState(true)
        const [inputData,setInputData]=useState("random")
        const [nav,setNav]=useState(false)
        const [open, setOpen] = useState(false);


        const handleOpen = () => setOpen(true);
        const handleClose = () => setOpen(false);


    function ImageData(){
        axios.get(`https://api.unsplash.com/search/photos?per_page=1000&query=${inputData}&client_id=xRf-SuV5UAdpxw3s_YdLrGyYyn7IaUW8Q1UebZLhtyA`)
        .then(({data})=>{
            
            console.log(data.results)
            var arr1=data.results.slice(0,Math.floor(data.results.length/5))
        setData1([...data1,...arr1])
        var arr2=data.results.slice(arr1.length,Math.floor(data.results.length/5)*2)
        setData2([...data2,...arr2])
        var arr3=data.results.slice(arr2.length+arr1.length,Math.floor(data.results.length/5)*3)
        setData3([...data3,...arr3])
        var arr4=data.results.slice(arr2.length+arr1.length+arr3.length,Math.floor(data.results.length/5)*4)
        setData4([...data4,...arr4])
        var arr5=data.results.slice(arr2.length+arr1.length+arr3.length+arr4.length)
        setData5([...data5,...arr5])
       /// console.log(arr1,arr2,arr3,arr4,arr5)
            setLoading(false)
        })
    }
    
    //...........fetching image data on landing...................
    
        useEffect(()=>{
            ImageData()
            },[])
    if(loading){
        return  <div style={{textAlign:"center",fontSize:"40px"}}>Loading.......</div>
    }

   //...................fetching data by clicking on search................
    
const handleClick=()=>{
   setData1([])
   setData2([])
   setData3([])
   setData4([])
   setData5([])
    axios.get(`https://api.unsplash.com/search/photos?per_page=1000&query=${inputData}&client_id=xRf-SuV5UAdpxw3s_YdLrGyYyn7IaUW8Q1UebZLhtyA`)
    .then(({data})=>{
        
        console.log(data.results)
        var arr1=data.results.slice(0,Math.floor(data.results.length/5))
    setData1(arr1)
    var arr2=data.results.slice(arr1.length,Math.floor(data.results.length/5)*2)
    setData2(arr2)
    var arr3=data.results.slice(arr2.length+arr1.length,Math.floor(data.results.length/5)*3)
    setData3(arr3)
    var arr4=data.results.slice(arr2.length+arr1.length+arr3.length,Math.floor(data.results.length/5)*4)
    setData4(arr4)
    var arr5=data.results.slice(arr2.length+arr1.length+arr3.length+arr4.length)
    setData5(arr5)
   
        setLoading(false)
    })
    console.log(data1,data2,data3,data4,data5)
}




const changeNavColor=()=>{
    if(window.scrollY>=100){
        setNav(true)
    }else{
        setNav(false)
    }
}

window.addEventListener("scroll",changeNavColor)

    return <div>
        <div className="topMainDiv">
        <div className={!nav?"nav":"activeNav"}>
            
            <div className="searchDiv">
            <input placeholder="search" className="input" onChange={(e)=>{setInputData(e.target.value)}}/>
            <button className="button" onClick={()=>{
               setData1(mainData)
                handleClick()


            }}>Search</button>
            </div>
        </div>

        <p >Discover Image</p>
        </div>
        
        <InfiniteScroll
        dataLength={data2.length-2}
        next={()=>ImageData(inputData)}
        hasMore={true}
        >
        <div className="container">
         <div className="div1">   
        {data1.map(e=><div  key={e.id}>
            <div onClick={()=>{
                 setViewImage(e.urls.regular)
                handleOpen()
                }} className="ImageDiv">
            <img src={e.urls.small} alt="error"/>
            <p>{e.alt_description}</p>
            </div>
            <div className="profilDiv">
                <img src={e.user.profile_image.small} alt="error"/>
                <span>{e.user.username}</span>
            </div>
        </div>)}
        </div>
        <div>
            
        {data2.map(e=><div  key={e.id}>
            <div onClick={()=>{
               setViewImage(e.urls.regular)
                handleOpen()
                }} className="ImageDiv">
            <img src={e.urls.small} alt="error"/>
            <p>{e.alt_description}</p>
            </div>
            <div className="profilDiv">
                <img src={e.user.profile_image.small} alt="error"/>
                <span>{e.user.username}</span>
            </div>
        </div>)}
        </div>
        <div>
        
        {data3.map(e=><div  key={e.id}>
            <div onClick={()=>{
                  setViewImage(e.urls.regular)
                handleOpen()
                }} className="ImageDiv">
            <img src={e.urls.small} alt="error"/>
            <p>{e.alt_description}</p>
            </div>
            <div className="profilDiv">
                <img src={e.user.profile_image.small} alt="error"/>
                <span>{e.user.username}</span>
            </div>
        </div>)}
        </div>
        <div>
        
        {data4.map(e=><div  key={e.id}>
            <div onClick={()=>{
                  setViewImage(e.urls.regular)
                handleOpen()
                }} className="ImageDiv">
            <img src={e.urls.small} alt="error"/>
            <p>{e.alt_description}</p>
            </div>
            <div className="profilDiv">
                <img src={e.user.profile_image.small} alt="error"/>
                <span>{e.user.username}</span>
            </div>
        </div>)}
        </div>
        <div>
        {data5.map(e=><div  key={e.id}>
            <div onClick={()=>{
                setViewImage(e.urls.regular)
                handleOpen()
                }} className="ImageDiv">
            <img src={e.urls.small} alt="error"/>
            <p>{e.alt_description}</p>
            </div>
            <div className="profilDiv">
                <img src={e.user.profile_image.small} alt="error"/>
                <span>{e.user.username}</span>
            </div>
        </div>)}
        </div>
        </div>
        </InfiniteScroll>
    



        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <img style={{width:"100%", height:"90vh"}} src={viewImage}  alt="error"/>
        </Box>
      </Modal>
    </div>
}