// import { Injectable, Inject } from "@angular/core";
// import { Cookie } from "ng2-cookies/ng2-cookies";

// @Injectable()
// export class CookiesService {
// constructor(@Inject('encryptDecryptService') private encryptDecryptService: any) {}

//     /**
//      * Set Cookie
//      * @param key 
//      * @param value 
//      * @param cookieExpirationDays 
//      */
//     setCookie(key: string, value: any, cookieExpirationDays: number){
//         let path: string = "/";
//         if (this.getCookie(key)) {
//             this.removeCookie(key);
//         }
//         if (cookieExpirationDays) {
//             Cookie.set(this.encryptDecryptService.encrypted(key), this.encryptDecryptService.encrypted(value), (cookieExpirationDays / 60 / 60 / 24), path);
//         }
//         else {
//             Cookie.set(this.encryptDecryptService.encrypted(key), this.encryptDecryptService.encrypted(value), undefined, path);
//         }
//     }

//     /**
//      * Remove Cookie
//      * @param key 
//      * @returns 
//      */
//      removeCookie(key: string){
//         let path: string = "/";
//         Cookie.delete(this.encryptDecryptService.encrypted(key), path);
//     }

//     /**
//      * Get Cookie
//      * @param key 
//      * @returns 
//      */
//     getCookie(key: any): any {
//         let ecnKey = this.encryptDecryptService.encrypted(key);
//         let encValue = Cookie.get(ecnKey)
//         if (encValue)
//             return this.encryptDecryptService.decrypted(encValue);
//     }

//     /**
//      * Set Local Storage
//      * @param key 
//      * @param value 
//      */
//     setLocalStorageItem(key: any, value: any): any {
//         localStorage.setItem(this.encryptDecryptService.encrypted(key), this.encryptDecryptService.encrypted(value));
//     }

//     /**
//      * Get Local Storage
//      * @param key 
//      * @param value 
//      */
//     getLocalStorageItem(key: any): any {
//         let ecnKey = this.encryptDecryptService.encrypted(key);
//         let encValue = localStorage.getItem(ecnKey)
//         if (encValue)
//             return this.encryptDecryptService.decrypted(encValue);
//     }

//      removeLocalStorageItem(key: any): any{
//          localStorage.removeItem(this.encryptDecryptService.encrypted(key));
//     }
// }