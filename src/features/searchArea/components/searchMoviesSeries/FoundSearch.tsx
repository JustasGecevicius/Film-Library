// Types
import { FoundSearchType } from "../../types";

export const FoundSearch = ({ id, name, URL }: FoundSearchType) => {
  return (
    <div className="foundMovie">
      <img src={URL} alt="posterImage" />
      <p className="foundItemName">{name}</p>
    </div>
  );
};
