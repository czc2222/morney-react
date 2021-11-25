import * as React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import styled from 'styled-components';

const Wrapper =styled.div`
  
  height: 100vh;
  display: flex;
  flex-direction: column;
`
const Main =styled.div`
 
  flex-grow: 1;
  overflow:auto;
`
const Nav=styled.div`
border:1px solid blue;
  >ul{
    display:flex;
    li{
      width:33.33%;
      text-align:center;
      padding:16px;
    }
  }
`

 function App() {
  return (
    <div>


  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Money />} />
      <Route path="tags" element={<Tags />} />
      <Route path="money" element={<Money />} />
      <Route path="statistics" element={<Statistics />} />
      <Route path="*" element={<NoMatch />} />
    </Route>
  </Routes>


    </div>
  );
}

function Layout() {
  return (
    <div>
      <Wrapper>

        <Main>
          <Outlet />
        </Main>
        <Nav>
        <ul>

          <li>
            <Link to="/tags">标签页</Link>
          </li>
          <li>
            <Link to="/money">记账页</Link>
          </li>
          <li>
            <Link to="/statistics">统计页</Link>
          </li>

        </ul>
      </Nav>

      <hr />
      </Wrapper>
    </div>
  );
}



function Tags() {
  return (
    <div>
      <h2>标签页</h2>
    </div>
  );
}

function Money() {
  return (
    <div>
      <h2>记账页</h2>
    </div>
  );
}

function Statistics() {
  return (
    <div>
      <h2>统计页</h2>
    </div>
  );
}
function NoMatch() {
  return (
    <div>
      <h2>404此页面不存在</h2>
      <p>
        <Link to="/">首页</Link>
      </p>
    </div>
  );
}
export default App