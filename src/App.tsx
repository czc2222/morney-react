import * as React from 'react';
import {Routes, Route, Outlet} from 'react-router-dom';
import Money from './views/Money';
import Tags from './views/Tags';
import Statistics from './views/Statistics';
import NoMatch from './views/NoMatch';
import styled from 'styled-components';
import EditTag from './views/EditTag'


const AppWrapper = styled.div`
  color: #333;
`;

function App() {
  return (
    <AppWrapper>


      <Routes>
        <Route path="/" element={<Outlet/>}>
          <Route index element={<Money/>}/>
          <Route path="tags" element={<Tags/>}/>
          <Route path="tags/:tag" element={<EditTag/>}/>
          <Route path="money" element={<Money/>}/>
          <Route path="statistics" element={<Statistics/>}/>
          <Route path="*" element={<NoMatch/>}/>
        </Route>
      </Routes>


    </AppWrapper>
  );
}


export default App;