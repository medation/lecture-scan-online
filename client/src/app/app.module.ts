
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Storage, IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
import { Open } from '../pages/open/open';
import { Dashboard } from './../pages/dashboard/dashboard';
import { Manga } from './../pages/manga/manga';
import { Scan } from './../pages/scan/scan';

import { ProviderData } from '../providers/prov-data';
import { Utility } from '../providers/utility';

import { LectureApiService } from './../services/lectureapi.service';
import { HttpModule } from "@angular/http";

@NgModule({
  declarations: [
    MyApp,
    Scan,
    Manga,
    Dashboard,
    Open
  ],
  imports: [
    HttpModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Scan,
    Manga,
    Dashboard,
    Open
  ],
  providers: [
    ProviderData,
    Utility,
    LectureApiService,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
