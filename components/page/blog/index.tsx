import { Box, GridItem, SimpleGrid } from "@chakra-ui/layout";
import { Skeleton } from "@chakra-ui/skeleton";
import React, { useEffect, useState } from "react";
import { fetchPosts } from "./data";
import Post from "./post";
import PostLoader from "./post-placeholder";

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
        {posts.length < 1 && (
          <>
            <Skeleton isLoaded={!loading}>
              <PostLoader />
            </Skeleton>
            <Skeleton isLoaded={!loading}>
              <PostLoader />
            </Skeleton>
          </>
        )}
      </SimpleGrid>
    </Box>
  );
};

export default Posts;
