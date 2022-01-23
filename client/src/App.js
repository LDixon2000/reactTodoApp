import Todo from "./Pages/Todo";
import { Center, Container } from "@chakra-ui/react";

function App() {
  return (
    <Container maxW="container.md">
      <Center>
        <Todo />
      </Center>{" "}
    </Container>
  );
}

export default App;
