const data = require('./database')

function spiciesNames(){
  return data.species.reduce((prev,curr)=>{
      return [...prev,curr.name]
  }, [])

}

console.log(spiciesNames())