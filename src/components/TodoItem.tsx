import { VStack, HStack, Button, Divider, Image, Text } from "@chakra-ui/react";
import { todoType } from "../App";

interface TodoItemProps {
  completeTodo: (id:number) => void;
  todo: todoType
}

export function TodoItem({completeTodo, todo}: TodoItemProps) {
  return (
    <VStack spacing={0} bg="#25273C">
      <HStack w="100%" px={2} py={1}>
        <Button
          p={0}
          variant="unstyled"
          onClick={() => completeTodo(todo.id)}
        >
          {todo.completed ? (
            <Image src="/check-true.svg" width={8} />
          ) : (
            <Image src="/check.svg" width={8} />
          )}
        </Button>
        {todo.completed ? (
          <Text as="s">{todo.title}</Text>
        ) : (
          <Text>{todo.title}</Text>
        )}
      </HStack>
      <Divider w="78%" borderColor="green" />
    </VStack>
  );
}