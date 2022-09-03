import React, { useCallback, useState, useMemo } from "react";

import { Title, Text, Flex, Button, Box } from "./styled";
import { useKart } from "../context/Kart";
import { CURRENCY } from "../constants";
import SelectButton from "./SelectButton";

const MattressCarousel = ({ mattresses }) => {
  const { addItem } = useKart();
  const [selected, setSelected] = useState(mattresses?.[0]);

  const selecButtonItems = useMemo(
    () => mattresses?.map(({ id, name }) => ({ text: name, id })),
    [mattresses]
  );

  const handleSelectItem = useCallback(
    (value) => setSelected(mattresses.find(({ id }) => id === value)),
    [setSelected, mattresses]
  );

  const handleAddItem = useCallback(() => {
    addItem(selected.id);
  }, [addItem, selected]);

  return (
    <Flex>
      <img
        src={`/img/${selected?.imageFileName}`}
        alt={selected?.name}
        width="500"
      />
      <Box fullWidth>
        <Title>Choose Your Mattress</Title>
        <Text>select mattress type</Text>
        <SelectButton
          items={selecButtonItems}
          selectedItem={selected?.id}
          onChange={handleSelectItem}
        />
        {selected && (
          <>
            <Flex justifyContent="space-between">
              <Text>{selected?.name} Mattress</Text>
              <Text currency>{CURRENCY.symbol + selected?.price}</Text>
            </Flex>
            <Button variant="primary" onClick={handleAddItem} fullWidth>
              Add to Cart
            </Button>
          </>
        )}
      </Box>
    </Flex>
  );
};

export default MattressCarousel;
