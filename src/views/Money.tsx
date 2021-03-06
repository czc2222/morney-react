import LayoutWrapper from '../components/LayoutWrapper';
import React, {useState} from 'react';
import styled from 'styled-components';
import {TagsSection} from './Money/TagsSection';
import {CategorySection} from './Money/CategorySection';
import {NoteSection} from './Money/NoteSection';
import {NumberPadSection} from './Money/NumberPadSection';
import {useRecords} from '../hook/useRecords';



const MyLayout = styled(LayoutWrapper)`
  display:flex;
  flex-direction: column;
`
const CategoryWrapper =styled.div`background:#c4c4c4;`
type Category='-'|'+'

const defaultData ={
  tagIds:[] as number[],
  note:'',
  category:'-' as Category,
  amount:'0'
}

function Money() {
  const [datasource,setDatasource]=useState(defaultData)
  type Datasource=typeof datasource //typeof 获取值的类型
  const onChanged=(obj:Partial<Datasource>)=>{//Partial <> 获取部分类型
    setDatasource({
      ...datasource,
      ...obj
    })
  }
  const {addRecord}=useRecords()
  const submit=()=>{
    if(datasource.tagIds.length === 0){
      alert('请至少选择一个标签')
    }else {
      addRecord(datasource)
      alert('已保存')
      setDatasource(defaultData)
    }

  }
  return (
    <MyLayout scrollTop={9999}>
      <TagsSection  value={datasource.tagIds}
                   onChanged={(newTags)=>onChanged({tagIds: newTags})}
      />
      <NoteSection value={datasource.note}
                   onChanged={(newNote)=>onChanged({note:newNote})}
      />
      <CategoryWrapper>
        <CategorySection value={datasource.category}
                         onChanged={(newCategory)=>onChanged({category: newCategory})}
        />
      </CategoryWrapper>

      <NumberPadSection value={datasource.amount}
                        onChanged={(newAmount)=>onChanged({amount: newAmount})}
                        onOK={submit}
      />
    </MyLayout>
  );
}

export default Money;