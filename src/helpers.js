import axios from 'axios';

export const reportTechnicalIssues = async (id) => {
  return axios
    .post(`http://localhost:9001/issues/technical`, {
      id,
    })
    .then((res) => console.log(res))
    .catch((err) => {});
};

export const reportLectureIssues = async (id) => {
  return axios
    .post(`http://localhost:9001/issues/lecture/`, {
      id,
    })
    .then((res) => {})
    .catch((err) => {});
};

export const reportQuestion = async (id) => {
  return axios
    .post(`/questions-comments/question`, {
      body: { test: 1 },
    })
    .then((res) => {})
    .catch((err) => {});
};

export const reportComment = async (id) => {
  return axios
    .post(`/questions-comments/comment`, {
      headers: {},
    })
    .then((res) => {})
    .catch((err) => {});
};
