import React from 'react'
import styled from 'styled-components'

function Login() {
    return (
        <Container>
            <CTA>
                <CTAlogoone src="images/CTA-logo-one.svg"/>
                <Signup>GET AL THERE</Signup>
                <Description>
                Disney+ is an American subscription video on-demand over-the-top streaming service owned and operated by the Media and Entertainment Distribution division of The Walt Disney Company. </Description>

                <CTAlogotwo src="images/CTA-logo-two.png" />
           
            </CTA>
            
        </Container>
    )
}

export default Login

const Container = styled.div`
position: relative;
min-height:calc(100vh - 70px);
display:flex;
align-items:center;
justify-content:center;


&::before{
    background-position:top;
    background-size:cover;
    background-repeat:no-repeat;
    position: absolute;
    top:0;
    left: 0;
    bottom:0;
    right: 0;
    content:"";
    z-index:-1;
    background-image:url('images/login-background.jpg');
    opacity: 0.7;
}
`
const CTA = styled.div`
max-width:650px;
padding:80px 40px;
width:90%;
display:flex;
flex-direction:column;
align-items:center;



`

const CTAlogoone =styled.img``


const CTAlogotwo =styled.img`
width:90%;

`

const Signup = styled.a`
width:100%;
background-color:#0063e5;
font-weight:bold;
padding:17px 0;
border-radius:4px;
text-align:center;
font-size:18px;
cursor: pointer;
transition:all 250ms;
letter-spacing:1.5px;
margin-top:8px;
margin-bottom:12px;

&:hover{
    background:#0483ee;
}

`

const Description = styled.p`
font-size:11px;
letter-spacing:1.5px;
text-align:center;
line-height:1.5;

`
