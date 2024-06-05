


export const getGifts = async (category)=>{

    const url = `https://api.giphy.com/v1/gifs/search?api_key=e6YykojWCRLXCVSqzhYWWkG31zITHQuA&q=${category}&limit=5`;
    const response = await fetch(url);
    const {data} = await response.json()

    return data.map((img)=>{
        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized.url 
        }
    })

}