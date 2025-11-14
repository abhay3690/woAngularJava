import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { UserCrud } from './user-crud/user-crud';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule, UserCrud, RouterLink],
  templateUrl: './user.html',
  styleUrls: ['./user.css']
})
export class User implements OnInit {
  users: any[] = [];
  selectedUser: any = { name: '', email: '', contactNumber: '', password: '' };
  isEdit = false;
  searchTerm: string = '';

  private apiUrl = 'http://localhost:8080/api/users';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.http.get<any[]>(this.apiUrl, {withCredentials: true}).subscribe(data => this.users = data);
  }

  searchUser() {
    if (!this.searchTerm.trim()) {
      this.loadUsers();
      return;
    }

    this.http.get<any[]>(`${this.apiUrl}/search?name=${this.searchTerm}`).subscribe({
      next: (data) => this.users = data,
      error: (err) => console.error('Error searching users', err)
    });
  }

  clearSearch() {
    this.searchTerm = '';
    this.loadUsers();
  }
exportToCSV() {
  let url = `${this.apiUrl}/export`;
  if (this.searchTerm.trim()) {
    url += `?name=${this.searchTerm.trim()}`;
  }

  this.http.get(url, { responseType: 'blob', observe: 'response' }).subscribe({
    next: (response) => {
      if (response.status === 404) {
        alert('No users found for export!');
        return;
      }
      const blob = new Blob([response.body!], { type: 'text/csv' });
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = this.searchTerm
        ? `users_${this.searchTerm}.csv`
        : 'users_all.csv';
      link.click();
    },
    error: (err) => {
      if (err.status === 404) {
        alert(err.error || 'No users found for export!');
      } else {
        alert('Error exporting CSV: ' + err.message);
      }
    }
  });
}
  saveUser(user: any) {
    if (this.isEdit && user.id) {
      console.log('Updating url:',`${this.apiUrl}/${user.id}`);
      this.http.put(`${this.apiUrl}/${user.id}`, user).subscribe({
        next: () => {
          alert('User updated successfully!');
          this.resetForm();
          this.loadUsers();
        },
        error: (err) => alert(err.error || 'Error updating user')
      });
    } else {
      this.http.post(this.apiUrl, user).subscribe({
        next: () => {
          alert('User added successfully!');
          this.resetForm();
          this.loadUsers();
        },
        error: (err) => alert(err.error || 'Error adding user')
      });
    }
  }

  editUser(user: any) {
    this.selectedUser = { ...user };
    this.isEdit = true;
  }

  deleteUser(id: number) {
    if (confirm('Are you sure you want to delete this user?')) {
      this.http.delete(`${this.apiUrl}/${id}`).subscribe({
        next: () => {
          alert('User deleted successfully!');
          this.loadUsers();
        },
        error: (err) => alert(err.error || 'Error deleting user')
      });
    }
  }

  resetForm() {
    this.selectedUser = { name: '', email: '', contactNumber: '', password: '' };
    this.isEdit = false;
  }
}
