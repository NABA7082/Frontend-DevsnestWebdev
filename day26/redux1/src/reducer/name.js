const ChangeTheName=(state="",action)=>{
  if(action.type==="name")
     return action.name;
  return state;
}
export default ChangeTheName;