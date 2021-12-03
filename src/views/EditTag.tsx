import {useTags} from '../useTags';
import {useParams} from 'react-router-dom'
import react from 'react'
import LayoutWrapper from '../components/LayoutWrapper';
import Icon from '../components/Icon';
import {Button} from '../components/Button';
import styled from 'styled-components';
import {Input} from '../components/Input';
import {Center} from '../components/Center';
import {Space} from '../components/Space';

const TopBar=styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 20px;
  padding: 14px;
  background:white;
`
const InputWrapper=styled.div`
  background: white;
  margin-top:8px;
  padding:0 16px;
`
const EditTag:react.FC=()=>{
  const {findTag,updateTag,deleteTag} =useTags()
  let {id}=useParams()
  const tag=findTag(parseInt(id!))
  const tagContent =(tag:{id:number,name:string})=>(
    <div>
      <InputWrapper>
        <Input label="标签名"
               type="text"
               placeholder="标签名"
               value={tag.name}
               onChange={(e)=>updateTag(tag.id,e.target.value)}
        />
      </InputWrapper>
      <Center>
        <Space/>
        <Space/>
        <Space/>
        <Button onClick={()=>deleteTag(tag.id)}>删除标签</Button>
      </Center>
    </div>
    )



  return(
    <LayoutWrapper>
      <TopBar>
        <Icon name="left"/>
        <span>编辑标签</span>
        <Icon/>
      </TopBar>
      {tag ? tagContent(tag):<Center>tag不存在</Center>}


    </LayoutWrapper>

  )
}
export default EditTag