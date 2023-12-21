import React from 'react';

import Section from '../section';

const classes = {
  link: 'inline-block py-2 font-semibold text-s text-gray-700 hover:text-black',
  tab: 'inline-block py-2 font-semibold text-s text-black underline',
  info: 'text-xs',
  infoLink: 'underline',
};

const SectionAbout = ({ about, extended = false, resumeLink = false }) => {
  return (
    <Section title={extended ? '' : 'About Me'}>
      <div className="mb-6" style={{ whiteSpace: 'pre-line' }}>
        <p>{about}</p>
        <br></br>
        {resumeLink && (
          <>
            <a className={classes.tab} href={resumeLink}>
              Resume
            </a>
          </>
        )}
      </div>
      <hr></hr>
    </Section>
  );
};

export default SectionAbout;