import React, { useEffect, useState } from 'react'

function Github() {
    const [data, setData] = useState(null)
    const [params, setParams] = useState({
        query:"masai",
        page:1,
        parPage:5

    })
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(true)
    cont [text, setText] = useState("")

    useEffect(()=>{
        getUser(params);
    },[params])

    getUser =({query="masai",page,parPage})=>{
        setLoading(true)
        return axios({
            url:"https://api.github.com/search/users",
            params:{
                q: query,
                page:page,
                per_page:parPage
            }
        }).then((res)=>{
            setData(res.data.item)
            setLoading(false)
        })

    }

  return (
    <div>
        <input
            value={text}
            onChange={(e)=>setText(e.target.value)}
            placeholder="USERNAME" 
        />
        <button onClick={handleClick}>Search</button>
        <div>
            <button 
                disabled={params.page===1}
                onClick={()=>setParams({...params,page:params.page,per_page:params.parPage})}>
                
                prev
            </button>
            <button 
                onClick={()=>setParams({...params,page:params.page,per_page:params.parPage})}>
                next
            </button>
        </div>

    </div>
  )
}

export default Github