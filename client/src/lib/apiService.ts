import { ILessonList, IUser, IUserLesson, IUserReward } from '../interfaces';
import { ILesson } from '../interfaces/lesson';

const baseUrl: string = 'http://localhost:3001';

function fetchRequest(path: string, options?: RequestInit): Promise<any> {
  return fetch(baseUrl + path, options)
    .then((res: Response) => {
      if (res.status >= 400) {
        Promise.reject();
      } else if (res.status === 204) {
        return res;
      } else {
        return res.json();
      }
    })
    .catch((error) => {
      console.error(`Error fetching ${path}`, error);
    });
}

//lesson
export function getLesson(lessonId: number): Promise<ILesson> {
  return fetchRequest(`/lesson/${lessonId}`);
}

//user
export function userRegister(username: string, password: string, email: string): Promise<IUser> {
  const body = { username, password, email };
  return fetchRequest(`/user/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
}

export async function userLogin(username: string, password: string): Promise<IUser> {
  const body = { username, password };
  console.log(body);
  return await fetchRequest(`/user/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
}

//TODO: This need to be finalised, I think we need to send additional data - username - as well as handling this on FE
export function userLogout(): Promise<void> {
  return fetchRequest('/logout');
}

export function getUser(username: string): Promise<IUser> {
  return fetchRequest(`/user/profile/${username}`);
}

//userLesson

export function addUserLesson(
  userId: string,
  lessonId: number,
  stepCompleted: number,
  lessonTitle: string,
  totalLessonSteps: number
): Promise<IUserLesson> {
  const body = { userId, lessonId, stepCompleted, lessonTitle, totalLessonSteps };
  return fetchRequest(`/user-lesson`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
}

export function updateUserLessonProgress(
  userId: string,
  lessonId: number,
  stepCompleted: number,
  lessonTitle: string,
  totalLessonSteps: number,
  userCode: string
): Promise<IUserLesson[]> {
  const body = { userId, lessonId, stepCompleted, lessonTitle, totalLessonSteps, userCode };
  return fetchRequest(`/user-lesson`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
}

//TODO: This works when we have one lesson, but when we have multiple we will need to add another that gets a single lesson
export function getUserLessons(userId: string): Promise<IUserLesson[]> {
  return fetchRequest(`/user-lesson/${userId}`);
}

//userRewards

export function addUserReward(lessonId: number, userId: string): Promise<IUserReward> {
  const body = { lessonId, userId };
  return fetchRequest(`/user-rewards`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
}

//lessonList

export function addToLessonList(
  lessonId: number,
  lessonName: string,
  lessonSummary: string
): Promise<ILessonList> {
  const body = { lessonId, lessonName, lessonSummary };
  return fetchRequest(`/lesson-list`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
}

export function getLessonList(): Promise<ILessonList[]> {
  return fetchRequest(`/lesson-list`);
}
