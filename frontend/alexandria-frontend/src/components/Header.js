import React, { useRef, useState } from 'react';

function Header() {
  // const [bannerUrl, setBannerUrl] = useState(process.env.PUBLIC_URL + '/banner.png');
  // const fileInputRef = useRef(null);

  // const handleBannerChange = (e) => {
  //   const file = e.target.files[0];
  //   if (file) {
  //     const reader = new FileReader();
  //     reader.onload = (event) => {
  //       setBannerUrl(event.target.result);
  //     };
  //     reader.readAsDataURL(file);
  //   }
  // };

  return (
    <div style={{ background: '#fff', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
      <div style={{ height: 100, display: 'flex', alignItems: 'center', position: 'relative' }}>
        <img src={process.env.PUBLIC_URL + '/image.png'} alt="Logo" style={{ height: 60, marginLeft: 24, zIndex: 2 }} />
      </div>
      {/* <div style={{ position: 'relative', width: '100%', height: 180, background: '#eee', overflow: 'hidden' }}>
        <img
          src={bannerUrl}
          alt="Banner"
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
        <div
          className="edit-icon"
          style={{ position: 'absolute', right: 24, bottom: 16, zIndex: 2, background: 'rgba(255,255,255,0.8)', width: 40, height: 40, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', fontSize: 22 }}
          onClick={() => fileInputRef.current.click()}
          title="Edit banner"
        >
          ✏️
        </div>
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          style={{ display: 'none' }}
          onChange={handleBannerChange}
        />
      </div> */}
    </div>
  );
}

export default Header; 