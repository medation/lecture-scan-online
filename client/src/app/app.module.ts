import { HttpModule } from "@angular/http";
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Storage, IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Registre } from './../pages/authentication/registre/registre';
import { Login } from './../pages/authentication/login/login';
import { Open } from '../pages/open/open';
import { Dashboard } from './../pages/dashboard/dashboard';
import { Manga } from './../pages/manga/manga';
import { Scan } from './../pages/scan/scan';

import { ProviderData } from '../providers/prov-data';
import { Utility } from '../providers/utility';

import { LectureApiService } from './../services/lectureapi.service';
import { UserService } from './../services/user.service';
import { AuthService } from './../services/auth.service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Login,
    Registre,
    Scan,
    Manga,
    Dashboard,
    Open
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Login,
    Registre,
    Scan,
    Manga,
    Dashboard,
    Open
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AuthService,
    UserService,
    ProviderData,
    Utility,
    LectureApiService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
