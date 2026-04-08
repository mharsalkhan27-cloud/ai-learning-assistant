import { supabase } from '../../services/supabaseClient'

export default function UploadMaterial(){

const upload=async(e:any)=>{
const file=e.target.files[0]

await supabase.storage
.from('course-materials')
.upload(`files/${file.name}`,file)

alert('File uploaded')
}

return(
<div>
<h2>Upload Course Material</h2>
<input type="file" onChange={upload}/>
</div>
)
}