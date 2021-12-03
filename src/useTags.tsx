import React from 'react';
import {createID} from './lib/CreateID';

const defaultTags = [
  {id: createID(), name: '衣'},
  {id: createID(), name: '食'},
  {id: createID(), name: '住'},
  {id: createID(), name: '行'}
];

const useTags = () => {
  const [tags, setTags] = React.useState<{ id: number, name: string }[]>(defaultTags);
  const findTag = (id: number) => tags.filter(tag => tag.id === id)[0];

  const updateTag = (id: number, name: string) => {
    setTags(tags.map(tag => tag.id === id ? {id, name} : tag));
  };
  const deleteTag = (id: number) => {
    setTags(tags.filter(tag=> tag.id !==id ))
  };
  return {tags, setTags, findTag, updateTag, deleteTag};
};
export {useTags};