import React from 'react'
import styled from 'styled-components'
import {useParams} from "react-router-dom"
import  {useEffect , useState} from 'react'
import db from '../firebase';


function Detail() {

    const { id } = useParams();

    const [movie,setMovie] = useState()


    useEffect(()=>{

        db.collection("movies")
        .doc(id)
        .get()
        .then((doc)=>{
            if(doc.exists){
                setMovie(doc.data());

            }


        })
       
    },[])

   




    return (

        
        <Container>

            
        {movie && (
            <>
            <Background>
                <img src={movie.backgroundImg} alt="" />
            </Background>
            <Title>
                <img src={movie.titleImg}  alt="" />
            </Title>

            <Controls>
                <Playbutton>
                    <img src="images/play-icon-black.png" alt="" />
                    <span>PLAY</span>
                </Playbutton>
                <Trailerbutton>
                <img src="images/play-icon-white.png" alt="" />
                    <span>TRAILER</span>
                </Trailerbutton>
                <Addbutton>
                    <span>+</span>
                </Addbutton>
                <Groupbutton>
                    <img src="images/group-icon.png" alt="" />
                </Groupbutton>


            </Controls>



            <Subtitle>
            {movie.subTitle} 
            </Subtitle>

            <Description>
                {movie.description}
            </Description>



            </>


            
        )}



            


        </Container>
    )
}

export default Detail

const Container =styled.div`
min-height:calc(100vh - 70px);
padding: 0 calc(3.5vw + 5px);
position: relative;



`

const Background = styled.div`
position: fixed;
top:0;
    left: 0;
    bottom:0;
    right: 0;
    z-index: -1;
    opacity: 0.8;

    img{
        width:100%;
    height:100%;
    object-fit:cover;
    }


`

const Title = styled.div`

height:35vh;
margin-top:60px;
min-height:170px;
width:45vw;
margin-bottom:30px;

min-width:200px;
img{
    width:100%;
    height:100%;
    object-fit:contain;
   
}

`
const Controls = styled.div`

display:flex;
align-items:center;


`


const Playbutton = styled.button`
border-radius:4px;
font-size:15px;
display:flex;
align-items:center;
height: 56px;
background-color:rgb( 249,249,249);
border:none;
padding:0px 24px;
margin-right:22px;
letter-spacing:1.8px;
cursor: pointer;


&:hover{
    background-color:rgb( 198,198,198);

}

`


const Trailerbutton = styled(Playbutton)`
 background-color:rgba( 0,0,0,0.3);
 color:rgb( 249,249,249);
 border:1px solid rgb( 249,249,249);
`



const Addbutton = styled.button`
margin-right:16px;
width:44px;
height:44px;
display:flex;
align-items:center;
justify-content:center;
border-radius:50%;
border:1px solid rgb( 249,249,249);
background-color:rgba( 0,0,0,0.6);
cursor: pointer;


span{
    font-size:30px;
    color:rgb( 249,249,249);
    
}

`

const Groupbutton = styled(Addbutton)`
color:rgb( 0,0,0);
`

const Subtitle = styled.div`
    color:rgb( 249,249,249);
    font-size:14px;
    min-height:20px;
    margin-top:26px;
    
    `


const Description = styled.div`
line-height:1.4;
font-size:17px;
max-width:760px;
   
    margin-top:16px;

`

