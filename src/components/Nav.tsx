import styled from 'styled-components';
import {Link} from 'react-router-dom';
import * as React from 'react';
import Icon from './Icon';





const NavWrapper=styled.div`
  box-shadow: 0 0 3px rgba(0,0,0,0.25);
  line-height: 24px;
  >ul{
    display:flex;
    li{
      width:33.33%;
      text-align:center;
      >a{
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
  }
`
const Nav=()=>{
  return(
    <NavWrapper>
      <ul>

        <li>

          <Link to="/tags">
            <Icon name={'labels'}/>
            标签页
          </Link>
        </li>
        <li>

          <Link to="/money">
            <Icon name={'money'}/>
            记账页
          </Link>
        </li>
        <li>

          <Link to="/statistics">
            <Icon name={'statistics'}/>
            统计页

          </Link>
        </li>

      </ul>
    </NavWrapper>
  )

}
export default Nav
