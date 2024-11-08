import client from "./client";
import foodItem from "./foodItem";
import Tabs from "./tabs";

import { logger } from "../Utilities/logger";
export default async function syncModels() {
  try {
    // Tabs.belongsTo(client);

    // client.hasMany(Tabs);
    // foodItem.belongsTo(Tabs);

    // Tabs.hasMany(foodItem);

    // Company.hasMany(companyReview);
    // companyReview.belongsTo(Company);

    // Company.hasMany(companySalary);
    // companySalary.belongsTo(Company);

    // Company.hasMany(CompanyUserLinking);
    // CompanyUserLinking.belongsTo(Company);

    // Notification.belongsTo(Like);
    // Notification.belongsTo(Follow);
    // Notification.belongsTo(companyReview);

    // Like.afterCreate(async (like) => {
    //   if (like.getDataValue("type") === "post") {
    //     await Notification.create({
    //       user_id: like.getDataValue("user_id"),
    //       LikeId: like.getDataValue("id"),
    //       type: "likePost",
    //     });
    //   } else if (like.getDataValue("type") === "companyReview") {
    //     await Notification.create({
    //       user_id: like.getDataValue("user_id"),
    //       LikeId: like.getDataValue("id"),
    //       type: "likeReview",
    //     });
    //   } else if (like.getDataValue("type") === "comment") {
    //     await Notification.create({
    //       user_id: like.getDataValue("user_id"),
    //       LikeId: like.getDataValue("id"),
    //       type: "likeComment",
    //     });
    //   }
    // });

    // //Follow notifications
    // Follow.afterCreate(async (follow) => {
    //   if (
    //     follow.getDataValue("followingType") === "user" &&
    //     follow.getDataValue("following") === false
    //   ) {
    //     await Notification.create({
    //       user_id: follow.getDataValue("following_id"),
    //       FollowId: follow.getDataValue("id"),
    //       type: "sentAConnectionRequest",
    //     });
    //   } else if (
    //     follow.getDataValue("followingType") === "user" &&
    //     follow.getDataValue("following") === true
    //   ) {
    //     await Notification.create({
    //       user_id: follow.getDataValue("follower_id"),
    //       FollowId: follow.getDataValue("id"),
    //       type: "acceptFollow",
    //     });
    //   } else if (
    //     follow.getDataValue("followingType") === "community" &&
    //     follow.getDataValue("following") === true
    //   ) {
    //     await Notification.create({
    //       user_id: follow.getDataValue("follower_id"),
    //       FollowId: follow.getDataValue("id"),
    //       type: "acceptFollow",
    //     });
    //   } else if (
    //     follow.getDataValue("followingType") === "community" &&
    //     follow.getDataValue("following") === false
    //   ) {
    //     const communityAdmins = await getAdminsOfCommunityService(
    //       follow.getDataValue("following_id")
    //     );
    //     if (communityAdmins.error) {
    //       logger.error("Unable to create Notification for communityAdmins");
    //       logger.error(communityAdmins);
    //     }
    //     communityAdmins.map(async (admin: any) => {
    //       await Notification.create({
    //         user_id: admin.user.id,
    //         FollowId: follow.getDataValue("id"),
    //         type: "requestFollow",
    //       });
    //     });
    //   }
    // });
    // Follow.afterBulkUpdate(async (followOptions: any) => {
    //   const follow = followOptions.attributes;
    //   if (follow.followingType === "user" && follow.following) {
    //     await Notification.create({
    //       user_id: follow.following_id,
    //       FollowId: followOptions.where.id,
    //       type: "acceptFollow",
    //     });
    //   } else if (
    //     follow.followingType === "community" &&
    //     follow.following === true
    //   ) {
    //     await Notification.create({
    //       user_id: follow.following_id,
    //       FollowId: followOptions.where.id,
    //       type: "acceptFollow",
    //     });
    //   }
    // });

    // // Follow add member in community
    // Follow.afterCreate(async (follow) => {
    //   if (
    //     follow.getDataValue("followingType") === "community" &&
    //     follow.getDataValue("following") === true
    //   ) {
    //     await addMemberToCommunityService(
    //       follow.getDataValue("following_id"),
    //       follow.getDataValue("follower_id")
    //     ).catch((error) => {
    //       logger.error("Error in addMemberToCommunityService");
    //       logger.error(error);
    //       logger.info(follow);
    //       throw error;
    //     });
    //   }
    // });

    await foodItem.sync();
    await client.sync();
    await Tabs.sync();
  } catch (err) {
    throw err;
  }
}

enum notifType {
  "acceptFollow",
  "requestFollow",
  "addedAPost",
  "likePost",
  "sentAConnectionRequest",
  "commentedOnYourPost",
  "likeComment",
  "likeReview",
}

interface noificationItemProps {
  profileImageUrl?: string;
  name: string;
  type: notifType;
  timestamp: string;
  isAccepted?: boolean;
}
