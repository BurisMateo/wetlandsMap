import { IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRow, IonTitle, IonToolbar, IonButtons, IonAlert, IonButton } from '@ionic/react';
import { useEffect, useRef, useState } from 'react';
import { POSTS_URL } from '../axiosDirs';
import PostCard from '../components/PostCard';
import { post } from '../interfaces/interfaces';
import LoginButton from '../components/Login';
import LogoutButton from '../components/Logout';
import { useAuth0 } from "@auth0/auth0-react";
import { useFormState } from 'react-hook-form';
const axios = require('axios');

const Tab3: React.FC = () => {
	const [ postsData, setPostData ] = useState<post[]>([]);
	const [ pendings, setPendings ] = useState<JSX.Element[]>([]);
	const [ approveds, setApproveds ] = useState<JSX.Element[]>([]);
	const [ refuseds, setRefuseds ] = useState<JSX.Element[]>([]);
	const [ forceRefresh, setForceRefresh ] = useState<boolean>(false);
	const { user, isAuthenticated, isLoading } = useAuth0();
	

	useEffect(()=>{

		const getData = () =>{
			axios.get(`${POSTS_URL}/posts`).then((response: { data: post[] }) => {
				setPostData(response.data);
			})
		}
		getData();
	},[]);
	
	useEffect(()=>{
		
		let auxPendings = [];
		let auxApproveds = [];
		let auxRefuseds = [];
		for (let index = 0; index < postsData.length; index++) {
			const post = postsData[index];
			let cardButtons: { label?: string, size?: "small" | "large" | "default", onClick: Function, 
			color?: string,icon?: string }[] = [];
			switch (post.status){
				case 'pending':
					cardButtons = [
						{label: 'Aprobar', color: 'success', onClick: () => updateState(post.id, 'approved')},
						{label: 'Rechazar', color: 'danger', onClick: () => updateState(post.id, 'refused')},
						{label: 'Ver publicacion', onClick: () => console.log(post)},
					];
				break;
				case 'approved':
					cardButtons = [
						{label: 'Rechazar', color: 'danger', onClick: () => updateState(post.id, 'refused')},
						{label: 'Ver publicacion', onClick: () => console.log(post)},
					]											
				break;
				case 'refused':
					cardButtons = [
						{label: 'Aprobar', color: 'success', onClick: () => updateState(post.id, 'approved')},
						{label: 'Ver publicacion', onClick: () => console.log(post)},
					]											
				break;
			}
			const card = (
				<PostCard
					key={`PostCard-content-index${index}'id'${post.id}`}
					index={index}
					id={post.id}
					status={post.status}
					category={post.category}
					subcategory={post.subcategory}
					content={post.content}
					ubication={post.ubication}
					keyword={post.keyword}
					buttons={cardButtons}												
				/>
			)
			if (post.status === 'pending') auxPendings.push(card);
			else if (post.status === 'approved') auxApproveds.push(card);
			else if (post.status === 'refused') auxRefuseds.push(card);
		}
		setPendings(auxPendings);
		setApproveds(auxApproveds);
		setRefuseds(auxRefuseds);
	},[postsData, forceRefresh]);

	const updateState = async (postId: string, status: 'pending' | 'approved' | 'refused') => {
		let posts = postsData;
		const postIndex = postsData.findIndex((post) => post.id === postId);
		if (postIndex !== -1) {
			let postToUpdate = posts[postIndex];
			postToUpdate.status = status;
			const res = await axios.put(`${POSTS_URL}/posts/${postId}`, postToUpdate);
			posts[postIndex] = postToUpdate;
			setPostData(posts);
			setForceRefresh(!forceRefresh);
		}
	}

	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonTitle>Humedales Digitales</IonTitle>
					{!isAuthenticated && (
						<IonButtons slot='end'>
							<LoginButton />
						</IonButtons>
					)}

					{isAuthenticated && (
						<IonButtons slot='end'>
							<img className="circular--square" src={user && user.picture} alt={user && user.name} width="35" height="35" />
							<p>{user && user.nickname}</p>
							<LogoutButton />
						</IonButtons>
					)}
				</IonToolbar>
			</IonHeader>
			<IonContent fullscreen>
				{!isAuthenticated && (
					<IonTitle>Anashei</IonTitle>
				)}
				<IonGrid className={'fixHeight'}>
					<IonRow className={'fixHeight'}>
						<IonCol size="4" className={'fixHeight scroll'}>
							Pendientes
							{ pendings }
						</IonCol>
						<IonCol size="4" className={'fixHeight scroll'}>
							Aprobados
							{ approveds }
						</IonCol>
						<IonCol size="4" className={'fixHeight scroll'}>
							Rechazados
							{ refuseds }
						</IonCol>
					</IonRow>
				</IonGrid>
			</IonContent>
		</IonPage>
	);
};

export default Tab3;
