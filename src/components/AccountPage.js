import React from "react";

export function AccountPage(props) {
  return (
    <div>
            <heading>My Account</heading>
<div className='edit-my-account' ><a href='/NewPost'>
    <div><button >New Post</button></div>
</a> </div>
    <div className='my-account'>
    <label>Username:</label><button>edit</button>
    <label>Email:</label><button>edit</button>
    <label>Password: ********</label>
    <button>reveal</button>
    </div>
    <div className='edit-my-account'>
    <button>edit</button>
    <p /><button>delete account</button></div>
    </div>
  );
}
