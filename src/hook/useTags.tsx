import React, {useEffect} from 'react';

import {useUpdate} from './useUpdate';
import {createID} from '../lib/CreateID';

const defaultTags = [
  {id: 1, name: '衣'},
  {id: 2, name: '食'},
  {id: 3, name: '住'},
  {id: 4, name: '行'}
]; //设置初始的tag

const useTags = () => {
  const [tags, setTags] = React.useState<{ id: number, name: string }[]>([]);

  const findTag = (id: number) => tags.filter(tag => tag.id === id)[0];

  useEffect(()=>{
    setTags(JSON.parse(window.localStorage.getItem('tags') || JSON.stringify(defaultTags)) )
  },[]) //对页面进行挂载

  useUpdate(()=>{
    window.localStorage.setItem('tags',JSON.stringify(tags))
  },tags) //tags变化之后 就存在 localStorage 里面 ，useUpdate 消除 一开始挂载两次的问题

  const addTag = () => {
    const tagName = window.prompt('请输入新标签名');
    if (tagName !== null) {
      if (tagName.length !== 0) {
        setTags([...tags, {id: createID(), name: tagName}]);//如果输入的标签名不是空的，在tags中添加
      } else {
        window.alert('标签名不能为空');
      }

    }
  };

  const updateTag = (id: number, name: string) => {
    setTags(tags.map(tag => tag.id === id ? {id, name} : tag));
  };

  const deleteTag = (id: number) => {
    setTags(tags.filter(tag=> tag.id !==id ))
  };

  const getName=(id:number)=>{
    const tag = tags.filter(tags =>tags.id === id)[0]
    return tag.name
  }
  return {tags, setTags, findTag, updateTag, deleteTag,addTag,getName};
};
export {useTags};