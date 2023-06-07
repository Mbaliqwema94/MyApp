// import { Component, OnInit } from '@angular/core';
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics"
// import { Observable } from 'rxjs';
// import { FormsModule } from '@angular/forms';

// interface Message {
//   content: string;
//   senderId: string;
//   timestamp: number;
// }

// @Component ({
//   selector: 'app-chats',
//   templateUrl: './chats.component.html',
//   styleUrls: ['./chats.component.scss']
// })
// //     <div>
// //       <h2>Chat</h2>
// //       <div *ngFor="let message of messages$ | async">
// //         <p>{{ message.content }}</p>
// //       </div>
// //       <form (ngSubmit)="sendMessage()">
// //         <input [(ngModel)]="newMessage" placeholder="Type a message" required />
// //         <button type="submit">Send</button>
// //       </form>
// //     </div>
// //   `
// // })

// @Component({
//   selector: 'app-chats',
//   templateUrl: './chats.component.html',
//   styleUrls: ['./chats.component.scss']
// })


// // export class ChatComponent implements OnInit {
// //   messages$: Observable<Message[]>;
// //   messagesCollection: AngularFirestoreCollection<Message>;
// //   newMessage: string;

// export class ChatsComponent implements OnInit {
//   messages$: Observable<Message[]>;
//   messagesRef: AngularFireList<Message>;
//   newMessage: string;

//   constructor(private firestore: AngularFirestore) {}

//   ngOnInit() {
//     this.messagesCollection = this.firestore.collection<Message>('messages');
//     this.messages$ = this.messagesCollection.valueChanges();
//   }

//   sendMessage() {
//     const message: Message = {
//       content: this.newMessage,
//       senderId: 'user123', // Replace with the actual user ID
//       timestamp: Date.now()
//     };
//     this.messagesCollection.add(message);
//     this.newMessage = '';
//   }
// }
// // Import the functions you need from the SDKs you need


// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDkpT7HdJnwYA9ITD4Au0H-IIA3w-xUIPc",
//   authDomain: "tool-konnect-app.firebaseapp.com",
//   projectId: "tool-konnect-app",
//   storageBucket: "tool-konnect-app.appspot.com",
//   messagingSenderId: "150587926521",
//   appId: "1:150587926521:web:bee1dbbaefbcd86d6cbf28",
//   measurementId: "G-YH8L7QZJZW"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);