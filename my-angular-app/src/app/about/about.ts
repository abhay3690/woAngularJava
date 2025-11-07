import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.css',
})

export class About {
  companyName = 'TechNova Health Systems Pvt. Ltd.';
  foundedYear = 2015;
  address = {
    street: '123 Innovation Drive',
    city: 'Bangalore',
    state: 'Karnataka',
    zip: '560001',
    country: 'India'
  };
  contactEmail = 'contact@technovahealth.com';
  contactPhone = '+91 98765 43210';

  mission =
    'To provide smart, secure, and scalable healthcare technology solutions that simplify patient care and empower medical professionals.';
  vision =
    'To revolutionize healthcare with innovative, cloud-based digital ecosystems that improve outcomes and streamline operations.';

  team = [
    { name: 'Ravi Kumar', role: 'CEO & Founder', image: 'assets/images/ceo.jpg' },
    { name: 'Ananya Sharma', role: 'CTO', image: 'assets/images/cto.jpg' },
    { name: 'Rohit Verma', role: 'VP - Product Strategy', image: 'assets/images/marketing.jpg' },
    { name: 'Priya Singh', role: 'Head of Design', image: 'assets/images/designer.jpg' }
  ];
}
