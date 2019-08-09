import React, { Component } from 'react';
import { Accordion, Icon, Grid } from 'semantic-ui-react';

const assetPrefix = process.env.ASSET_PREFIX;

class AccordionLeft extends Component {
  state = { activeIndex: null }

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }

  render() {
    const { activeIndex } = this.state

    return (
      <div>
      <Accordion styled>
        <Accordion.Title active={activeIndex === 0} index={0} onClick={this.handleClick} >
          <div className="acc-panel">
            <Icon name='dropdown' />
            Dr. Michael S. Scott <br />
            Director <br />
            msscott@salisbury.edu
          </div>
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 0}>
          <div className='acc-inside'>
            Dr. Scott is a professor of Geography and Geosciences at SU. He holds a Masters and Ph.D in Geography, specializing in geographic information science, from the University of South Carolina. To date, his research at Salisbury University has focused on the use of GIS technology to support local government applications such as public transit routing, tracking failing septic systems, and analyzing land use patterns. Dr. Scott has also worked extensively to model Maryland's vulnerability to sea-level change. For an abbreviated version of Dr. Scott’s CV as of 2017, click <span><a href="./img/msscott.pdf" download>here.</a></span><br />
          </div>
          
        </Accordion.Content>

        <Accordion.Title active={activeIndex === 1} index={1} onClick={this.handleClick}>
          <div className="acc-panel">
            <Icon name='dropdown' />
            Dr. Arthur J. Lembo Jr. <br />
            Technical Director <br />
            ajlembo@salisbury.edu
          </div>
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 1}>
          <div className='acc-inside'>
            Dr. Lembo is an Professor of Geography and Geosciences at SU. He holds a masters in Geography from the State University of New York at Buffalo and a PhD in Environmental Resource Engineering from the State University of New York, College of Environmental Science and Forestry. His research at Salisbury University has  focused on developing Internet Map Server Web Applications, parallel processing of GIS data, big data analytics, and smartphone applications for a variety of clients. He is also the education Caucus Chair for MSGIC, and  regularly performs GIS training throughout the state of Maryland.
          </div>
        </Accordion.Content>

        <Accordion.Title active={activeIndex === 2} index={2} onClick={this.handleClick}>
          <div className="acc-panel">
          <div >
              <img className='ui right floated mini image' src={`${assetPrefix}/static/images/staff/lauren_mcdermott.png`} />
            </div>
            <Icon name='dropdown' />
            Lauren D. McDermott <br />
            Practice Manager <br />
            ldmcdermott@salisbury.edu

           
          </div>
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 2}>
          <div className='acc-inside'>
            Mrs. McDermott received a Bachelor of Science degree in Geography from Salisbury University in 2001 and a Master of Science degree in GIS Management from Salisbury University in 2012. Lauren earned her GISP Certification in 2014. She helped launch the ESRGC in 2004 as its first employee. At the ESRGC, she has served in many capacities and currently, as the practice manager for the ESRGC, she is responsible for the day to day operations of the ESRGC, overseeing all projects, employees, and interns, as well as project completion timelines and quality control. Lauren also teaches the introductory course for the online Master's in GIS Management program (GEOG519: Advanced GIS) and serves as Education Subcommittee Chair for the Maryland State Geographic Information Committee (MSGIC).
          </div>
        </Accordion.Content>

        <Accordion.Title active={activeIndex === 3} index={3} onClick={this.handleClick}>
          <div className="acc-panel">
            <Icon name='dropdown' />
            Erin Silva <br />
            Project Manager <br />
            esilva@salisbury.edu
          </div>
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 3}>
          <div className='acc-inside'>
            Mrs. Silva received a Bachelor of Science degree in Geography from Salisbury University in 2005 and a Master of Science degree in GIS Management from Salisbury University in 2012. Erin earned her GISP Certification in 2015. Erin's responsibilities include data analysis and visualization, project design, setup and oversight; and quality control. She is responsible for the management of the geodashboard projects at the ESRGC.  Erin has been celebrated for her significant contributions to research, service, and outreach as she was recognized with the Salisbury University 2017 Employee of the Year Award.
          </div>
        </Accordion.Content>

        <Accordion.Title active={activeIndex === 4} index={4} onClick={this.handleClick}>
          <div className="acc-panel">
            <Icon name='dropdown' />
            Mary Buffington <br />
            Senior GIS Analyst <br />
            mbuffington@salisbury.edu
          </div>
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 4}>
          <div className='acc-inside'>
            Mrs. Buffington received a Bachelor of Science degree in Geography from Salisbury University in 2007, a Master of Science degree in GIS Management in 2012, and her GISP Certification in 2014. As a project manager with the ESRGC, Mary’s responsibilities include data analysis and visualization, project design, setup and oversight; and quality control. She is responsible for the management of the GIS projects at the ESRGC.
          </div>
        </Accordion.Content>

        <Accordion.Title active={activeIndex === 5} index={5} onClick={this.handleClick}>
          <div className="acc-panel">
            <Icon name='dropdown' />
            Brett Dobelstein <br />
            GIS Analyst <br />
            bdobelstrin@salisbury.edu
          </div>
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 5}>
          <div className='acc-inside'>
            Mr. Dobelstein earned a Bachelor of Science degree in Political Science from Frostburg State University in 2001, a Bachelor of Science in Geography from Salisbury University in 2011, and a Master of Science in GIS Management from Salisbury University in 2012. Brett is a GIS Analyst tasked with providing support to a wide range of projects including SHA Asset Vulnerability, HAZUS analyses, dashboard design, among others. He also serves as the captain of the ESRGC's Outdoor Adventurers Club.
          </div>
        </Accordion.Content>
      </Accordion>
      </div>
    )
  }
};

