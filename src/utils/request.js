import axios from 'axios'

const Axios = (props) = axios(props)
    .then(response => {
        return response
    })
    .catch(error => {
        console.warn('Axios Error', error)
    })

export default Axios;