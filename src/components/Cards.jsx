import React, {useState, useEffect} from 'react'

const Cards = ({categoria}) => {

  const [images, setImages] = useState([]);

  useEffect(() => {

    ImgGif(categoria)
    .then(imgData => setImages(imgData));
    //console.log(images);
  }, [categoria])

  const ImgGif = async (categoria) => {
  
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(categoria)}limit=10&api_key=s5snBsESa6cPNM7yCw5vuDTj459igSTe`;

    const resp = await fetch(url);
    const { data }= await resp.json();

    //console.log(data);

    const ImgData = data.map(img => {

      return(

        {

          id: img.id,
          title: img.title,
          img: img.images.downsized_medium.url

        }

      );

    })    

    return ImgData;

  }    

  //console.log(images); 

  return (

    <div>

      <ol>

        {

          images.map((el) => (
  
            <li key={el.id}>
              
              <h3>{el.title}</h3>
  
              <img src={el.img} alt={el.title} />
  
            </li>
  
          )
          
          )

        }

      </ol>

    </div>

  )
}

export default Cards
