import { IonButton, IonCard, IonCardContent, IonCol, IonContent, IonHeader, IonIcon, IonImg, IonInput, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import {logInOutline, personCircleOutline} from 'ionicons/icons'
import cloud_logo from '../assets/cloud_logo.png'
import "../theme/Login.css"
const Login: React.FC = () => {
    const doLogin=(event:any)=>
        event.preventDefault();
        console.log('doLogin')

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color={'primary'}>
                    <IonTitle>Login Page</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent >
                <IonImg src={cloud_logo} alt="cloud_logo" style={{ width: '60%', height: 'auto' }} className='centered-image'></IonImg>
                <IonCol >
                        <div className="ion-text-left" style={{ padding: '20px', height: '5%' }}>
                            <h1>Welcome Back !</h1>
                        </div>
                 </IonCol>
                <IonCard>
                    <IonCardContent>
                        <form onSubmit={doLogin}>
                        
                        <IonInput fill='outline' label="Email" type='email' label-placement="floating" placeholder="Enter email"></IonInput>
                        <IonInput className='ion-margin-top' fill='outline' label="Password" type='password' label-placement="floating" placeholder="Enter password"></IonInput>
                        <IonButton type='submit' className='ion-margin-top' expand='block'>
                            Login
                            <IonIcon icon={logInOutline} slot='end'/>
                            </IonButton>
                        
                        <IonButton routerLink='/register' type='submit' color={'light'} className='ion-margin-top' expand='block'>
                        Create an account
                        <IonIcon icon={personCircleOutline} slot='end'/>
                        </IonButton>
                        <IonCol >
                        <div className="ion-text-center">
                            <h2>Not registered yet?</h2>
                        </div>
                        </IonCol>
                        </form>
                    </IonCardContent>
                </IonCard>
                
            </IonContent>
            
        </IonPage>
    );
};

export default  Login;