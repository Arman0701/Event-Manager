import React from 'react';
import { useState } from 'react';
import style from './Profile.module.css'
import userImage from './images/user-solid.svg';

export default function Profile() {
	const [ userDataEditMode, setUserDataEditMode ] = useState(false);
	const [ userData, setUserData ] = useState({
		name: 'User',
		surname: 'user',
		phone: '+374 94 123456',
		email: 'example@gmail.com',
		password: 'user123456',
	}) // function getUserData()

	function userDataChangeHandler(field, value) {
		setUserData({
			...userData,
			[field]: value
		})
	}
	function saveProfileData() {
		// PUT USERDATA TO SERVER 
		// ....

		setUserDataEditMode(false);
	}

	return (
		<div className={style.profileWrapper}>
			<div className={style.leftSide}>
				<div className={style.userImageWrapper}>
					<img src={userImage} alt="user iamge" />
					<div className={style.optionalLayer}>
						<p>Change profile iamge</p>
					</div>
				</div>
				<div className={style.aboutUser}>
					<div className={style.aboutField}>
						<span>Name</span>
						{
							userDataEditMode ? 
							<input
								type="text"
								placeholder='Name'
								value={userData.name}
								onChange={(e) => userDataChangeHandler('name', e.target.value)}
								autoFocus
							/> : 
							<p>{userData.name}</p>
						}
					</div>
					<div className={style.aboutField}>
						<span>Surname</span>
						{
							userDataEditMode ? 
							<input
								type="text"
								placeholder='Name'
								value={userData.surname}
								onChange={(e) => userDataChangeHandler('surname', e.target.value)}
							/> : 
							<p>{userData.surname}</p>
						}
					</div>
					<div className={style.aboutField}>
						<span>Phone</span>
						{
							userDataEditMode ? 
							<input
								type="text"
								placeholder='Name'
								value={userData.phone}
								onChange={(e) => userDataChangeHandler('phone', e.target.value)}
							/> : 
							<p>{userData.phone}</p>
						}
					</div>
					<div className={style.aboutField}>
						<span>Email</span>
						{
							userDataEditMode ? 
							<input
								type="text"
								placeholder='Name'
								value={userData.email}
								onChange={(e) => userDataChangeHandler('email', e.target.value)}
							/> : 
							<p>{userData.email}</p>
						}
					</div>
					<div className={style.aboutField}>
						<span>Password</span>
						{
							userDataEditMode ? 
							<input
								type="text"
								placeholder='Name'
								value={userData.password}
								onChange={(e) => userDataChangeHandler('password', e.target.value)}
							/> : 
							<p>{userData.password}</p>
						}
					</div>
					{
						!userDataEditMode ? 
						<div className={style.editProfileBtn} onClick={() => setUserDataEditMode(true)}>Edit my profile</div> :
						<div className={style.editProfileBtn} onClick={saveProfileData}>Save changes</div>
					}
				</div>
			</div>
			<div className={style.rightSide}>
				<div className={style.rightSideContent}>
					<p className={style.rightSideTitle}>
						Information
					</p>
					<span>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic, itaque architecto dolore nemo quod voluptatibus commodi saepe, perferendis temporibus officiis nobis ad corporis? Accusamus, eos exercitationem? Nesciunt, neque obcaecati! Ad tenetur minus similique, ab aut eligendi consectetur repudiandae ea reprehenderit ullam omnis dolor sunt maxime id expedita delectus veritatis necessitatibus! Sapiente eum temporibus quasi, aspernatur, hic aperiam odio cum assumenda, architecto atque odit quam sed harum dolor cupiditate illo eveniet voluptatibus doloremque rem. Architecto doloremque ducimus neque facilis? Iure possimus, voluptatum illum quia molestiae distinctio doloremque aperiam quod ab veritatis itaque minus ea repudiandae id temporibus quidem repellendus, modi voluptate?
					</span>
					<p>My events</p>
					<div className={style.eventsBlock}>
						{/* mapping user's events */}
					</div>
				</div>
			</div>
		</div>
	);
}