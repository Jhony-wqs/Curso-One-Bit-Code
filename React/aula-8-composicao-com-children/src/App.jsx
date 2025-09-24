import Profile from "./components/Profile"

export default function App() {

  return (
    <div className="app">
      <Profile
        avatar="https://avatars.githubusercontent.com/u/9919?s=200&v=4"
        name="Jhon Doe"
        bio="GitHub is where over 100 million developers shape the future of software."
        phone="+1-800-123-4567"
        email="contact@github.com"
        githubUrl="https://github.com"
        linkedinUrl="https://linkedin.com"
        twitterUrl="https://twitter.com"
      />    

    </div>
  )
}


