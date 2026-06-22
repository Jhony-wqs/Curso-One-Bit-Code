let playLists = []
 function generateRandomId(){
   Math.floor(Math.random() * 9999)
 }

module.exports = {
    // GET/PLAYLISTS
    index: (req, res) =>{
        res.json(playLists)
    },
    //GET/PLAYLISTS/:ID
      show:(req,res) =>{
        const {id} = req.params
        const playlist = playLists.find(pl => pl.id === +id)

        if(!playlist) return res.status(404).json({message:'play list not found.'})
         res.json(playlist)
      },
    //POST/PLAYLISTS
    save: (req, res) =>{
        const {name, tags, musics} = req.body
    if(typeof name !== 'string') {
        return res.status(400).json({message:' name must be a string '})
    }

    if(!Array.isArray(tags)){
        return res.status(400).json({message:'tags must be an array'})
    }
       const newPlayList = {
        id: generateRandomId() ,
        name:name,
        tags:tags,
        musics:musics ?? []
       } 

       playLists.push(newPlayList)
       res.status(201).json(newPlayList)

    },
    //PUT/PLAYLIST/;ID
    update: (req, res) =>{
        const {id} = req.params
        const {name, tags} = req.body

        const playlistIndex = playLists.findIndex(pl => pl.id === +id)

        if(playlistIndex === -1){
            return res.status(404).json({message:'playlist not found.'})
        }

        if(typeof name === 'string'){
            playLists[playlistIndex].name = name
        } 

        if(tags && Array.isArray(tags)){
            playLists[playlistIndex].tags = tags
        }


        res.json(playLists[playlistIndex])
    },
    //DELETE/PLAYLIST/;ID
      delete: (req, res) =>{
         const {id} = req.params

         const playlistIndex = playLists.findIndex(pl => pl.id === +id)

         if(playlistIndex === -1){
             return res.status(404).json({message:'playlist not found.'})
         }

         const deletePlaylist = playLists.slice(playlistIndex, 1)
         res.json(deletePlaylist)
      }, 

      addMusic:(req,res) =>{
        const {title, year, artist, album} = req.body
        const {id} = req.id

        const playlist = playLists.find(pl => pl.id === +id)

        if(playlist) return res.status(404).json({message:'playlist not found!'})

        if(typeof title !== "string" || typeof year !== "number" ||
            typeof artist !== "string" || typeof album !== "string"
        ){
            return res.status(400).json({message:'invalid fields'})
        }    


        const newMusic = {
            id: generateRandomId(),
            title,
            year,
            artist,
            album
        }
         playLists.musics.push(newMusic)

         res.status(201).json(newMusic)
      },
      removeMusic:(req, res) =>{
        const {playlistId, musicId} = req.params
         const plalists = playLists.find(pl => pl.id === +playlistId)

        if(!playlist){
           res.status(404).json({message:'misic not found.'})

        }

        const musicIndex = plalists.musics.findeIndex(music => music.id === +musicId)
        plalists.musics.splice(musicIndex, 1)

        res.status(204).end()
      }
}