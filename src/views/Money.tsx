import LayoutWrapper from '../components/LayoutWrapper';
import React, {useState} from 'react';
import styled from 'styled-components';
import {TagsSection} from './Money/TagsSection';
import {CategorySection} from './Money/CategorySection';
import {NoteSection} from './Money/NoteSection';
import {NumberPadSection} from './Money/NumberPadSection';

const MyLayout = styled(LayoutWrapper)`
  display:flex;
  flex-direction: column;
`
type Category='-'|'+'
function Money() {
  const [datasource,setDatasource]=useState({
    tagIds:[] as number[],
    note:'',
    category:'-' as Category,
    amount:0
  })
  type Datasource=typeof datasource //typeof 获取值的类型
  const onChanged=(obj:Partial<Datasource>)=>{//Partial <> 获取部分类型
    setDatasource({
      ...datasource,
      ...obj
    })
  }
  return (
    <MyLayout>
      <TagsSection value={datasource.tagIds}
                   onChanged={(newTags)=>onChanged({tagIds: newTags})}
      />
      <NoteSection value={datasource.note}
                   onChanged={(newNote)=>onChanged({note:newNote})}
      />
      <CategorySection value={datasource.category}
                       onChanged={(newCategory)=>onChanged({category: newCategory})}
      />
      <NumberPadSection value={datasource.amount}
                        onChanged={(newAmount)=>onChanged({amount: newAmount})}
                        onOK={()=>{}}
      />
    </MyLayout>
  );
}

export default Money;