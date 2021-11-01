import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderDashComponent } from './order-dash/order-dash.component';
import { AdminService } from './admin.service';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { AmplifyUIAngularModule } from '@aws-amplify/ui-angular';
import Amplify, { Auth } from 'aws-amplify';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';

Amplify.configure(
  {
    Auth: {

      // REQUIRED only for Federated Authentication - Amazon Cognito Identity Pool ID
      //identityPoolId: 'us-east-1_rwaJF0j5j',
      
      // REQUIRED - Amazon Cognito Region
      region: 'us-east-1',

      // OPTIONAL - Amazon Cognito Federated Identity Pool Region 
      // Required only if it's different from Amazon Cognito Region
      //identityPoolRegion: 'XX-XXXX-X',

      // OPTIONAL - Amazon Cognito User Pool ID
      userPoolId: 'us-east-1_4AyPEoaev',

      // OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)
      userPoolWebClientId: '4ecs53sm23lh1cj7i8281d5n4q',

      // OPTIONAL - Enforce user authentication prior to accessing AWS resources or not
      mandatorySignIn: true,

      // OPTIONAL - Configuration for cookie storage
      // Note: if the secure flag is set to true, then the cookie transmission requires a secure protocol
      /*cookieStorage: {
      // REQUIRED - Cookie domain (only required if cookieStorage is provided)
          domain: '.cbstockingdrive.com',
      // OPTIONAL - Cookie path
          path: '/',
      // OPTIONAL - Cookie expiration in days
          expires: 365,
      // OPTIONAL - See: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie/SameSite
          sameSite: "lax",
      // OPTIONAL - Cookie secure flag
      // Either true or false, indicating if the cookie transmission requires a secure protocol (https).
          secure: true
      },*/

      // OPTIONAL - customized storage object
      //storage: MyStorage,
      
      // OPTIONAL - Manually set the authentication flow type. Default is 'USER_SRP_AUTH'
      authenticationFlowType: 'USER_PASSWORD_AUTH',

      // OPTIONAL - Manually set key value pairs that can be passed to Cognito Lambda Triggers
      //clientMetadata: { myCustomKey: 'myCustomValue' },

       // OPTIONAL - Hosted UI configuration
      // oauth: {
      //     domain: 'cbstockingdrive.auth.us-east-1.amazoncognito.com',
      //     scope: ['phone', 'email', 'profile', 'openid', 'aws.cognito.signin.user.admin'],
      //     redirectSignIn: 'http://localhost:3000/',
      //     redirectSignOut: 'http://localhost:3000/',
      //     responseType: 'token' // or 'code', note that REFRESH token will only be generated when the responseType is code
      // }
    }
  }
);

@NgModule({
  declarations: [OrderDashComponent, AdminComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatTableModule,
    MatTabsModule,
    AmplifyUIAngularModule
  ],
  providers: [
    AdminService
  ]
})
export class AdminModule { }
