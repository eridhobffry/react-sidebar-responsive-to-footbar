import React from "reacct";
import { Content } from "../../styled_fragments/styled_content";
import { posts } from "../../general/variables";

const ContentComponent = styles => {
  return (
    <Content styles={styles}>
      {posts.map((post, i) => {
        return (
          <div key={i} style={{ marginBottom: 40 }}>
            <h2 style={{ marginBottom: 0 }}>{post.title}</h2>
            <p>{post.summary}</p>
          </div>
        );
      })}
    </Content>
  );
};

export default ContentComponent;
