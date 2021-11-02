import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { onAuthUIStateChange, CognitoUserInterface, AuthState } from '@aws-amplify/ui-components';
import { AdminService } from './admin.service';

@Component({
  selector: 'admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  user: CognitoUserInterface | undefined;
  authState: AuthState;
  constructor(
    private admin: AdminService,
    private ref: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    console.log('admin init');
    onAuthUIStateChange((authState, authData) => {
      console.log('user authenticated');
      this.authState = authState;
      this.user = authData as CognitoUserInterface;
      if(this.user != undefined){
        this.admin.setToken(this.user.signInUserSession.idToken.jwtToken);
      }
      this.ref.detectChanges();
    });
  }

  ngOnDestroy() {
    return onAuthUIStateChange;
  }

}
