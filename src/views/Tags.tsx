import LayoutWrapper from '../components/LayoutWrapper';
import * as React from 'react';
import {useTags} from '../useTags';

function Tags() {
  const {tags,setTags} =useTags()
  return (

    <LayoutWrapper>
      <ol>
        {tags.map(tag=>
          <li key={tag}>
            {tag}
          </li>)}
      </ol>

    </LayoutWrapper>


  );
}
export default Tags