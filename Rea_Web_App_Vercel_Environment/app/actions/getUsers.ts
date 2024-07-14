'use server'
import { getUsers } from "@/lib/queryFunctions";

export default  async  function getUserAction(){
  try {
    const users = await getUsers();
    if(typeof users != "undefined"){
      return users;
    }
  }
  catch(e){
    if(e instanceof Error){
      console.log(e.stack)
    }
  }
}