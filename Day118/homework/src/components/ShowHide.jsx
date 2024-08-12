import React, { useState } from 'react';

const ShowHide = () => {

  const StyleDisplay = { display: 'block' };
  const HiddenDisplay = { display: 'none' };


  const [displayof, setDisplay] = useState(StyleDisplay);

  const toggleDisplay = () => {
    if (displayof.display == 'block') {
      setDisplay(HiddenDisplay);
    } else {
      setDisplay(StyleDisplay);
    }
  };

  return (
    <div>
      <button onClick={toggleDisplay}>
        Paragraph
      </button>
      <p style={displayof}>
        bla bla bla
      </p>
    </div>
  );
}

export default ShowHide;
