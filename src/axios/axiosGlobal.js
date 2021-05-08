import axios from 'axios';

const Axios=axios.create({
    baseURL : 'https://connect-ca4c1-default-rtdb.firebaseio.com/'
});

export default Axios;