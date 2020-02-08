import axios from 'axios';

// removes items with keys that are not of valid type "tag", or "content"
// assumption we want to remove items with an invalid tag like " tag", rather than convert it to "tag"
const removeBadData = (item) => item.tag && item.content

// gets unique tag types for filter options
const getUniqueTagTypes = (tagTypes, item) => {
  if(!tagTypes.includes(item.tag)){
    tagTypes.push(item.tag)
  } 
  return tagTypes
}

export const fetchDataWithTypes = async() => {
  // Uses heroku cors anywhere to test without deploying
  // TODO conditionally add cors anywhere for dev env only
  const corsAnywhere = "https://cors-anywhere.herokuapp.com/"
  const url = "https://sbt-tech-exercise-content.s3-us-west-1.amazonaws.com/content.json"
  const { data : { content} } = await axios({
    method: 'get',
    url: `${corsAnywhere}${url}`,
    headers: {'Access-Control-Allow-Origin': '*'}
});
const validContent = content.filter(removeBadData)
const tagTypes = validContent.reduce(getUniqueTagTypes, [])

return { content: validContent, tagTypes}
  };