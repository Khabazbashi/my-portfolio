const getAllProjects = async () => {
  let QUERY = encodeURIComponent(
    '*[_type == "projects"]{title, altText, description, url, "imageUrl": image.asset->url}'
  );
  let PROJECT_URL = `https://${process.env.REACT_APP_PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${process.env.REACT_APP_DATASET}?query=${QUERY}`;

  return await fetch(PROJECT_URL)
    .then((res) => res.json())
    .then(({ result }) => result)
    .catch((err) => console.error(err));
};

const getAllSkills = async () => {
  let QUERY = encodeURIComponent(
    '*[_type == "skills"]{skill, level, altText, "imageUrl": image.asset->url}'
  );
  let PROJECT_URL = `https://${process.env.REACT_APP_PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${process.env.REACT_APP_DATASET}?query=${QUERY}`;

  return await fetch(PROJECT_URL)
    .then((res) => res.json())
    .then(({ result }) => result)
    .catch((err) => console.error(err));
};

export const sanityRepo = { getAllProjects, getAllSkills };
