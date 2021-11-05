import { useState } from 'react';
import './App.css';
import FormMaker from './FormMaker';
import IDcardprint from './IDcardprint';
import { Preview, print } from 'react-html2pdf';




function App() {

  const [onPrint, setOnPrint] = useState(0);


  const [formData, setFormdata] = useState({});

  const handleOnBlur = e => {
    const newData = { ...formData };
    newData[e.target.name] = e.target.value;
    setFormdata(newData);
  }




  const [photoUrl, setphotoUrl] = useState(null);
  const [signUrl, setSignUrl] = useState(null);
  const [qrUrl, setQrUrl] = useState(null);


  function uploadPhoto(event) {
    const imageFile = event.target.files[0];
    const imageUrl = URL.createObjectURL(imageFile);
    setphotoUrl(imageUrl)
  }

  function uploadSign(event) {
    const imageFile = event.target.files[0];
    const imageUrl = URL.createObjectURL(imageFile);
    setSignUrl(imageUrl)
  }

  function uploadQr(event) {
    const imageFile = event.target.files[0];
    const imageUrl = URL.createObjectURL(imageFile);
    setQrUrl(imageUrl)
  }



  return (
    <div style={{ display: 'flex', justifyContent: 'center', }}>
      {
        !onPrint &&
        <div>
          <FormMaker handleOnBlur={handleOnBlur} uploadPhoto={uploadPhoto} uploadSign={uploadSign} uploadQr={uploadQr} setOnPrint={setOnPrint} onPrint={onPrint}></FormMaker>
        </div>
      }
      {
        onPrint && <Preview id={'jsx-template'}>
          <IDcardprint formData={formData} photoUrl={photoUrl} signUrl={signUrl} qrUrl={qrUrl}></IDcardprint>


        </Preview >

      }
      <button onClick={() => print('a', 'jsx-template')}> print</button>


    </div>
  );
}

export default App;
