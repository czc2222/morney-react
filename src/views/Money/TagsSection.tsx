import styled from 'styled-components';
import React from 'react';
import {useTags} from '../../hook/useTags';
import {createID} from '../../lib/CreateID';

type Props={
  value:number[],
  onChanged:(newTags:number[])=>void
}

const TagsSection: React.FC<Props> = (props) => {
  const {tags,addTag} =useTags()
  const selectTags =props.value
  const setSelectTags =props.onChanged

  //选中取消标签
  const ToggleTag = (tagId: number) => {
    if (selectTags.indexOf(tagId) >= 0) {//选中的Tag中是否有这个tag
      setSelectTags(selectTags.filter(t => t !== tagId));//如果有，将不是这个tag的数据放入setSelectTags中
    } else {
      setSelectTags([...selectTags, tagId]);//否则直接添加到setSelectTags
    }
  };
  return (
    <Wrapper>
      <ol>
        {tags.map(tag =>
          <li onClick={() => {ToggleTag(tag.id);}}
              className={selectTags.indexOf(tag.id) >= 0 ? 'selected' : ''}
              key={tag.id}
          >{tag.name}</li>
        )}
      </ol>
      <button onClick={addTag}>新增标签</button>
    </Wrapper>
  );
};

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

      &.selected {
        background: #80b3ff;
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