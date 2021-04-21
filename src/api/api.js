const apiUrl = 'https://blog-hniezdilov.herokuapp.com';

// Private functions
const callApi = (endpoint, options) => {
    const url = `${apiUrl}/${endpoint}`;

    return fetch(url, options)
        .then((res) => {
            return res.text();
        })
        .then((data) => {
            return JSON.parse(data);
        });
};

export const getRegistration = (username, email, password) => callApi('auth/local/register', {
    method: 'POST',
    body:   JSON.stringify({
        username,
        email,
        password,
    }),
    headers: {
        'Content-Type': 'application/json',
    },
});

export const getLogin = (identifier, password) => callApi('auth/local', {
    method: 'POST',
    body:   JSON.stringify({
        identifier,
        password,
    }),
    headers: {
        'Content-Type': 'application/json',
    },
});

export const getCategories = () => callApi('categories/', {
    method:  'GET',
    headers: {
        'Content-Type': 'application/json',
    },
});

export const getBlogs = () => callApi('blogs/', {
    method:  'GET',
    headers: {
        'Content-Type': 'application/json',
    },
});

export const getBlogsByCategory = (category) => callApi(`blogs/and?categories.category=${category}`, {
    method:  'GET',
    headers: {
        'Content-Type': 'application/json',
    },
});

export const getBlogById = (id) => callApi(`blogs/${id}`, {
    method:  'GET',
    headers: {
        'Content-Type': 'application/json',
    },
});

export const uploadImage = (formData, token) => callApi('upload', {
    method:  'POST',
    body:    formData,
    headers: {
        Authorization: `Bearer ${token}`,
    },
});

export const createBlog = (title, content, token) => callApi('blogs', {
    method: 'POST',
    body:   JSON.stringify({
        title,
        content,
    }),
    headers: {
        'Content-Type': 'application/json',
        Authorization:  `Bearer ${token}`,
    },
});

export const updateBlog = (id, title, content, token) => callApi(`blogs/${id}`, {
    method: 'PUT',
    body:   JSON.stringify({
        title,
        content,
    }),
    headers: {
        'Content-Type': 'application/json',
        Authorization:  `Bearer ${token}`,
    },
});

export const deleteBlog = (id, token) => callApi(`blogs/${id}`, {
    method:  'DELETE',
    headers: {
        'Content-Type': 'application/json',
        Authorization:  `Bearer ${token}`,
    },
});
