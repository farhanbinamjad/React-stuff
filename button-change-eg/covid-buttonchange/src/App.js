import './App.css';
import Box from './Box';

function App() {
  return (
    <div className="App">
      <h1 className="header">More than 900 Mayo Clinic staff members diagnosed with Covid-19 in Midwest over two weeks</h1>
      <Box 
      heading = 'Fourth wave of COVID-19 in Midwest has hit' 
      news= '“I think that there’s enough immunity in the population that you’re not going to see a true fourth 
      wave of infection,” Gottlieb said. “What we’re seeing is pockets of infection around the country, particularly 
      in younger people who haven’t been vaccinated and also in school-age children.” Similarly, the government’s 
      top infectious diseases expert, Anthony Fauci, has also been hesitant to label the recent surge a fourth wave. 
      “It’s kind of like a race between the potential for a surge and our ability to vaccinate as many people as we 
      possibly can,” Fauci told NPR’s “Morning Edition.” “And hopefully, if you want to make this a metaphorical race, 
      the vaccine is going to win this one.' />
      <Box
      heading = 'Upper Midwest Covid-19 Surge May Signal Problems Ahead for U.S.' 
      news = 'As states lift restrictions and worrisome coronavirus variants spread, scientists and federal health officials 
      have been warning that a new wave of cases could arise in the United States even as the nation’s vaccination campaign 
      gathers speed. The seeds of such a surge may now be sprouting in the Upper Midwest and the Northeast. Michigan is already 
      in tough shape. New cases and hospitalizations there have more than doubled in the last two weeks. The six metro areas in 
      the United States with the greatest number of new cases relative to their population are all in Michigan. Several other 
      states in the Upper Midwest, including Minnesota and Illinois, have also reported significant increases in new cases and 
      hospitalizations. And in the Northeast, New York and New Jersey have continued to see elevated case counts. While new cases, 
      hospitalizations and deaths nationwide have declined from their peaks in January, new infections have increased after plateauing.'
      />
      <Box
      heading = 'Washington health officials watching Midwest COVID-19 variant outbreaks in schools'
      news= '"We are monitoring the situation,” said a spokesperson for acting state health officer Dr. Scott Lindquist. “Washington 
      state has a robust surveillance system for identifying variants. In fact, we are one of the top states for genome sequencing, 
      the process for identifying variants. We currently sequence more specimens than nearly any other state in the U.S. It has just 
      not been a huge issue here in Washington state yet. We will continue to monitor the situation." Seattle Childrens hospital Chief 
      of Pediatric Infectious Disease Dr. Danielle Zerr also said through a spokesperson that more study is needed. Health officials will 
      watch if "the new variants cause children to have more severe illness, children are more likely to transmit the new variants, and 
      whether children are now more important drivers of the pandemic with the emergence of the new variant," a spokesperson for Zerr said.'
      />
      <Box
      heading ='COVID Cases Climb in the Midwest as British Variant Takes Hold in U.S.'
      news='Scientists and federal health officials have warned repeatedly that a fourth wave of coronavirus cases could arise in the 
      United States this spring because of the emergence of more contagious variants and the easing of social distancing measures, even 
      as the countrys vaccination campaign gathers steam. In the Upper Midwest, Michigan has been slammed: New cases and hospitalizations 
      there have more than doubled in the last two weeks, and the six metro areas in the United States with the greatest number of new cases 
      relative to their population are all in Michigan, The New York Times reported. Several other states in the Upper Midwest have also 
      reported significant increases in new infections and hospitalizations. In Illinois, the daily average for new cases has jumped about 
      56 percent in the past two weeks, to about 2,832 a day, the Times reported. Hospitalizations have risen about 28 percent from two weeks 
      ago. Meanwhile, Wisconsin and North Dakota have seen their average case counts jump 50 percent or more in the last two weeks.'
      />
    </div>
  );
}

export default App;
