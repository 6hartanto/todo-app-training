import {
  Box,
  Input,
  InputGroup,
  InputRightAddon,
  Text,
  VStack,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { ChangeEvent, useState } from "react";
import { BottomNavigation } from "./components/BottomNavigation";
import { TodoItem } from "./components/TodoItem";
import { Title } from "./components/Title";
import { Link } from "react-router-dom";

export type todoType = {
  id: number;
  title: string;
  completed: boolean;
};

function App() {
  const [title, setTitle] = useState<string>("");
  const [todos, setTodos] = useState<todoType[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  // handle add todo
  const addTodo = (todo: todoType) => {
    setTodos([...todos, todo]);
    setTitle("");
  };

  // handle clear completed
  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  // handle completed todo
  const completeTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <Box p="60px" bg="#181824" h="100vh" color="white">
      <VStack spacing={8}>
        <Title children={"Todo App"} />
        <InputGroup w="30vw">
          <Input
            placeholder="What needs to be done?"
            borderRadius={50}
            value={title}
            onChange={handleChange}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                addTodo({ id: Date.now(), title, completed: false });
              }
            }}
          />
          <InputRightAddon
            borderEndRadius={50}
            onClick={() =>
              addTodo({
                id: Date.now(),
                title,
                completed: false,
              })
            }
            bg={"green.600"}
            _hover={{
              bg: "green.400",
              color: "white",
            }}
            children={<AddIcon />}
          />
        </InputGroup>
        <VStack spacing={0}>
          <Box w="30vw" mt={50}>
            {todos.length > 0 ? (
              <>
                {todos.map((todo) => (
                  <TodoItem
                    key={todo.id}
                    completeTodo={completeTodo}
                    todo={todo}
                  />
                ))}
              </>
            ) : (
              <Text fontSize="xl" fontWeight="bold" textAlign="center">
                No todos yet
              </Text>
            )}
            <BottomNavigation todos={todos} clearCompleted={clearCompleted} />
          </Box>
        </VStack>
        <Link to="/login">
          <Text fontSize="xl" fontWeight="bold" textAlign="center">
            Login
          </Text>
        </Link>
      </VStack>
    </Box>
  );
}

export default App;
