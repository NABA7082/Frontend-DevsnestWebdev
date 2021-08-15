const initialState=" ";

const changeTheEmail=(state=initialState, action) =>{
  if(action.type==="email")
  {
         return action.email;

  }
  return state;
}
export default  changeTheEmail;