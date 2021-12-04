import LayoutWrapper from '../components/LayoutWrapper';
import * as React from 'react';
import {CategorySection} from './Money/CategorySection';
import {useState} from 'react';
import styled from 'styled-components';
import {useRecords} from '../hook/useRecords';

const CategoryWrapper =styled.div`background:#fff;`

function Statistics() {
  const [category,setCategory] = useState<'-'|'+'>( '-')
  const {records}=useRecords()
  return (
    <LayoutWrapper>
      <CategoryWrapper>
        <CategorySection value={category}
                         onChanged={(value)=>{setCategory(value)}}
        />
      </CategoryWrapper>
      <div>
        {JSON.stringify(records)}
      </div>
    </LayoutWrapper>


  );
}
export default Statistics