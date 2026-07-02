


export function Card({data}) {
    return(
        <div style={{display:'flex',flexWrap:"wrap",gap:"10px"}}>

            {data.map(singleitem=>(

                <div  
                key={singleitem.id}

                style={
                    {
                        backgroundColor:"grey",
                        color:"black", 
                        width:"350px",
                        height:"450px",
                        overflow:"hidden"
                        }
                        }>

                <img src={singleitem.thumbnail} style={{width:"250px", display: "block",margin: "0 auto"}} alt=""/>
                <h2>{singleitem.title}</h2>
                <p>${singleitem.price}</p>
                <p>{singleitem.description}</p>
            </div>
                
            ))}

        </div>
    )
}