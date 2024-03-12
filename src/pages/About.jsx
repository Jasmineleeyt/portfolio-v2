import React from 'react';
import Avatar from '../../src/assets/avatar.jpg'


export default function AboutMe() {
    return (
      <div className="about-sec">
        <h2>About Me</h2>
        <img className="avatar" src={Avatar} alt="avatar"/>
        <p className="about-para">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate placeat ratione ducimus voluptates a vel deleniti aut architecto eum dolores vitae quos quo, magnam quae molestias nam odit quisquam! Totam doloremque dolore adipisci cum a voluptas omnis, deserunt magnam tempora ab nihil nulla natus? Impedit molestiae vero sit dolorum! Alias, laborum quae! Earum, perspiciatis ab et tempore quas aut unde! Unde quam ratione, voluptatum doloremque, at cumque quis quia laboriosam illo beatae excepturi asperiores modi incidunt officia, assumenda aspernatur tempora magni itaque obcaecati minus dolorem? Consectetur eos adipisci sapiente, illo quos dicta labore, doloremque, qui tempora dignissimos explicabo ipsum sunt?
        </p>
      </div>
    );
  }