import Frame from '../frame/Frame';
import './sign-up.scss';
import userImg from "../../assets/images/contact/img-2.svg"
import { useRef, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { useNavigate } from 'react-router-dom';
export default function SignUp() {
  const inputRef = useRef(null)
  const [image, setImage] = useState('')
  // const naviaget = useNavigate();
  console.log(image)
  const authent = () => {
    let userName = document.getElementById("username");
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    if (userName.value == '' && email.value == '' && password.value == '') {
      userName.style.animation = 'error .3s ease';
      email.style.animation = 'error .3s ease';
      password.style.animation = 'error .3s ease';
      userName.style.border = ' 1px solid red';
      email.style.border = ' 1px solid red';
      password.style.border = ' 1px solid red';

      userName.style.color = 'red';
      email.style.color = ' red';
      password.style.color = 'red';

      userName.setAttribute("placeholder", "Please enter Username");
      email.setAttribute("placeholder", "Please enter Email");
      password.setAttribute("placeholder", "Please enter password");
    }

  }
  const HandlerImage = () => {
    inputRef.current.click()
  }
  const HandlerImageValue = (event) => {
    const file =
      console.log(file);
    setImage(event.target.files[0]);
  }
  const notify = () => toast.success('added in Shopping cart', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
  return (
    <section className='sign-up' >

      <div className="container">
        <Frame>
          <div className='text'>
            <div className='upload-img' onClick={HandlerImage}>
              {image ? <img src={URL.createObjectURL(image)} alt="personal_img" className='personal_img' /> : <img src={userImg} alt="personal_img" className='personal_img' />}
              <input type="file" ref={inputRef} onChange={() => HandlerImageValue} name="image" id="image" />
            </div>
            <form onSubmit={(e) => { e.preventDefault() }}>
              <input type="text" name='username' onBlur={(event) => {
                if (event.target.value !== '') {
                  event.target.style.border = "1px solid green";
                  event.target.style.color = 'green';
                } else {
                  event.target.style.border = "1px solid red";
                  event.target.setAttribute("placeholder", "Please enter Username");
                  event.target.style.color = 'red';
                  event.target.style.animation = 'error .3s ease';
                }
              }} placeholder='name' id='username' />
              <input type="email" name='email' onBlur={(event) => {
                if (event.target.value !== '') {
                  event.target.style.border = "1px solid green";
                  event.target.style.color = 'green';
                } else {
                  event.target.style.border = "1px solid red";
                  event.target.setAttribute("placeholder", "Please enter E-mail");
                  event.target.style.color = 'red';
                  event.target.style.animation = 'error .3s ease';
                }
              }} placeholder='E-mail' id='email' />
              <button type='submit' onClick={
                () => { authent(); notify() }
              }>Send</button>
              <ToastContainer />
            </form>
          </div>
        </Frame>
      </div>
    </section>
  )
}
