import * as React from 'react';
import classnames from 'classnames'

let importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
try {importAll(require.context('icons', true, /\.svg$/));} catch (error) {console.log(error);}

type IconType={
  name?:string
} & React.SVGAttributes<SVGElement>
const Icon=(props:IconType)=>{
  const {children,name,className,...rest} = props
  return(
    <svg className={classnames('icon',className)} {...rest}>
      {props.name && <use xlinkHref={'#'+props.name} />}
    </svg>
  )
}
export default Icon