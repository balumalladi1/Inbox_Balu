import React, { useEffect, useState } from 'react'
import Sidebar from '../Sidebar/Sidebar'
import AllInbox from '../AllInbox/AllInbox'
import RighrSidebar from '../RightSidebar/RighrSidebar'
import CenterbarPage from '../CenterbarPage/CenterbarPage'

import "./EmailThreads.css"
import TopBar from '../TopBar/TopBar'

const EmailThreads = () => {

    const [data,setdata]=useState([])
    const [loading,setloading]=useState(true)
    const [selectedthread,setselectedthread]=useState(null)
    console.log(selectedthread)

    useEffect(()=>{

      const interval =setInterval(async()=>{
        try {
          const token =   localStorage.getItem("token")
          const url = "https://hiring.reachinbox.xyz/api/v1/onebox/list"
          const options={
            method:"GET",
            headers:{
              Authorization:token,
              "Content-type":"application/json"
            }
          }
          const response = await fetch(url,options)
          const data = await response.json()
          setdata(data.data)
          setloading(false)
        } catch (error) {
          console.log("Error Fetching data:",error)
        }

      },2500)

      return () => clearInterval(interval);
    },[])

    if (loading) {
      return (
        <div className="loading-container">
          Loading ...
        </div>
      );
    }
  
    const loadMail = async (threadId) => {
      setselectedthread(threadId);
    };

  return (
    <>
    <TopBar />
    <div className='home-page-container'>
      <Sidebar />
      <AllInbox data={data} loadMail={loadMail} />
      <CenterbarPage selectedthread={selectedthread}/>
      <RighrSidebar />
    </div>
    </>
  )
}

export default EmailThreads