// const drawerWidth = 220

export const myStyle = {
    body:{
        fontFamily:[
            "Nunito",
            "Roboto",
            "Helvetica Neue",
            "Arial",
            "sans-serif"
          ].join(","),
          marginLeft:'2rem',
    },
    field:{
        margin:'1rem',
        width:'70%'
    },
    drawer: {
        width: 220,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
            width: 220,
            boxSizing: 'border-box',
        },
        '& .Mui-selected': {
            color: 'red',
        },

        
    },
    root:{
        boxSizing:'box-sizing',
        display:'flex'
    },
   
}