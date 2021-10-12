import { IonContent, IonGrid, IonHeader, IonPage, IonTitle, IonToolbar, IonRow, IonCol, IonFab, IonFabButton, IonIcon, IonBackdrop, IonLoading, IonModal, IonList, IonItem, IonButtons, IonAlert, IonAvatar, IonLabel, IonSelect, IonSelectOption } from '@ionic/react';
import { add, arrowUndoCircleOutline } from 'ionicons/icons';
import { useEffect, useRef, useState } from 'react';
import { POSTS_URL } from '../axiosDirs';
import { GenericMap } from '../components/GenericMap';
import PostCard from '../components/PostCard';
import { WetlandForm } from '../components/WetlandForm';
import { bingMapPosition, infobox, marker, post } from '../interfaces/interfaces';
import '../theme/customizations.css'
import LoginButton from '../components/Login';
import LogoutButton from '../components/Logout';
import { useAuth0 } from "@auth0/auth0-react";

const axios = require('axios');

const Tab1: React.FC = () => {
	const [ postsData, setPostData ] = useState<post[]>([]);
	const [ mapCenter, setMapCenter ] = useState<{ latitude: number, longitude: number }>( { latitude: -32.4790999, longitude: -58.2339789 } )
	const [ markers, setMarkers ] = useState<marker[]>([]);
	const [ forceRefresh, setForceRefresh ] = useState<boolean>(false);
	const [ onClickPosition, setOnClickPosition ] = useState<bingMapPosition>()
	const [ zoom, setZoom ] = useState<number>(5);
	const [ colsSize, setColsSize ] = useState<{postCol: string, mapCol: string}>({postCol: '4', mapCol: '8'});
	const [ showFab, setShowFab ] = useState<{addFab: boolean, cancelFab: boolean}>({addFab: true, cancelFab: false});
	const [ showFormModal, setShowFormModal ] = useState<boolean>(false);
	const [ loading, setLoading ] = useState<boolean>(false);
	const editModeActive = useRef<boolean>(false);

	const { user, isAuthenticated, isLoading } = useAuth0();


	useEffect(()=>{
		const getData = async () =>{
			startLoading();
			try {
				const response = await axios.get(`${POSTS_URL}/posts`)
				if (response.data.length) {
					let auxMarkers: marker[] = [];
					for (let i = 0; i < response.data.length; i++) {
						const post = response.data[i];
						if (post.status === 'approved') auxMarkers.push({
							metadata: {
								title: post.content.title,
								description: `${post.content?.description.slice(0,75)}...`,
							},
							center: {latitude: parseFloat(post.ubication.latitude),longitude: parseFloat(post.ubication.longitude)},
						});
					}
					setMarkers(auxMarkers);
					setPostData(response.data);
				}
				stopLoading();
			}
			catch (error){
				console.error('Error on getData: ',error);
				stopLoading();
			}
		}
		getData();
	},[postsData.length, forceRefresh]);

	const getPostPosition = (id:string) => {
		const mapPosition = postsData.find((post) => post.id === (id));
		if (mapPosition) {
			setMapCenter({latitude: parseFloat(mapPosition.ubication.latitude), longitude: parseFloat(mapPosition.ubication.longitude)})
			setZoom(10)
		}
	}

	const getClickedLocation = (value: bingMapPosition) => {
		if (editModeActive.current === false) return;
		if (!value || !value.latitude || !value.longitude) return;
		if ((typeof(value.latitude) !== 'number') || (typeof(value.longitude) !== 'number')) return;
		if (value !== onClickPosition) {
			// Mostramos la alerta.
			const infoMarker = {
				metadata: {
					title: 'Iniciar carga',
					description: `¿Desea cargar nueva informacion en este punto?`,
					visible: true,
					actions: [
						{label: 'Confirmar', eventHandler: () => confirmLocation(value)},
					]	
				},
				center: value,
			};
			setMarkers([infoMarker]);
			setMapCenter(value);
			setZoom(8);
		};
	}

	const confirmLocation = (location: bingMapPosition) => {
		editModeOFF();
		setOnClickPosition(location);
		setShowFormModal(true);
	}

	const switchFabsVisibility = () => {
		setShowFab({addFab: !showFab.addFab, cancelFab: !showFab.cancelFab})
	}

	const switchColsSize = () => {
		if (colsSize.mapCol === '12') setColsSize({postCol: '4', mapCol: '8'})
		else setColsSize({postCol: '0', mapCol: '12'})
	}

	const editModeON = () => {
		editModeActive.current = (true);
		switchFabsVisibility();
		switchColsSize();
	}

	const editModeOFF = () => {
		setForceRefresh(!forceRefresh);
		editModeActive.current = (false);
		switchFabsVisibility();
		switchColsSize();
		setZoom(2);
	}

	const startLoading = () => {
		setLoading(true);
	}

	const stopLoading = () => {
		setLoading(false);
	}

	useEffect(() => {
		console.log(markers);	
	},[markers])


	const [showAlert1, setShowAlert1] = useState(false);



	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonTitle>Humedales digitales</IonTitle>
					
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
			<IonContent>
				
				
				<IonLoading
					isOpen={loading}
					showBackdrop={true}
					message={'Cargando!'}
					duration={5000}
				/>
				<IonGrid className={'fixHeight'}>
					<IonRow className={'fixHeight'}>
						{	colsSize.postCol !== '0' ?
							<IonCol size={colsSize.postCol} className={'fixHeight scroll'}>
								
								{
									
									postsData.length > 0 ? 
									postsData.map((post, index)=>{
										if(post.status === 'approved') return(
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
												buttons={[
													{label: 'Ver en el mapa', onClick: ()=> {getPostPosition(post.id)}, icon: 'pin'},
													{label: 'Ver publicacion', onClick: ()=> {console.log(post.id)}, icon: 'pin'}											
												]}
												/>
										)
										return null;
									}) 
									:
									null
								}
							</IonCol>
							:
							null
						}
						<IonCol size={colsSize.mapCol}>
							<IonFab horizontal={"end"} vertical={"bottom"}>
								<IonFabButton color={"success"} onClick={ !isAuthenticated ? () => setShowAlert1(true) : () => editModeON()} hidden={!showFab.addFab}><IonIcon icon={add}></IonIcon></IonFabButton>
								<IonFabButton color={"warning"} onClick={() => editModeOFF()} hidden={!showFab.cancelFab}><IonIcon icon={arrowUndoCircleOutline}></IonIcon></IonFabButton>
							</IonFab>

							<IonAlert
								isOpen={showAlert1}
								onDidDismiss={() => setShowAlert1(false)}
								cssClass='my-custom-class'
								header={'Alerta'}
								subHeader={''}
								message={'Debe iniciar sesión para agregar una publicación'}
								buttons={['OK']}
							/>

							<GenericMap center={mapCenter} width={'100%'} height={'78vh'} markers={markers} zoom={zoom} 
								getLocationOnClick={(value:bingMapPosition) => getClickedLocation(value)} loading={loading}
							/>
							<IonModal isOpen={showFormModal} showBackdrop={true} cssClass={"postModal"} >
								<WetlandForm location={onClickPosition ? onClickPosition : {latitude: 0, longitude:0}}
									categories={[
										{name: "Descripción del humedal/Sitio de interés", value: "humedal"},
										{name: "Amenazas/impactos antrópicos o naturales", value: "amenazas"},
										{name: "Iniciativas sustentables", value: "iniciativas"},
										{name: "Expresiones artísticas", value: "arte"},
										{name: "Proyectos de investigación", value: "investigacion"},
									]} 
								/>
							</IonModal>
						</IonCol>
					</IonRow>
				</IonGrid>
			</IonContent>
		</IonPage>
	);
};

export default Tab1;
