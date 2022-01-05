import axios from 'axios';

const baseUrl = 'http://localhost:5001/api';
export const adminToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZDM3NGJiYzdkMDg5ZTI0ZThiN2Y3MyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MTMzNTI3OSwiZXhwIjoxNjQxNTk0NDc5fQ.jflpIEP_C1UuK1xg16Y9_cxKZ4Y6_UFepduSgzY3AII"

export const publicRequest = axios.create({
    baseUrl
});

export const userRequest = axios.create({
    baseUrl,
    header: {
        token: `Bearer ${adminToken}`
    }
})

