import { Input, Button } from './MovieForm.styled';

const MovieForm = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <Input type="text" name="query" />
      <Button type="submit">Search</Button>
    </form>
  );
};

export default MovieForm;
