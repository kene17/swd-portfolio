import { useForm, ValidationError } from '@formspree/react';
import styles from './ContactStyles.module.css';
import { FormEvent } from 'react';

function Contact() {
  const [state, handleSubmit] = useForm('xqkrovjw');

  const handleFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
    await handleSubmit(event);

    if (state.succeeded) {
      window.alert('Thanks for your message!');
    }
  };

  return (
    <section
      id='contact'
      className={styles.container}
    >
      <h1 className='sectionTitle'>Contact</h1>
      <form onSubmit={handleFormSubmit}>
        <div className='formGroup'>
          <label
            htmlFor='name'
            hidden
          >
            Name
          </label>
          <input
            type='text'
            name='name'
            id='name'
            placeholder='Name'
            required
          />
        </div>
        <div className='formGroup'>
          <label
            htmlFor='email'
            hidden
          >
            Email
          </label>
          <input
            type='email'
            name='email'
            id='email'
            placeholder='Email'
            required
          />
          <ValidationError
            prefix='Email'
            field='email'
            errors={state.errors}
          />
        </div>
        <div className='formGroup'>
          <label
            htmlFor='message'
            hidden
          >
            Message
          </label>
          <textarea
            name='message'
            id='message'
            placeholder='Message'
            required
          ></textarea>
          <ValidationError
            prefix='Message'
            field='message'
            errors={state.errors}
          />
        </div>
        <input
          className='hover btn'
          type='submit'
          value='Submit'
          disabled={state.submitting}
        />
      </form>
    </section>
  );
}

export default Contact;
