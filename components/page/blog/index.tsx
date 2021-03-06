import { Box, GridItem, SimpleGrid } from "@chakra-ui/layout";
import React, { useEffect, useState } from "react";
import { fetchPosts } from "./data";
import Post from "./post";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchPosts().then((res) => {
      console.log("IN USE-EFFECT", res);
      setPosts(res);
      setLoading(false);
    });
  }, []);
  return (
    <Box px={[, , 8]}>
      <SimpleGrid columns={[1, , 2]} spacing={6} mt={16} mb={16}>
        {posts.map((post, pid) => (
          <Post {...post} key={pid} />
        ))}
        {/* <Post /> */}
      </SimpleGrid>
    </Box>
  );
};

export default Posts;
