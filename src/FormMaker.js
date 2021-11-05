import React from 'react';

const FormMaker = (props) => {

    const { handleOnBlur, uploadPhoto, uploadSign, uploadQr, setOnPrint, onPrint } = props



    return (
        <div >
            <h1 style={{ fontWeight: 'bold', textAlign: 'center' }}>Registraion For Course</h1>



            <form name="registrationForm" onSubmit={() => setOnPrint(onPrint + 1)} style={{ padding: '40px', borderRadius: '20px', boxShadow: '2px 0px 10px', backgroundColor: 'white', }}>



                <input onBlur={handleOnBlur} type="text" class="form-control" name="nameBn" placeholder="বাংলায় নাম" required />

                <div class="col">
                    <input onBlur={handleOnBlur} type="text" class="form-control" name="nameEn" placeholder="Name in English" required />
                </div>


                <div class="mb-3" >
                    <input onBlur={handleOnBlur} type="text" class="form-control" name="fatherName" placeholder="বাবার নাম বাংলায়" required />
                </div>


                <div class="mb-3 " >
                    <input onBlur={handleOnBlur} type="text" class="form-control" name="motherName" placeholder="মায়ের নাম বাংলায়" required />
                </div>

                <div class="mb-3 " >
                    <input onBlur={handleOnBlur} type="text" class="form-control" name="birthDate" placeholder="01 Jan 1982" required />
                </div>


                <div class="mb-3" >
                    <input onBlur={handleOnBlur} type="number" class="form-control" name="idNumber" placeholder="ID Number" required />
                </div>

                <div class="mb-3 " >
                    <textarea onBlur={handleOnBlur} type="text" class="form-control" name="tikana" required >বাসা/হোল্ডিং: গ্রাম/রাস্তা: ডাকঘর:</textarea>

                </div>
                <div class="mb-3  " >
                    <input onBlur={handleOnBlur} type="text" class="form-control" name="birthplace" placeholder="জন্মস্থান" required />
                </div>


                <div class="mb-3 " >
                    <input onBlur={handleOnBlur} type="text" class="form-control" name="blood" placeholder="রক্তের গ্রুপ" />
                </div>
                <div class="mb-3 " >
                    <input onBlur={handleOnBlur} type="text" class="form-control" name="dDate" placeholder="প্রদানের তারিখ" required />
                </div>



                <div class="mb-3" style={{ display: 'flex' }}>
                    <label for="photo" class="form-label">Upload Your Photo</label>
                    <input type="file" class="form-control-file" accept="image/*" name="photoupload" onChange={uploadPhoto} required />
                </div>
                <div class="mb-3" style={{ display: 'flex' }}>
                    <label for="photo" class="form-label">Upload Your Sign</label>
                    <input type="file" class="form-control-file" accept="image/*" name="signupload" onChange={uploadSign} required />
                </div>
                <div class="mb-3" style={{ display: 'flex' }}>
                    <label for="photo" class="form-label">Upload Your QR</label>
                    <input type="file" class="form-control-file" accept="image/*" name="qrupload" onChange={uploadQr} required />
                </div>

                <input type="submit" value="submit" style={{ width: '100%' }} class="btn btn-lg btn-success" />


            </form>
        </div>
    );
};

export default FormMaker;