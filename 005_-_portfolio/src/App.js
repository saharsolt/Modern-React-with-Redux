import Projects from './Projects';
import Header from './Header';
import CharityImage from './images/Charity.png';
import JavaScriptImage from './images/JavaScript.png';
import LinkedInImage from './images/LinkedIn.png';
import AvatarImage from './images/Avatar.png';

function App() {
  return (
    <div>
      <Header image={AvatarImage} />
      <div className="card">
        <section className="section">
          <div className="columns">
            <div className="column">
              <Projects
                title="Experience"
                image={CharityImage}
                description="I spent about two years working as an IT professional for the Ashrafolanbia organization. That provided me with a wonderful opportunity to positively impact people's lives. I picked up a lot of new skills and shared my knowledge with my coworkers."
              />
            </div>
            <div className="column">
              <Projects
                title="Self-study course"
                image={JavaScriptImage}
                description="I took courses on JavaScript, Python, and Linux in 2022 and independently studied them online. This portfolio page is the outcome of my recent study of React with Redux."
              />
            </div>
            <div className="column">
              <Projects
                title="LinkedIn"
                image={LinkedInImage}
                description="Here is my LinkedIn account if you'd want to get in touch."
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
export default App;
