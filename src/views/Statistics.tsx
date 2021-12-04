import LayoutWrapper from '../components/LayoutWrapper';
import * as React from 'react';
import {CategorySection} from './Money/CategorySection';
import {useState} from 'react';
import styled from 'styled-components';
import {useRecords} from '../hook/useRecords';
import dayjs from 'dayjs'
import {useTags} from '../hook/useTags';

const CategoryWrapper =styled.div`background:#fff;`

const Item =styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;
  background: #fff;
  font-size: 18px;
  line-height: 20px;
  padding: 10px 16px;
  > .note{
    margin-right: auto;
    margin-left: 16px;
    color:#999;
  }
`


function Statistics() {
  const [category,setCategory] = useState<'-'|'+'>( '-')
  const {records}=useRecords()
  const {getName} =useTags()
  return (
    <LayoutWrapper>
      <CategoryWrapper>
        <CategorySection value={category}
                         onChanged={(value)=>{setCategory(value)}}
        />
      </CategoryWrapper>
      <div>
        {records.map(r =>  {
          return <Item >
            <div className="tagName">
              {r.tagIds.map(tagId => <span>{getName(tagId)}</span>)}
            </div>
            {r.note && <div className="note">
              {r.note}
            </div>}
            <div className="amount">
              ￥{parseFloat(r.amount)}
            </div>

            {/*{dayjs(r.createAt).format('YYYY年MM月DD日')}*/}
          </Item>
        })}


      </div>
    </LayoutWrapper>


  );
}
export default Statistics