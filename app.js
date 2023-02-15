 const API = 'cea81cdd8779319d10811b4240dcd750'
const getData = async(cityInput)=>{
     const request = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&units=metric&appid=${API}`)
     const data =  await request.json()
     return data
    
  }