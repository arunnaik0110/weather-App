import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ThunderstormRoundedIcon from '@mui/icons-material/ThunderstormRounded';
import AcUnitRoundedIcon from '@mui/icons-material/AcUnitRounded';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
export default function InfoBox({info}){
//    let result={
//     city:"chennai",
//     humidity:78,
//     maxtemp:34, 
//     mintemp:28,
//     temp:30,
//     weather:"sunny"
//    }
   let COLD_URL="https://wallpaperaccess.com/full/1323096.jpg";
   let HOT_URL="https://tse3.mm.bing.net/th/id/OIP.gZ80xdVewF4TNd-EhP1SMgHaEK?rs=1&pid=ImgDetMain&o=7&rm=3";
   let RAIN_URL="https://th.bing.com/th/id/OIP.oBolCxK1Wm-cazxzI8dxhgHaEJ?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3";


    
    return(
        <div>
            <h2>WeatherCast</h2>
                <div>
                    <Card sx={{ maxWidth: 350 }}>
      <CardMedia
        component="img"
        
        height="140"
        image={
          info.humidity>80 ? RAIN_URL:info.temp>15? HOT_URL:COLD_URL
        }
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         <b> {info.city}</b> &nbsp;{ 
             info.humidity>80 ? <ThunderstormRoundedIcon/>:info.temp>15?<LightModeRoundedIcon/>: <AcUnitRoundedIcon/>
          }
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
         <div><b>humidity:</b>&nbsp; {info.humidity}</div>
        
          <div><b>maxtemp:</b>&nbsp; {info.maxtemp}</div>
          <div><b>mintemp:</b>&nbsp; {info.mintemp}</div>
          <div><b>temp:</b>&nbsp; {info.temp}</div>
          <div><b>weather:</b>&nbsp; {info.weather}</div>
        </Typography>
      </CardContent>
     
    </Card>
                </div>
        </div>
    )

}