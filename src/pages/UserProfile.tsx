import { Header } from "features/header/components/Header";
import { SearchArea } from "features/searchArea/components/SearchArea";

export const UserProfile = () => {
  return (
    <div className="userProfile">
      <Header></Header>
      <div className="userSection">
        <img className="userImage" src="" alt="userImage"></img>
        <div className="userInfo">
            <p><h3>name</h3> text</p>
            <div className="userMetrics">
                <div className="metric1"></div>
                <div className="metric2"></div>
            </div>
        </div>
      </div>
    </div>
  );
};
