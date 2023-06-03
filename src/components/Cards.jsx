import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
  display: flex;
`
const Block = styled.div`
  height: 300px;
  width: 200px;
  border: 1px solid rgb(138, 138, 138);
  display: flex;
  justify-content: center;
  margin: 10px;
`



const Cards = () => {
    const rend_cards = [
      {
        img: require("../assets/ASUS-ROG-Phone-6-Pro-1024x959.jpg"),
        p: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
        h3: "25 000",
        h5:"27 000",
        status:{color:'red'}
      },
      {
        img: require("../assets/ASUS-ROG-Phone-6-Pro-1024x959.jpg"),
        p: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
        h3: "27 000",
        status:{color:'#000'}
      },
      {
        img: require("../assets/ASUS-ROG-Phone-6-Pro-1024x959.jpg"),
        p: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
        h3: "20 000",
        status:{color:'grey'}
      },
      {
        img: require("../assets/ASUS-ROG-Phone-6-Pro-1024x959.jpg"),
        p: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
        h5:"30 000",
        h3: "28 000",
        status:{color:'red'}
      },
      {
        img: require("../assets/ASUS-ROG-Phone-6-Pro-1024x959.jpg"),
        p: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
        h3: "22 000",
        status:{color:'#000'}
      },
      {
        img: require("../assets/ASUS-ROG-Phone-6-Pro-1024x959.jpg"),
        p: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
        h3: "15 000",
        status:{color:'grey'}
      },
      {
        img: require("../assets/ASUS-ROG-Phone-6-Pro-1024x959.jpg"),
        p: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
        h3: "25 000",
        status:{color:'#000'}
      },
    ];
        // const style = {
        //     background:"red", color:"#000"
        // }
  return (
    <Container>
    {rend_cards.map((card, index = 0)  => 
    <Block key={index++}>
        <div>
            <img src={card.img}  alt={'#'}/>
            <p>{card.p}</p>
            <h5 style={{textDecoration: "line-through"}}>{card.h5}</h5>
            <h3 style={card.status}>{card.h3} ₴</h3>
        </div>
    </Block>
    )}
    </Container>
    
  )
}

export default Cards