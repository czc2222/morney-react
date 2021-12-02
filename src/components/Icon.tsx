import * as React from 'react';


let importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
try {importAll(require.context('icons', true, /\.svg$/));} catch (error) {console.log(error);}

type IconType={
  name?:string
}
const Icon=(Props:IconType)=>{
  return(
    <svg className="icon">
      {Props.name && <use xlinkHref={'#'+Props.name} />}
    </svg>
  )
}
export default Icon