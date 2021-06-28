import React from 'react';
import useFetch from '../hooks/useFetch';

function Stories() {
  const stories = useFetch(
    'http://news-proxy-server.appspot.com/topstories',
    []
  );
  return (
    <div className="Stories">
      <h3>Stories</h3>
      {stories.map((story, index) => (
        <div key={index}>
          <a href={story.url}>{story.title}</a>
          <p>
            {story.by} - {new Date(story.time * 1000).toLocaleString()}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Stories;
