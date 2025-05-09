import { updateUser } from "../services/User";
import {
  getLocalStorageItem,
  setLocalStorageItem,
} from "../utils/localstorage";
import type {
  User,
  Room,
  LevelProgress,
  RoomProgress,
  Achievements,
} from "../types";

const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

// Map full-room completion achievements
const roomToAchievementMap: Record<Room, Achievements> = {
  capitalization: "completedAllCapitalization",
  punctuation: "completedAllPunctuation",
  spelling: "completedAllSpelling",
};

export async function markLevelComplete(
  username: string,
  room: Room,
  levelIndex: number,
  setUserState: (u: User) => void
) {
  const user = getLocalStorageItem("user") as User | null;
  if (!user) {
    console.error("No user in localStorage");
    return;
  }

  // 1. Mark the level
  const updatedRoomLevels: LevelProgress = user.progress[room].map(
    (done, idx) => (idx === levelIndex ? true : done)
  ) as LevelProgress;

  // 2. Build new progress
  const newRoomProgress: RoomProgress = {
    ...user.progress,
    [room]: updatedRoomLevels,
  };

  // 3. Prepare updated achievements list
  const achievements = [...user.achievements];

  // 3a. Per-level achievement
  const levelKey = `completed${capitalize(room)}Level${
    levelIndex + 1
  }` as Achievements;
  if (updatedRoomLevels[levelIndex] && !achievements.includes(levelKey)) {
    achievements.push(levelKey);
    console.log(`Achievement unlocked: ${levelKey}`);
  }

  // 3b. Full-room completion achievement
  const fullKey = roomToAchievementMap[room];
  if (updatedRoomLevels.every((v) => v) && !achievements.includes(fullKey)) {
    achievements.push(fullKey);
    console.log(`Achievement unlocked: ${fullKey}`);
  }

  // 4. Prepare updated user object
  const updatedUser: User = {
    ...user,
    progress: newRoomProgress,
    achievements,
  };

  // 5. Local update
  setLocalStorageItem("user", updatedUser);
  setUserState(updatedUser);

  // 6. Sync to Firestore
  try {
    await updateUser(username, {
      progress: newRoomProgress,
      achievements: updatedUser.achievements,
    });
    console.log(`Progress synced for ${room}[${levelIndex}]`);
  } catch (e) {
    console.error("Firestore update failed:", e);
  }
}
