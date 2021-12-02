import react from 'react';
import React from 'react';
import styled from 'styled-components';

const Label=styled.label`
    display:flex;
    align-items: center;
    > span { margin-right: 16px; white-space: nowrap; }
    > input {
      display:block;
      width: 100%;
      height:44px;
      background: none;
      border: none;
    }
  
`
type Props={
  label:string
} & React.InputHTMLAttributes<HTMLInputElement> //继承input标签上的所有类型

const Input:react.FC<Props>=(props)=>{
  const{label,children,...rest}=props //...rest 所有的属性都在里面
  return(
    <Label>
      <span>{label}</span>
      <input {...rest}/>
    </Label>
  )
}
export {Input}