import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-addfriends',
  templateUrl: './addfriends.component.html',
  styleUrls: ['./addfriends.component.css']
})
export class AddfriendsComponent implements OnInit {

  constructor(private myapi:ApiService) { }


  name=""
  friendName=""
 friendNickName=""
DescribeYourFriend=""

status:boolean=false

readValue=()=>{
  let data={
    "name":this.name,
    "friendName":this.friendName,
   "friendNickName":this.friendNickName,
  "DescribeYourFriend":this.DescribeYourFriend
  

  }
  console.log(data)
  this.myapi.addFriends(data).subscribe(
    (response)=>{
      console.log(response)
      alert("Successfully Added")
      
  this.name=""
  this.friendName=""
 this.friendNickName=""
this.DescribeYourFriend=""
this.status=true
    }
  )
}
  
  ngOnInit(): void {
  }

}
