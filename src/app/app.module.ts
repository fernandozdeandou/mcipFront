import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import {FormsModule}  from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ProfileComponent } from './auth/profile/profile.component';
import { AllMentionsComponent } from './mentions/all-mentions/all-mentions.component';
import { PageMentionsComponent } from './mentions/page-mentions/page-mentions.component';
import { NewMentionComponent } from './mentions/new-mention/new-mention.component';
import { DetailMentionComponent } from './mentions/detail-mention/detail-mention.component';
import { ObservationMentionComponent } from './mentions/observation-mention/observation-mention.component';
import { MentionsService } from './_services/mentions.service';
import { PersonnelsService } from './_services/personnels.service';
import { EvenementService } from 'src/app/_services/evenement.service';


import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { TokenStorageService } from './_services/token-storage.service';
import { AuthService } from './_services/auth.service';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { UsersService } from './_services/users.service';
import { SuspectService} from './_services/suspect.service';
import { SuspectsGarderavueComponent } from './suspects/suspects-garderavue/suspects-garderavue.component';
import { SuspectsRechercherComponent } from './suspects/suspects-rechercher/suspects-rechercher.component';
import { SuspectsDefererComponent } from './suspects/suspects-deferer/suspects-deferer.component';
import { AllSuspectsComponent } from './suspects/all-suspects/all-suspects.component';
import { NewSuspectComponent } from './suspects/new-suspect/new-suspect.component';
import { DetailsSuspectComponent } from './suspects/details-suspect/details-suspect.component';
import { InfoSuspCniComponent} from './suspects/info-susp-cni/info-susp-cni.component';
import { SuspectsLibresComponent } from './suspects/suspects-libres/suspects-libres.component';
import { DetailPersonnelComponent } from './personnels/detail-personnel/detail-personnel.component';
import { NewPersonnelComponent } from './personnels/new-personnel/new-personnel.component';
import { AllPersonnelComponent } from './personnels/all-personnel/all-personnel.component';
import { PersonnelCongeComponent } from './personnels/personnel-conge/personnel-conge.component';
import { PersonnelMaladeComponent } from './personnels/personnel-malade/personnel-malade.component';
import { PersonnelPermissionnaireComponent } from './personnels/personnel-permissionnaire/personnel-permissionnaire.component';
import { PersonnelOperationnelComponent } from './personnels/personnel-operationnel/personnel-operationnel.component';
import { PersonnelAffecteComponent } from './personnels/personnel-affecte/personnel-affecte.component';
import { FooterComponent } from './footer/footer.component';
import { NewEvenementComponent } from './evenement/new-evenement/new-evenement.component';
import { AllEvenementsComponent } from './evenement/all-evenements/all-evenements.component';
import { AllRequerentsComponent } from './requerents/all-requerents/all-requerents.component';


const routes:Routes=[
  {path:'login', component: LoginComponent },
  {path:'register', component: RegisterComponent },
  {path:'profile', component: ProfileComponent },
  {path:'users', component:UsersComponent},
  {path:'home', component:HomeComponent},

  {path:'suspects', component:AllSuspectsComponent },
  {path:'suspects-gav', component:SuspectsGarderavueComponent},
  {path:'suspects-def', component:SuspectsDefererComponent},
  {path:'suspects-recher', component:SuspectsRechercherComponent},
  {path:'suspects-libre', component:SuspectsLibresComponent},
  {path:'recherche-suspect-cni/:cni', component:InfoSuspCniComponent},
  {path:'details-suspect/:url', component:DetailsSuspectComponent},
  {path:'info_susp_cni/:cni', component:InfoSuspCniComponent},
  
  {path:'personnels', component:AllPersonnelComponent},
  {path:'personnels-affect', component:PersonnelAffecteComponent},
  {path:'personnels-permis', component:PersonnelPermissionnaireComponent},
  {path:'personnels-opera', component:PersonnelOperationnelComponent},
  {path:'personnels-malad', component:PersonnelMaladeComponent},
  {path:'personnels-cong', component:PersonnelCongeComponent},
  {path:'new-personnel', component:NewPersonnelComponent},
  {path:'detail-personnel/:url', component:DetailPersonnelComponent},
  

  {path:'allmentions', component:AllMentionsComponent},
  {path:'pagementions', component:PageMentionsComponent},
  {path:'new-mention', component:NewMentionComponent},
  {path:'observation/:id', component:ObservationMentionComponent},

  {path:'evenements', component:AllEvenementsComponent},
  {path:'new-evenement', component:NewEvenementComponent },
  //{path:'requerent', component:RequerentComponent},
  
  
 // {path:'new-mentions', component:NewMentionComponent},
  {path:'new-suspect', component:NewSuspectComponent },
  
  //{path:'new-personnel', component:NewPersonnelComponent },
  {path:'', redirectTo:'/home', pathMatch:'full'}
  ]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    AllMentionsComponent,
    PageMentionsComponent,
    NewMentionComponent,
    DetailMentionComponent,
    ObservationMentionComponent,
    HomeComponent,
    UsersComponent,
    SuspectsGarderavueComponent,
    SuspectsRechercherComponent,
    SuspectsDefererComponent,
    AllSuspectsComponent,
    NewSuspectComponent,
    DetailsSuspectComponent,
    SuspectsLibresComponent,
    DetailPersonnelComponent,
    NewPersonnelComponent,
    AllPersonnelComponent,
    PersonnelCongeComponent,
    PersonnelMaladeComponent,
    PersonnelPermissionnaireComponent,
    PersonnelOperationnelComponent,
    PersonnelAffecteComponent,
    FooterComponent,
    AllEvenementsComponent,
    NewEvenementComponent,
    AllRequerentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [MentionsService,authInterceptorProviders, PersonnelsService,
    TokenStorageService,AuthService,UsersService, SuspectService,EvenementService],
  bootstrap: [AppComponent]
})
export class AppModule { }
