import styled from 'styled-components';
import React, {ChangeEventHandler} from 'react';
import {Input} from '../../components/Input';

type Props={
  value:string,
  onChanged:(newNote:string)=>void
}
const NoteSection:React.FC<Props>=(props)=>{
  const note =props.value
  const setNote =props.onChanged
  const onChange:ChangeEventHandler<HTMLInputElement>=(e)=>{
      setNote(e.target.value)
  }
  return(
    <Wrapper>
      <Input label="备注" type="text" value={note} onChange={onChange} placeholder="请输入备注"/>
    </Wrapper>

  )
}

const Wrapper = styled.section`
  background: #f5f5f5;
  padding: 14px 16px;
  font-size: 14px;
 
`;

export {NoteSection}