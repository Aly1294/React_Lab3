import React , { useEffect, useState } from 'react'
import Card from './Card';
import { useFormik } from 'formik'
import Labtop from './Labtop1.webp'
import Mobile from './Mobile.jpg'
import Tablet from './Tablet.jpg'

function List() {
    
        
        let Product_list =[
            {
                title:"Iphone1",
                thumbnail:Mobile,
                description:"loreeeeeeeeeeeeeeeeeeeeeeeeem",
                price:500,
                category:"mobiles"
    
            },
            {
                title:"Labtop1",
                thumbnail:Labtop,
                description:"loreeeeeeeeeeeeeeeeeeeeeeeeem",
                price:1000,
                category:"labtops"
            },
            {
                title:"Labtop2",
                thumbnail:Labtop,
                description:"loreeeeeeeeeeeeeeeeeeeeeeeeem",
                price:1500,
                category:"labtops"
            },
            {
                title:"Tablet1",
                thumbnail:Tablet,
                description:"loreeeeeeeeeeeeeeeeeeeeeeeeem",
                price:2000,
                category:"taplets"
            },
            {
                title:"Tablet2",
                thumbnail:Tablet,
                description:"loreeeeeeeeeeeeeeeeeeeeeeeeem",
                price:2500,
                category:"taplets"
            },
            {
                title:"Iphone2",
                thumbnail:Mobile,
                description:"loreeeeeeeeeeeeeeeeeeeeeeeeem",
                price:700,
                category:"mobiles"
            },
        ] 

       

       
    
    let [arr,setArr] =useState(Product_list);
    let [input,setInput] =useState('');
    function getInputData (e){
        console.log(e.target.value)
        setInput(e.target.value)
    }
    function search(e){
        e.preventDefault()
       let productList_after_search= Product_list.filter((product)=> {return product.title == input} )  
       setArr(productList_after_search)
    }   

     
    console.log(Product_list) // to print product list before sorting
    function sort(){
        let i , j ,temp;
        console.log("......................")
        for(i=0; i<Product_list.length; i++)
    {
       
        for(j=i+1; j<Product_list.length; j++)
        {
            if(Product_list[i].price > Product_list[j].price)
            {
                temp     = Product_list[i];
                Product_list[i] = Product_list[j];
                Product_list[j] = temp;
            }
        }
    }
        console.log(Product_list) // to print product list after sorting
        setArr(Product_list)
        // console.log("arr= " +arr)
    }
    // console.log("arr= " +arr)

    function filter(category){
        if(category=="all")
        {
            setArr(Product_list)
        }
        else{
            let new_Product_list=Product_list.filter((product)=> {return product.category==category } )
            setArr(new_Product_list)
        }
        
    }
    // console.log(arr)
  return (
    <div>
        <form>
            <div className='d-flex justify-content-center align-items-center h-25 mt-5'>   
                <input onChange={getInputData} type="text" name='search' className='w-75  me-5'  />
                <button className='btn btn-success' onClick={search} >Search</button>
            </div>
            
        </form>
        <div className='my-4'> 
            <button className='me-3 btn btn-success' onClick={()=>filter("all")}>All Categories</button>
            <button className='me-3 btn btn-success' onClick={()=>filter("mobiles")}>Mobiles</button>
            <button className='me-3 btn btn-success' onClick={()=>filter("taplets")}>Taplets</button>
            <button className='me-3 btn btn-success' onClick={()=>filter("labtops")}>Labtops</button>
            <button className='btn btn-success' onClick={sort}>Sort</button>

        </div>
        <div className='d-flex flex-wrap'>
            {arr.map((item,index)=><Card key={index} data={item}/>)}

        </div>
    </div>
  )
}

export default List