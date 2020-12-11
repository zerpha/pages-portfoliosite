import React from 'react';
import axios from "axios";
import "../App.css";
import { FadeInSection } from '../effects/fadeIn';
import { FadeLeftSection } from '../effects/fadeLeft';
import { FadeRightSection } from '../effects/fadeRight';

class SkillsComponent extends React.Component {
    state = {
        persons: [
            {
                "tech_stack": "programming-languages",
                "label": "Programming Languages",
                "skills": ["Java", "JavaScript", "Python", "C", "C++"]
            },
            {
                "tech_stack": "web front end",
                "label": "Web Front End",
                "skills": ["HTML", "CSS", "React", "Angular"]
            },
            {
                "tech_stack": "web back end",
                "label": "Web Back End",
                "skills": ["Node.js", "Express.js"]
            },
            {
                "tech_stack": "databases",
                "label": "Databases",
                "skills": ["noSQL", "MongoDB", "PostgreSQL"]
            },
            {
                "tech_stack": "others",
                "label": "Others",
                "skills": ["Wireshark", "Git", "TCP/IP Debugging", "Linux"]
            }
        ]
      }

      renderTechSkills = (items) => {
        return (
            items.map(data =>
                <div key={data} className={'skills-item-container'}>
                    <span className={'skills-item-text'}>{data}</span>
                </div>
            )
        );
    }

    renderTechStacks = (results) => {
        if (results.length > 0) {
            return (
                results.map(item =>
                    <div key={item} className={'skills-sets-container'}>
                        <div className={'skills-label-container'}>
                            <FadeLeftSection>
                            <span className={'skills-label'}>{item.label}</span>
                            </FadeLeftSection>
                        </div>
                        <div className={'skills-separator-container'}>
                            <div className={'skills-separator-line'}></div>
                            <div className={'skills-separator-circle'}>
                                <div className={'skills-separator-inner-circle'}></div>
                            </div>
                        </div>
                        <FadeRightSection>
                        <div className={'skills-items-container'}>      
                            {this.renderTechSkills(item.skills)}
                        </div>
                        </FadeRightSection>
                    </div>
                )
            );
        }
    }

    render() {
        return (
            <div className={'skills-whole-container'} id="skills">
                <div style={{height: "5em"}}></div>
                <div className={'skills-items-container'}>
                    <FadeInSection>
                    <div className={'skills-item-container'}>
                        <header className={'skills-item-title'}>Skills and Technologies</header>
                    </div>
                    </FadeInSection>
                </div>

                <div className={'skills-parent-container'}>
                    {this.renderTechStacks(this.state.persons)}
                </div> <div style={{height: "5em"}}></div>
            </div>
            
      );
    }
}

export default SkillsComponent;