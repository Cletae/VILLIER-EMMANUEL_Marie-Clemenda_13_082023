import { setToken, logIn } from "./LogSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const BACKEND_URL = 'http://localhost:3001/api/v1/';
const LOCAL_URL = 'http://localhost:3000/';

const useLogin = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (username, password) => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: username, password: password })
        };
        fetch(BACKEND_URL + 'user/login/', requestOptions)
        .then(response => response.json())
        .then(data => {
            const token = data.body.token;
            dispatch(setToken(token))
            dispatch(logIn())
            navigate('/profil')
        })
    }

}

const useFirstNameAndLastName = () => {
    const isLogged = useIsLogged();
    const [data, setData] = useState({});
    const token = useSelector((state) => state.log.token);
    const requestOptions = {
        method: 'POST',
        headers: {
            Authorization: 'Bearer ' + token,
            'Content-Type': 'application/json'
        },
    }
    useEffect(() => {
        if(isLogged()) {
            fetch(BACKEND_URL + 'user/profile/', requestOptions)
            .then(response => response.json())
            .then(data => {
                setData(data.body);
            })
        }
    }, [data])
    return data;
}

const useUpdateName = () => {
    const isLogged = useIsLogged();
    const token = useSelector((state) => state.log.token);
    return (firstname, lastname) => {
        const requestOptions = {
            method: 'PUT',
            headers: {
                Authorization: 'Bearer ' + token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({firstName: firstname, lastName: lastname})
        }
        if(isLogged()) {
            return fetch(BACKEND_URL + 'user/profile/', requestOptions)
            .then(response => response.json())
            .then(data => {
                return data
            })
        }
    }
}

const useAccountResume = () =>{
    const isLogged = useIsLogged();
    const [data, setData] = useState([])
    useEffect(() => {
        if(isLogged()) {
            fetch(LOCAL_URL + 'resume.json')
            .then(response => response.json())
            .then(data => {
                setData(data);
            })
        }
    }, [data])
    return data;

}


const useIsLogged = () => {
    const log = useSelector((state) => state.log.logged);
    const token = useSelector((state) => state.log.token);
    const isLogged = () => {
        if(log && token !== '') {
            return true;
        } else {
            return false
        }
    }
    return isLogged
}

export { useLogin, useFirstNameAndLastName, useUpdateName, useAccountResume, useIsLogged }