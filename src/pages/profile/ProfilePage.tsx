import { useEffect,useState } from 'react'
import { supabase } from '../../services/supabaseClient'

export default function ProfilePage(){
const [profile,setProfile]=useState<any>(null)

useEffect(()=>{
loadProfile()
},[])

const loadProfile=async()=>{
const {data:{user}}=await supabase.auth.getUser()

const {data}=await supabase
.from('profiles')
.select('*')
.eq('id',user?.id)
.single()

setProfile(data)
}

return(
<div>
<h2>User Profile</h2>
{profile && (
<div>
<p>Name: {profile.name}</p>
<p>Email: {profile.email}</p>
<p>Role: {profile.role}</p>
</div>
)}
</div>
)
}