import {useEffect, useState} from 'react';
import {useUpdate} from './useUpdate';
type RecordItem ={
  tagIds:number[]
  note:string
  category:'-'|'+'
  amount:string
  createAt?:string
}

const useRecords=()=>{
  const [records,setRecords]=useState<RecordItem[]>([])
  useEffect(()=>{
    setRecords(JSON.parse(window.localStorage.getItem('record') || '[]'))
  },[])
  useUpdate(()=>{
    window.localStorage.setItem('record',JSON.stringify(records))
  },[records])
  const addRecord=(record:RecordItem)=>{
    const newRecord={...record,createAt:(new Date()).toISOString()}
     setRecords([...records,newRecord])
  }
  return{records,addRecord}
}
export {useRecords}