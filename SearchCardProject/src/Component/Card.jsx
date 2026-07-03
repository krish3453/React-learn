


export function Card({ data }) {
    return (
        <div className="mt-10 flex flex-wrap justify-center w-[80%] gap-4 ">

            {data.map(singleitem => (

                <div
                    key={singleitem.id}
                    className="bg-gray-500 w-[25%] h-125 p-4"

                >

                    <img src={singleitem.thumbnail} className='bg-amber-100 aspect-square w-full h-[50%] object-cover rounded-2xl shadow-2xl' alt="" />
                    <div  className="flex items-center justify-between">
                        <h2 className="line-clamp-1">{singleitem.title}</h2>
                        <p>${singleitem.price}</p>
                    </div>
                    <p className="line-clamp-3">{singleitem.description}</p>
                </div>

            ))}

        </div>
    )
}