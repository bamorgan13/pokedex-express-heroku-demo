import runtimeEnv from '@mars/heroku-js-runtime-env';

const env = runtimeEnv();

export const imageUrl = env.REACT_APP_IMAGE_URL || 'http://localhost:8000';
export const baseUrl = env.REACT_APP_BASEURL || `${imageUrl}/api`;

// export const imageUrl =
// 	process.env.REACT_APP_IMAGE_URL || process.env.NODE_ENV === 'production'
// 		? 'https://pokedex-redux-single-repo.herokuapp.com'
// 		: 'http://localhost:8000';
// export const baseUrl = process.env.REACT_APP_BASEURL || `${imageUrl}/api`;
