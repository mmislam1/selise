import React, { useState } from 'react'
import { useEffect } from 'react';
import Modal from "./Modal.js";

const Calender = (props) => {
  const date = new Date();
  const [month, setMonth] = useState(date.getMonth())
  const [modalOpen,setModalOpen]=useState(false)
  useEffect(() => { }, [month])

  date.setDate(1)
  date.setMonth(month)
  const lastDay = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();

  const prevLastDay = new Date(
    date.getFullYear(),
    date.getMonth(),
    0
  ).getDate();

  const firstDayIndex = date.getDay();

  const lastDayIndex = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDay();

  const nextDays = 7 - lastDayIndex - 1;

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August", "September",
    "October",
    "November",
    "December",
  ];

let counta=-1;

const list=months.map((month)=>{counta+=1;
  
  
  return <option value={counta} >{month}</option>})
  
 const dayList=[]


  for(let i=1;i<43;i++){
 if(i<firstDayIndex){
dayList[i-1]=0
 }
 if(i>=firstDayIndex && i<=(firstDayIndex+lastDay)){
  dayList[i-1]=i-firstDayIndex
 }

 if(i>(firstDayIndex+lastDay)){
  dayList[i-1]=0
 }
  }


  return (
    <div><span className='topbar'><select value={date.getMonth()} className='selectMonth' name='selectMonth'>

    {list}
  </select>
  
  <button
        className="openModalBtn"
        onClick={() => {
          setModalOpen(true);
        }}
      >
        Create Appointment
      </button>

      {modalOpen && <Modal setOpenModal={setModalOpen} />}

  </span>
    <div className="dayscontainer">
      {dayList.map((day)=>{if(day===0){return <div className='dayBlock'></div>}else{return <div className='dayBlock'><h4>{day}</h4></div>}})}
    </div>
    
    </div>
  )
}

export default Calender