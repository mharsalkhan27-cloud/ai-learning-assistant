import { useState } from 'react'
import { supabase } from '../../services/supabaseClient'

export default function CreateQuiz(){

const [title,setTitle]=useState('')

const createQuiz=async()=>{
await supabase.from('quizzes').insert([{title}])
alert('Quiz Created')
}

return(
<div>
<h2>Create Quiz</h2>

<input value={title} onChange={(e)=>setTitle(e.target.value)} />

<button onClick={createQuiz}>Create</button>

</div>
)
}