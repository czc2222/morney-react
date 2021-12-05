import LayoutWrapper from '../components/LayoutWrapper';
import * as React from 'react';
import {CategorySection} from './Money/CategorySection';
import {ReactNode, useState} from 'react';
import styled from 'styled-components';
import {RecordItem, useRecords} from '../hook/useRecords';
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
const Date =styled.h3`
  font-size: 18px;
  line-height: 20px;
  padding: 10px 16px;
`

function Statistics() {
  const [category,setCategory] = useState<'-'|'+'>( '-')
  const {records}=useRecords()
  const {getName} =useTags()
  const selectedRecords =records.filter(r=>r.category === category) //选出 跟支出或者收入 相应的数据

  const hash:{[key:string]:RecordItem[]} ={} //声明 hash 类型

  selectedRecords.forEach(r=> {// 桶排序
    const key= dayjs(r.createAt).format('YYYY-MM-DD')
    if(!(key in hash)){
      hash[key] =[]
    }
    hash[key].push(r)

  })
  console.log(hash);
  const array =Object.entries(hash).sort((a,b)=>{ //计数排序
    if(a[0] === b[0]){return 0}
    if(a[0] > b[0]) {return -1}
    if(a[0] < b[0]) {return 1}
    return 0
  })

  const beautify=(date:string)=>{
    const now =dayjs()
    const  day=dayjs(date)
    if (day.isSame(now, 'day')) {
      return '今天';
    } else if (day.isSame(now.subtract(1, 'day'), 'day')) {
      return '昨天';
    } else if (day.isSame(now.subtract(2, 'day'), 'day')) {
      return '前天';
    } else if (day.isSame(now, 'year')) {
      return day.format('M月D日');
    } else {
      return day.format('YYYY年M月D日');
    }
  }


  return (
    <LayoutWrapper>
      <CategoryWrapper>
        <CategorySection value={category}
                         onChanged={(value)=>{setCategory(value)}}
        />
      </CategoryWrapper>
      {array.map(([date,records])=>
          <div key={date}>
            <Date>{beautify(date)}</Date>
            <div>
              {records.map(r =>  {
                return <Item key={r.createAt}>
                  <div className="tagName oneLine" >
                    {
                      r.tagIds
                        .map(tagId => <span key={tagId}>{getName(tagId)}</span>)
                        .reduce((result,span,index,array)=>
                          result.concat(index <array.length -1 ? [span,'，']:[span]),[] as ReactNode[])
                    }
                  </div>
                  {r.note && <div className="note">
                    {r.note}
                  </div>}
                  <div className="amount">
                    ￥{parseFloat(r.amount)}
                  </div>

                </Item>
              })}


            </div>
          </div>

      )}

    </LayoutWrapper>


  );
}
export default Statistics