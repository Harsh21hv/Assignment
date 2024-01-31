import React from 'react';
import useAPI from './custom Hooks/useAPI';
import Body from './components/Body';

const App = () => {
  const data = useAPI();

  return (
    <div>
      <div className='bg-black opacity-90 w-full h-full flex justify-center'>
        <Body title={'List Of Movie Items received from API call  '} data={data} />
      </div>
    </div>
  );
};

export default App;
