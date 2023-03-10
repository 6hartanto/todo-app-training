import { HStack, Button, Text } from "@chakra-ui/react";
import { todoType } from "../App";

export interface BottomNavigationProps {
  todos: todoType[];
  clearCompleted: () => void;
}

export function BottomNavigation({todos, clearCompleted}: BottomNavigationProps) {
  return (
    <HStack
      w="100%"
      px={2}
      py={1}
      bg="#25273C"
      justifyContent="space-between"
      border="2px solid #AD02FE"
    >
      <Text>
        {todos.length} {todos.length > 1 ? "Todos" : "Todo"}
      </Text>
      <Button variant="unstyled" onClick={clearCompleted}>
        Clear Complete
      </Button>
    </HStack>
  );
}