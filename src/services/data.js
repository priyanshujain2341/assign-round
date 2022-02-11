
const data =async(data)=>{
    if(!data){
        alert("Input cannot be empty")
    }
    else{
        try{
            const res = await fetch('http://localhost:8000',{
            method :"POST",
            headers:{"Content-Type" :"application/json"},
            body:JSON.stringify({
                query:data
            })
        })
        return await res.json()
        }
    
        catch(err){
            console.log(err)
            alert(err)
        }
    }
}

export {data};