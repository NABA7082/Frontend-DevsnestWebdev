import React from 'react';
import Card from './Card';

const Menucard = ()=>{
 

  

    const Users=[
      {
        recipie:"Pizza",
        calories:"you have consumed 56 cals today"
      },
      {
        recipie:"Burger",
        calories:"you have consumed 69 cals today"
      },
      {
        recipie:"Coke",
        calories:"you have consumed 500 cals today"
      },
      {
        recipie:"Browne",
        calories:"you have consumed 180 cals today"
      },
      {
        recipie:"Fried Rice",
        calories:"you have consumed 90 cals today"
      },
      {
        recipie:"Lassania",
        calories:"you have consumed 200 cals today"
      },
      {
        recipie:"Pani Puri",
        calories:"you have consumed 10 cals today"
      },
      



    ]
    
return(

  <div className="card">

    <Card recipie={Users[0].recipie} calories={Users[0].calories}/>
    <Card recipie={Users[1].recipie} calories={Users[1].calories}/>
    <Card recipie={Users[2].recipie} calories={Users[2].calories}/>
    <Card recipie={Users[3].recipie} calories={Users[3].calories}/>
    <Card recipie={Users[4].recipie} calories={Users[4].calories}/>
    <Card recipie={Users[5].recipie} calories={Users[5].calories}/>
    <Card recipie={Users[6].recipie} calories={Users[6].calories}/>
    

</div>
  );
};
export default Menucard;