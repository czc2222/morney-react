let id =JSON.parse(window.localStorage.getItem('idMax') || '4')
const createID=()=>{
  id+=1
  window.localStorage.setItem('idMax',JSON.stringify(id))
  return id
}
export {createID}
