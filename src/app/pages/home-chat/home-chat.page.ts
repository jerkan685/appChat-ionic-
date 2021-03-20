import { Component, OnInit } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home-chat',
  templateUrl: './home-chat.page.html',
  styleUrls: ['./home-chat.page.scss'],
})
export class HomeChatPage implements OnInit {
message= ' ';
messages =[];
currentUser= ' ';
  constructor(private socket:Socket,private toastctrl:ToastController) { }

  ngOnInit() {
    this.socket.connect();

    let name=`User-${new Date().getTime()}`;
    this.currentUser=name;

    this.socket.emit('set-name',name);

    this.socket.fromEvent('users-changed').subscribe(data=>{
      console.log('go data:',data);
      let user = data['user'];
      if (data['event']== 'left'){
        this.showToast(`User left : ${user}`);
      }else{
        this.showToast(`User joined ${user}`)
      }
    });

    this.socket.fromEvent('message').subscribe(message=>{
      console.log(`new messages: ${message}`);
      this.messages.push(message);
    });
  }

  sendMessage(){
    this.socket.emit('send-message',{text:this.message})
    this.message= ' ';
  }

  ionViewWillLeave(){
    this.socket.disconnect();
  }


  async showToast(msg){
    let toast = await this.toastctrl.create({
     message:msg,
     position:'top',
     duration:3000

    });
    toast.present(); 
  }

}
