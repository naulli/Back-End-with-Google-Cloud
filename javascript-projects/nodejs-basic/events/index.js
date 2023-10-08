const { EventEmitter } = require('events')
 
const birthdayEventListener = ({name}) => {
    console.log(`Happy birthday ${name}!`);
  }
 
//todo2
const myEmitter = new EventEmitter();
  
//3
myEmitter.on('birthday', birthdayEventListener);
   
  // TODO 4
myEmitter.emit('birthday', { name: 'Joanna Margareth Nauli' });

//TODO 2: Buat variabel myEmitter yang merupakan instance dari EventEmitter.
//TODO 3: Tentukan birthdayEventListener sebagai aksi ketika event ‘birthday’ dibangkitkan pada myEmitter
//TODO 4: Bangkitkan event ‘birthday’ pada myEmitter dengan method emit() dan beri nilai argumen listener dengan nama Anda.