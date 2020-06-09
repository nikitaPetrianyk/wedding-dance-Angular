import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { HttpClientModule } from '@angular/common/http';
import { ModalModule } from './_modal/modal.module';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/Header-components/header/header.component';
import { NavigationComponent } from './components/Header-components/navigation/navigation.component';
import { NavigationItemComponent } from './components/Header-components/navigation-item/navigation-item.component';
import { HeaderContentComponent } from './components/Header-components/header-content/header-content.component';
import { LogoComponent } from './components/Header-components/logo/logo.component';
import { BurgerComponent } from './components/Header-components/burger/burger.component';
import { PromoComponent } from './components/Promo-components/promo/promo.component';
import { PromoDescriptionComponent } from './components/Promo-components/promo-description/promo-description.component';
import { PromoIllustrationComponent } from './components/Promo-components/promo-illustration/promo-illustration.component';
import { BlockDescriptionComponent } from './components/block-description/block-description.component';
import { ServicesComponent } from './components/Services-components/services/services.component';
import { ServicesListComponent } from './components/Services-components/services-list/services-list.component';
import { ServicesCardComponent } from './components/Services-components/services-card/services-card.component';
import { OfferComponent } from './components/Offer-components/offer/offer.component';
import { OfferListComponent } from './components/Offer-components/offer-list/offer-list.component';
import { OfferCardComponent } from './components/Offer-components/offer-card/offer-card.component';
import { CoachesComponent } from './components/Coaches-components/coaches/coaches.component';
import { CoachesListComponent } from './components/Coaches-components/coaches-list/coaches-list.component';
import { CoachesCardComponent } from './components/Coaches-components/coaches-card/coaches-card.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { MobileMenuComponent } from './components/mobile-menu/mobile-menu.component';
import { ProfileComponent } from './components/profile/profile.component';
import { EditCoachesComponent } from './components/edit-coaches/edit-coaches.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationComponent,
    NavigationItemComponent,
    HeaderContentComponent,
    LogoComponent,
    BurgerComponent,
    PromoComponent,
    PromoDescriptionComponent,
    PromoIllustrationComponent,
    BlockDescriptionComponent,
    ServicesComponent,
    ServicesListComponent,
    ServicesCardComponent,
    OfferComponent,
    OfferListComponent,
    OfferCardComponent,
    CoachesComponent,
    CoachesListComponent,
    CoachesCardComponent,
    FooterComponent,
    LoginComponent,
    MobileMenuComponent,
    EditCoachesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ModalModule,
    ReactiveFormsModule,
    CarouselModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/', pathMatch: 'full' },
      { path: 'profile', component: ProfileComponent }
    ]),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
