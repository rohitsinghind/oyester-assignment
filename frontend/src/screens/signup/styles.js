export const styles = {
    box: {
        height: '93vh',
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        position:"relative",
        '@media (max-width: 550px)': {
            height: "90vh",
          },
    },
    alert:{
        position:"absolute",
        top:"10%"
    },
    textLogo:{
        fontFamily: "'Courgette', cursive",
        fontSize:"34px",
        color:"#747474",
        display:"flex",
        justifyContent:"center",
        mb:"20px"
    },
    loginBtn:{
        width:"100%",
        background:"#0095f6",
        mt:"20px",
    },
    signupText1:{
        fontFamily: "'Open Sans', sans-serif",
        fontSize:"16px",
        colour:"#6a6a6a",
        display:"flex",
        justifyContent:"center",
    },
    signupText2:{
        ml:"7px",
        color:"#0095f6",
        fontFamily: "'Open Sans', sans-serif",
        fontSize:"16px",
        fontWeight:700,
        display:"flex",
        justifyContent:"center",
        cursor:"pointer",
    },
    center:{
        display:"flex",
        justifyContent:"center",
    },
    name:{
        display:"flex",
        justifyContent:"center",
        mb:"15px",
        width:"300px"
    },
    divider:{
        display:"flex",
        justifyContent:"center",
        background:"#e1e1e1",
        my:"20px"
    }
}