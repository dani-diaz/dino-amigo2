import sendRequest from './send-request';

const BASE_URL = '/api/classes';


export function getBinder() {
  return sendRequest(`${BASE_URL}/binder`);
}

export function addLessonToBinder(lessonId) {
  return sendRequest(`${BASE_URL}/binder/lessons/${lessonId}`, 'POST');
}

export function setLessonQtyInBinder(lessonId, newQty) {
  return sendRequest(`${BASE_URL}/binder/qty`, 'PUT', { lessonId, newQty });
}

export function save() {
  return sendRequest(`${BASE_URL}/binder/save`, 'POST');
}

export function getAllForUser() {
  return sendRequest(`${BASE_URL}/user`);
}


