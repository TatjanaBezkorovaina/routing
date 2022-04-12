import { useContext } from "react";
import { ThemeContext } from "../contexts/theme.context";

const Main = () => {
  const theme = useContext(ThemeContext);

  return (
    <div style={theme}>
      <h1>Безкоровайна Тетяна</h1>
    </div>
  );
};

export default Main;
