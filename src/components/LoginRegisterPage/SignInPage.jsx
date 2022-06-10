import style from './SignInPage.module.css';
import logo from '../../assets/img/site-logo.png';
import facebookLogo from '../../assets/img/fb-logo.svg';
import { useState } from 'react';
import { ValidateEmail, ValidatePassword } from '../../helpers/validate';

export default function SignInPage() {
	const [ isLogin, setIsLogin ] = useState(true);
	const [ registerFormData, setRegisterFormData ] = useState({
		name: '',
		surname: '',
		phone: '',
		email: '',
		password: '',
	})

	function registerFormChangesHandler(field, e) {
		setRegisterFormData({
			...registerFormData,
			[field]: e.target.value,
		})
	}
	function userLoginHandler() {
		// GET SOME DATA ABOUT USER,
		// VALIDATE THEM, AND THEN
		// POST SOME DATA TO SERVER
	}
	function userRegisterHandler() {
		// POST SOME DATA (registerFormData) TO SERVER
	}

	return (
		<div className={style.popupContent}>
			<div className={style.pageWrapper}>
				<div className={style.imageWrapper}>
					<div className={style.bgLayer}>
						<div className={style.logo}>
							<img src={logo} alt="logo" />
						</div>
						<div className={style.imageWrapperContent}>
							<p onClick={() => setIsLogin(true)}>LOGIN</p>
							<p onClick={() => setIsLogin(false)}>REGISTER</p>
						</div>
					</div>
				</div>
				<div className={style.formPart}>
					{
						isLogin ? <>
							<div className={style.formHeader}>
								<p>Account Login</p>
								<p>Login to our website, or <span>REGISTER</span></p>
							</div>
							<div className={style.facebookLoginBtn}>
								<div className={style.buttonLeftSide}>
									<div className={style.logoWrapper}>
										<img src={facebookLogo} alt="logo" />
									</div>
								</div>
								<p>Login With Facebook</p>
							</div>
							<div className={style.line}>
								<p>OR SIGN IN</p>
							</div>
							<div className={style.formWrapper}>
								<input type="email" placeholder='example@gmail.com' required />
								<input type="text" placeholder='Password' required />
								<div className={style.submitBtn} onClick={userLoginHandler}>LOGIN NOW</div>
							</div>
						</> : 
						<div className={style.registerFormWrapper}>
							<p>Create your account</p>
							<div className={style.registerForm}>
								<label>
									<p>Name</p>
									<input type="text" value={registerFormData.name} onChange={(e) => registerFormChangesHandler('name', e)} />
								</label>
								<label>
									<p>Surname</p>
									<input type="text" value={registerFormData.surname} onChange={(e) => registerFormChangesHandler('surname', e)} />
								</label>
								<label>
									<p>Phone</p>
									<input type="text" value={registerFormData.phone} onChange={(e) => registerFormChangesHandler('phone', e)} />
								</label>
								<label>
									<p>Email</p>
									<input type="text" value={registerFormData.email} onChange={(e) => registerFormChangesHandler('email', e)} />
								</label>
								<label>
									<p>Password</p>
									<input type="text" value={registerFormData.password} onChange={(e) => registerFormChangesHandler('password', e)} />
								</label>
								<div className={style.registerSubmitButton} onClick={userRegisterHandler}>Create account</div>
							</div>
						</div>
					}
					
				</div>
			</div>
		</div>
	)
}