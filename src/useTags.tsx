import React from 'react';
import {createID} from './lib/CreateID';

const defaultTags=[
  {id:createID(),name:'衣'},
  {id:createID(),name:'食'},
  {id:createID(),name:'住'},
  {id:createID(),name:'行'}
]

const useTags=()=>{
  const [tags, setTags] = React.useState<{id:number,name:string}[]>(defaultTags)
  return {tags,setTags}
}
export {useTags}