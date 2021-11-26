import * as React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import Money from './views/Money';
import Tags from './views/Tags';
import Statistics from './views/Statistics';
import NoMatch from './views/NoMatch';



 function App() {
  return (
    <div>


  <Routes>
    <Route path="/" element={<Outlet />}>
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


export default App