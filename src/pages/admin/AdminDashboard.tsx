import { useEffect,useState } from 'react'
import { supabase } from '../../services/supabaseClient'

export default function AdminDashboard(){

const [users,setUsers]=useState<any[]>([])

useEffect(()=>{
loadUsers()
},[])

const loadUsers=async()=>{
const {data}=await supabase.from('profiles').select('*')
setUsers(data || [])
}

return(
<div>

<h2>Admin Dashboard</h2>

<h3>Users</h3>

{users.map(u=>(
<div key={u.id}>
{u.email} - {u.role}
</div>
))}

</div>
)
}