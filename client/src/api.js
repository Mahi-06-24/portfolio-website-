const API_BASE = '/api';

async function fetchJSON(endpoint) {
  const res = await fetch(`${API_BASE}${endpoint}`);
  if (!res.ok) throw new Error(`Failed to fetch ${endpoint}`);
  return res.json();
}

export const getProfile = () => fetchJSON('/profile');
export const getProjects = () => fetchJSON('/projects');
export const getProject = (id) => fetchJSON(`/projects/${id}`);
export const getEducation = () => fetchJSON('/education');
export const getExperience = () => fetchJSON('/experience');
export const getSkills = () => fetchJSON('/skills');
export const getCertifications = () => fetchJSON('/certifications');

export async function sendContact(data) {
  const res = await fetch(`${API_BASE}/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  const body = await res.json();
  if (!res.ok) throw new Error(body.message || 'Failed to send message');
  return body;
}
