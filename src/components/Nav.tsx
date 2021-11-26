import styled from 'styled-components';
import {Link} from 'react-router-dom';
import * as React from 'react';
require('icons/money.svg') //使用require防止 treeShaking
require('icons/labels.svg')
require('icons/statistics.svg')




const NavWrapper=styled.div`
  box-shadow: 0 0 3px rgba(0,0,0,0.25);
  line-height: 24px;
  >ul{
    display:flex;
    li{
      width:33.33%;
      text-align:center;
      padding:4px 0;
      display:flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      .icon{
        width: 24px;
        height:24px;
      }
    }
  }
`
const Nav=()=>{
  return(
    <NavWrapper>
      <ul>

        <li>
          <svg className="icon">
            <use xlinkHref="#labels" />
          </svg>
          <Link to="/tags">标签页</Link>
        </li>
        <li>
          <svg className="icon">
            <use xlinkHref="#money" />
          </svg>
          <Link to="/money">记账页</Link>
        </li>
        <li>
          <svg className="icon">
            <use xlinkHref="#statistics" />
          </svg>
          <Link to="/statistics">统计页</Link>
        </li>

      </ul>
    </NavWrapper>
  )

}
export default Nav
