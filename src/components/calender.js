import React, { useState } from 'react'
import { useEffect } from 'react';


const Calender = (props) => {
  const date = new Date();
  const [month, setMonth] = useState(date.getMonth())
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
  let sel=''
  if(counta===date.getMonth()){
sel='selected';
  }
  return <option value={counta} >{month}</option>})


  return (
    <div><select value={date.getMonth()} className='selectMonth' name='selectMonth'>

      {list}
    </select></div>
  )
}

export default Calender