export const styles = {
    box: {
        height: '93vh',
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        flexDirection:"column",
        '@media (max-width: 550px)': {
            height: "90vh",
          },
    },
    text1:{
        fontFamily: "'Open Sans', sans-serif",
        fontSize:"22px",
        fontWeight:"600",
        colour:"#6a6a6a",
        display:"flex",
        justifyContent:"start",
        minWidth:"100px",
        '@media (max-width: 550px)': {
            minWidth:"80px",
            fontSize:"20px"
          },
    },
    text2:{
        fontFamily: "'Open Sans', sans-serif",
        fontSize:"22px",
        colour:"gray",
        display:"flex",
        justifyContent:"start",
        '@media (max-width: 550px)': {
            fontSize:"20px"
          },
    },
    btn:{
        mt:"20px",
    }
}