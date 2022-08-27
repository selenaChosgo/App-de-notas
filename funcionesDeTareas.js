const fs = require('fs')


let funcionesDeTareas ={
    leerJson: function(){
        let tareasJson= fs.readFileSync('./tareas.json', 'utf-8')
        let tareasParse =JSON.parse(tareasJson)
        return tareasParse

    }
}

module.exports = funcionesDeTareas