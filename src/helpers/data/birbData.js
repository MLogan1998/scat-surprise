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

export default { getBirbsByUid };
