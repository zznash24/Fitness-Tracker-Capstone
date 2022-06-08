import React, { useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';
import Button from 'react-bootstrap/Button';

function Results(props) {
        const [open, setOpen] = useState(false);
      
        return (
          <>
            <Button
              onClick={() => setOpen(!open)}
              aria-controls="card-collapse-text"
              aria-expanded={open}
            >
              click
            </Button>
            <Collapse in={open}>
              <div id="card-collapse-text">
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                labore wes anderson cred nesciunt sapiente ea proident.
              </div>
            </Collapse>
          </>
        );
      }
      
export default Results;
