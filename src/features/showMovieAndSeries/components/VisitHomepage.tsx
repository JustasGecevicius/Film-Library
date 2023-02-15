import { VisitHomepageType } from "features/movies/types";

export const VisitHomepage = ({ link } : VisitHomepageType ) => {
  return (
    <div className="visitHomepage">
      <div className="visitHomepageWidth">
        <a href={link} target="_b" className="visitHomepageLink">
          Visit the movie Homepage by clicking here!
        </a>
      </div>
    </div>
  );
};
