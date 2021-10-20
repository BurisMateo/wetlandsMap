import { IonCol, IonContent, IonGrid, IonHeader, IonItem, IonModal, IonPage, IonRow, IonText, IonTitle, IonToolbar, IonImg, IonThumbnail, IonItemDivider } from '@ionic/react';
import { WetlandForm } from '../components/WetlandForm';

const Tab2: React.FC = () => {
    // TODO: Esto, luego, tiene que ser un useState
    const modalIsOpen = true

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color="primary">
                    <IonTitle>Humedales Digitales</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen color="light">
                
                <IonGrid>
                    <IonRow>
                        <IonItemDivider color="light">
                        </IonItemDivider>
                        <IonItemDivider color="light">
                        </IonItemDivider>
                    </IonRow>
                    <IonItem color="light">
                        <IonRow>
                            <IonCol></IonCol>
                            <IonCol size="7">
                                <IonRow>
                                    <IonCol>
                                        <IonRow>
                                            <IonCol>
                                                <IonThumbnail>
                                                    <IonImg src="https://i.ibb.co/ZGNv0q4/5.png" />
                                                </IonThumbnail>
                                            </IonCol>
                                            <IonCol>
                                                <IonThumbnail>
                                                    <IonImg src="https://i.ibb.co/hfSJbnp/2.png" />
                                                </IonThumbnail>
                                            </IonCol>
                                        </IonRow>
                                    </IonCol>
                                    <IonCol>
                                        <IonItem color="light">
                                            <IonText color="primary">
                                                <IonTitle size="large"><h1>¿Qué es Humedales Digitales?</h1></IonTitle>
                                            </IonText>
                                        </IonItem>
                                    </IonCol>
                                    <IonCol>
                                        <IonRow>
                                            <IonCol>
                                                <IonThumbnail>
                                                    <IonImg src="https://i.ibb.co/tpHQxQP/4.png"/>
                                                </IonThumbnail>
                                            </IonCol>
                                            <IonCol>
                                                <IonThumbnail>
                                                    <IonImg src="https://i.ibb.co/FbLZkpN/1.png" />
                                                </IonThumbnail>
                                            </IonCol>
                                        </IonRow>
                                    </IonCol>
                                </IonRow>
                                <IonRow>
                                    <IonText color="primary">
                                        <h6>Humedales Digitales es un proyecto que busca sistematizar información sobre los humedales de la cuenca del río Gualeguaychú (Entre Ríos, Argentina) a través de un sitio digital interactivo.</h6>
                                        <h6>Este sitio web, invita a ciudadanos/as, académicos/as y tomadores de decisiones, a participar incorporando información socioambiental de la cuenca, en un mapa colaborativo. </h6>
                                        <h6>Esta iniciativa se fundamenta en las metodologías de la participación ciudadana y la democratización de la ciencia, creando herramientas que permitan apoyar y fortalecer la participación de las comunidades locales y el involucramiento de los diferentes actores, propiciando el diálogo de saberes y la participación activa que hacen al conocimiento y a la gestión sustentable de nuestros valiosos ecosistemas.</h6>
                                        <h6>El proyecto es una iniciativa del Laboratorio de Indicadores Biológicos y Gestión Ambiental de Calidad de Agua de la FCyT-UADER, con sede en Gualeguaychú.</h6>
                                    </IonText>
                                </IonRow>
                            </IonCol>
                            <IonCol>
                            </IonCol>
                        </IonRow>
                    </IonItem>
                    <IonRow>
                        <IonItemDivider color="light">
                        </IonItemDivider>
                        <IonItemDivider color="light">
                        </IonItemDivider>
                    </IonRow>
                    
                    <IonRow>
                        <IonItemDivider color="primary">
                        </IonItemDivider>
                        <IonItemDivider color="primary">
                        </IonItemDivider>
                    </IonRow>

                    <IonItem color="primary">
                        <IonRow>
                            <IonCol>
                                <IonRow>
                                    <IonImg src="https://i.ibb.co/ys0hBMj/logo-oficial2.png" />
                                </IonRow>
                            </IonCol>
                            <IonCol>
                                <IonRow>
                                    <IonItem color="primary">
                                        <IonTitle>¿Quiénes Somos?</IonTitle>
                                    </IonItem>
                                </IonRow>
                                <IonRow>
                                    <IonItem color="primary">
                                        <IonText color="light">
                                        <h6>El Laboratorio de Indicadores Biológicos y Gestión Ambiental de Calidad de Agua (IBGA), con sede en la ciudad de Gualeguaychú, fue creado mediante la resolución 0248/15 del Consejo Directivo de la Facultad de Ciencia y Tecnología de la Universidad Autónoma de Entre Ríos, designándose como director interino al Mg. Ricardo Ariel Juárez, en la actualidad quien lo dirige es la Lic. Irene Aguer.</h6>

                                        <h6>Este espacio está destinado a la investigación, la docencia y la extensión. Surgió de la necesidad de evaluar el estado de conservación regional de los cuerpos de agua superficiales, tanto para la preservación de su integridad, su biodiversidad, como para sus potenciales usos y la gestión ambiental, reconociendo el trabajo del grupo de investigación que ya se encontraba realizando estas tareas en los cursos de agua y arroyos de la provincia de Entre Ríos.</h6>
                                        </IonText>
                                    </IonItem>
                                </IonRow>
                            </IonCol>
                        </IonRow>
                    </IonItem>
                    
                    <IonRow>
                        <IonItemDivider color="primary">
                        </IonItemDivider>
                        <IonItemDivider color="primary">
                        </IonItemDivider>
                    </IonRow>
                    <IonRow>
                        <IonItemDivider color="light">
                        </IonItemDivider>
                        <IonItemDivider color="light">
                        </IonItemDivider>
                    </IonRow>

                    <IonItem color="light">
                        <IonRow>
                            <IonRow>
                                <IonItem color="light">
                                        <IonTitle color="primary">Instituciones Participantes del Proyecto</IonTitle>
                                </IonItem>
                            </IonRow>
                            <IonRow>
                                <IonCol>
                                        <IonText color="primary">
                                            <h6>Laboratorio de Indicadores Biológicos y Gestión Ambiental de Calidad de Agua (Laboratorio IBGA). Facultad de Ciencia y Tecnología. Universidad Autónoma de Entre Ríos.</h6>
                                            <h6>Licenciatura en Sistemas de la Información. Facultad de Ciencia y Tecnología, Sede Concepción del Uruguay. Universidad Autónoma de Entre Ríos.</h6>
                                            <h6>Profesorado de Química. Cátedras Química Biológica y Química Industrial. Instituto de Enseñanza Superior “Prof. M. Inés Elizalde”. </h6>
                                            <h6>Dirección Departamental de Escuelas. Escuelas pertenecientes a los departamentos Colón, Concepción del Uruguay y Gualeguaychú.</h6>
                                            <h6>Fundación Pétersen.</h6>
                                        </IonText>
                                </IonCol>
                                <IonCol>
                                    <IonRow>
                                        <IonImg src="https://i.ibb.co/RBGqQTJ/logo-oficial.png" />
                                        <IonImg src="https://i.ibb.co/b6VNvvj/FCy-T-Sin-Leyenda-Uader-Color-Positivo.png" />
                                        <IonText color="light">|||</IonText>
                                        <IonImg src="https://i.ibb.co/fGXswbL/petersen.png" />
                                    </IonRow>
                                </IonCol>
                            </IonRow>
                        </IonRow>
                    </IonItem>
                   
                    <IonRow>
                        <IonItemDivider color="light">
                        </IonItemDivider>
                        <IonItemDivider color="light">
                        </IonItemDivider>
                    </IonRow>
                    <IonRow>
                        <IonItemDivider color="primary">
                        </IonItemDivider>
                        <IonItemDivider color="primary">
                        </IonItemDivider>
                    </IonRow>
                    
                    <IonItem color="primary">
                        <IonRow>
                            <IonCol>
                                <IonRow>
                                </IonRow>
                            </IonCol>
                            <IonCol>
                                <IonRow>
                                    <IonItem color="primary">
                                        <IonTitle>¿Cómo Participar?</IonTitle>
                                    </IonItem>
                                </IonRow>
                                <IonRow>
                                    <IonItem color="primary">
                                        <IonText color="light">
                                            <h3>.</h3>
                                            <h3>.</h3>
                                            <h3>.</h3>
                                            <h3>.</h3>
                                        </IonText>
                                    </IonItem>
                                </IonRow>
                            </IonCol>
                        </IonRow>
                    </IonItem>

                    <IonRow>
                        <IonItemDivider color="primary">
                        </IonItemDivider>
                        <IonItemDivider color="primary">
                        </IonItemDivider>
                    </IonRow>
                    <IonRow>
                        <IonItemDivider color="light">
                        </IonItemDivider>
                        <IonItemDivider color="light">
                        </IonItemDivider>
                    </IonRow>

                    <IonItem color="light">
                        <IonRow>
                            <IonCol>
                                <IonRow>
                                    <IonItem color="light">
                                        <IonText color="primary">
                                            <IonTitle>Créditos y Agradecimientos</IonTitle>
                                        </IonText>
                                    </IonItem>
                                </IonRow>
                                <IonRow>
                                    <IonText color="primary">
                                        <h6>Agradecemos especialmente a la Fundación Banco de Entre Ríos por financiar este proyecto, mediante el Programa Iniciativas Sustentables 2020.</h6>
                                    </IonText>
                                </IonRow>
                            </IonCol>
                            <IonCol>
                                <IonRow>
                                    <IonImg src="https://i.ibb.co/VgR77cc/banco-entre-rios.png" />
                                </IonRow>
                            </IonCol>
                        </IonRow>
                    </IonItem>

                    <IonRow>
                        <IonItemDivider color="light">
                        </IonItemDivider>
                        <IonItemDivider color="light">
                        </IonItemDivider>
                    </IonRow>
                    <IonRow>
                        <IonItemDivider color="primary">
                        </IonItemDivider>
                        <IonItemDivider color="primary">
                        </IonItemDivider>
                    </IonRow>

                    <IonItem color="primary">
                        <IonRow>
                            <IonCol>
                                <IonRow>
                                </IonRow>
                            </IonCol>
                            <IonCol>
                                <IonRow>
                                    <IonItem color="primary">
                                        <IonTitle>Contactos - Redes Sociales</IonTitle>
                                    </IonItem>
                                </IonRow>
                                <IonRow>
                                    <IonItem color="primary">
                                        <IonText color="light">
                                            <h3>.</h3>
                                        </IonText>
                                    </IonItem>
                                </IonRow>
                            </IonCol>
                        </IonRow>
                    </IonItem>

                </IonGrid>
            </IonContent>
        </IonPage>
    );
};

export default Tab2;
