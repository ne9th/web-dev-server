import * as tuitsDao from "../tuits/tuits-dao.js"

const tuitsController = (app) => {
    app.post('/api/tuits', createTuit);
    app.get('/api/tuits', findAllTuits);
    app.put('/api/tuits/:tid', updateTuit);
    app.delete('/api/tuits/:tid', deleteTuit);
}

const createTuit = async (req, res) => {
    const newTuit = req.body;
    newTuit.likes = 0;
    newTuit.dislikes = 0;
    newTuit['avatar-image'] = "https://cdn.mos.cms.futurecdn.net/2AFSP26rydXuKTuP7qjwbE.jpg";
    newTuit.username = "WebDev";
    newTuit.time = "2h";
    newTuit.comments = 0;
    newTuit.retuits = 0;
    const insertedTuit = await tuitsDao.createTuit(newTuit);
    res.json(insertedTuit);
   }
   
const findAllTuits = async (req, res) => {
    const tuits = await tuitsDao.findAllTuits();
    res.json(tuits);
}

const updateTuit = async (req, res) => {
    const tuitdIdToUpdate = req.params.tid;
    const updatedTuit = req.body;
    const status = await tuitsDao.updateTuit(tuitdIdToUpdate, updatedTuit);
    res.send(status);
   }
   
const deleteTuit = async (req, res) => {
    const tuitdIdToDelete = req.params.tid;
    const status = await tuitsDao.deleteTuit(tuitdIdToDelete);
    res.send(status);
   }
   

export default tuitsController;

