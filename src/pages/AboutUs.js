import React, { useState } from 'react';
// import './AboutUs.css'; // Custom styles are already in global.css

const historyImg = '/images/history-building.jpg'; // Use public folder path

const historyText = `Davao Central College, Inc. (DCCI) like many other institutions has had its share of successes and defeats. It opened its doors in 1948 when the war had just ended. It was then called Davao Central Institute (DCI), the first high school established in Toril "with no more than 76 enrollees" from First Year to Fourth Year during its opening.\n\nMr. Salustiano Advincula, a dynamic Christian leader whose vision and passion for the education of the youth was inspired by the worldwide "Each one, teach one" program of Dr. Frank C. Laubach, set the mode of school life in DCI. Mr. Advincula thought of the economically challenged when he began this mission with a group of friends. He used to lament, "It is very difficult for a poor man's son to get an education!" Thus, educating the youth became a passion for him as he was also a product of someone's benevolence — when as a teenager he worked for Dr.Laubach, a Christian missionary in Lanao.\n\nThe need for a high school in Toril after World War II encouraged Mr. Advincula to embark on the project here.. Thus, DCI was born. DCI took upon itself the challenge of becoming an agent of change in the community. It became a school "where character is emulated, democracy is emphasized and patriotism is emblazoned." It adopted the motto- Live, Love, Light- an inspiration of the Life Who is Love and Light.  And although it is a non-sectarian school, DCI adopted the teachings of Jesus Christ as value content for teaching.\n\nWhen it started, DCI occupied a multi-room house leased from Zosima Gross and in 1950 DCI transferred to its new six-room, two-storey building in a two-hectare lot owned by Mr.& Mrs. Eustaquio Desabilla. But fire struck on the midnight of June 10, 1959 which turned everything to ashes. With the school ran like an apostolic mission, finance was very low especially that it was a student-revenue dependent. Enrolment significantly declined. Mr. Advincula's friends gave up on the school. Despite the discouraging intervention, Mr. Advincula could not allow DCI to be lost to oblivion.  His passion for the "poor but deserving students" was unstoppable. The Bureau of Private Schools ordered DCI to cease and desist operation because of unsatisfactory facilities after the fire. But a new Government Recognition was awarded DCI in 1965\n\nIn 1967, the College of Liberal Arts started and in the year that followed, the name "Davao Central Institute" became "Davao Central College". The Evening High School was also awarded its Government Recognition in 1968.\n\nA new two-storey building was completed in 1970 to replace the classrooms made from salvaged materials from the fire that included log cores, slabs, and veneer plywood from donations which were hurriedly set up to house the enrolment after the fire in 1959.\n\nSince then, DCC began its steady climb to making itself relevant to the educational requirements of the community — always conscious of delivering quality education for all.\n\nAfter being hit by two fires in 1959 and 1991, DCC now stands proudly as an accredited institution envisioning empowered individuals imbued with Christian ideals for service. This is DCC's humble proposition for responsible individuals aspiring to assume leadership roles in the future.\n\nWhen the school ended its first 50 years of corporate life in 2000, it now carried the name of DAVAO CENTRAL COLLEGE, INC. (DCCI). It added to its program the Sunday High School which got its Government Recognition in 2007.  DCC recommitted its vision coupled with a faith in a merciful God whose love enabled DCC to rise from the ashes in order to be where it is now.\n\nWith the management ever concerned of global competitiveness, instruction improvements were being seriously undertaken regularly. Sturdy buildings and modern facilities had been installed over time, as well as the induction of a research track and extension service activities. New programs were being added as necessary. All these and the cooperation of teaching and non-teaching personnel and the management's full support with the Board of Directors paved the way for DCC to be in the ranks of institutions with accredited programs by the Federation of Accrediting Agencies of the Philippines (FAAP) through the Association of Christian Schools, Colleges and Universities Accrediting Council Inc. (ACSCU-ACI).`;

const AboutUs = () => {
  const [activeTab, setActiveTab] = useState('vision');

  return (
    <div className="bordered-container mt-4">
      {/* Navigation Tabs */}
      <div className="custom-tabs">
        <div className={`custom-tab${activeTab === 'vision' ? ' active' : ''}`} onClick={() => setActiveTab('vision')}>
          Vision, Mission & Goals
        </div>
        <div className={`custom-tab${activeTab === 'history' ? ' active' : ''}`} onClick={() => setActiveTab('history')}>
          History
        </div>
      </div>
      {/* Main Content with Watermark */}
      <div className="watermark-bg">
        <div className="aboutus-content">
          {activeTab === 'vision' && (
            <>
              <h2 className="section-title">VISION</h2>
              <p className="text-center mb-4">
                Empowered individuals imbued with Christian ideals for service.
              </p>
              <h2 className="section-title">MISSION</h2>
              <p className="text-center mb-2">We commit ourselves to:</p>
              <ul className="aboutus-list mb-4">
                <li>provide integral formation of students;</li>
                <li>develop God-loving and community service-oriented individuals;</li>
                <li>promote competence through quality instruction and research for nation building.</li>
              </ul>
              <h2 className="section-title">GOALS</h2>
              <p className="mb-2">To achieve its mission, DCC Inc., aims to:</p>
              <ol className="aboutus-list mb-4">
                <li>strengthen the total development of persons;</li>
                <li>develop a self-sustained community;</li>
                <li>cultivate the value of patriotism;</li>
                <li>promote a global standard of education;</li>
                <li>intensify faculty development program;</li>
                <li>cultivate a strong research culture;</li>
                <li>upgrade physical plant and facilities.</li>
              </ol>
              <h2 className="section-title">CORE VALUES</h2>
              <ul className="aboutus-list core-values-list text-center">
                <li>Discipline</li>
                <li>Competence</li>
                <li>Compassion</li>
                <li>Integrity</li>
              </ul>
            </>
          )}
          {activeTab === 'history' && (
            <>
              <h2 className="section-title">HISTORY</h2>
              <img src={historyImg} alt="Old DCC Building" style={{maxWidth: '100%', borderRadius: '8px', margin: '20px auto', display: 'block', boxShadow: '0 2px 8px rgba(0,0,0,0.08)'}} />
              <div style={{whiteSpace: 'pre-line', textAlign: 'justify', marginTop: 20, fontSize: '1.08rem', color: '#222'}}>
                {historyText}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
