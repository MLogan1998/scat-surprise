import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseConfig.databaseURL;

const getBirbsByUid = (uid) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/birbs.json?orderBy="uid"&equalTo"${uid}"`)
    .then((response) => {
      const allBirbs = response.data;
      const myBirbs = [];

      Object.keys(allBirbs).forEach((birbId) => {
        const birb = allBirbs[birbId];
        birb.id = birbId;
        myBirbs.push(birb);
      });
      resolve(myBirbs);
    })
    .catch((err) => console.error(err));
});

const getBirbById = (birbid) => axios.get(`${baseUrl}/birbs/${birbid}.json`);

const saveNewBird = (newBirb) => axios.post(`${baseUrl}/birbs.json`, newBirb);

export default { getBirbsByUid, getBirbById, saveNewBird };
