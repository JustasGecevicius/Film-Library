// Types
import { FoundSearchType } from "../../types";

export const FoundSearch = ({ name, URL }: FoundSearchType) => {
  return (
    <div className="foundMovie">
      <img src={URL} alt="posterImage" />
      <p className="foundItemName">{name}</p>
    </div>
  );
};
