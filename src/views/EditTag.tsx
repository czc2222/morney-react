import {useTags} from '../useTags';
import {useParams} from 'react-router-dom'
import react from 'react'


const EditTag:react.FC=()=>{
  const {findTag} =useTags()
  let {id}=useParams()
  const tag=findTag(parseInt(id!))
  return(
    <div>
      {tag.name}
    </div>
  )
}
export default EditTag