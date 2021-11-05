import React from 'react';

import r1 from './images/ri_1.jpeg'
import r4 from './images/ri_4.png'
import r5 from './images/ri_5.png'
import v1 from './images/vi_1.png'
import v2 from './images/vi_2.png'
import v3 from './images/vi_3.png'
import v4 from './images/vi_4.png'
import v5 from './images/vi_5.png'
import v6 from './images/vi_6.png'
import v7 from './images/vi_7.png'
import v8 from './images/vi_8.png'
import v9 from './images/vi_9.png'
import v10 from './images/vi_10.png'
import v11 from './images/vi_11.png'
import v12 from './images/vi_12.png'


const IDcardprint = (props) => {

    const { nameBn, nameEn, fatherName, motherName, birthDate, idNumber, tikana, birthplace, blood, dDate } = props.formData
    const { photoUrl, signUrl, qrUrl } = props

    document.title = nameEn;

    return (
        <div >

            <div >
                <img style={{ position: 'absolute', top: '0.83in', left: '0.83in', width: '3.67in', height: '0.02in' }} src={v1} />
                <img style={{ position: 'absolute', top: '0.83in', left: '4.49in', width: '0.02in', height: '2.33in' }} src={v2} />
                <img style={{ position: 'absolute', top: '3.15in', left: '0.83in', width: '3.67in', height: '0.02in' }} src={v3} />
                <img style={{ position: 'absolute', top: '0.83in', left: '0.83in', width: '0.02in', height: '2.33in' }} src={v4} />
                <img style={{ position: 'absolute', top: '0.94in', left: '0.90in', width: '0.42in', height: '0.41in' }} src={r1} />
                <div style={{ position: 'absolute', top: '0.90in', left: '1.86in', width: '2.18in', lineHeight: '0.26in' }}>
                    <span style={{ fontStyle: 'normal', fontWeight: '300', fontSize: '14pt', fontFamily: 'SolaimanLipi', color: '#000000' }}>গণপ্রজাতন্ত্রী
                        বাংলােদশ সরকার</span><span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '15pt', fontFamily: 'AdorshoLipi', color: '#000000' }}>
                    </span><br /></div>
                <div style={{ position: 'absolute', top: '1.16in', left: '1.40in', width: '3.06in', lineHeight: '0.16in' }}>
                    <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '9pt', fontFamily: 'Arial', color: '#007700' }}>Government of
                        the People's Republic of Bangladesh</span>
                    <div style={{ position: 'relative', left: '0.59in' }}>
                        <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Arial', color: '#ff0000' }}>National ID Card</span>
                        <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '7.5pt', fontFamily: 'AdorshoLipi', color: '#000000' }}> / জাতীয় পিরচয়
                            পত্র</span><br /></div>
                </div>
                <img style={{ position: 'absolute', top: '1.59in', left: '0.88in', width: '0.77in', height: '0.88in' }} src={photoUrl} />
                <img style={{ position: 'absolute', top: '2.53in', left: '0.88in', width: '0.77in', height: '0.38in' }} src={signUrl} />
                <img style={{ position: 'absolute', top: '1.56in', left: '1.68in', width: '2.81in', height: '1.54in' }} src={r4} />
                <div style={{ position: 'absolute', top: '1.62in', left: '1.76in', width: '0.32in', lineHeight: '0.21in' }}>
                    <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '12.4pt', fontFamily: 'SolaimanLipi', color: '#000000' }}>নাম:</span>
                    <br /></div>
                <div style={{ position: 'absolute', top: '1.61in', left: '2.23in', width: '5in', lineHeight: '0.21in' }}>
                    <span style={{ fontStyle: 'normal', fontWeight: 'bold', fontSize: '12.4pt', fontFamily: 'SolaimanLipi', color: '#000000' }}>{nameBn}
                    </span><br /></div>

                <div style={{ position: 'absolute', top: '1.90in', left: '1.76in', width: '0.37in', lineHeight: '0.15in' }}>
                    <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8.5pt', fontFamily: 'Arial', color: '#000000' }}>Name:</span><span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '7pt', fontFamily: 'ArialMT', color: '#000000' }}>
                    </span><br /></div>
                <div style={{ position: 'absolute', top: '1.87in', left: '2.23in', width: '5in', lineHeight: '0.21in' }}>
                    <span style={{ fontStyle: 'normal', fontWeight: 'bold', fontSize: '11.3pt', fontFamily: 'Arial', color: '#000000' }}>{nameEn}
                    </span><span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '10pt', fontFamily: 'ArialMT', color: '#000000' }}>
                    </span><br /></div>
                <div style={{ position: 'absolute', top: '2.16in', left: '1.76in', width: '0.32in', lineHeight: '0.18in' }}>
                    <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '10.5pt', fontFamily: 'SolaimanLipi', color: '#000000' }}>পিতা:</span>
                    <br /></div>
                <div style={{ position: 'absolute', top: '2.16in', left: '2.23in', width: '5in', lineHeight: '0.18in' }}>
                    <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '10.5pt', fontFamily: 'SolaimanLipi', color: '#000000' }}>{fatherName}
                    </span><br /></div>
                <div style={{ position: 'absolute', top: '2.16in', left: '2.23in', width: '0.74in', lineHeight: '0.18in' }}>
                </div>
                <div style={{ position: 'absolute', top: '2.43in', left: '1.76in', width: '0.32in', lineHeight: '0.18in' }}>
                    <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '10.5pt', fontFamily: 'SolaimanLipi', color: '#000000' }}>মাতা:</span>
                    <br /></div>
                <div style={{ position: 'absolute', top: '2.43in', left: '2.23in', width: '5in', lineHeight: '0.18in' }}>
                    <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '10.5pt', fontFamily: 'SolaimanLipi', color: '#000000' }}>{motherName}
                    </span><br /></div>
                <div style={{ position: 'absolute', top: '2.67in', left: '1.77in', width: '5in', lineHeight: '0.19in' }}>
                    <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '10pt', fontFamily: 'Arial', color: '#000000' }}>Date of Birth:
                    </span><span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '11pt', fontFamily: 'Arial', color: '#ff0000' }}>&nbsp; {birthDate}
                    </span><br /><span style={{ fontStyle: 'normal', fontWeight: '300', fontSize: '12pt', fontFamily: 'Arial', color: '#000000' }}>ID NO:
                    </span><span style={{ fontStyle: 'normal', fontWeight: '700', fontSize: '12pt', fontFamily: 'Arial', color: '#ff0000' }}>&nbsp; {idNumber} </span><span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '9pt', fontFamily: 'ArialMT', color: '#ff0000' }}>
                    </span><br /></div>
                <img style={{ position: 'absolute', top: '1.55in', left: '0.84in', width: '3.66in', height: '0.02in' }} src={v5} />
                <img style={{ position: 'absolute', top: '0.83in', left: '4.60in', width: '3.67in', height: '0.02in' }} src={v6} />
                <img style={{ position: 'absolute', top: '0.83in', left: '8.26in', width: '0.02in', height: '2.33in' }} src={v7} />
                <img style={{ position: 'absolute', top: '3.15in', left: '4.60in', width: '3.67in', height: '0.02in' }} src={v8} />
                <img style={{ position: 'absolute', top: '0.83in', left: '4.60in', width: '0.02in', height: '2.33in' }} src={v9} />
                <div style={{ position: 'absolute', top: '0.88in', left: '4.72in', width: '3.45in', lineHeight: '0.15in' }}>
                    <span style={{ fontStyle: 'normal', fontWeight: '300', fontSize: '8.2pt', fontFamily: 'SolaimanLipi', color: '#000000' }}>এই কার্ডটি
                        গণপ্রজাতন্ত্রী বাংলােদশ সরকারের সম্পত্তি। কার্ডটি ব্যবহারকারী ব্যতীত অন্য কোথাও পাওয়া গেলে নিকটস্থ পোষ্ট অফিসে জমা দেবার জন্য অনুরোধ করা হলো।</span><span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Bangla', color: '#000000' }}>
                    </span><br /><span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Bangla', color: '#000000' }}> </span><br /></div>
                <div style={{ position: 'absolute', top: '1.04in', left: '4.72in', width: '3.45in', lineHeight: '0.15in' }}>
                </div>
                <div style={{ position: 'absolute', top: '1.26in', left: '4.71in', width: '3.43in', lineHeight: '0.15in' }}>
                    <span style={{ fontStyle: 'normal', fontWeight: '300', fontSize: '8.2pt', fontFamily: 'SolaimanLipi', color: '#000000', value: 'বাসা/হোল্ডিং: , গ্রাম/রাস্তা: , ডাকঘর: ' }}>ঠিকানা:&nbsp;

                    </span>
                    <span style={{ fontStyle: 'normal', fontWeight: '300', fontSize: '8.2pt', fontFamily: 'SolaimanLipi', color: '#000000' }}>
                        {tikana}
                    </span>
                </div>
                <div style={{ position: 'absolute', top: '1.80in', left: '4.68in', width: '1.4in', lineHeight: '0.15in' }}>
                    <span style={{ fontStyle: 'normal', fontWeight: '300', fontSize: '7pt', fontFamily: 'SolaimanLipi', color: '#000000' }}>রক্তের
                        গ্রুপ / </span>
                    <span style={{ fontStyle: 'normal', fontWeight: '300', fontSize: '8pt', fontFamily: 'Arial', color: '#000000' }}>Blood Group: <span style={{ color: "red", fontWeight: 'bold' }}>{blood}</span></span>
                </div>

                <div style={{ position: 'absolute', top: '1.80in', left: '6.40in', width: '1.5in', lineHeight: '0.14in' }}>
                    <span style={{ fontStyle: 'normal', fontWeight: '300', fontSize: '8pt', fontFamily: 'SolaimanLipi', color: '#000000' }}>জন্মস্থান:
                        {birthplace}</span><span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Bangla', color: '#000000' }}>
                    </span><br /></div>
                <img style={{ position: 'absolute', top: '1.87in', left: '7.91in', width: '0.35in', height: '0.13in', backgroundColor: 'black' }} src={v10} />
                <div style={{ position: 'absolute', top: '1.84in', left: '7.91in', width: '0.39in', lineHeight: '0.14in' }}>
                    <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '6pt', fontFamily: 'SolaimanLipi', color: '#ffffff' }}>মূদ্রণ:
                        ০১</span><span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Bangla', color: '#ffffff' }}>
                    </span><br /></div>
                <img style={{ position: 'absolute', top: '2.05in', left: '4.92in', width: '0.88in', height: '0.33in' }} src={r5} />
                <div style={{ position: 'absolute', top: '2.35in', left: '4.71in', width: '1.5in', lineHeight: '0.18in' }}>
                    <span style={{ fontStyle: 'normal', fontWeight: '300', fontSize: '9pt', fontFamily: 'SolaimanLipi', color: '#000000' }}>প্রদানকারী
                        কতৃপক্ষের স্বাক্ষর</span><br /></div>
                <div style={{ position: 'absolute', top: '2.36in', left: '6.69in', lineHeight: '0.15in', width: '2in' }}>
                    <span style={{ fontStyle: 'normal', fontWeight: '300', fontSize: '8pt', fontFamily: 'SolaimanLipi', color: '#000000' }}>প্রদানের তারিখ:
                        {dDate}</span><br /></div>
                <img style={{ position: 'absolute', top: '2.61in', left: '4.71in', width: '3.51in', height: '0.44in' }} src={qrUrl} />
                <img style={{ position: 'absolute', top: '1.23in', left: '4.61in', width: '3.66in', height: '0.02in' }} src={v11} />
                <img style={{ position: 'absolute', top: '2.00in', left: '4.61in', width: '3.66in', height: '0.02in' }} src={v12} />
            </div>


        </div >
    );
};

export default IDcardprint;