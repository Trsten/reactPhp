import React,{ useState } from "react";
import '../styles/LoginStyle.css'
import axios from 'axios';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import { KeyFill, PersonFill } from 'react-bootstrap-icons';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';

function Login () {

    const [loginData,setLoginData] = useState({
        mail: '',
        password: ''
    });

    const setLoginDataMail = (e) => {
        setLoginData({
            ...loginData,
            mail: e.target.value
        });
    }


    const setLoginDataPassword = (e) => {
        setLoginData({
            ...loginData,
            password: e.target.value
        });
    }

    const onSubmitLogin = (event) => {
        event.preventDefault();
        console.log(loginData);

        axios.post("http://localhost/react-test-client/src/server/services/login.php", loginData)
            .then(res => console.log( res.data ))
            .catch(res => console.log(res.data));
    }


    
    return (
            <div className="ml-auto mr-auto my-100 position-relative "style={{ width: '300pt', marginTop: '10%', marginBottom: '10%' }} >

            
         
            <Card
                bg='warning'
                key='index'
                style={{ width: '18rem', paddingTop: '50pt', left: 0, right: 0, margin: 'auto', marginTop: '20%', marginBottom: '20%' }}
                className="ml-auto mr-auto position-absolute"
                >
                <Card.Body>
                    <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                    <InputGroup.Text className="bg-danger border border-danger" ><PersonFill fill="white"/></InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" onChange={setLoginDataMail} />
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text className="bg-danger border border-danger" ><KeyFill fill="white" /></InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl placeholder="Password" aria-label="Password" type="password" aria-describedby="basic-addon1" onChange={setLoginDataPassword} />
                </InputGroup>
                <Button  style={{ marginLeft: '35%' }} variant="danger" type="submit">Login</Button>
                </Card.Body>
                </Card>

                <Image src="https://dhapka-b0043.firebaseapp.com/dhappka/imgs/tooth-2.png" 
                roundedCircle 
                className="bg-white mt-100 d-block position-absolute" 
                style={{ left: 0,right: 0, margin: 'auto' }}
                width="150"
                height="150"/>
                <form onSubmit={onSubmitLogin}>
                </form>
        </div>
    );
}

export default (Login)