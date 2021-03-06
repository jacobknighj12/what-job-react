import React from "react";
export function HomePage() {
  return (
    <div>

      <heading className="heading" htmlFor="whatJob?">
        whatJob?
      </heading>
      <div>
        <p className="introduction">
          Our purpose is to provide career guidance for those in mainly high
          school education, but also for career changers. If you are a
          professional in any field please add your knowledge by signing up and
          creating a post! If you are a student or career changer please go to
          categories to explore the information provided and leave a up-vote for
          those that helped you!
        </p>


        <div className="introduction-buttons">
          <a href="/Signup">
            <button>Sign up</button>
          </a>
          <a href="/Categories">
            <button>Categories</button>
          </a>
        </div>
      </div>
    </div>
  );
}
