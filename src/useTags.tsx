import React from 'react';
import {createID} from './lib/CreateID';

const useTags=()=>{
  const [tags, setTags] = React.useState<{id:number,name:string}[]>([
    {id:createID(),name:'衣'},
    {id:createID(),name:'食'},
    {id:createID(),name:'住'},
    {id:createID(),name:'行'}
  ])
  return {tags,setTags}
}
export {useTags}