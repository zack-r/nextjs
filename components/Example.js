import Head from 'next/head';

function Example() {
  return (
    <div className='Example'>
      <Head>
        <link href="/static/Example.css" rel="stylesheet" />
      </Head>
      <h2 class='ex-header'>This is a custom component</h2>
      <p class='ex-p'>It is a JS file that returns HTML.</p>
    </div>
  );

}

export default Example;

/**
<Example/>

let e = <Example/>
*/
