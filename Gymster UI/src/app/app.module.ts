import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { SuggestedProductsComponent } from './suggested-products/suggested-products.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { OrderComponent } from './order/order.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { OpenProductsDirective } from './directives/open-products.directive';
import { OpenProductDetailsDirective } from './directives/open-product-details.directive';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { JwtModule } from '@auth0/angular-jwt';
import { SlidingComponentComponent } from './sliding-component/sliding-component.component';
import { CourseCardComponent } from './course-card/course-card.component';
import { AboutComponent } from './about/about.component';
import { AcknowledgementComponent } from './acknowledgement/acknowledgement.component';
import { OurTeamComponent } from './our-team/our-team.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { OurCustomersComponent } from './our-customers/our-customers.component';
import { HistoryComponent } from './history/history.component';
import { TrainerComponent } from './trainer/trainer.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { NgImageSliderModule } from 'ng-image-slider';



@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    SuggestedProductsComponent,
    HomeComponent,
    ProductsComponent,
    ProductDetailsComponent,
    CartComponent,
    OrderComponent,
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent,
    OpenProductsDirective,
    OpenProductDetailsDirective,
    RegisterComponent,
    LoginComponent,
    SlidingComponentComponent,
    CourseCardComponent,
    AboutComponent,
    AcknowledgementComponent,
    OurTeamComponent,
    AboutUsComponent,
    OurCustomersComponent,
    HistoryComponent,
    TrainerComponent,
    ContactUsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgImageSliderModule,
    HttpClientModule,
    RouterModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => {
          return localStorage.getItem('user');
        },
        allowedDomains: ['localhost:7149'],
      },
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
