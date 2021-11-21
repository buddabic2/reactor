
type Question = {
  title: string
  href: string
  description: {
    type: DescriptionElementType
    content: string | string[]
  }[]
  media: string
  startingCode: string
}

export enum DescriptionElementType {
  PARAGRAPH = 'paragraph',
  LIST = 'list',
  REMINDER = 'reminder'
}

export const QUESTION_BANK: Question[] = [
  {
    title: 'Counter',
    href: 'counter',
    description: [
      {
        type: DescriptionElementType.PARAGRAPH,
        content: 'Implement a counter. Your app should:'
      },
      {
        type: DescriptionElementType.LIST,
        content: [
          'Store the current value in the variable "count"',
          'Implement a button that will INCREMENT the current value by 1',
          'Implement a button that will DECREMENT the current value by 1'
        ]
      },
      {
        type: DescriptionElementType.REMINDER,
        content: 'Remeber to call function "show" with your component to render it in the preview window (ex. show(<App />))'
      },
    ],
    media: 'https://media.giphy.com/media/x7PoeXzpxUwiHCdSdH/giphy.gif',
    startingCode: `const App = () => {
      return (
        <h1>Hello World!</h1>
      )
    }
    
    show(<App />)`
  },
  {
    title: 'Form',
    href: 'form',
    description: [
      {
        type: DescriptionElementType.PARAGRAPH,
        content: 'Implement a user login form. Your app should:'
      },
      {
        type: DescriptionElementType.LIST,
        content: [
          'Implement an input field taking user EMAIL ADDRESS',
          'Implement an input field taking user PASSWORD',
          'Implement a button with text "Login" and add an onClick handler that will submit user details',
          'Disable the button when email address is not present or when the password is less than 6 characters long',
        ]
      },
      {
        type: DescriptionElementType.REMINDER,
        content: 'Remeber to call function "show" with your component to render it in the preview window (ex. show(<App />))'
      }
    ],
    media: 'https://i.ibb.co/Nsn4ysm/form-image.png',
    startingCode: `const App = () => {
      return (
        <h1>Hello World!</h1>
      )
    }
    
    show(<App />)`
  },
  {
    title: 'Lorem Ipsum 1',
    href: 'lorem-ipsum-1',
    description: [
      {
        type: DescriptionElementType.PARAGRAPH,
        content: 'Lorem Ipsum description'
      }
    ],
    media: 'https://images.pexels.com/photos/10161241/pexels-photo-10161241.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    startingCode: ''
  },
  {
    title: 'Lorem Ipsum 2',
    href: 'lorem-ipsum-2',
    description: [
      {
        type: DescriptionElementType.PARAGRAPH,
        content: 'Lorem Ipsum description'
      }
    ],
    media: 'https://images.pexels.com/photos/10161241/pexels-photo-10161241.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    startingCode: ''
  },
  {
    title: 'Lorem Ipsum 3',
    href: 'lorem-ipsum-3',
    description: [
      {
        type: DescriptionElementType.PARAGRAPH,
        content: 'Lorem Ipsum description'
      }
    ],
    media: 'https://images.pexels.com/photos/10161241/pexels-photo-10161241.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    startingCode: ''
  },
  {
    title: 'Lorem Ipsum 4',
    href: 'lorem-ipsum-4',
    description: [
      {
        type: DescriptionElementType.PARAGRAPH,
        content: 'Lorem Ipsum description'
      }
    ],
    media: 'https://images.pexels.com/photos/10161241/pexels-photo-10161241.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    startingCode: ''
  },
  {
    title: 'Lorem Ipsum 5',
    href: 'lorem-ipsum-5',
    description: [
      {
        type: DescriptionElementType.PARAGRAPH,
        content: 'Lorem Ipsum description'
      }
    ],
    media: 'https://images.pexels.com/photos/10161241/pexels-photo-10161241.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    startingCode: ''
  },
  {
    title: 'Lorem Ipsum 6',
    href: 'lorem-ipsum-6',
    description: [
      {
        type: DescriptionElementType.PARAGRAPH,
        content: 'Lorem Ipsum description'
      }
    ],
    media: 'https://images.pexels.com/photos/10161241/pexels-photo-10161241.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    startingCode: ''
  },
  {
    title: 'Lorem Ipsum 7',
    href: 'lorem-ipsum-7',
    description: [
      {
        type: DescriptionElementType.PARAGRAPH,
        content: 'Lorem Ipsum description'
      }
    ],
    media: 'https://images.pexels.com/photos/10161241/pexels-photo-10161241.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    startingCode: ''
  },
  {
    title: 'Lorem Ipsum 8',
    href: 'lorem-ipsum-8',
    description: [
      {
        type: DescriptionElementType.PARAGRAPH,
        content: 'Lorem Ipsum description'
      }
    ],
    media: 'https://images.pexels.com/photos/10161241/pexels-photo-10161241.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    startingCode: ''
  },
  {
    title: 'Lorem Ipsum 9',
    href: 'lorem-ipsum-9',
    description: [
      {
        type: DescriptionElementType.PARAGRAPH,
        content: 'Lorem Ipsum description'
      }
    ],
    media: 'https://images.pexels.com/photos/10161241/pexels-photo-10161241.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    startingCode: ''
  },
  {
    title: 'Lorem Ipsum 10',
    href: 'lorem-ipsum-11',
    description: [
      {
        type: DescriptionElementType.PARAGRAPH,
        content: 'Lorem Ipsum description'
      }
    ],
    media: 'https://images.pexels.com/photos/10161241/pexels-photo-10161241.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    startingCode: ''
  }
]


const answers = [
  
  `import { useState, useEffect } from 'react';
  const App = () => {
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [buttonDisabled, setButtonDisabled] = useState(true);
  
    const handleLogin = () => {
      alert(email, password);
    };
  
    useEffect(() => {
      if (email && password.length > 6) {
        setButtonDisabled(false);
      } else {
        setButtonDisabled(true);
      }
    }, [email, password]);
  
    return (
      <>
        <input
          type="text"
          name="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <button onClick={() => handleLogin()} disabled={buttonDisabled}>
          Login
        </button>
      </>
    );
  };
  
  show(<App />);`
]