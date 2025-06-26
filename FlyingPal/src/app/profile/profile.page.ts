import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Para Mostrar mensajes
import { ToastController } from '@ionic/angular';

// Esto es para el Ionic, Autentificadores
// import { AuthService } from '../services/auth.service';
// import { UserService } from '../services/user.service';

@Component({
  selector: 'app-profile', 
  templateUrl: './profile.page.html', 
  styleUrls: ['./profile.page.scss'], 
})
export class ProfilePage implements OnInit {
  userProfile: any = {
    id: 'user123', 
    name: 'Abner Developer',
    email: 'abner.developer@example.com',
    phone: '555-987-654',
    bio: 'Apasionado por la tecnología y el desarrollo de aplicaciones móviles.',
    avatarUrl: 'https://ionicframework.com/docs/img/demos/avatar.svg'
  };

  editMode: boolean = false; 
  originalProfile: any; 

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
    this.loadProfile();
  }

  loadProfile() {
    
    this.originalProfile = { ...this.userProfile };
  }

  toggleEditMode() {
    this.editMode = !this.editMode;
    if (!this.editMode) {
      
      this.userProfile = { ...this.originalProfile };
    }
  }

  async saveProfile() {
    console.log('Intentando guardar perfil:', this.userProfile);

    try {
  
      this.originalProfile = { ...this.userProfile }; 
      this.editMode = false; 

      console.log('Perfil guardado con éxito.');

    } catch (error) {
      console.error('Error al guardar el perfil:', error);
      
    }
  }

}