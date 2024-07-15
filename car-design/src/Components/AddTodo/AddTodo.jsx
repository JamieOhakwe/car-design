import { useMutation } from '@apollo/client';
import ADD_TODO from '../'

function AddTodo() {
    let input;
    const [addTodo, {  loading, error }] = useMutation(ADD_TODO);
  
    if (loading) return 'Submitting...';
    if (error) return `Submission error! ${error.message}`;
  
    return (
      <div>
        <form
          onSubmit={e => {
            e.preventDefault();
            addTodo({ variables: { type: input.value } });
            input.value = '';
          }}
        >
          <input
            ref={node => {
              input = node;
            }}
          />
          <button type="submit">Add Todo</button>
        </form>
      </div>
    );
  }

  export default AddTodo