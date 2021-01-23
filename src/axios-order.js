import axios from 'axios';

const instance=axios.create({
    baseURL : 'https://burger-builder-c4479-default-rtdb.firebaseio.com/'
});

export default instance;