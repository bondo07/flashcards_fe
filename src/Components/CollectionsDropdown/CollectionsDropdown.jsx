import { useState } from "react";
import Collection from "../Collection/Collection";
import "./CollectionsDropdown.css";

const CollectionsDropdown = ({
  collections = [],
  setActiveCollectionId,
  activeCollectionId,
}) => {
  const handleSelect = (e) => {
    const id = collections.find(({ title }) => title === e.target.value).id;
    setActiveCollectionId(id);
  };

  return (
    <div>
      <select onChange={handleSelect}>
        {collections.map((collection) => {
          return (
            <Collection
              collection={collection}
              setActiveCollectionId={setActiveCollectionId}
              collections={collections}
            />
          );
        })}
      </select>
    </div>
  );
};

export default CollectionsDropdown;
