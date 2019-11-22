import React, { useEffect, useState } from "react";

import { View, Text, FlatList, Image } from "react-native";

import api from "../../services/api";

import { Container } from "./styles";

function FishList() {
  state = {
    data: [
      { id: "00", name: "Peixe 1 " },
      { id: "01", name: "Peixe 2" },
      { id: "02", name: "Peixe 3" },
      { id: "03", name: "Peixe 4" },
      { id: "04", name: "Peixe 5" },
      { id: "05", name: "Peixe 6" },
      { id: "06", name: "Peixe 7" },
      { id: "07", name: "Peixe 8" }
    ]
  };
  const [fishlists, setFishlist] = useState([]);

  useEffect(() => {
    async function loadFishList() {
      const response = await api.get("/fish");
      setFishlist(response.data);
    }

    loadFishList();
  }, []);

  return (
    <Container>
      <FlatList
        data={fishlists}
        keyExtractor={fishlist => fishlist._id}
        numColumns={2}
        renderItem={({ item }) => (
          <ListItem>
            <Thumbnail source={{ uri: item.photo_url }} />
            <Tittle>{item.name}</Tittle>
          </ListItem>
        )}
      />
    </Container>
  );
}

export default FishList;
