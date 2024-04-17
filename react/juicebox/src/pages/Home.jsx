import Navbar from "../components/Navbar"
import Posts from "./Posts"
import Explore from "./Explore"
import Notification from "./Notifications"
import Friends from "./Friends"
import Groups from "./Groups"
import Settings from "./Settings"

const Home = () => {
  return (
    <>
    <Navbar/>
    <content>
      <Posts/>
      <Explore/>
      <Notification/>
      <Friends/>
      <Groups/>
      <Settings/>
    </content>
    </>
  )
}

export default Home