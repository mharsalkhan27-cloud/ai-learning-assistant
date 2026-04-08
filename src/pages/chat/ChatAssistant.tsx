import { useState } from 'react'
import { supabase } from '../../services/supabaseClient'

export default function ChatAssistant(){

const [message,setMessage]=useState('')
const [chat,setChat]=useState<any[]>([])

const sendMessage=async()=>{

const res=await fetch('/api/ai',{
method:'POST',
headers:{'Content-Type':'application/json'},
body:JSON.stringify({message})
})

const data=await res.json()

setChat([...chat,{question:message,answer:data.reply}])

await supabase.from('chat_history').insert([
{message:message,response:data.reply}
])

setMessage('')
}

return(
<div>
<h2>AI Assistant</h2>

<input value={message} onChange={(e)=>setMessage(e.target.value)} />

<button onClick={sendMessage}>Send</button>

{chat.map((c,i)=>(
<div key={i}>
<p><b>Q:</b> {c.question}</p>
<p><b>A:</b> {c.answer}</p>
</div>
))}

</div>
)
}