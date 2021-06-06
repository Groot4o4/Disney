import React , {useEffect} from 'react'
import styled from 'styled-components'
import {auth , provider} from '../firebase'
import { selectUserName , selectUserPhoto , setUserLogin , setSignOut} from '../features/user/userSlice'
import {useSelector ,useDispatch}  from "react-redux"
import {useHistory} from "react-router-dom"


function Header() {

    const dispatch = useDispatch(); 
    const userName = useSelector(selectUserName);
    const userPhoto = useSelector(selectUserPhoto);
    const history = useHistory()

    useEffect(() => {
        
        auth.onAuthStateChanged(async (user)=>{
            if(user){
                dispatch(setUserLogin({
                    name:user.dsipalyName,
                    email:user.email,
                    photo:user.photoURL
    
                }));
                history.push("/");

            }

        })
       
    }, [])

    const signIn =()=>{
        auth.signInWithPopup(provider)
        .then((result)=>{
            let user =result.user
            console.log(result)
            dispatch(setUserLogin({
                name:user.dsipalyName,
                email:user.email,
                photo:user.photoURL

            }));
            history.push("/")
        })

    }

    const signOut = ()=>{
        auth.signOut()
        .then(()=>{
            dispatch(setSignOut());
            history.push("/login")
        }) 
    }
 

    return (
        <Nav>
            <Logo src="images/logo.svg" />

            {!userName ?(
                <LoginContainer>
                     <Login onClick={signIn}>LogIn</Login>
                </LoginContainer>
           ) :

            <>
            <NavMenu>

<a>
    <img src="/images/home-icon.svg" alt="" />
    <span>HOME</span>
</a>

<a>
    <img src="/images/search-icon.svg" alt=""/>
    <span>SEARCH</span>
</a>

<a>
    <img src="/images/watchlist-icon.svg" alt=""/>
    <span>WATCHLIST</span>
</a>

<a>
    <img src="/images/original-icon.svg"  alt=""/>
    <span>ORIGINALS</span>
</a>

<a>
    <img src="/images/movie-icon.svg" alt="" />
    <span>MOVIES</span>
</a>

<a>
    <img  src="/images/series-icon.svg" alt="" />
    <span>SERIES</span>
</a>

</NavMenu>

<UserImg  onClick={signOut} src="/images/123.jpg" />

            </>
            
            }



            
        </Nav>
    )
}

export default Header

const Nav = styled.nav`
display:flex;
align-items:center;
overflow-x:hidden;
height: 70px;
background-color:#090b13 ;
padding:0 36px;
`

const Logo = styled.img`
width: 80px;` 

const NavMenu = styled.div`
display: flex;
flex:1;
margin-left : 25px;
align-items:center;

a{
    display: flex;
    align-items:center;
    padding:0 12px;
    cursor: pointer;


    img{
        height: 25px;
       
    }

    span{
        font-size:14px;
        letter-spacing:1.42px;
        position: relative;

        &:after{
            content:'';
            height: 2px;
            background:white;
            position: absolute;
            left: 0;
            right:0;
            bottom:-6px;
            opacity:0 ;
            transform-origin:  center;
            transition:all 250ms cubic-bezier(0.25,0.46,0.45,0.95)0s;
            transform:scaleX(0);

        }
   
    }

    &:hover{
       span:after{
           transform:scaleX(1);
           opacity: 1;
       }


    }

}` 

const UserImg = styled.img`
widows: 48px;
height: 48px;
border-radius:50%;
cursor: pointer;
`
const Login = styled.div`
border-radius:4px;
border : 1px solid white;
padding :8px 18px;
letter-spacing:1.5px;
text-transform:uppercase;
background-color:rgba(0,0,0,0.6);
transition :all 0.2s ease 0s;
cursor: pointer;

&:hover{
    background-color:#f9f9f9;
    color:#000;
    border-color:transparent;
}

`

const LoginContainer = styled.div`
display:flex;
flex:1;
justify-content:flex-end;


`
