import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import * as React from 'react';
import Icon from './Icon';



const NavWrapper=styled.div`
  box-shadow: 0 0 3px rgba(0,0,0,0.25);
  line-height: 24px;
  background: #fff;
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
        &.active{
          color:#80b3ff;
          .icon{
            fill:#80b3ff;
          }
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

          <NavLink to="/tags" >
            <Icon name={'labels'}/>
            标签页
          </NavLink>
        </li>
        <li>

          <NavLink to="/money">
            <Icon name={'money'}/>
            记账页
          </NavLink>

        </li>
        <li>

          <NavLink to="/statistics">
            <Icon name={'statistics'}/>
            统计页

          </NavLink>
        </li>

      </ul>
    </NavWrapper>
  )

}
export default Nav
