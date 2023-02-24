// API
import { getConfig } from "features/config/api";
import { getPopular } from "features/popular/api";
// Types 
import { UserInfo } from "features/context/types";
import { Friend } from "./types";
// Firebase
import { doc, DocumentData, Firestore, QuerySnapshot, updateDoc } from "firebase/firestore";
// Hooks
import { useEffect, useState } from "react";
import { useQuery } from "react-query";

// A function to search for certain users
export const searchUsers = (allUsers : QuerySnapshot<DocumentData>, searchString : string) => {
  const matchedUsers : Friend[] = [];
  allUsers.forEach((user) => {
    if(user.id.toLowerCase().includes(searchString)){
      const {profileURL, uid} = user.data();
      matchedUsers.push({friendName : user.id, uid, profileURL});
    }
  })
  return matchedUsers.length !== 0 ? matchedUsers : undefined;
}
// A function that add a friend to the users firebase friends section
export const handleAddFriend = (
  id: DocumentData,
  name: string,
  userInfo: UserInfo | undefined,
  db: Firestore
) => {
  if (!userInfo) return;
  const ref = doc(db, "friends", userInfo.uid);
  updateDoc(ref, {
    [name]: id,
  });
};
// Removes a user from the list of found users 
// when the user is added to the friends list
export const removeFriendFromDOM = (
  answers: Friend[] | undefined,
  userIndex: number
) => {
  if(!answers) return;
  const newArr = [...answers];
  newArr.splice(userIndex, 1);
    return newArr;
  };