class AccordionRight extends Component {
    state = { activeIndex: null }
  
    handleClick = (e, titleProps) => {
      const { index } = titleProps
      const { activeIndex } = this.state
      const newIndex = activeIndex === index ? -1 : index
  
      this.setState({ activeIndex: newIndex })
    }
  
    render() {
      const { activeIndex } = this.state
  
      return (
        <div>
        <Accordion styled>
          <Accordion.Title active={activeIndex === 6} index={6} onClick={this.handleClick}>
            <div className="acc-panel">
              <Icon name='dropdown' />
              Ryan Mello <br />
              Project Coordinator <br />
              rmello@salisbury.edu
            </div>
          </Accordion.Title>
    
          <Accordion.Content active={activeIndex === 6}>
            <div className='acc-inside'>
              Mr. Mello received a Bachelor of Science degree in Geography from Salisbury University in 2008, a Master of Science degree in GIS Management from Salisbury University in 2014, and GISP Certification in 2014. As a Project Coordinator, Ryan is specifically tasked with supporting the Critical Area Mapping Update project, a statewide remapping of Maryland’s critical area. He is funded by the Critical Area Commission and acts as a liaison between CAC and ESRGC.
            </div>
          </Accordion.Content>
    
          <Accordion.Title active={activeIndex === 7} index={7} onClick={this.handleClick}>
            <div className="acc-panel">
              <Icon name='dropdown' />
              Logan Hall <br />
              GIS Technician <br />
              lmhall@salisbury.edu
            </div>
          </Accordion.Title>
    
          <Accordion.Content active={activeIndex === 7}>
            <div className='acc-inside'>
              Mr. Hall earned a Bachelor of Science degree in Geography from Salisbury University in 2013. Logan became an FAA certified Remote Pilot and earned his GISP Certification in 2018. Logan is a GIS Analyst tasked with providing support to a wide range of projects including LiDAR processing, Hazard Mitigation Plans, drone imaging, flood modeling, publishing and maintaining GIS services, database administration and data distribution, among others.  He also serves as Advocacy Subcommittee Chair for the Maryland State Geographic Information Committee (MSGIC).
            </div>
          </Accordion.Content>
    
          <Accordion.Title active={activeIndex === 8} index={8} onClick={this.handleClick}>
            <div className="acc-panel">
              <Icon name='dropdown' />
              Anastassiya Suprunova<br />
              GIS Analyst <br />
              asuprunova@salisbury.edu
            </div>
          </Accordion.Title>
    
          <Accordion.Content active={activeIndex === 8}>
            <div className='acc-inside'>
              Mrs. Suprunova received a Bachelor of Science degree in Geodesy and Cartography from Karaganda State Technical University in 20011, and  Master of Science degree in GIS Management in 2017 from Salisbury University. Anastassiya is a GIS Technician tasked with providing support to a wide range of projects including utility mapping, GIS analysis and data visualization, database development, story map design, and model building for GIS analysis.
            </div>
          </Accordion.Content>
    
          <Accordion.Title active={activeIndex === 9} index={9} onClick={this.handleClick}>
            <div className="acc-panel">
              <Icon name='dropdown' />
              Anthony <br />
              GIS Analyst <br />
              email@salisbury.edu
            </div>
          </Accordion.Title>
    
          <Accordion.Content active={activeIndex === 9}>
            <div className='acc-inside'>
              My bio is...
            </div>
          </Accordion.Content>
    
          <Accordion.Title active={activeIndex === 10} index={10} onClick={this.handleClick}>
            <div className="acc-panel">
              <Icon name='dropdown' />
              Jeremy <br />
              GIS Analyst <br />
              jeremy@salisbury.edu
            </div>
          </Accordion.Title>
    
          <Accordion.Content active={activeIndex === 10}>
            <div className='acc-inside'>
              My bio is...
            </div>
          </Accordion.Content>
    
          <Accordion.Title active={activeIndex === 11} index={11} onClick={this.handleClick}>
            <div className="acc-panel">
              <Icon name='dropdown' />
              Tim Lanzi <br />
              Web Developer <br />
              tlanzi@salisbury.edu
            </div>  
          </Accordion.Title>
    
          <Accordion.Content active={activeIndex === 11}>
            <div className='acc-inside'>
                          My bio is...
            </div>
          </Accordion.Content>
      </Accordion>
      </div>
      )
    }
  };

  export default class Accord extends Component {
    render () {
      return (
        <div className='accHolder'>
          <Grid centered columns={2}>
            <Grid.Column floated='left' width={8}>
              <AccordionLeft />
            </Grid.Column>

            <Grid.Column floated='right' width={8}>
              <AccordionRight />
            </Grid.Column>
          </Grid>
        
          <style jsx>
            {`.accHolder {
               display: inline-block;
               border-radius: 20px;
               padding: 10px 10px 10px 10px;
               text-align: left;
              }
              
              .panel {

              }`}
          </style>
        </div>
      );
    }
  };
  
