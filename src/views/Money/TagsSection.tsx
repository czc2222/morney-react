import styled from 'styled-components';
import React from 'react';
const TagsSection:React.FC=()=>{
 const [tags,setTags]=React.useState<string[]>(['衣','食','住','行'])
  const [selectTags,setSelectTags]=React.useState<string[]>([])
  const onAddTag=()=>{
   const tagName=window.prompt('请输入新标签名')
    if(tagName!==null){
      setTags([...tags,tagName])//如果输入的标签名不是空的，在tags中添加
    }
  }
  const ToggleTag=(tag:string)=>{
      if(selectTags.indexOf(tag)>=0){//选中的Tag中是否有这个tag
        setSelectTags(selectTags.filter(t=>t!==tag))//如果有，将不是这个tag的数据放入setSelectTags中
      }else {
        setSelectTags([...selectTags,tag])//否则直接添加到setSelectTags
      }
  }
  return(
    <Wrapper>
      <ol>
        {tags.map(tag=>
          <li onClick={()=>{ToggleTag(tag)}}
              className={selectTags.indexOf(tag)>=0 ? 'selected':''}
          >{tag}</li>
        )}
      </ol>
      <button onClick={onAddTag}>新增标签</button>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  background: #FFFFFF;
  padding: 12px 16px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;

  > ol {
    margin: 0 -12px;

    > li {
      background: #D9D9D9;
      border-radius: 18px;
      display: inline-block;
      padding: 3px 18px;
      font-size: 14px;
      margin: 8px 12px;
      &.selected{
        background:#80b3ff ;
      }
    }
  }

  > button {
    background: none;
    border: none;
    padding: 2px 4px;
    border-bottom: 1px solid #333;
    color: #666;
    margin-top: 8px;
  }
`;

export {TagsSection};