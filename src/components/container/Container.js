import React from 'react';
import './styles.css';
import ReactImageZoom from 'react-image-zoom';



export function Container() {


  const props = {width:600,zoomPosition:'right',img:'1.jpg',height:450};
  
  return (
      <div className='test'>
        <div className='container'>
          <div className='container__zoomed_image'>
            <div className='container__zoomed_image_content'>
              <ReactImageZoom  {...props} />
            </div>
          </div>
        </div>
      </div>

    
  );

}
