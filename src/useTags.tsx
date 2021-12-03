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
  const findTag=(id:number)=> tags.filter(tag=>tag.id===id)[0]
  const findTagIndex=(id:number)=>{
    let result =-1
    for(let i=0;i<tags.length;i++){
      if(tags[i].id === id){
        result = i
        break
      }
    }
      return result
  }

  const updateTag=(id:number,name:string)=>{
    const tagClone =JSON.parse(JSON.stringify(tags)) //数据进行深拷贝 才能改写
    const index = findTagIndex(id) //获取你要改写的tag的下标
    tagClone.splice(index,1,{id:id,name:name})
    setTags(tagClone)
  }
  const deleteTag =(id:number)=>{
    const tagClone =JSON.parse(JSON.stringify(tags)) //数据进行深拷贝 才能改写
    const index = findTagIndex(id) //获取你要改写的tag的下标
    tagClone.splice(index,1)
    setTags(tagClone)
  }
  return {tags,setTags,findTag,updateTag,deleteTag}
}
export {useTags}