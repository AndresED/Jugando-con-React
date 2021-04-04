import React from 'react'
export const GifGrid =   async ({category}) => {
    try {
        const getGifs = async(criterio) => {
            try {
                const url = 'https://api.giphy.com/v1/gifs/search?api_key=DUs8sAIa1cUsNENmHxPlgFB15EcdAze3&q=' + criterio + '&limit=25&offset=0&rating=g&lang=en'
                const data = await fetch(url);
                const response = await data.json();
                return response;
            } catch (error) {
                console.log(error);
            }
        }
        await getGifs(category);
        return (
            <>  
            {category}
            
            </>
        )
    } catch (error) {
        console.log(error)
    }
}
