import React ,{useState, useEffect}from 'react'
import { useNavigate } from 'react-router-dom'
import { Button ,Form } from 'react-bootstrap';
import Buttons from '../Button/button';
import './loginForms.css'

const LoginForm = () => {
    const navigate = useNavigate();
    const [emp_id, setEmp_id] = useState("");
    const [emp_pass, setEmp_pass] = useState("");
    // const [emp_position, setEmp_position] = useState("");
    const [error, setError] = useState("");
    const [msg, setMsg] = useState("");
  
    const win = window.sessionStorage;
  
    useEffect(() => {
      setTimeout(() => {
        setMsg("");
      }, 2000);
    }, [msg]);
  
    const handleInputChange = (e, type) => {
      switch (type) {
        case "emp_id":
          setError("");
          setEmp_id(e.target.value);
          break;
        case "emp_pass":
          setError("");
          setEmp_pass(e.target.value);
          break;
      
        default:
      }
    };
  
    const loginSubmit = (e) => {
        e.preventDefault();
      
        if (emp_id !== "" && emp_pass !== "") {
          const url = "http://localhost/json4/login4.php";
      
          const headers = {
            Accept: "application/json",
            "Content-type": "application/json",
          };
          const Data = {
            emp_id: emp_id,
            emp_pass: emp_pass,
          };
      
          fetch(url, {
            method: "POST",
            headers: headers,
            body: JSON.stringify(Data),
          })
            .then((response) => response.json())
            .then((response) => {
              console.log("Response from PHP:", response); 
      
              const result = response[0].result;
      
            
              console.log("Result:", result);
      
              // If there's an error (invalid username or password), show the error and prevent navigation
              if (
                result === "Invalid Password" || 
                result === "Invalid Username" || 
                result === "All fields are required"
              ) {
                setError(result); 
                console.log("Login Error:", result); //
      
            
                return; 
              }
      
             
              localStorage.setItem("emp_id", emp_id);
              localStorage.setItem("emp_pass", emp_pass);
      
              setMsg(result); 
              setTimeout(() => {
                navigate("/home"); 
              }, 1000);
            })
            .catch((err) => {
              setError("An error occurred. Please try again.");
              console.error("Fetch error:", err); // Log the fetch error
            });
        } else {
          setError("All fields are required!");
        }
      };
      
    
      
      
  
    useEffect(() => {
      if (win.getItem("emp_id")) setEmp_id(win.getItem("emp_id"));
      if (win.getItem("emp_pass")) setEmp_pass(win.getItem("emp_pass"));
    //   if (win.getItem("emp_position")) setEmp_position(win.getItem("emp_position"));
    }, []);
  
    useEffect(() => {
      win.setItem("emp_id", emp_id);
      win.setItem("emp_pass", emp_pass);
    //   win.setItem("emp_position", emp_position);
    }, [emp_id, emp_pass]);
  
    return (
      <div className='main-container'>
        <Form onSubmit={loginSubmit} className='sub-main-container'>
          <div className="main-box-login">
            <div className="container-login">
              <div className="forms-outline-login">
                <p className="tag-login">
                  {error ? <h1 className="error">{error}</h1> : <h1 className="success">{msg}</h1>}
                </p>
                <div className="tag-login">
                  <h2>Login</h2>
                </div>
                <div className="input-group-login">
                  <div className="input-group-1-login">
                    <label className="labels-login">
                      User ID:<span className="required-mark">*</span>
                    </label>
                    <input
                      type="text"
                      name="emp_id"
                      className="form-control"
                      placeholder="User ID"
                      value={emp_id}
                      onChange={(e) => handleInputChange(e, "emp_id")}
                    />
                  </div>
                </div>
                <div className="input-group-login">
                  <div className="input-group-1-login">
                    <label className="labels-login">
                      Password<span className="required-mark">*</span>
                    </label>
                    <input
                      type="password"
                      name="password"
                      className="form-control"
                      placeholder="Password"
                      value={emp_pass}
                      onChange={(e) => handleInputChange(e, "emp_pass")}
                    />
                  </div>
                </div>
                <div className="btn-submit-login">
                  {/* <Button onClick={loginSubmit}>Log In</Button> */}
           <Buttons/>
                </div>
              </div>
            </div>
          </div>
        </Form>
      </div>
    )
}

export default LoginForm