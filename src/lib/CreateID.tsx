let id=JSON.parse(window.localStorage.getItem('idMax') || '0')
const createID=()=>{
  let id = 4
  id+=1
  window.localStorage.setItem('idMax',JSON.stringify(id))
  return id
}
export {createID}
