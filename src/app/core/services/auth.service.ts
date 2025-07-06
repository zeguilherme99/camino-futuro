import { Injectable } from '@angular/core';
import {Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, User, UserCredential} from '@angular/fire/auth';
import {BehaviorSubject, Observable} from 'rxjs';
import {Router} from '@angular/router';
import {doc, Firestore, getDoc, setDoc} from '@angular/fire/firestore';
import {AppUser} from '../models/app-user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userSubject = new BehaviorSubject<AppUser | null>(null);
  user$: Observable<AppUser | null> = this.userSubject.asObservable();

  constructor(private auth: Auth, private router: Router, private firestore: Firestore) {
    this.auth.onAuthStateChanged(async user => {
      if (user) {
        const docRef = doc(this.firestore, `users/${user.uid}`);
        const snap = await getDoc(docRef);
        const data = snap.data();
        this.userSubject.next({
          uid: user.uid,
          email: user.email,
          role: (data?.['role'] ?? 'refugee') as 'company' | 'refugee',
        });
      } else {
        this.userSubject.next(null);
      }
    });
  }

  login(email: string, password: string) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  async register(email: string, password: string, role: 'company' | 'refugee'): Promise<UserCredential> {
    const userCredential = await createUserWithEmailAndPassword(this.auth, email, password);

    const userRef = doc(this.firestore, `users/${userCredential.user.uid}`);
    await setDoc(userRef, {
      email: email,
      role: role,
      createdAt: new Date(),
    });

    return userCredential;
  }

  logout() {
    return signOut(this.auth).then(() => {
      this.router.navigate(['/login']);
    });
  }

  get isAuthenticated(): boolean {
    return !!this.userSubject.value;
  }

  get role(): string | undefined {
    return (this.userSubject.value as any)?.role;
  }

  // Se quiser, método mock para botões rápidos:
  loginMock(role: string) {
    // Simule um login local (opcional)
  }
}
