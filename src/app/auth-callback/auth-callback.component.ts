import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-auth-callback',
  template: '<p>Processing authentication...</p>',
})
export class AuthCallbackComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    console.log('in auth');
    this.route.queryParams.subscribe(params => {
      const authCode = params['code']; // Extract auth code from URL
      if (authCode) {
        console.log('Auth Code:', authCode);
        localStorage.setItem('fyers_auth_code', authCode); // Save it for future use
        // Redirect to home/dashboard after successful auth
        this.router.navigate(['/']);
      }
    });
  }
}
